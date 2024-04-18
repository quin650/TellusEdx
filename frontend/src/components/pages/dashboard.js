import React , { useState, useEffect, useRef } from "react";
import classes from './dashboard.module.css'
import pdf from './pdf1.pdf'

const Dashboard = () => {
    const [pdfUrl, setPdfUrl] = useState(pdf);
    const [pageNum, setPageNum] = useState(1);
    const [inputValue, setInputValue] = useState(2)
    const [pdfDocument, setPdfDocument] = useState(null);
    const [scale, setScale] = useState(1);
    const [pageIsRendering, setPageIsRendering] = useState(false);
    let pageNumIsPending = null;
    const canvasRef = useRef(null);

    useEffect(()=>{
        pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc => { 
            setPdfDocument(pdfDoc);
            pdfDoc.getPage(pageNum).then(page => {
                const viewport = page.getViewport({ scale: 1 });
                const windowHeight = window.innerHeight;
                const scaleToUse = windowHeight / viewport.height;
                setScale(scaleToUse);
            });
        }).catch(error => {
            console.error("Error loading PDF: ", error);
        });
    }, [pdfUrl])

    useEffect(() => {
        setInputValue(pageNum)
        if (pdfDocument) {
            renderPage(pageNum);
        }
    }, [pdfDocument, pageNum, scale]); 

    const renderPage = num =>{     
        if (pageIsRendering) return;            //Ensure that you do not attempt another rendering operation until the current one is finished.
        setPageIsRendering(true);                        
        pdfDocument.getPage(num).then(page=>{
            if (!canvasRef.current) return;  
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            const viewport = page.getViewport({scale});
            canvas.width = viewport.width;                           
            canvas.height = viewport.height;
            const renderContext = {
                canvasContext: context,     
                viewport
            };
            page.render(renderContext).promise.then(() => {
                setPageIsRendering(false);
                return page.getTextContent();                    
            }).then(textContent => {                                        
                const textLayerDiv = document.getElementById('textLayer'); 
                textLayerDiv.className = 'textLayer';                     
                const textLayer = pdfjsLib.renderTextLayer({                
                    textContent: textContent,                               
                    container: textLayerDiv,                               
                    viewport                                                
                }); 
                textLayer._render();     
                if (pageNumIsPending !== null){                 
                    renderPage(pageNumIsPending);
                    pageNumIsPending = null;
                };
            });
        });
    };
    const queueRenderPage = num => {            
        if(pageIsRendering){                                    
            pageNumIsPending = num;                             
        } else{
            renderPage(num);                                    
        }
    };
    const showNextPage = () => {
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
    const zoomIn = () =>{
        setScale(scale+0.5)
    }
    const zoomOut = () =>{
        setScale(scale-0.5)
    }
    // Event Listeners
    const handleKeyDown = (e) => {
        if (e.key =="ArrowRight"){
            showNextPage();
        } else if (e.key == "ArrowLeft"){
            showPrevPage();
        }
    };
    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown);
        return () => {              // Ensure to remove the event listener on component unmount or before re-adding
            document.removeEventListener("keydown", handleKeyDown);
        };
    },[pageNum, pdfDocument])       // Include pageNum and pdfDocument to ensure the listener updates
    return (
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
    );
};
export default Dashboard;