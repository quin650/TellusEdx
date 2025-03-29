import React, { useState } from "react";
import ToggleButton from "../../../100_layout/20_layoutFeatures/20_toggleButton";
import HomeMiddleLearn from "./2a_homeMiddleLearn";
import HomeMiddleContribute from "./2b_homeMiddleContribute";
import classes from "./2c_homeMiddle.module.css";

const HomeMiddle = () => {
	const [ifToggleIsLearn, SetIfToggleIsLearn] = useState(true);

	const ToggleFunction = (x) => {
		SetIfToggleIsLearn(x);
	};

	let content = "";
	if (ifToggleIsLearn) {
		content = <HomeMiddleLearn />;
	} else {
		content = <HomeMiddleContribute />;
	}

	return (
		<section>
			<div className={classes.middleMainSection} id="Learn/Contribute">
				{content}
				<ToggleButton ToggleFunction={ToggleFunction} />
			</div>
		</section>
	);
};

export default HomeMiddle;
