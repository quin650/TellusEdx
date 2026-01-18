import React from "react";
import OnThisPageQuickViewChild from "./10_onThisPageQuickViewChild";
import classes from "./10_onThisPageQuickView.modules.css";

const OnThisPageQuickView = ({ divIDs, activeID, registerTippy }) => {
	return (
		<div className={classes["tocContainer"]}>
			{divIDs.map((content, index) => (
				<OnThisPageQuickViewChild key={index} id={index} content={content} status={activeID === content} registerTippy={registerTippy} />
			))}
		</div>
	);
};

export default OnThisPageQuickView;
