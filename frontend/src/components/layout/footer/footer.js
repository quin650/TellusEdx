import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../../../static/images/1Logo.png';
import classes from './footer.module.css';

const Footer = () => {
    const handleClickScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    return (
        <section className={classes.footer}>
            <div className={classes.logoLine}>
                    <div className={classes.logoContainer}>
                        <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                        <span className={classes.companyName} onClick={handleClickScroll} >TellusEd</span>
                    </div>
            </div>
            <div className={classes.outerFooterContainer}>
                <div className={classes.innerFooterContainer}>
                    <div className={classes.contentsSection} >
                        <div className={classes.footer_col}>
                            <h4>Company</h4>
                            <ul>
                                <li><a href='1aboutus.html'>About Us</a></li>
                                <li><a href='2ourteam.html'>Our Team</a></li>
                                <li><a href='3careers.html'>Careers</a></li>
                                <li><a href='4merch.html'>Merch</a></li>
                            </ul>
                        </div>
                        <div className={classes.footer_col}>
                            <h4>Resources</h4>
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
                        <a href='www.tellused.com'><i className={['fab fa-twitter']}></i></a>
                        <a href='www.tellused.com'><i className={["fab fa-github fa-lg"]}></i></a>
                        <a href='www.tellused.com'><i className={['fab fa-discord']}></i></a>
                        <a href='www.tellused.com'><i className={['fab fa-facebook fa-lg']}></i></a>
                    </span>
                </div>
                <span className={classes.copyright}>Copyright © 2023 TellusEd. All Rights Reserved</span>
            </div>
        </section >
    );
}

export default Footer;

