import React , { useState, useEffect, useRef } from "react";
import classes from './dashboard.module.css'
import pdf from './pdf1.pdf'

const Dashboard = () => {
    const [pdfUrl, setPdfUrl] = useState(pdf);
    const [pageNum, setPageNum] = useState(19);
    const [pdfDocument, setPdfDocument] = useState(null);
    const [scale, setScale] = useState(2);
    const [pageIsRendering, setPageIsRendering] = useState(false);
    const [pageNumIsPending, setPageNumIsPending] = useState(null)
    const canvasRef = useRef(null);

    useEffect(()=>{
        pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc => { 
            setPdfDocument(pdfDoc); 
        }).catch(error => {
            console.error("Error loading PDF: ", error);
        });
    }, [pdfUrl])

    useEffect(() => {
        if (pdfDocument) {
            renderPage(pageNum);
        }
    }, [pdfDocument, pageNum]);  

    const renderPage = num =>{     
        setPageIsRendering(true);                        
        pdfDocument.getPage(num).then(page=>{
            if (!canvasRef.current) return;  
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            var viewport = page.getViewport({scale});
            canvas.width = viewport.width;                           
            canvas.height = viewport.height;
            const renderContext = {
                canvasContext: context,     
                viewport
            };
            page.render(renderContext).promise.then(() => {
                setPageIsRendering(false);
                if (pageNumIsPending !== null){                 
                    renderPage(pageNumIsPending);
                    setPageNumIsPending(null);
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

    const showPrevPage = () => {
        if(pageNum <= 1){                  
            return;
        }
        setPageNum(prevPageNum => prevPageNum - 1);         
        queueRenderPage(pageNum - 1)                    
    };

    const showNextPage = () => {
        if(pageNum >= pdfDocument.numPages){  
            return;
        }
        setPageNum(prevPageNum => prevPageNum + 1);
        queueRenderPage(pageNum + 1);
    };

    const handleInputChange = (e) => {
        const newPageNum = parseInt(e.target.value, 10);  
        if (newPageNum >= 1 && newPageNum <= pdfDocument.numPages) {
            setPageNum(newPageNum);  
            queueRenderPage(newPageNum);  
    }
};

    return (
        <div id="my_pdf_viewer" className={classes.pdf_viewer}>
            <header className={classes.headerControls}>
                <div className={classes.navigation_controls}>
                    <button onClick={showPrevPage} id="go_previous">Previous Page</button>
                    <input type="number" onChange={handleInputChange} value={pageNum} id="current_page"></input>
                    <button onClick={showNextPage} id="go_next">Next Page</button>
                    <span className={classes.zoom_controls}>
                        <button id="zoom_in">+</button>
                        <button id="zoom_out">-</button>
                    </span>
                </div>
            </header>
            <div id="canvas_container">
                <canvas ref={canvasRef} id="canvas"></canvas>
            </div>
        </div>
    );
};

export default Dashboard;