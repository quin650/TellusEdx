"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_5000_demos_100_demo_DMV_ClassC_0_features_PDFViewer_PDFVIewer_js"],{

/***/ "./src/components/1000_layout/200_layoutFeatures/30_pagination_PDF_GUI.js":
/*!********************************************************************************!*\
  !*** ./src/components/1000_layout/200_layoutFeatures/30_pagination_PDF_GUI.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../a.reducers/auth_Reducers */ "./src/a.reducers/auth_Reducers.js");
/* harmony import */ var _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./30_paginationGUI.module.css */ "./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css");




const Pagination_PDF_GUI = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const PDF_currentPageNum_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.PDF_currentPageNum_rdx);
  const PDF_inputPageNum_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.PDF_inputPageNum_rdx);
  const PDF_pagesLength_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.PDF_pagesLength_rdx);
  const activePanel_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.activePanel_rdx);
  const userComputerType_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.userComputerType_rdx);
  //!Prev-Next Page
  const PrevPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    let newPageNum = PDF_currentPageNum_rdx - 1;
    if (newPageNum >= 1) {
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(newPageNum));
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(newPageNum));
      localStorage.setItem("PDF_page", newPageNum);
    }
  }, [PDF_currentPageNum_rdx, dispatch]);
  const NextPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    let newPageNum = PDF_currentPageNum_rdx + 1;
    if (newPageNum <= PDF_pagesLength_rdx) {
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(newPageNum));
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(newPageNum));
      localStorage.setItem("PDF_page", newPageNum);
    }
  }, [PDF_currentPageNum_rdx, PDF_pagesLength_rdx, dispatch]);
  const GoToStart = () => {
    dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(1));
  };
  const GoToEnd = () => {
    dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(92));
  };
  // const handleKeyDown = useCallback(
  // 	(e) => {
  // 		if (activePanel_rdx === "main") {
  // 			switch (e.key) {
  // 				case "ArrowLeft":
  // 					PrevPage();
  // 					break;
  // 				case "ArrowRight":
  // 					NextPage();
  // 					break;
  // 				default:
  // 					break;
  // 			}
  // 		}
  // 	},
  // 	[PrevPage, NextPage, activePanel_rdx]
  // );
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (activePanel_rdx !== "pdf") return;
    const isMac = userComputerType_rdx === "mac";
    if (isMac && e.metaKey) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        GoToStart();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        GoToEnd();
        return;
      }
    } else if (!isMac && e.ctrlKey) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        GoToStart();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        GoToEnd();
        return;
      }
    }
    if (e.key === "ArrowLeft") {
      PrevPage();
    } else if (e.key === "ArrowRight") {
      NextPage();
    }
  }, [PrevPage, NextPage, GoToStart, GoToEnd, activePanel_rdx]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  //!Page Input Number
  const pageInputRef_top = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handlePageInputFocus_top = () => {
    if (pageInputRef_top.current) {
      pageInputRef_top.current.select();
    }
  };
  //Local Storage -Page#
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let localStoragePageNum = localStorage.getItem("PDF_page");
    if (localStoragePageNum) {
      const parsedPageNum = parseInt(localStoragePageNum, 10);
      if (PDF_currentPageNum_rdx !== parsedPageNum) {
        dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(parsedPageNum));
        dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(parsedPageNum));
      }
    }
  }, []);
  //Handle's any changes to the input value (Delayed)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const identifier = setTimeout(() => {
      var newPageNum = parseInt(PDF_inputPageNum_rdx, 10);
      if (!isNaN(newPageNum) && newPageNum >= 1 && newPageNum <= PDF_pagesLength_rdx) {
        dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoCurrentPageNum(newPageNum));
        localStorage.setItem("PDF_page", newPageNum);
      } else {
        dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(PDF_currentPageNum_rdx));
      }
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [PDF_inputPageNum_rdx, PDF_pagesLength_rdx]);
  //Handle's any page-changes (Not Delayed)
  const handleInputChange = e => {
    const inputPageValue = parseInt(e.target.value, 10);
    if (e.target.value === "") {
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(""));
    } else if (!isNaN(inputPageValue) && inputPageValue >= 1 && inputPageValue <= PDF_pagesLength_rdx) {
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(inputPageValue));
    } else {
      dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.PDF_setDemoInputPageNum(PDF_currentPageNum_rdx));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].paginationContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Go To Previous Page",
    id: "prev",
    onClick: PrevPage,
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].paginationButtonL,
    disabled: PDF_inputPageNum_rdx === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: `${_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]["arrowIconL"]} ${PDF_inputPageNum_rdx === 1 && _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].isInactive}`,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].lineSVG_L,
    viewBox: "0 0 2 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "1",
    y1: "0",
    x2: "1",
    y2: "40"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].paginationInputContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    onChange: handleInputChange,
    value: PDF_inputPageNum_rdx,
    onFocus: handlePageInputFocus_top,
    ref: pageInputRef_top,
    id: "current_page",
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].pageInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].pageSeparator
  }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].paginationTotalPages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, PDF_pagesLength_rdx)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].lineSVG_R,
    viewBox: "0 0 2 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "1",
    y1: "0",
    x2: "1",
    y2: "40"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Go To Next Page",
    id: "next",
    onClick: NextPage,
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].paginationButtonR,
    disabled: PDF_inputPageNum_rdx === PDF_pagesLength_rdx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: `${_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]["arrowIconR"]} ${PDF_inputPageNum_rdx === PDF_pagesLength_rdx && _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].isInactive}`,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination_PDF_GUI);

/***/ }),

/***/ "./src/components/1000_layout/200_layoutFeatures/40_zoomGUI.js":
/*!*********************************************************************!*\
  !*** ./src/components/1000_layout/200_layoutFeatures/40_zoomGUI.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./30_paginationGUI.module.css */ "./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css");


const ZoomGUI = ({
  toggleFullScreen,
  isFullScreen,
  zoomIn,
  zoomOut
}) => {
  const [zoomLimit, setZoomLimit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Zoom In",
    id: "zoom in",
    onClick: zoomIn,
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].paginationButtonL,
    disabled: zoomLimit === 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: `${_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]["arrowIconL"]} ${zoomLimit === 100 && _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].isInactive}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].lineSVG_L,
    viewBox: "0 0 2 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "1",
    y1: "0",
    x2: "1",
    y2: "40"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": isFullScreen ? "Exit Full Screen" : "Open Full Screen Mode",
    onClick: toggleFullScreen,
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullScreenButton
  }, isFullScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullScreenToggleSvg,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].fullScreenToggleSvg,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].lineSVG_R,
    viewBox: "0 0 2 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "1",
    y1: "0",
    x2: "1",
    y2: "40"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Zoom Out",
    id: "zoom out",
    onClick: zoomOut,
    className: _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].paginationButtonR,
    disabled: zoomLimit === 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: `${_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]["arrowIconR"]} ${zoomLimit === 100 && _30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].isInactive}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M200-440v-80h560v80H200Z"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomGUI);

/***/ }),

/***/ "./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFVIewer.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFVIewer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../a.reducers/auth_Reducers */ "./src/a.reducers/auth_Reducers.js");
/* harmony import */ var _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PDFViewer.module.css */ "./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css");
/* harmony import */ var _1000_layout_200_layoutFeatures_30_pagination_PDF_GUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../1000_layout/200_layoutFeatures/30_pagination_PDF_GUI */ "./src/components/1000_layout/200_layoutFeatures/30_pagination_PDF_GUI.js");
/* harmony import */ var _1000_layout_200_layoutFeatures_40_zoomGUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../1000_layout/200_layoutFeatures/40_zoomGUI */ "./src/components/1000_layout/200_layoutFeatures/40_zoomGUI.js");




const PDF_URL = "https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_1997375/File/2-6-23-LINKS-ADDED-2-Passed-Accessibility-DL-600-R1-2023.pdf";


const PDFViewer = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [pdfState, setPdfState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    pdfUrl: PDF_URL,
    //The Document URL/File Location
    pdfDocument: null,
    //The Document Object (before being set)
    scale: null,
    //The size of document rendering on screen(Height-Based)
    scaleFull: null //The size of document rendering on screen(Width-Based)
  });

  const PDF_currentPageNum_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.PDF_currentPageNum_rdx);
  const PDF_inputPageNum_rdx = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({
    user
  }) => user.PDF_inputPageNum_rdx); //Page Manual Input for *goto page functionality

  const [pageIsRendering, setPageIsRendering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //The Rendering State
  const [windowSizeChanges, setWindowSizeChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); //
  const [triggerRerender, setTriggerRerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isFullScreen, setIsFullScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //
  let pageNumIsPending = null; //While fetching other pages, this is a placeholder for the "page num" (i.e "num" variable). So that once older render is complete, the new page will be rendered
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)
  const textLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const renderTaskRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  //!Set pdfDocument, FullScreen Scale
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //!Get Document
    // console.log("Fetching PDF document for URL: ", pdfState.pdfUrl);
    const fetchPdf = async () => {
      try {
        const pdfDoc = await pdfjsLib.getDocument(pdfState.pdfUrl).promise; //pdfjsLib uses getDocument(pdf_url) method and returns the Document object
        const page = await pdfDoc.getPage(PDF_currentPageNum_rdx); //creates a pdf page object by using the pdfDoc object/pdf document
        const viewport = page.getViewport({
          scale: 1
        }); //get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
        const windowWidth = window.innerWidth; //Make the Canvas' height = ViewPort's height
        const windowHeight = window.innerHeight; //Make the Canvas' height = ViewPort's height
        const scaleForStart = windowHeight / viewport.height; //Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
        let scaleToUse = scaleForStart;
        setPdfState(prevState => ({
          ...prevState,
          pdfDocument: pdfDoc,
          scale: scaleToUse //Set the state of the scale that will be used.
        }));
      } catch (error) {
        //catch error
        console.error("Error loading PDF: ", error);
      }
    };
    fetchPdf();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //!Get Document
    const fetchPdf = async () => {
      if (pdfState.pdfDocument) {
        // Only fetch if pdfDocument is not already loaded
        try {
          const page = await pdfState.pdfDocument.getPage(PDF_currentPageNum_rdx); //creates a pdf page object by using the pdfDoc object/pdf document
          const viewport = page.getViewport({
            scale: 1
          }); //get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
          const windowWidth = window.innerWidth; //Make the Canvas' height = ViewPort's height
          const windowHeight = window.innerHeight; //Make the Canvas' height = ViewPort's height
          const scaleForFull = windowWidth / viewport.width; //Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
          const scaleForStart = windowHeight / viewport.height; //Based on the size the pdf shown, we estimate the scale equal to the full size of the window so that the pdf renders as large as possible based on the window size
          let scaleToUse;
          isFullScreen ? scaleToUse = scaleForFull : scaleToUse = scaleForStart;
          setPdfState(prevState => ({
            ...prevState,
            scale: scaleToUse //Set the state of the scale that will be used.
          }));
        } catch (error) {
          //catch error
          console.error("Error loading PDF: ", error);
        }
      }
    };
    fetchPdf();
  }, [windowSizeChanges, isFullScreen]); //The document will be set every time the document url changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //console.log("Attempting to render page: ",  "with scale:", pdfState.scale);
    if (pdfState.pdfDocument && pdfState.scale) {
      renderPage(PDF_currentPageNum_rdx); //Render the Page (pageNum is initially set to page# 1)
      document.querySelector("main").scrollTo({
        top: 0,
        behavior: "instant"
      });
    }
  }, [PDF_inputPageNum_rdx, PDF_currentPageNum_rdx, pdfState.scale, triggerRerender]); //Removed "pdfDocument"...
  //!Render the page
  const renderPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async num => {
    //Function for rendering page
    //console.log("Rendering page number:", num);
    if (pageIsRendering || pdfState.scale == null) return; //Ensure that you do not attempt another rendering operation until the current one is finished.
    setPageIsRendering(true); //Change Rendering Status to "true"/currently rendering
    const canvas = canvasRef.current; //The <canvas> element is a container for graphics -- to draw graphics on a web page through scripting (usually JavaScript)
    const context = canvas.getContext("2d", {
      willReadFrequently: true
    }) || canvas.getContext("2d"); //The object with properties and methods for rendering graphics inside the canvas (shapes, text, images, scaling, rotating, translating objects, and more)
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    //console.log("Page is rendering...");
    //!Get page
    try {
      const page = await pdfState.pdfDocument.getPage(num); //Creates a pdf page object by using the pdfDoc object/pdf document
      if (!page || !canvasRef.current) {
        setPageIsRendering(false);
        //console.error('Error: Page or canvas is not available.')
        return; //If the canvas element isn't available yet, then exit render function
      }
      //!Set scale
      const viewport = page.getViewport({
        scale: pdfState.scale
      }); //Get Viewport of pdf page (i.e. Representation of the size and scale at which the PDF page should be rendered)
      canvas.height = viewport.height; //Make the Canvas' height = ViewPort's height
      canvas.width = viewport.width; //Make the Canvas' width = ViewPort's width
      const renderContext = {
        canvasContext: context,
        //The object with properties and methods for rendering graphics inside the canvas
        viewport //Representation of the size and scale at which the PDF page should be rendered
      };
      // const renderTask = await page.render(renderContext).promise;
      renderTaskRef.current = page.render(renderContext);
      await renderTaskRef.current.promise;
      //!Render the page (actual)                                  //draws the content of a specific pdf page onto the canvas  https://github.com/mozilla/pdf.js/issues/7072#issuecomment-459616711
      setPageIsRendering(false); //Once the page is rendered, set rendering state to false
      const textContent = await page.getTextContent(); //Once page is rendered, extract text content
      //!Create the textLayer                                      //Text layer (allows text selection/accessibility features)
      const textLayerDiv = textLayerRef.current; //??? is this needed? Select HTML div element with ID 'textLayer.' This will serve as the container for the rendered text layer
      // textLayerDiv.className = "textLayer"; //?? is this needed?  Set class for styling (The styling comes from the pdf_viewer.css file --> https://github.com/mozilla/pdfjs-dist/blob/master/web/pdf_viewer.css)
      const textLayer = pdfjsLib.renderTextLayer({
        //Create text layer
        textContent: textContent,
        //
        container: textLayerDiv,
        //Specifies the container (textLayerDiv)
        viewport //Specifies the dimensions/scale at which the PDF page will be rendered
      });
      //!Render the textLayer (actual)
      textLayer._render(); //Render text layer onto the textLayerDiv
      if (pageNumIsPending !== null) {
        //This conditional block checks if there is a pending page number to be rendered
        renderPage(pageNumIsPending); //If there is, it calls renderPage(pageNumIsPending) to render the specified page
        pageNumIsPending = null; //Then sets pageNumIsPending to null
      }
    } catch (error) {
      if (error.name === "RenderingCancelledException") {
        // Gracefully handle the cancellation
      } else {
        // Log unexpected errors
        console.error("Error rendering page:", error);
      }
      setPageIsRendering(false);
    }
  }, [pdfState.scale, pageIsRendering, pdfState.pdfDocument]);
  //!Zoom Functionality
  const zoomIn = () => {
    setPdfState(prevState => ({
      ...prevState,
      scale: prevState.scale + 0.5 // Decreasing the scale by 0.5
    }));
  };

  const zoomOut = () => {
    setPdfState(prevState => ({
      ...prevState,
      scale: prevState.scale - 0.5 // Decreasing the scale by 0.5
    }));
  };
  //!FullScreen
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowSizeChanges(c => c + 1);
      }, 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  const toggleFullScreen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsFullScreen(prev => !prev); // Toggle the full screen state
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }
    setTriggerRerender(prevCount => prevCount + 1); // Trigger re-render due to scale change
  }, [isFullScreen]);
  const handleKeyDown = e => {
    if (e.key === "f") {
      setIsFullScreen(prev => !prev);
    } else if (e.key === "Escape") {
      setIsFullScreen(false);
    }
  };
  const handleMainClick = () => {
    dispatch(_a_reducers_auth_Reducers__WEBPACK_IMPORTED_MODULE_2__.userReducerActions.setActivePanel("pdf"));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (location.pathname === "/PDFViewer") {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: handleMainClick,
    id: "my_pdf_viewer",
    className: _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].pdf_viewer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "canvas_container",
    className: _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].canvas_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvasRef,
    id: "canvas"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "textLayer",
    ref: textLayerRef,
    className: _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].textLayer
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: handleMainClick,
    className: _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].navigation_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_1000_layout_200_layoutFeatures_30_pagination_PDF_GUI__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].zoomControlsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_1000_layout_200_layoutFeatures_40_zoomGUI__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toggleFullScreen: toggleFullScreen,
    isFullScreen: isFullScreen,
    zoomIn: zoomIn,
    zoomOut: zoomOut
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDFViewer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! Pagination Controls ------------------------------------------------------*/\n.aHUfdyObh5pTShemaFBu {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 200px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 40px;\n}\n.aHUfdyObh5pTShemaFBu.XPYAFsCn4crOQiU06DU4 {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 200px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 40px;\n\tborder-bottom: 2px solid var(--Blue);\n}\n/* Pagination Controls 1 of 4-------------------------------------------------*/\n.qOCGaJ39sKvNqEorRP8Q:disabled {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: default;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.qOCGaJ39sKvNqEorRP8Q:disabled:hover {\n\tbackground: transparent;\n}\n.qOCGaJ39sKvNqEorRP8Q:disabled:hover .clObJk_zS4DJfcle6Ryq {\n\tpointer-events: none;\n\tscale: 1;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n.qOCGaJ39sKvNqEorRP8Q:disabled:active {\n\tbackground: transparent;\n}\n.qOCGaJ39sKvNqEorRP8Q {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.qOCGaJ39sKvNqEorRP8Q:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.qOCGaJ39sKvNqEorRP8Q:hover .clObJk_zS4DJfcle6Ryq {\n\tfill: #287bba;\n\ttransition: height 0.1s ease;\n\tscale: 1.25;\n}\n.qOCGaJ39sKvNqEorRP8Q:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.clObJk_zS4DJfcle6Ryq {\n\theight: 20px;\n\tfill: var(--Blue);\n}\n.qOCGaJ39sKvNqEorRP8Q:active .clObJk_zS4DJfcle6Ryq {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n.clObJk_zS4DJfcle6Ryq.K5p5skqIRVoz5jQYt8xB {\n\tpointer-events: none;\n\theight: 20px;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n\n/*?--------------------------------------------------------------------*/\n.eFkaUEfvM4H5_IUhJNmD {\n\twidth: 2px;\n\theight: 25px;\n\tstroke: var(--color_pageNav_lineDividers_offWhite_to_black);\n\tstroke-width: 2;\n\talign-self: center;\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 2 of 4-------------------------------------------------*/\n.nHryo58N4ztxasS5sH49 {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 50px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.pCdYqL_ZRyj70ogtXSVe {\n\twidth: 35px;\n\ttext-align: center;\n\tborder: 1px solid var(--color_pageNav_InputBorder_offWhite_to_black) !important;\n\tborder-radius: 5px !important;\n\tbackground-color: var(--color_pageNav_InputFIll_white_to_gray);\n\tfont-size: 15.5px !important;\n\tmargin-bottom: 2px;\n}\n.nHryo58N4ztxasS5sH49 input:focus,\n.nHryo58N4ztxasS5sH49 input:-webkit-autofill:focus {\n\toutline: 0px solid black !important;\n\tborder: 2px solid var(--Blue) !important;\n}\n/*--------------------------------------------------------------------*/\n.GLx01dHtYbao1qU0EzOl {\n\tmargin: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: var(--color_pageNav_lineDividers_offWhite_to_black);\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 3 of 4-------------------------------------------------*/\n.go56DdgLTjKFJtqNusHv {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 50px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.go56DdgLTjKFJtqNusHv span {\n\tdisplay: flex;\n\theight: 21px;\n\twidth: 27px;\n\talign-items: center;\n\tjustify-content: center;\n}\n/*?--------------------------------------------------------------------*/\n.oyfi8Fo39zM2eS53MVgt {\n\twidth: 2px;\n\theight: 25px;\n\tstroke: var(--color_pageNav_lineDividers_offWhite_to_black);\n\tstroke-width: 2;\n\talign-self: center;\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 4 of 4-------------------------------------------------*/\n.PDxXdr37QwE3ZVEnEd0d:disabled {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: default;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.PDxXdr37QwE3ZVEnEd0d:disabled:hover {\n\tbackground: transparent;\n}\n.PDxXdr37QwE3ZVEnEd0d:disabled:hover .IwyKmigQXfES3br85VXa {\n\tpointer-events: none;\n\tscale: 1;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n.PDxXdr37QwE3ZVEnEd0d:disabled:active {\n\tbackground: transparent;\n}\n.PDxXdr37QwE3ZVEnEd0d {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-right-radius: 10px;\n\tborder-bottom-right-radius: 10px;\n\tflex-grow: 1;\n}\n.PDxXdr37QwE3ZVEnEd0d:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.PDxXdr37QwE3ZVEnEd0d:hover .IwyKmigQXfES3br85VXa {\n\tfill: #287bba;\n\tscale: 1.25;\n\ttransition: height 0.1s ease;\n}\n.PDxXdr37QwE3ZVEnEd0d:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.IwyKmigQXfES3br85VXa {\n\theight: 20px;\n\tfill: var(--Blue);\n}\n.PDxXdr37QwE3ZVEnEd0d:active .IwyKmigQXfES3br85VXa {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n.IwyKmigQXfES3br85VXa.K5p5skqIRVoz5jQYt8xB {\n\tpointer-events: none;\n\theight: 20px;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n/* used in the zoom GUI */\n.dR5P1_FG8f8piVULHwKr {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\n\tflex-grow: 1;\n}\n.dR5P1_FG8f8piVULHwKr:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.dR5P1_FG8f8piVULHwKr:hover .u8sSABo4biLj7dl7hodE {\n\tfill: #287bba;\n\ttransition: height 0.1s ease;\n\tscale: 1.25;\n}\n.dR5P1_FG8f8piVULHwKr:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.u8sSABo4biLj7dl7hodE {\n\theight: 24px;\n\tfill: var(--Blue);\n}\n.dR5P1_FG8f8piVULHwKr:active .u8sSABo4biLj7dl7hodE {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n", "",{"version":3,"sources":["webpack://./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css"],"names":[],"mappings":"AAAA,+EAA+E;AAC/E;CACC,aAAa;CACb,mBAAmB;CACnB,4CAA4C;CAC5C,kCAAkC;CAClC,8DAA8D;CAC9D,mBAAmB;CACnB,YAAY;CACZ,mBAAmB;CACnB,2BAA2B;CAC3B,0BAA0B;CAC1B,YAAY;AACb;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,4CAA4C;CAC5C,kCAAkC;CAClC,8DAA8D;CAC9D,mBAAmB;CACnB,YAAY;CACZ,mBAAmB;CACnB,2BAA2B;CAC3B,0BAA0B;CAC1B,YAAY;CACZ,oCAAoC;AACrC;AACA,+EAA+E;AAC/E;CACC,UAAU;CACV,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,WAAW;CACX,4BAA4B;CAC5B,+BAA+B;CAC/B,YAAY;AACb;AACA;CACC,uBAAuB;AACxB;AACA;CACC,oBAAoB;CACpB,QAAQ;CACR,8CAA8C;CAC9C,eAAe;AAChB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,UAAU;CACV,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,WAAW;CACX,4BAA4B;CAC5B,+BAA+B;CAC/B,YAAY;AACb;AACA;CACC,wDAAwD;AACzD;AACA;CACC,aAAa;CACb,4BAA4B;CAC5B,WAAW;AACZ;AACA;CACC,yDAAyD;AAC1D;AACA;CACC,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,aAAa;CACb,WAAW;AACZ;AACA;CACC,oBAAoB;CACpB,YAAY;CACZ,8CAA8C;CAC9C,eAAe;AAChB;;AAEA,wEAAwE;AACxE;CACC,UAAU;CACV,YAAY;CACZ,2DAA2D;CAC3D,eAAe;CACf,kBAAkB;AACnB;AACA,wEAAwE;AACxE,+EAA+E;AAC/E;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,mBAAmB;CACnB,uBAAuB;AACxB;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,+EAA+E;CAC/E,6BAA6B;CAC7B,8DAA8D;CAC9D,4BAA4B;CAC5B,kBAAkB;AACnB;AACA;;CAEC,mCAAmC;CACnC,wCAAwC;AACzC;AACA,uEAAuE;AACvE;CACC,SAAS;CACT,aAAa;CACb,mBAAmB;CACnB,0DAA0D;AAC3D;AACA,wEAAwE;AACxE,+EAA+E;AAC/E;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,mBAAmB;CACnB,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,YAAY;CACZ,WAAW;CACX,mBAAmB;CACnB,uBAAuB;AACxB;AACA,wEAAwE;AACxE;CACC,UAAU;CACV,YAAY;CACZ,2DAA2D;CAC3D,eAAe;CACf,kBAAkB;AACnB;AACA,wEAAwE;AACxE,+EAA+E;AAC/E;CACC,UAAU;CACV,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,WAAW;CACX,4BAA4B;CAC5B,+BAA+B;CAC/B,YAAY;AACb;AACA;CACC,uBAAuB;AACxB;AACA;CACC,oBAAoB;CACpB,QAAQ;CACR,8CAA8C;CAC9C,eAAe;AAChB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,UAAU;CACV,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,WAAW;CACX,6BAA6B;CAC7B,gCAAgC;CAChC,YAAY;AACb;AACA;CACC,wDAAwD;AACzD;AACA;CACC,aAAa;CACb,WAAW;CACX,4BAA4B;AAC7B;AACA;CACC,yDAAyD;AAC1D;AACA;CACC,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,aAAa;CACb,WAAW;AACZ;AACA;CACC,oBAAoB;CACpB,YAAY;CACZ,8CAA8C;CAC9C,eAAe;AAChB;AACA,yBAAyB;AACzB;CACC,UAAU;CACV,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;CACtB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,WAAW;;CAEX,YAAY;AACb;AACA;CACC,wDAAwD;AACzD;AACA;CACC,aAAa;CACb,4BAA4B;CAC5B,WAAW;AACZ;AACA;CACC,yDAAyD;AAC1D;AACA;CACC,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,aAAa;CACb,WAAW;AACZ","sourcesContent":["/*! Pagination Controls ------------------------------------------------------*/\n.paginationContainer {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 200px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 40px;\n}\n.paginationContainer.isActive {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 200px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 40px;\n\tborder-bottom: 2px solid var(--Blue);\n}\n/* Pagination Controls 1 of 4-------------------------------------------------*/\n.paginationButtonL:disabled {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: default;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.paginationButtonL:disabled:hover {\n\tbackground: transparent;\n}\n.paginationButtonL:disabled:hover .arrowIconL {\n\tpointer-events: none;\n\tscale: 1;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n.paginationButtonL:disabled:active {\n\tbackground: transparent;\n}\n.paginationButtonL {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.paginationButtonL:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.paginationButtonL:hover .arrowIconL {\n\tfill: #287bba;\n\ttransition: height 0.1s ease;\n\tscale: 1.25;\n}\n.paginationButtonL:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.arrowIconL {\n\theight: 20px;\n\tfill: var(--Blue);\n}\n.paginationButtonL:active .arrowIconL {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n.arrowIconL.isInactive {\n\tpointer-events: none;\n\theight: 20px;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n\n/*?--------------------------------------------------------------------*/\n.lineSVG_L {\n\twidth: 2px;\n\theight: 25px;\n\tstroke: var(--color_pageNav_lineDividers_offWhite_to_black);\n\tstroke-width: 2;\n\talign-self: center;\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 2 of 4-------------------------------------------------*/\n.paginationInputContainer {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 50px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.pageInput {\n\twidth: 35px;\n\ttext-align: center;\n\tborder: 1px solid var(--color_pageNav_InputBorder_offWhite_to_black) !important;\n\tborder-radius: 5px !important;\n\tbackground-color: var(--color_pageNav_InputFIll_white_to_gray);\n\tfont-size: 15.5px !important;\n\tmargin-bottom: 2px;\n}\n.paginationInputContainer input:focus,\n.paginationInputContainer input:-webkit-autofill:focus {\n\toutline: 0px solid black !important;\n\tborder: 2px solid var(--Blue) !important;\n}\n/*--------------------------------------------------------------------*/\n.pageSeparator {\n\tmargin: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: var(--color_pageNav_lineDividers_offWhite_to_black);\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 3 of 4-------------------------------------------------*/\n.paginationTotalPages {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 50px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.paginationTotalPages span {\n\tdisplay: flex;\n\theight: 21px;\n\twidth: 27px;\n\talign-items: center;\n\tjustify-content: center;\n}\n/*?--------------------------------------------------------------------*/\n.lineSVG_R {\n\twidth: 2px;\n\theight: 25px;\n\tstroke: var(--color_pageNav_lineDividers_offWhite_to_black);\n\tstroke-width: 2;\n\talign-self: center;\n}\n/*?--------------------------------------------------------------------*/\n/* Pagination Controls 4 of 4-------------------------------------------------*/\n.paginationButtonR:disabled {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: default;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-left-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tflex-grow: 1;\n}\n.paginationButtonR:disabled:hover {\n\tbackground: transparent;\n}\n.paginationButtonR:disabled:hover .arrowIconR {\n\tpointer-events: none;\n\tscale: 1;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n.paginationButtonR:disabled:active {\n\tbackground: transparent;\n}\n.paginationButtonR {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\tborder-top-right-radius: 10px;\n\tborder-bottom-right-radius: 10px;\n\tflex-grow: 1;\n}\n.paginationButtonR:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.paginationButtonR:hover .arrowIconR {\n\tfill: #287bba;\n\tscale: 1.25;\n\ttransition: height 0.1s ease;\n}\n.paginationButtonR:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.arrowIconR {\n\theight: 20px;\n\tfill: var(--Blue);\n}\n.paginationButtonR:active .arrowIconR {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n.arrowIconR.isInactive {\n\tpointer-events: none;\n\theight: 20px;\n\tfill: var(--color_pageNav_arrow_white_to_gray);\n\tcursor: default;\n}\n/* used in the zoom GUI */\n.fullScreenButton {\n\tpadding: 0;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tcolor: inherit;\n\tfont: inherit;\n\ttext-align: inherit;\n\tappearance: none;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tmargin: auto;\n\theight: 100%;\n\twidth: 50px;\n\n\tflex-grow: 1;\n}\n.fullScreenButton:hover {\n\tbackground: var(--hover_menuButtonOpen_gray_to_darkGray);\n}\n.fullScreenButton:hover .fullScreenToggleSvg {\n\tfill: #287bba;\n\ttransition: height 0.1s ease;\n\tscale: 1.25;\n}\n.fullScreenButton:active {\n\tbackground: var(--active_menuButtonOpen_gray_to_darkGray);\n}\n.fullScreenToggleSvg {\n\theight: 24px;\n\tfill: var(--Blue);\n}\n.fullScreenButton:active .fullScreenToggleSvg {\n\tfill: #287bba;\n\tscale: 1.25;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"paginationContainer": "aHUfdyObh5pTShemaFBu",
	"isActive": "XPYAFsCn4crOQiU06DU4",
	"paginationButtonL": "qOCGaJ39sKvNqEorRP8Q",
	"arrowIconL": "clObJk_zS4DJfcle6Ryq",
	"isInactive": "K5p5skqIRVoz5jQYt8xB",
	"lineSVG_L": "eFkaUEfvM4H5_IUhJNmD",
	"paginationInputContainer": "nHryo58N4ztxasS5sH49",
	"pageInput": "pCdYqL_ZRyj70ogtXSVe",
	"pageSeparator": "GLx01dHtYbao1qU0EzOl",
	"paginationTotalPages": "go56DdgLTjKFJtqNusHv",
	"lineSVG_R": "oyfi8Fo39zM2eS53MVgt",
	"paginationButtonR": "PDxXdr37QwE3ZVEnEd0d",
	"arrowIconR": "IwyKmigQXfES3br85VXa",
	"fullScreenButton": "dR5P1_FG8f8piVULHwKr",
	"fullScreenToggleSvg": "u8sSABo4biLj7dl7hodE"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".OoV6f_8jofYJJU2IWl3U {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\tmin-height: 100%;\n\tbackground: #333;\n}\n.PEZ3EI7JLreHiiuwkmEY {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 100%;\n}\ncanvas {\n\twidth: 100%;\n\theight: 100%;\n}\n.zy_XAH9lUnCC86xwCeX2 {\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 3000;\n\tfont-family: sans-serif !important;\n\tline-height: 21.6px;\n\tfont-size: 16px;\n\tbottom: 0%;\n}\n.IMTXLIH2l8y9DfSQ2rQa {\n\tdisplay: flex;\n}\n.IMTXLIH2l8y9DfSQ2rQa button {\n\twidth: 100px;\n}\n.IMTXLIH2l8y9DfSQ2rQa input {\n\twidth: 50px;\n}\n.lyttsRhVSUC6wbOSWWTH {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 100px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 30px;\n}\n\n/* -------------------------------------------------------------------------------- */\n/* PDF.js text layer (minimum) */\n._OBnbrwc9Bl71D2ibcWQ {\n\tposition: absolute;\n\ttext-align: initial;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\topacity: 0.25;\n\tline-height: 1;\n\t-webkit-text-size-adjust: none;\n\t-moz-text-size-adjust: none;\n\ttext-size-adjust: none;\n\tforced-color-adjust: none;\n\ttransform-origin: 0 0;\n\tz-index: 2;\n}\n._OBnbrwc9Bl71D2ibcWQ span,\n._OBnbrwc9Bl71D2ibcWQ br {\n\tcolor: transparent;\n\tposition: absolute;\n\twhite-space: pre;\n\tcursor: text;\n\ttransform-origin: 0% 0%;\n}\n/* Only necessary in Google Chrome, see issue 14205, and most unfortunately\n   * the problem doesn't show up in \"text\" reference tests. */\n._OBnbrwc9Bl71D2ibcWQ span.Z8Rc9rhegkI03BNbZpIo {\n\ttop: 0;\n\theight: 0;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug {\n\tmargin: -1px;\n\tpadding: 1px;\n\tbackground-color: rgba(180, 0, 170, 1);\n\tborder-radius: 4px;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug.mpQ7uWKaDy8azaKuiLwg {\n\tposition: initial;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug.ADVHLbhE9FkQiYq5uy6H {\n\tborder-radius: 4px 0 0 4px;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug.fTiiSI4jgOvSg9aKXv7Q {\n\tborder-radius: 0 4px 4px 0;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug._wgFdp8i6JjY8PwMiDs6 {\n\tborder-radius: 0;\n}\n._OBnbrwc9Bl71D2ibcWQ .Tw1FKM2kccAuGPonI7Ug.yn4v48OmnvbxHq1_0VeD {\n\tbackground-color: rgba(0, 100, 0, 1);\n}\n._OBnbrwc9Bl71D2ibcWQ ::-moz-selection {\n\tbackground: blue;\n\tbackground: AccentColor;\n}\n._OBnbrwc9Bl71D2ibcWQ ::selection {\n\tbackground: blue;\n\tbackground: AccentColor;\n}\n/* Avoids https://github.com/mozilla/pdf.js/issues/13840 in Chrome */\n._OBnbrwc9Bl71D2ibcWQ br::-moz-selection {\n\tbackground: transparent;\n}\n._OBnbrwc9Bl71D2ibcWQ br::selection {\n\tbackground: transparent;\n}\n._OBnbrwc9Bl71D2ibcWQ .FVQdPy1lyvO3AbZxPSgc {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 100%;\n\tright: 0;\n\tbottom: 0;\n\tz-index: -1;\n\tcursor: default;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n}\n._OBnbrwc9Bl71D2ibcWQ .FVQdPy1lyvO3AbZxPSgc.Q8ik9tWw4pzE4PDF47JJ {\n\ttop: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,gBAAgB;CAChB,gBAAgB;AACjB;AACA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,iBAAiB;CACjB,kBAAkB;CAClB,YAAY;AACb;AACA;CACC,WAAW;CACX,YAAY;AACb;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,aAAa;CACb,kCAAkC;CAClC,mBAAmB;CACnB,eAAe;CACf,UAAU;AACX;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,4CAA4C;CAC5C,kCAAkC;CAClC,8DAA8D;CAC9D,mBAAmB;CACnB,YAAY;CACZ,mBAAmB;CACnB,2BAA2B;CAC3B,0BAA0B;CAC1B,YAAY;AACb;;AAEA,qFAAqF;AACrF,gCAAgC;AAChC;CACC,kBAAkB;CAClB,mBAAmB;CACnB,OAAO;CACP,MAAM;CACN,QAAQ;CACR,SAAS;CACT,gBAAgB;CAChB,aAAa;CACb,cAAc;CACd,8BAA8B;CAC9B,2BAA2B;CAC3B,sBAAsB;CACtB,yBAAyB;CACzB,qBAAqB;CACrB,UAAU;AACX;AACA;;CAEC,kBAAkB;CAClB,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;CACZ,uBAAuB;AACxB;AACA;6DAC6D;AAC7D;CACC,MAAM;CACN,SAAS;AACV;AACA;CACC,YAAY;CACZ,YAAY;CACZ,sCAAsC;CACtC,kBAAkB;AACnB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,0BAA0B;AAC3B;AACA;CACC,0BAA0B;AAC3B;AACA;CACC,gBAAgB;AACjB;AACA;CACC,oCAAoC;AACrC;AACA;CACC,gBAAgB;CAChB,uBAAuB;AACxB;AACA;CACC,gBAAgB;CAChB,uBAAuB;AACxB;AACA,oEAAoE;AACpE;CACC,uBAAuB;AACxB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,cAAc;CACd,kBAAkB;CAClB,OAAO;CACP,SAAS;CACT,QAAQ;CACR,SAAS;CACT,WAAW;CACX,eAAe;CACf,yBAAyB;CACzB,sBAAsB;CACtB,iBAAiB;AAClB;AACA;CACC,MAAM;AACP","sourcesContent":[".pdf_viewer {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\tmin-height: 100%;\n\tbackground: #333;\n}\n.canvas_container {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 100%;\n}\ncanvas {\n\twidth: 100%;\n\theight: 100%;\n}\n.navigation_container {\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 3000;\n\tfont-family: sans-serif !important;\n\tline-height: 21.6px;\n\tfont-size: 16px;\n\tbottom: 0%;\n}\n.navigation_controls {\n\tdisplay: flex;\n}\n.navigation_controls button {\n\twidth: 100px;\n}\n.navigation_controls input {\n\twidth: 50px;\n}\n.zoomControlsContainer {\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 1px 1px 1px 0px rgb(0 0 0 / 10%);\n\tborder: 1px solid rgb(0 0 0 / 10%);\n\tbackground-color: var(--backgroundColor_pageNav_white_to_gray);\n\tborder-radius: 10px;\n\twidth: 100px;\n\talign-items: center;\n\tmargin: 10px auto 10px auto;\n\tfont-size: 16px !important;\n\theight: 30px;\n}\n\n/* -------------------------------------------------------------------------------- */\n/* PDF.js text layer (minimum) */\n.textLayer {\n\tposition: absolute;\n\ttext-align: initial;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\topacity: 0.25;\n\tline-height: 1;\n\t-webkit-text-size-adjust: none;\n\t-moz-text-size-adjust: none;\n\ttext-size-adjust: none;\n\tforced-color-adjust: none;\n\ttransform-origin: 0 0;\n\tz-index: 2;\n}\n.textLayer span,\n.textLayer br {\n\tcolor: transparent;\n\tposition: absolute;\n\twhite-space: pre;\n\tcursor: text;\n\ttransform-origin: 0% 0%;\n}\n/* Only necessary in Google Chrome, see issue 14205, and most unfortunately\n   * the problem doesn't show up in \"text\" reference tests. */\n.textLayer span.markedContent {\n\ttop: 0;\n\theight: 0;\n}\n.textLayer .highlight {\n\tmargin: -1px;\n\tpadding: 1px;\n\tbackground-color: rgba(180, 0, 170, 1);\n\tborder-radius: 4px;\n}\n.textLayer .highlight.appended {\n\tposition: initial;\n}\n.textLayer .highlight.begin {\n\tborder-radius: 4px 0 0 4px;\n}\n.textLayer .highlight.end {\n\tborder-radius: 0 4px 4px 0;\n}\n.textLayer .highlight.middle {\n\tborder-radius: 0;\n}\n.textLayer .highlight.selected {\n\tbackground-color: rgba(0, 100, 0, 1);\n}\n.textLayer ::-moz-selection {\n\tbackground: blue;\n\tbackground: AccentColor;\n}\n.textLayer ::selection {\n\tbackground: blue;\n\tbackground: AccentColor;\n}\n/* Avoids https://github.com/mozilla/pdf.js/issues/13840 in Chrome */\n.textLayer br::-moz-selection {\n\tbackground: transparent;\n}\n.textLayer br::selection {\n\tbackground: transparent;\n}\n.textLayer .endOfContent {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 100%;\n\tright: 0;\n\tbottom: 0;\n\tz-index: -1;\n\tcursor: default;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n}\n.textLayer .endOfContent.active {\n\ttop: 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pdf_viewer": "OoV6f_8jofYJJU2IWl3U",
	"canvas_container": "PEZ3EI7JLreHiiuwkmEY",
	"navigation_container": "zy_XAH9lUnCC86xwCeX2",
	"navigation_controls": "IMTXLIH2l8y9DfSQ2rQa",
	"zoomControlsContainer": "lyttsRhVSUC6wbOSWWTH",
	"textLayer": "_OBnbrwc9Bl71D2ibcWQ",
	"markedContent": "Z8Rc9rhegkI03BNbZpIo",
	"highlight": "Tw1FKM2kccAuGPonI7Ug",
	"appended": "mpQ7uWKaDy8azaKuiLwg",
	"begin": "ADVHLbhE9FkQiYq5uy6H",
	"end": "fTiiSI4jgOvSg9aKXv7Q",
	"middle": "_wgFdp8i6JjY8PwMiDs6",
	"selected": "yn4v48OmnvbxHq1_0VeD",
	"endOfContent": "FVQdPy1lyvO3AbZxPSgc",
	"active": "Q8ik9tWw4pzE4PDF47JJ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css":
/*!***********************************************************************************!*\
  !*** ./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./30_paginationGUI.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/1000_layout/200_layoutFeatures/30_paginationGUI.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_30_paginationGUI_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css":
/*!*************************************************************************************************!*\
  !*** ./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./PDFViewer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/components/5000_demos/100_demo_DMV_ClassC/0_features/PDFViewer/PDFViewer.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_PDFViewer_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_5000_demos_100_demo_DMV_ClassC_0_features_PDFViewer_PDFVIewer_js.js.map