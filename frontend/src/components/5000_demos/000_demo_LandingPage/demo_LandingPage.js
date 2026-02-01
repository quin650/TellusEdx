import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SliderItem from "./sliderItem";
import classes from "./demo_LandingPage.module.css";

const DMV2 = "/static/images/DemoOptions_webp/CLASS_C.webp";
const DMV3 = "/static/images/DemoOptions_webp/CLASS_M.webp";
const DMV31 = "/static/images/DemoOptions_webp/CLASS_M.webp";
const DMV4 = "/static/images/DemoOptions_webp/CDL_CLASS_A.webp";
const DMV5 = "/static/images/DemoOptions_webp/CDL_CLASS_B.webp";
const DMV6 = "/static/images/DemoOptions_webp/CDL_CLASS_C.webp";

const Demo_LandingPage = () => {
	const carIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
			<g fill="none" fillRule="evenodd">
				<path d="m0 0h32v32h-32z" />
				<path
					d="m23.5833333 6 4.3326667 7.999 4.084.001v8h-4c0 2.209139-1.790861 4-4 4s-4-1.790861-4-4h-8c0 2.209139-1.790861 4-4 4s-4-1.790861-4-4h-4v-8h4.083l4.33366667-8zm-8.5833333 3h-5l-3 5h8zm7 0h-5v5h8z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
	const DMV_Demo_Feature = (
		<Fragment>
			<section className={classes.billboardContainer} id="DMV_Demo">
				<img src="https://www.dmv.ca.gov/portal/uploads/2023/10/Teen-Microsite_The-Exciting-Journey-Ahead_360x180.jpg" alt="California DMV Driver’s Handbook" />
				<div className={classes.trailerVignette}></div>
				<div className={classes.vignetteLayerTop}></div>
				<div className={classes.fillContainer}>
					<div className={classes.infoMetaLayer}>
						<div className={classes.logoAndText}>
							<div className={classes.titleWrapper}>
								<div className={classes.billboardTitle}>
									<h1 className={classes.billboardTitleText}>CALIFORNIA DRIVER'S HANDBOOK</h1>
								</div>
							</div>
							<div className={classes.infoWrapper}>
								<div className={classes.infoWrapperFade}>
									<div className={classes.synopsisFadeContainer}>
										<div className={classes.synopsis}>
											If you are preparing to take a knowledge test to get a DL or permit, prepare with this tutorial. Practice with real sample questions and get
											feedback.
										</div>
									</div>
								</div>
							</div>
							<div className={classes.billboardLinks}>
								<Link to="/demo_dmvClassC" className={classes.startButton}>
									<div className={classes.playButtonIconOuterContainer}>
										<div className={classes.playButtonIconInnerContainer}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												role="img"
												data-icon="PlayStandard"
												aria-hidden="true"
											>
												<path
													d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</div>
									<div className={classes.playButtonSpacer}></div>
									<span className={classes.playText}>Start</span>
								</Link>
								<button className={classes.moreInfoButton}>
									<div className={classes.moreInfoButtonIconOuterContainer}>
										<div className={classes.moreInfoButtonIconInnerContainer}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												role="img"
												data-icon="CircleIStandard"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</div>
									<div className={classes.moreInfoButtonSpacer}></div>
									<span className={classes.moreInfoButtonText}>More Info</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
	const DMV_Demo_Feature_Info = (
		<section className={classes.seoContent_outer} id="Dmv_Courses">
			<div className={classes.seoContent_inner}>
				<h1>California DMV Practice Tests for Class C Permit</h1>

				<p>
					Prepare for your California DMV permit test with interactive practice tests and guided learning demos. Review official handbook material, answer real exam-style
					questions, and get instant feedback to build confidence before test day.
				</p>

				<p>Questions are based on the official California DMV Driver Handbook and are updated regularly to reflect current testing standards.</p>

				<ul>
					<li>Practice real California DMV Class C questions</li>
					<li>Study by handbook section</li>
					<li>Review missed answers with explanations</li>
					<li>Build confidence before your permit test</li>
				</ul>

				<h2>California DMV Class C Permit Practice Test</h2>

				<p>
					The California DMV Class C permit test covers traffic laws, road signs, and safe driving principles. This Class C practice test lets you study by handbook
					section, practice realistic DMV questions, and review missed answers so you’re fully prepared for the real exam.
				</p>

				<p>
					Whether you’re taking the permit test for the first time or reviewing after a failed attempt, structured practice helps reinforce key concepts and identify weak
					areas before test day.
				</p>

				<h2>Frequently Asked Questions</h2>

				<h3>Is this based on the official California DMV handbook?</h3>
				<p>
					Yes. All practice questions are derived from the official California DMV Driver Handbook and follow the same topics covered on the real Class C permit test.
				</p>

				<h3>Is this a real California DMV practice test?</h3>
				<p>This is an unofficial practice test designed to closely match the format and difficulty of the real California DMV Class C permit exam.</p>

				<h3>Can I study by section?</h3>
				<p>Yes. You can practice questions by handbook section and review missed answers to focus on the topics where you need the most improvement.</p>

				<p>
					<small>Updated to reflect current California DMV testing guidelines.</small>
				</p>
			</div>
		</section>
	);
	const DMV_TestPrep_Options = (
		<section className={classes.courseSelections} id="Dmv_Courses">
			<div className={classes.outerContainer_Top}>
				<ul className={classes.innerContainer_Top}>
					<li>
						<h2 className={classes.rowHeaderTitle}>DMV</h2>
					</li>
					<li>
						<a className={classes.LogoContainer}>
							<span className={classes.Logo}>{carIcon}</span>
						</a>
					</li>
				</ul>
			</div>
			<div className={classes.rowContainer}>
				<SliderItem imgLink={DMV2} />
				<SliderItem imgLink={DMV3} />
				<SliderItem imgLink={DMV31} />
				<SliderItem imgLink={DMV4} />
				<SliderItem imgLink={DMV5} />
				<SliderItem imgLink={DMV6} />
			</div>
		</section>
	);
	return (
		<div className={classes.container}>
			<Helmet>
				<title>California DMV Practice Test – Class C Permit | TellusLearn</title>

				<meta
					name="description"
					content="Practice for the California DMV Class C permit test with real exam-style questions, handbook-based learning, and instant feedback."
				/>

				<link rel="canonical" href="https://telluslearn.com/demos" />
			</Helmet>

			{DMV_Demo_Feature}
			{DMV_Demo_Feature_Info}
			{DMV_TestPrep_Options}
		</div>
	);
};

export default Demo_LandingPage;
