import React from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
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
                        <div className={classes.break}></div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                SYNCED
                            </div>
                            <div className={classes.sub_content}>
                            Always find where you left off, never losing pace, always moving forward.
                            </div>
                        </div>
                        <div className={classes.break}></div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                AUTO
                            </div>
                            <div className={classes.sub_content}>
                                Turn on autopilot, and enjoy a catered learning experienced built on our communities’ hard work.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container2}>
                <ToggleButton />
            </div>
        </div>
    );
}

export default LandingPage1;