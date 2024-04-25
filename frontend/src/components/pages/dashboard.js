import React , { useState, useEffect, useRef, Fragment } from "react";
import classes from './dashboard.module.css'
import pdf from './pdf1.pdf'
import DashBoardNavbar from "../layout/header/dashboardNavbar";

const Dashboard = () => {
    const [pdfUrl, setPdfUrl] = useState(pdf);                          //The Document URL/File Location
    const [inputValue, setInputValue] = useState(2)                     //Page Manual Input for *goto page functionality
    const [pdfDocument, setPdfDocument] = useState(null);               //The Document Object (before being set)
    const [scale, setScale] = useState(null);                           //The size of document rendering on screen
    const [okToRender, setOkToRender] = useState(false);                //Changed to true when the component has had the chance to set the accurate scale
    const [pageNum, setPageNum] = useState(1);
    const [pageIsRendering, setPageIsRendering] = useState(false);      //The Rendering State
    const [windowSizeChanges, setWindowSizeChanges] = useState(1);
    const [fullScreen, setFullScreen] = useState(true);
    let pageNumIsPending = null;                                        //While fetching other pages, this is a placeholder for the "page num" (i.e "num" variable). So that once older render is complete, the new page will be rendered
    const canvasRef = useRef(null);                                     //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)
    //Set PdfDocument, Scale, and setOkToRender = True
    useEffect(()=>{
        //Get Document
        const fetchPdf = async () => {
            try {
                const pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;//pdfjsLib uses getDocument(pdf_url) method and returns the Document object
                    setPdfDocument(pdfDoc);                             //set pdfDoc equal to the Pdf-Document-object 
                    const page = await pdfDoc.getPage(pageNum)          //creates a pdf page object by using the pdfDoc object/pdf document
                    const viewport = page.getViewport({scale: 1});      //get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
                    const windowWidth = window.innerWidth;              //Make the Canvas' height = ViewPort's height
                    const scaleToUse = windowWidth / viewport.width;    //Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
                    setScale(scaleToUse);                               //Set the state of the scale that will be used.
                    setOkToRender(true);
                } catch(error) {                                        //catch error
                    console.error("Error loading PDF: ", error);                
                }
        };
        fetchPdf();
    }, [pdfUrl, windowSizeChanges]);                                    //The document will be set every time the document url changes
    useEffect(() => {
        if (okToRender && pdfDocument && scale !== null) {              //if the pdf Document has been set, then:
            setInputValue(pageNum)                                      //When the pdfDocument sets, the pageNum, or the scale change, the Input Value is set.
            renderPage(pageNum);                                        //Render the Page (pageNum is initially set to page# 1)
        }
    }, [pageNum, scale]);                                               //Removed "pdfDocument"...
    //Render the page
    const renderPage = (num) =>{                                        //Function for rendering page
        if (pageIsRendering || scale == null) return;                                    //Ensure that you do not attempt another rendering operation until the current one is finished.
        setPageIsRendering(true);                                       //Change Rendering Status to "true"/currently rendering
        //Get page
        pdfDocument.getPage(num).then(page=>{                           //Creates a pdf page object by using the pdfDoc object/pdf document
            if (!canvasRef.current) return;                             //If the canvas element isn't available yet, then exit render function
            const canvas = canvasRef.current;                           //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)
            const context = canvas.getContext("2d");                    //The object with properties and methods for rendering graphics inside the canvas (shapes, text, images, scaling, rotating, translating objects, and more)
            //Set scale
            const viewport = page.getViewport({scale});                 //Get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
            canvas.height = viewport.height;                            //Make the Canvas' height = ViewPort's height
            canvas.width = viewport.width;                              //Make the Canvas' width = ViewPort's width
            const renderContext = {
                canvasContext: context,                                 //The object with properties and methods for rendering graphics inside the canvas
                viewport                                                //Representation of the size and scale at which the PDF page should be rendered
            };
            //Render the page (actual)
            page.render(renderContext).promise.then(() => {             //draws the content of a specific pdf page onto the canvas  https://github.com/mozilla/pdf.js/issues/7072#issuecomment-459616711 
                setPageIsRendering(false);                              //Once the page is rendered, set rendering state to false
                return page.getTextContent();                           //Once page is rendered, extract text content 
            }).then(textContent => {                                    //Text layer (allows text selection/accessibility features)
                //Create the textLayer
                const textLayerDiv = document.getElementById('textLayer');//??? is this needed? Select HTML div element with ID 'textLayer.' This will serve as the container for the rendered text layer
                textLayerDiv.className = 'textLayer';                     //?? is this needed?  Set class for styling (The styling comes from the pdf_viewer.css file --> https://github.com/mozilla/pdfjs-dist/blob/master/web/pdf_viewer.css)
                const textLayer = pdfjsLib.renderTextLayer({            //Create text layer        
                    textContent: textContent,                           // 
                    container: textLayerDiv,                            //Specifies the container (textLayerDiv)   
                    viewport                                            //Specifies the dimensions/scale at which the PDF page will be rendered    
                });
                //Render the textLayer (actual) 
                textLayer._render();                                    //Render text layer onto the textLayerDiv
                if (pageNumIsPending !== null){                         //This conditional block checks if there is a pending page number to be rendered
                    renderPage(pageNumIsPending);                       //If there is, it calls renderPage(pageNumIsPending) to render the specified page
                    pageNumIsPending = null;                            //Then sets pageNumIsPending to null
                };
            });
        });
    };
    const queueRenderPage = num => {                                    //Manage Renders in queue (Render Page has a conditional statement that will call render again based on the queued "pageNumIsPending")
        if(pageIsRendering){                                            //If page is in the middle of rendering:
            pageNumIsPending = num;                                     //then set pageNumIsPending to the number the page should render to (which will then render after the prev render completes)
        } else{
            renderPage(num);                                            //Otherwise, if page is not already rendering, then call to render (which will render the desired page)
        }
    };
    //Prev-Next Page
    const showNextPage = () => {                                        //if page is greater than or equal to maxPages, return and do nothing  
        let newVal = pageNum + 1
        if(pdfDocument && newVal <= pdfDocument.numPages){  
            setPageNum(newVal);    
            setInputValue(newVal); 
            queueRenderPage(newVal);
        }
    };
    const showPrevPage = () => {
        let newVal = pageNum - 1
        if(pdfDocument && newVal >= 1){                  
            setPageNum(newVal);    
            setInputValue(newVal);   
            queueRenderPage(newVal);  
        }                
    };
    //Page Input Field 
    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        if (val === '') {
            setPageNum('')
            return;
        }
    };
    useEffect(() => {
        const identifier = setTimeout(() => {
            var newPageNum = parseInt(inputValue, 10);
            if (pdfDocument && newPageNum >= 1 && newPageNum <= pdfDocument.numPages) {
                setPageNum(newPageNum);
                queueRenderPage(newPageNum);
            }
        }, 700);
        return () => {
            clearTimeout(identifier);
        }
    }, [inputValue])
    //Zoom Functionality
    const zoomIn = () =>{
        setScale(scale+0.5)
    }
    const zoomOut = () =>{
        setScale(scale-0.5)
    }
    //Event Listeners
    const handleKeyDown = (e) => {
        if (e.key =="ArrowRight"){
            showNextPage();
        } else if (e.key == "ArrowLeft"){
            showPrevPage();
        }
    };
    useEffect(() => {
        if (fullScreen) {
            let resizeTimer;
            const handleResize = () => {   
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    // console.log('Window size has changed!');
                    // console.log('New window width:', window.innerWidth);
                    // console.log('New window height:', window.innerHeight);
                    setWindowSizeChanges(prevCount => prevCount + 1)
                }, 100);
            };
            window.addEventListener('resize', handleResize);            // Adding the resize event listener to the window
            return () => {
                window.removeEventListener('resize', handleResize);
                clearTimeout(resizeTimer); // Clear the timeout to prevent delayed execution
            }
        }
    }, [fullScreen])    
    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown);
        return () => {                                          
            document.removeEventListener("keydown", handleKeyDown);     // Ensure to remove the event listener on component unmount or before re-adding
        };
    },[pageNum, pdfDocument])                                           //Include pageNum and pdfDocument to ensure the listener updates
    return (
        <Fragment>
            <DashBoardNavbar />
            <div id="my_pdf_viewer" className={classes.pdf_viewer}>
                <div id="canvas_container" className={classes.canvas_container}>
                    <canvas ref={canvasRef} id="canvas"></canvas>
                    <div id="textLayer" className={classes.textLayer}></div>
                    <div className={classes.navigation_container}>
                        <div className={classes.navigation_controls}>
                            <button onClick={showPrevPage} id="go_previous">Previous Page</button>
                            <input type="text" onChange={handleInputChange} value={inputValue} id="current_page"></input>
                            <button onClick={showNextPage} id="go_next">Next Page</button>
                            <span className={classes.zoom_controls}>
                                <button onClick={zoomIn} id="zoom_in">+</button>
                                <button onClick={zoomOut} id="zoom_out">-</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Dashboard;