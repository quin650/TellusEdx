import React from "react";
import classes from "./2c_homeMiddle.module.css";

const HomeMiddleLearn = () => {
	return (
		<div className={classes.middleMainContainer}>
			<article className={classes.right}>
				<h2 className={classes.title}>Learn</h2>

				<ol className={classes.content}>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>SELF-GUIDED</h3>
						<p className={classes.sub_content}>Use TellusEd whenever you get stuck learning something, need direction, or want to deep-dive on a subject.</p>
					</li>
					<div className={classes.break}></div>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>SYNCED</h3>
						<p className={classes.sub_content}>Always find where you left off, never losing pace, always moving forward.</p>
					</li>
					<div className={classes.break}></div>
					<li className={classes.line}>
						<h3 className={classes.sub_title}>AUTO</h3>
						<p className={classes.sub_content}>Turn on autopilot, and enjoy a catered learning experienced built on our communities’ hard work.</p>
					</li>
				</ol>
			</article>
		</div>
	);
};

export default HomeMiddleLearn;
