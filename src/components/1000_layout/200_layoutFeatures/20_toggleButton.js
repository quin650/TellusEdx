import React, { useState } from "react";
import classes from "./20_toggleButton.module.css";

const ToggleButton = (props) => {
	const [ToggleIsContribute, setToggleIsContribute] = useState(false);

	const handleToggle = () => {
		setToggleIsContribute(!ToggleIsContribute);
		props.ToggleFunction(ToggleIsContribute);
	};

	return (
		<div className={classes.toggleSection}>
			<label className={classes.switch}>
				<section className={classes.sliderText}>
					<div className={`${classes["leftSideWhenToggleOnLeft"]} ${!ToggleIsContribute && classes.toggleMovedRight}`}>Learn</div>
					<div className={`${classes["rightSideWhenToggleOnLeft"]} ${!ToggleIsContribute && classes.toggleMovedRight}`}>Contribute</div>
				</section>
				<input type="checkbox" checked={ToggleIsContribute} onChange={handleToggle} />
				<span className={classes.slider}></span>
			</label>
		</div>
	);
};

export default ToggleButton;
