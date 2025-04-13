import React from "react";
import classes from "./2c_homeMiddle.module.css";

const HomeMiddleContribute = () => {
	return (
		<div className={classes.middleMainContainer}>
			<div className={classes.left}></div>
			<article className={classes.right}>
				<h2 className={classes.title}>Contribute</h2>
				<ol className={classes.content}>
					<dl className={classes.line}>
						<dt className={classes.sub_title}>CLARITY</dt>
						<dd className={classes.sub_content}>Add an explanation to an online resource by creating an insertion point.</dd>
					</dl>
					<div className={classes.break}></div>
					<dl className={classes.line}>
						<dt className={classes.sub_title}>TANGENT</dt>
						<dd className={classes.sub_content}>When a section deserves both clarity and an expanded direction, create a tangent point.</dd>
					</dl>
					<div className={classes.break}></div>
					<dl className={classes.line}>
						<dt className={classes.sub_title}>GUIDED</dt>
						<dd className={classes.sub_content}>
							Review student metrics to pinpoint the areas lacking fluidity and where your contribution will make a significant impact.
						</dd>
					</dl>
				</ol>
			</article>
		</div>
	);
};

export default HomeMiddleContribute;
