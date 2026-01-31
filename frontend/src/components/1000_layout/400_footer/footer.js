import React from "react";
import { Link } from "react-router-dom";
const Logo = "/static/images/logos_webp/logo_tellusEd_arrowsOnly.webp";
import { FaXTwitter, FaGithub, FaDiscord, FaFacebook } from "react-icons/fa6";
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
						<Link to="/" onClick={handleClickScroll} className={classes.LogoContainer}>
							<img alt="Go To Home Page" src={Logo} className={classes.Logo} />
						</Link>
					</li>
					<li>
						<Link to="/" onClick={handleClickScroll} className={classes.companyName}>
							TellusLearn
						</Link>
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
						<a href="https://www.tellused.com" aria-label="X / Twitter">
							<FaXTwitter />
						</a>
						<a href="https://www.tellused.com" aria-label="GitHub">
							<FaGithub />
						</a>
						<a href="https://www.tellused.com" aria-label="Discord">
							<FaDiscord />
						</a>
						<a href="https://www.tellused.com" aria-label="Facebook">
							<FaFacebook />
						</a>
					</span>
					<span className={classes.copyright}>Copyright © 2023 TellusEd. All Rights Reserved</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
