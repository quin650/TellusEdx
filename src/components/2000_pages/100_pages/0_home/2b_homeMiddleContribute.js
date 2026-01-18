import React from "react";
import classes from "./2c_homeMiddle.module.css";

const HomeMiddleContribute = () => {
	return (
		<div className={classes.middleMainContainer}>
			<div className={classes.left}></div>
			<article className={classes.right}>
				<h2 className={classes.title}>Contribute</h2>

				<ol className={classes.content}>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>CLARITY</h3>
						<p className={classes.sub_content}>Add an explanation to an online resource by creating an insertion point.</p>
					</li>
					<li className={classes.break} aria-hidden="true" role="presentation"></li>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>TANGENT</h3>
						<p className={classes.sub_content}>When a section deserves both clarity and an expanded direction, create a tangent point.</p>
					</li>
					<li className={classes.break} aria-hidden="true" role="presentation"></li>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>GUIDED</h3>
						<p className={classes.sub_content}>
							Review student metrics to pinpoint the areas lacking fluidity and where your contribution will make a significant impact.
						</p>
					</li>
				</ol>
			</article>
		</div>
	);
};

export default HomeMiddleContribute;
