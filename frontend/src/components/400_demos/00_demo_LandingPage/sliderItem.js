import React, { Fragment } from "react";
import classes from "./demo_LandingPage.module.css";

const SliderItem = ({ imgLink }) => {
	return (
		<div className={classes.sliderItem}>
			<div className={classes.titleCard}>
				<a href="/xyz" className={classes.sliderRefocus}>
					<div className={classes.boxartContainer}>
						<img className={classes.boxartImage} src={imgLink} alt="" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default SliderItem;
