import React from "react";
import classes from './landingPage2.module.css';

const LandingPage3 = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container1}>
                <div className={classes.left}>
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>
                        Contribute
                    </div>
                    <div className={classes.content}>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                CLARITY
                            </div>
                            <div className={classes.sub_content}>
                                Add an explanation to an online resource by creating an insertion point.
                            </div>
                        </div>
                        <div className={classes.break}></div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                TANGENT
                            </div>
                            <div className={classes.sub_content}>
                                When a section deserves both clarity and an expanded direction, create a tangent point.
                            </div>
                        </div>
                        <div className={classes.break}></div>
                        <div className={classes.line}>
                            <div className={classes.sub_title}>
                                GUIDED
                            </div>
                            <div className={classes.sub_content}>
                                Review student metrics to pinpoint the areas lacking fluidity and where your contribution will be invaluable.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage3;