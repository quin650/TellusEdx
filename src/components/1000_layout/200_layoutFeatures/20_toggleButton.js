import React, { useEffect, useState } from "react";
import classes from "./20_toggleButton.module.css";

const ToggleButton = ({ isToggleChange, ToggleFunction }) => {
	const [ToggleIsContribute, setToggleIsContribute] = useState(true);
	const handleToggle = () => {
		const newVal = !ToggleIsContribute;
		setToggleIsContribute(newVal);
		ToggleFunction(!newVal);
	};

	useEffect(() => {
		handleToggle();
	}, [isToggleChange]);

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
