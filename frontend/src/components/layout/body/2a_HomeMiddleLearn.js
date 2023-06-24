import React from "react";
import classes from './2c_HomeMiddle.module.css';


const HomeMiddleLearn = () => {
    return (
        <section className={classes.middleMainContainer}>
            <div className={classes.left}>
            </div>
            <article className={classes.right}>
                <h2 className={classes.title}>
                    Learn
                </h2>
                <ol className={classes.content}>
                    <dl className={classes.line}>
                        <dt className={classes.sub_title}>
                            SELF-GUIDED
                        </dt>
                        <dd className={classes.sub_content}>
                            Use TellusEd whenever you get stuck learning something, need direction, or want to deep-dive on a subject.
                        </dd>
                    </dl>
                    <div className={classes.break}></div>
                    <dl className={classes.line}>
                        <dt className={classes.sub_title}>
                            SYNCED
                        </dt>
                        <dd className={classes.sub_content}>
                        Always find where you left off, never losing pace, always moving forward.
                        </dd>
                    </dl>
                    <div className={classes.break}></div>
                    <dl className={classes.line}>
                        <dt className={classes.sub_title}>
                            AUTO
                        </dt>
                        <dd className={classes.sub_content}>
                            Turn on autopilot, and enjoy a catered learning experienced built on our communities’ hard work.
                        </dd>
                    </dl>
                </ol>
            </article>
        </section>
    );
}

export default HomeMiddleLearn;