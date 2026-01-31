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
	const DMV = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>DMV</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={DMV2} />
								<SliderItem imgLink={DMV3} />
								<SliderItem imgLink={DMV31} />
								<SliderItem imgLink={DMV4} />
								<SliderItem imgLink={DMV5} />
								<SliderItem imgLink={DMV6} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<main className={classes.container}>
			<Helmet>
				<title>DMV Practice Demos | TellusLearn</title>
				<meta name="description" content="Try DMV practice demos with exam-style questions and guided feedback. Start with the California Driver’s Handbook demo." />
				<link rel="canonical" href="https://telluslearn.com/demos" />
			</Helmet>
			<div className={classes.billboardContainer}>
				<div className={classes.billboardRow}>
					<div className={classes.billboardPane}>
						<div className={classes.billboardMotion}>
							<div className={classes.motionBackgroundComponent}>
								<div className={classes.heroImageWrapper}>
									<img src="https://www.dmv.ca.gov/portal/uploads/2023/10/Teen-Microsite_The-Exciting-Journey-Ahead_360x180.jpg" alt="California DMV Driver’s Handbook" />
									<div className={classes.trailerVignette}></div>\<div className={classes.vignetteLayerTop}></div>
									<div className={classes.vignetteLayerBottom}></div>
								</div>
							</div>
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
						</div>
					</div>
				</div>
			</div>
			{DMV}
		</main>
	);
};

export default Demo_LandingPage;
