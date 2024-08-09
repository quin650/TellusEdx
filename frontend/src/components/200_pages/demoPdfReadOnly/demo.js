import React , { useState, useEffect, useRef, Fragment, useCallback } from "react";
import classes from './demo.module.css'
import pdf from './pdf1.pdf'
import DemoNavbar from "./features/demoNavbar";

const Demo = () => {                
    const [pdfState, setPdfState] = useState({
        pdfUrl: pdf,                                                    //The Document URL/File Location
        pdfDocument: null,                                              //The Document Object (before being set)
        scale: null,                                                    //The size of document rendering on screen(Height-Based)
        scaleFull: null,                                                //The size of document rendering on screen(Width-Based)
        pageNum: 1,                                                     
        inputValue: 1,                                                  //Page Manual Input for *goto page functionality
    });
    const [pageIsRendering, setPageIsRendering] = useState(false);      //The Rendering State
    const [windowSizeChanges, setWindowSizeChanges] = useState(1);      //
    const [triggerRerender, setTriggerRerender] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);            //
    let pageNumIsPending = null;                                        //While fetching other pages, this is a placeholder for the "page num" (i.e "num" variable). So that once older render is complete, the new page will be rendered
    const canvasRef = useRef(null);                                     //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)

    //!Set pdfDocument, FullScreen Scale
    useEffect(()=>{
        //!Get Document
        // console.log("Fetching PDF document for URL: ", pdfState.pdfUrl);
        const fetchPdf = async () => {
            try {
                const pdfDoc = await pdfjsLib.getDocument(pdfState.pdfUrl).promise;//pdfjsLib uses getDocument(pdf_url) method and returns the Document object
                const page = await pdfDoc.getPage(pdfState.pageNum)     //creates a pdf page object by using the pdfDoc object/pdf document
                const viewport = page.getViewport({scale: 1});          //get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
                const windowWidth = window.innerWidth;                  //Make the Canvas' height = ViewPort's height
                const windowHeight = window.innerHeight;                //Make the Canvas' height = ViewPort's height
                const scaleForStart = windowHeight / viewport.height;   //Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
                let scaleToUse = scaleForStart
                setPdfState(prevState => ({
                    ...prevState,
                    pdfDocument: pdfDoc,
                    scale: scaleToUse,                                  //Set the state of the scale that will be used.
                }));
            } catch(error) {                                            //catch error
                console.error("Error loading PDF: ", error);                
            }
        };
        fetchPdf();
    }, []);           
    useEffect(()=>{
        //!Get Document
        const fetchPdf = async () => {
            if (pdfState.pdfDocument) {  // Only fetch if pdfDocument is not already loaded
                try {
                        const page = await pdfState.pdfDocument.getPage(pdfState.pageNum) //creates a pdf page object by using the pdfDoc object/pdf document
                        const viewport = page.getViewport({scale: 1});  //get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
                        const windowWidth = window.innerWidth;          //Make the Canvas' height = ViewPort's height
                        const windowHeight = window.innerHeight;        //Make the Canvas' height = ViewPort's height
                        const scaleForFull = windowWidth / viewport.width;//Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
                        const scaleForStart = windowHeight / viewport.height;//Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
                        let scaleToUse
                        isFullScreen ? scaleToUse = scaleForFull : scaleToUse = scaleForStart;
                        setPdfState(prevState => ({
                            ...prevState,
                            scale: scaleToUse,                          //Set the state of the scale that will be used.
                        }));
                    } catch(error) {                                    //catch error
                        console.error("Error loading PDF: ", error);                
                    }
            };
        };
        fetchPdf();
    }, [windowSizeChanges, isFullScreen]);                              //The document will be set every time the document url changes
    useEffect(() => {
        //console.log("Attempting to render page: ", pdfState.pageNum, "with scale:", pdfState.scale);
        if (pdfState.pdfDocument && pdfState.scale) {                   //if the pdf Document has been set, then:                              
            setPdfState(prevState => ({                                 //When the pdfDocument sets, the pageNum, or the scale change, the Input Value is set.
                ...prevState,
                inputValue: pdfState.pageNum
            }));
            renderPage(pdfState.pageNum);                               //Render the Page (pageNum is initially set to page# 1)
        }
    }, [pdfState.pageNum, pdfState.scale, triggerRerender]);            //Removed "pdfDocument"...

    //!Render the page
    const renderPage = useCallback(async (num) =>{                      //Function for rendering page
        //console.log("Rendering page number:", num);
        if (pageIsRendering || pdfState.scale == null) return;          //Ensure that you do not attempt another rendering operation until the current one is finished.
        setPageIsRendering(true);                                       //Change Rendering Status to "true"/currently rendering
        const canvas = canvasRef.current;                               //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)
        const context = canvas.getContext("2d");                        //The object with properties and methods for rendering graphics inside the canvas (shapes, text, images, scaling, rotating, translating objects, and more)
        
        //console.log("Page is rendering...");
        //!Get page
        try{
            const page = await pdfState.pdfDocument.getPage(num);       //Creates a pdf page object by using the pdfDoc object/pdf document
            if (!page || !canvasRef.current) {
                setPageIsRendering(false);
                //console.error('Error: Page or canvas is not available.')
                return;                                                 //If the canvas element isn't available yet, then exit render function
            }
            //!Set scale
            const viewport = page.getViewport({scale: pdfState.scale}); //Get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
            canvas.height = viewport.height;                            //Make the Canvas' height = ViewPort's height
            canvas.width = viewport.width;                              //Make the Canvas' width = ViewPort's width
            const renderContext = {
                canvasContext: context,                                 //The object with properties and methods for rendering graphics inside the canvas
                viewport                                                //Representation of the size and scale at which the PDF page should be rendered
            };
            const renderTask  = await page.render(renderContext).promise
            //!Render the page (actual)                                  //draws the content of a specific pdf page onto the canvas  https://github.com/mozilla/pdf.js/issues/7072#issuecomment-459616711 
            setPageIsRendering(false);                                  //Once the page is rendered, set rendering state to false
            const textContent = await page.getTextContent();                           //Once page is rendered, extract text content 
            //!Create the textLayer                                      //Text layer (allows text selection/accessibility features)
            const textLayerDiv = document.getElementById('textLayer');//??? is this needed? Select HTML div element with ID 'textLayer.' This will serve as the container for the rendered text layer
            textLayerDiv.className = 'textLayer';                     //?? is this needed?  Set class for styling (The styling comes from the pdf_viewer.css file --> https://github.com/mozilla/pdfjs-dist/blob/master/web/pdf_viewer.css)
            const textLayer = pdfjsLib.renderTextLayer({                //Create text layer        
                textContent: textContent,                               // 
                container: textLayerDiv,                                //Specifies the container (textLayerDiv)   
                viewport                                                //Specifies the dimensions/scale at which the PDF page will be rendered    
            });
            //!Render the textLayer (actual) 
            textLayer._render();                                        //Render text layer onto the textLayerDiv
            if (pageNumIsPending !== null){                             //This conditional block checks if there is a pending page number to be rendered
                renderPage(pageNumIsPending);                           //If there is, it calls renderPage(pageNumIsPending) to render the specified page
                pageNumIsPending = null;                                //Then sets pageNumIsPending to null
            }
        }catch(error) {
            setPageIsRendering(false);
            console.error('Error rendering page:', error);
        }
    }, [pdfState.scale, pageIsRendering, pdfState.pdfDocument]);

    //!Prev-Next Page
    const showNextPage = () => {                                        //if page is greater than or equal to maxPages, return and do nothing  
        let newVal = pdfState.pageNum + 1
        if(pdfState.pdfDocument && newVal <= pdfState.pdfDocument.numPages){  
            // setPageNum(newVal);    
            // setInputValue(newVal);
            setPdfState(prevState => ({
                ...prevState,
                pageNum: prevState.pageNum + 1,
                inputValue: prevState.pageNum + 1
            }));
        }
    };
    const showPrevPage = () => {
        let newVal = pdfState.pageNum - 1
        if(pdfState.pdfDocument && newVal >= 1){                  
            // setPageNum(newVal);    
            // setInputValue(newVal);
            setPdfState(prevState => ({
                ...prevState,
                pageNum: prevState.pageNum - 1,
                inputValue: prevState.pageNum - 1
            }));   
        }                
    };

    //!Page Input Field 
    const handleInputChange = (e) => {
        const val = e.target.value;
        setPdfState(prevState => ({
            ...prevState,
            inputValue: val                                             // Update inputValue directly in pdfState
        }));
        if (val === '') {
            setPdfState(prevState => ({
                ...prevState,
                pageNum: '',                                            // Set pageNum to an empty string when the input is empty
                inputValue: ''                                          // It's good to keep inputValue in sync
            }));
            return;
        }
    }
    useEffect(() => {
        const identifier = setTimeout(() => {
            var newPageNum = parseInt(pdfState.inputValue, 10);
            if (pdfState.pdfDocument && newPageNum >= 1 && newPageNum <= pdfState.pdfDocument.numPages) {
                setPdfState(prevState => ({
                    ...prevState,
                    pageNum: newPageNum                                 // Update pageNum within pdfState
                }));
            }
        }, 700);
        return () => {
            clearTimeout(identifier);
        }
    }, [pdfState.inputValue])

    //!Zoom Functionality
    const zoomIn = () => {
        setPdfState(prevState => ({
            ...prevState,
            scale: prevState.scale + 0.5                                // Decreasing the scale by 0.5
        }));
    }
    const zoomOut = () => {
        setPdfState(prevState => ({
            ...prevState,
            scale: prevState.scale - 0.5                                // Decreasing the scale by 0.5
        }));
    }

    //!Event Listeners
    const handleKeyDown = (e) => {
        if (e.key =="ArrowRight"){
            showNextPage();
        } else if (e.key == "ArrowLeft"){
            showPrevPage();
        }
    };
    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown);
        return () => {                                          
            document.removeEventListener("keydown", handleKeyDown);     // Ensure to remove the event listener on component unmount or before re-adding
        };
    },[pdfState.pageNum, pdfState.pdfDocument])                         //Include pageNum and pdfDocument to ensure the listener updates

    //!FullScreen
    useEffect(() => {
        if (isFullScreen) {
            let resizeTimer;
            const handleResize = () => {   
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    setWindowSizeChanges(prevCount => prevCount + 1)
                }, 300);
            };
            window.addEventListener('resize', handleResize);            // Adding the resize event listener to the window
            return () => {
                window.removeEventListener('resize', handleResize);
                clearTimeout(resizeTimer);                              // Clear the timeout to prevent delayed execution
            }
        }
    }, [isFullScreen])
    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown);
        return () => {                                          
            document.removeEventListener("keydown", handleKeyDown);     // Ensure to remove the event listener on component unmount or before re-adding
        };
    },[pdfState.pageNum, pdfState.pdfDocument])                         //Include pageNum and pdfDocument to ensure the listener updates
    const toggleFullScreen = useCallback(() => {
        setIsFullScreen(prev => !prev);                                 // Toggle the full screen state
        if (renderTask){
            renderTask.cancel();
        }
        setTriggerRerender(prevCount => prevCount + 1);                 // Trigger re-render due to scale change
    }, []);
    return (
        <Fragment>
            <DemoNavbar isFullScreen={isFullScreen} toggleFullScreen={toggleFullScreen}/>
            <div id="my_pdf_viewer" className={classes.pdf_viewer}>
                <div id="canvas_container" className={classes.canvas_container}>
                    <canvas ref={canvasRef} id="canvas"></canvas>
                    <div id="textLayer" className={classes.textLayer}></div>
                    <div className={classes.navigation_container}>
                        <div className={classes.navigation_controls}>
                            <button onClick={showPrevPage} id="go_previous">Previous Page</button>
                            <input type="text" onChange={handleInputChange} value={pdfState.inputValue} id="current_page"></input>
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
export default Demo;
