import React, { Fragment } from "react";
import classes from "./demo_LandingPage.module.css";

const Demo_LandingPage = () => {
	const sliderItem = (
		<div className={classes.sliderItem}>
			<div className={classes.titleCard}>
				<a href="/xyz" className={classes.sliderRefocus}>
					<div className={classes.boxartContainer}>
						<img
							className={classes.boxartImage}
							src="https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5vvdapdNRx1uJYviHHLEOpZM7lxXz17IIfyfDXVFgF9vELm870Ueroo-kcc68g_pfUurASoJ7CA7qBeL7cMa-R-7esd8VGnYHooXN3CSaKzOZ_Aw5AoFJfyyvMAHL1bkp7.jpg?r=7b7"
							alt=""
						/>
					</div>
				</a>
			</div>
		</div>
	);

	return (
		<main className={classes.container}>
			<div className={classes.volatileBillboardAnimationsContainer}>
				<div className={classes.billboardRow}>
					<div className={classes.billboardPane}>
						<div className={classes.billboardMotion}>
							<div className={classes.motionBackgroundComponent}>
								<div className={classes.heroImageWrapper}>
									<img src="https://www.dmv.ca.gov/portal/uploads/2023/10/Teen-Microsite_The-Exciting-Journey-Ahead_360x180.jpg" alt="" />
									<div className={classes.trailerVignette}></div>
									<div className={classes.vignetteLayer}></div>
								</div>
							</div>
							<div className={classes.fillContainer}>
								<div className={classes.infoMetaLayer}>
									<div className={classes.logoAndText}>
										<div className={classes.titleWrapper}>
											<div className={classes.billboardTitle}>
												<h1 className={classes.billboardTitleText}>DMV Driver's License Prep</h1>
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
											<a className={classes.playLink}>
												<button className={classes.startButton}>
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
												</button>
											</a>
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
			<div className={classes.lolomoRow}>
				<h2 className={classes.rowHeader}>
					<a className={classes.rowTitle}>
						<div className={classes.rowHeaderTitle}>Watch for a While</div>
					</a>
				</h2>
				<div className={classes.rowContainer}>
					<div className={classes.rowContent}>
						<div className={classes.slider}>
							<span className={classes.handlePrev} tabIndex="0" role="button">
								<b className={classes.indicatorIcon}></b>
							</span>
							<div className={classes.sliderMask}>
								<div className={classes.sliderContent}>
									{sliderItem}
									{sliderItem}
									{sliderItem}
									{sliderItem}
									{sliderItem}
									{sliderItem}
									{sliderItem}
									{sliderItem}
								</div>
							</div>
							<span className={classes.handleNext} tabIndex="0" role="button" aria-label="See more titles">
								<b className={classes.indicatorIcon}></b>
							</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Demo_LandingPage;
