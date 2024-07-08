import React, {useState, useEffect} from "react";

import { Link} from 'react-router-dom';
import Logo from '../../../../static/images/1Logo.png';
import classes from './footer.module.css';

const Footer = () => {
    const handleClickScroll = () => {
        document.querySelector('main').scrollTo(0,0)
    };

    return (
        <div className={classes.footer} id="footer">
            <div className={classes.outerLogoContainer}>
                    <ul className={classes.innerLogoContainer}>
                        <li>
                            <Link to="/home" onClick={handleClickScroll} ><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                        </li>
                        <li>
                            <span to="/home" onClick={handleClickScroll} className={classes.companyName}>TellusEd</span>
                        </li>
                    </ul>
            </div>
            <div className={classes.outerFooterContainer}>
                <div className={classes.innerFooterContainer}>
                    <div className={classes.contentsSection}>
                        <div className={classes.footer_col}>
                            <h4>About Us</h4>
                            <ul>
                                <li><a href='1aboutus.html'>Company</a></li>
                                <li><a href='2ourteam.html'>Our Team</a></li>
                                <li><a href='3careers.html'>Careers</a></li>
                                <li><a href='4merch.html'>Merch</a></li>
                            </ul>
                        </div>
                        <div className={classes.footer_col}>
                            <h4>Support Center</h4>
                            <ul>
                                <li><a href='5docs.html'>Docs</a></li>
                                <li><a href='6guides.html'>Guides</a></li>
                                <li><a href='7reference.html'>API Reference</a></li>
                                <li><a href='8integrations.html'>Integrations</a></li>
                            </ul>
                        </div>
                        <div className={classes.footer_col}>
                            <h4>Help</h4>
                            <ul>
                                <li><a href='9FAQ.html'>FAQ</a></li>
                                <li><a href='10tutorials.html'>Tutorials</a></li>
                                <li><a href='10fcontactUs.html'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.socialRow}>
                    <span className={classes.social_links}>
                        <a href='www.tellused.com'><i className={["fa-brands fa-x-twitter"]}></i></a>
                        <a href='www.tellused.com'><i className={["fab fa-github"]}></i></a>
                        <a href='www.tellused.com'><i className={["fab fa-discord"]}></i></a>
                        <a href='www.tellused.com'><i className={["fab fa-facebook"]}></i></a>
                    </span>
                    <span className={classes.copyright}>Copyright © 2023 TellusEd. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

