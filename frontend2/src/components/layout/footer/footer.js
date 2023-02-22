import React from "react";
import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container2}>
                <div className={classes.row} >
                    <div className={classes.footer_col}>
                        <h4>company</h4>
                        <ul>
                            <li><a href='1aboutus.html'>about us</a></li>
                            <li><a href='2ourteam.html'>our team</a></li>
                            <li><a href='3careers.html'>careers</a></li>
                            <li><a href='4merch.html'>merch</a></li>
                        </ul>
                    </div>
                    <div className={classes.footer_col}>
                        <h4>get help</h4>
                        <ul>
                            <li><a href='5faq.html'>FAQ</a></li>
                            <li><a href='6payment.html'>payment</a></li>
                            <li><a href='7contracts.html'>contracts</a></li>
                            <li><a href='8contactus.html'>contact us</a></li>
                        </ul>
                    </div>
                    <div className={classes.footer_col}>
                        <h4>investor relations</h4>
                        <ul>
                            <li><a href='9news.html'>news</a></li>
                            <li><a href='10financials.html'>financials</a></li>
                        </ul>
                    </div>
                    <div className={classes.footer_col}>
                        <h4>follow us</h4>
                        <div className={classes.social_links}>
                            <a href='www.tellused.com'><i className={["fab fa-facebook-f"]}></i></a>
                            <a href='www.tellused.com'><i className={['fab fa-twitter']}></i></a>
                            <a href='www.tellused.com'><i className={['fab fa-instagram']}></i></a>
                            <a href='www.tellused.com'><i className={['fab fa-linkedin-in']}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;

