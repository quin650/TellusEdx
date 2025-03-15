import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../static/images/Logo_arrows.png";
import classes from "./footer.module.css";

const Footer = () => {
	const handleClickScroll = () => {
		document.querySelector("main").scrollTo(0, 0);
	};
	const CloseNavBarMenu_and_ScrollQuickly = () => {
		dispatch(userReducerActions.sideBar_R_Close_Main());
		document.querySelector("main").scrollTo({
			top: 0,
			behavior: "instant",
		});
	};
	return (
		<div className={classes.footer} id="Footer">
			<div className={classes.outerContainer_Top}>
				<ul className={classes.innerContainer_Top}>
					<li>
						<div onClick={handleClickScroll} className={classes.LogoContainer}>
							<img src={Logo} alt="Logo" className={classes.Logo}></img>
						</div>
					</li>
					<li>
						<div onClick={handleClickScroll} className={classes.companyName}>
							TellusEd
						</div>
					</li>
				</ul>
			</div>
			<div className={classes.outerFooterContainer}>
				<div className={classes.innerFooterContainer}>
					<div className={classes.contentsSection}>
						<div className={classes.footer_col}>
							<h4>About Us</h4>
							<ul>
								<li>
									<Link to="/company" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Company
									</Link>
								</li>
								<li>
									<Link to="/ourteam" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Our Team
									</Link>
								</li>
								<li>
									<Link to="/careers" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Careers
									</Link>
								</li>
								<li>
									<Link to="/merch" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Merch
									</Link>
								</li>
							</ul>
						</div>
						<div className={classes.footer_col}>
							<h4>Support Center</h4>
							<ul>
								<li>
									<Link to="/docs" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Docs
									</Link>
								</li>
								<li>
									<Link to="/guides" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Guides
									</Link>
								</li>
								<li>
									<Link to="/apireference" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										API Reference
									</Link>
								</li>
								<li>
									<Link to="/integrations" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Integrations
									</Link>
								</li>
							</ul>
						</div>
						<div className={classes.footer_col}>
							<h4>Help</h4>
							<ul>
								<li>
									<Link to="/faq" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										FAQ
									</Link>
								</li>
								<li>
									<Link to="/tutorials" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Tutorials
									</Link>
								</li>
								<li>
									<Link to="/contactus" onClick={CloseNavBarMenu_and_ScrollQuickly}>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={classes.socialRow}>
					<span className={classes.social_links}>
						<a href="www.tellused.com">
							<i className={["fa-brands fa-x-twitter"]}></i>
						</a>
						<a href="www.tellused.com">
							<i className={["fab fa-github"]}></i>
						</a>
						<a href="www.tellused.com">
							<i className={["fab fa-discord"]}></i>
						</a>
						<a href="www.tellused.com">
							<i className={["fab fa-facebook"]}></i>
						</a>
					</span>
					<span className={classes.copyright}>Copyright © 2023 TellusEd. All Rights Reserved</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
