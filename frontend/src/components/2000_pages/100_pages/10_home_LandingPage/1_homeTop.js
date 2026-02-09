import React from "react";

import TestDemoButton from "../../../1000_layout/200_layoutFeatures/60_testDemoButton";

const logo_bookPencil_orange = "/static/images/logos_webp/logo_bookPencil_orange.webp";
const logo_column_purple = "/static/images/logos_webp/logo_column_purple.webp";
const logo_computer_orange = "/static/images/logos_webp/logo_computer_orange.webp";
const logo_calendar_yellow = "/static/images/logos_webp/logo_calendar_yellow.webp";
const logo_atom_green = "/static/images/logos_webp/logo_atom_green.webp";
const logo_math_yellow = "/static/images/logos_webp/logo_math_yellow.webp";
const logo_money_green = "/static/images/logos_webp/logo_money_green.webp";
const logo_lightBulb_purple = "/static/images/logos_webp/logo_lightBulb_purple.webp";

import classes from "./1_homeTop.module.css";

const HomeTop = () => {
	return (
		<div className={classes.outer_container_top} id="Landing_Page">
			<div className={classes.inner_container_top}>
				<blockquote className={classes.caption}>
					<h1
						style={{
							fontSize: "6rem",
							letterSpacing: "-0.3rem",
							margin: "0px",
							textShadow: "0rem 0.2rem 0.2rem black",
							marginLeft: "0px",
							marginRight: "auto",
						}}
					>
						LEARNING NEVER EXHAUSTS THE MIND
					</h1>
					<h2
						style={{
							fontSize: "1.6rem",
							fontWeight: 400,
							marginLeft: "0px",
							marginRight: "auto",
						}}
					>
						TellusLearn is adding a Montessori-flair to online-learning. Learn your way.
					</h2>
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
					<TestDemoButton />
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
