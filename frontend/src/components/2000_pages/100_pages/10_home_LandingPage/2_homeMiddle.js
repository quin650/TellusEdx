import React, { useEffect, useState } from "react";
import ToggleButton from "../../../1000_layout/200_layoutFeatures/20_toggleButton";
import HomeMiddleLearn from "./2a_homeMiddleLearn";
import HomeMiddleContribute from "./2b_homeMiddleContribute";
import classes from "./2c_homeMiddle.module.css";

const HomeMiddle = ({ isToggleChange }) => {
	const [toggleIsLearn, setToggleIsLearn] = useState(true);

	const ToggleFunction = (x) => {
		setToggleIsLearn(x);
	};

	return (
		<section>
			<div className={classes.middleMainSection} id="Learn/Contribute">
				{toggleIsLearn ? <HomeMiddleLearn /> : <HomeMiddleContribute />}
				<ToggleButton ToggleFunction={ToggleFunction} isToggleChange={isToggleChange} />
			</div>
		</section>
	);
};

export default HomeMiddle;
