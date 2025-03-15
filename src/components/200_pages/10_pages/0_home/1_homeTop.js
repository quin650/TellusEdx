import React from "react";
import GetStartedButton from "../../../300_modals/10_modal_getStarted/getStartedFeatures/1_getStartedButton";
import logo_bookPencil_orange from "../../../../../static/images/logos/homeTop_logos/logo_bookPencil_orange.png";
import logo_column_purple from "../../../../../static/images/logos/homeTop_logos/logo_column_purple.png";
import logo_computer_orange from "../../../../../static/images/logos/homeTop_logos/logo_computer_orange.png";
import logo_calendar_yellow from "../../../../../static/images/logos/homeTop_logos/logo_calendar_yellow.png";
import logo_atom_green from "../../../../../static/images/logos/homeTop_logos/logo_atom_green.png";
import logo_math_yellow from "../../../../../static/images/logos/homeTop_logos/logo_math_yellow.png";
import logo_money_green from "../../../../../static/images/logos/homeTop_logos/logo_money_green.png";
import logo_lightBulb_purple from "../../../../../static/images/logos/homeTop_logos/logo_lightBulb_purple.png";
import classes from "./1_homeTop.module.css";

const HomeTop = () => {
	return (
		<div className={classes.outer_container_top} id="Landing_Page">
			<div className={classes.inner_container_top}>
				<blockquote className={classes.caption}>
					<h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
					<h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
				</blockquote>
				<img src={logo_bookPencil_orange} alt="Logo" className={classes.logo_bookPencil_orange} tabIndex="0"></img>
				<img src={logo_column_purple} alt="Logo" className={classes.logo_column_purple} tabIndex="0"></img>
				<img src={logo_computer_orange} alt="Logo" className={classes.logo_computer_orange} tabIndex="0"></img>
				<img src={logo_calendar_yellow} alt="Logo" className={classes.logo_calendar_yellow} tabIndex="0"></img>
				<img src={logo_atom_green} alt="Logo" className={classes.logo_atom_green} tabIndex="0"></img>
				<img src={logo_math_yellow} alt="Logo" className={classes.logo_math_yellow} tabIndex="0"></img>
				<img src={logo_money_green} alt="Logo" className={classes.logo_money_green} tabIndex="0"></img>
				<img src={logo_lightBulb_purple} alt="Logo" className={classes.logo_lightBulb_purple} tabIndex="0"></img>
				<div className={classes.buttonSection}>
					<GetStartedButton />
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
