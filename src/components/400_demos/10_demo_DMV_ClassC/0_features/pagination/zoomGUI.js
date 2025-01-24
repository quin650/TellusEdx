import React, { useState, useEffect, useRef, Fragment, useCallback } from "react";
import classes from "./paginationGUI.module.css";

const ZoomGUI = ({ toggleFullScreen, isFullScreen, zoomIn, zoomOut }) => {
	const [zoomLimit, setZoomLimit] = useState(0);

	return (
		<Fragment>
			<button id="zoom in" onClick={zoomIn} className={classes.paginationButtonL} disabled={zoomLimit === 100}>
				<svg className={`${classes["arrowIconL"]} ${zoomLimit === 100 && classes.isInactive}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
					<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
				</svg>
			</button>
			<svg className={classes.lineSVG_L} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button onClick={toggleFullScreen} className={classes.fullScreenButton}>
				{isFullScreen ? (
					<svg className={classes.fullScreenToggleSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
						<path d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z" />
					</svg>
				) : (
					<svg className={classes.fullScreenToggleSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
						<path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" />
					</svg>
				)}
			</button>
			<svg className={classes.lineSVG_R} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="0" x2="1" y2="40" />
			</svg>
			<button id="zoom out" onClick={zoomOut} className={classes.paginationButtonR} disabled={zoomLimit === 100}>
				<svg className={`${classes["arrowIconR"]} ${zoomLimit === 100 && classes.isInactive}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
					<path d="M200-440v-80h560v80H200Z" />
				</svg>
			</button>
		</Fragment>
	);
};
export default ZoomGUI;
