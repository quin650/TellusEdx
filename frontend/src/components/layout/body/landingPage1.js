import React from "react";
import classes from './landingPage1.module.css';

const LandingPage1 = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container1}>
                <div className={classes.left}>
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>
                        Learn
                    </div>
                    <div className={classes.content}>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                SELF-GUIDED
                            </div>
                            <div className={classes.sub_content}>
                                Use TellusEd whenever you get stuck learning something, need direction, or want to deep-dive on a subject.
                            </div>
                        </div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                            </div>
                            <div className={classes.sub_content}>
                            </div>
                        </div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                            </div>
                            <div className={classes.sub_content}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container2}>
                    <div className={classes.toggle}>
                        Toggle Button
                    </div>
            </div>
        </div>
    );
}

export default LandingPage1;