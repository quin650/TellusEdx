import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SliderItem from "./sliderItem";
import classes from "./demo_LandingPage.module.css";
// DMV1
import DMV2 from "../../../../static/images/DemoOptions/CLASS_C.png";
import DMV3 from "../../../../static/images/DemoOptions/CLASS_M.png";
import DMV4 from "../../../../static/images/DemoOptions/CDL_CLASS_A.png";
import DMV5 from "../../../../static/images/DemoOptions/CDL_CLASS_B.png";
import DMV6 from "../../../../static/images/DemoOptions/CDL_CLASS_C.png";
import DMV7 from "../../../../static/images/DemoOptions/DMV_CLASS_C.png";
import DMV8 from "../../../../static/images/DemoOptions/DMV_CLASS_C.png";
// Originals
// Originals_1 [URL]
import Originals_2 from "../../../../static/images/DemoOptions/Contractor.png";
import Originals_3 from "../../../../static/images/DemoOptions/wreckingBall.png";
import Originals_5 from "../../../../static/images/DemoOptions/TellusBaby.png";
import Originals_6 from "../../../../static/images/DemoOptions/Tellus.png";

const Demo_LandingPage = () => {
	const goto_demo_dmvClassC = () => {
		console.log("clicked  goto_demo_dmvClassC");
	};
	// DMV
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
								<SliderItem imgLink={DMV4} />
								<SliderItem imgLink={DMV5} />
								<SliderItem imgLink={DMV6} />
								<SliderItem imgLink={DMV7} />
								<SliderItem imgLink={DMV8} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// School TextBooks
	const ShoolTextBook_1 = "https://m.media-amazon.com/images/I/81Ydh8xspTL._AC_UF1000,1000_QL80_.jpg";
	const ShoolTextBook_2 = "https://cdn11.bigcommerce.com/s-zzukzwlrsj/images/stencil/1280x1280/products/19023/47141/9781259275388__37981.1597941408.jpg?c=2";
	const ShoolTextBook_3 = "https://mandibooks.com/wp-content/uploads/2024/07/chael-L.-Cain-Steven-A.-Wasserman-Peter-V.-Minorsky-Rebecca-B.-Orr-z-lib.org_1.jpg";
	const ShoolTextBook_4 = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319365813.jpg";
	const ShoolTextBook_5 = "https://m.media-amazon.com/images/I/51O6HYqvgRL._SX342_SY445_.jpg";
	const ShoolTextBook_6 = "https://m.media-amazon.com/images/I/51pdTyWxrUL._SY445_SX342_.jpg";
	const ShoolTextBook_7 = "https://images.routledge.com/common/jackets/crclarge/978036725/9780367253202.jpg";
	const ShoolTextBook_8 = "https://m.media-amazon.com/images/I/51r4wVo07CL._SX342_SY445_.jpg";
	const ShoolTextBook_9 = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319218508.jpg";
	const SchoolTextBooks = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>School Textbooks</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={ShoolTextBook_1} />
								<SliderItem imgLink={ShoolTextBook_2} />
								<SliderItem imgLink={ShoolTextBook_3} />
								<SliderItem imgLink={ShoolTextBook_4} />
								<SliderItem imgLink={ShoolTextBook_5} />
								<SliderItem imgLink={ShoolTextBook_6} />
								<SliderItem imgLink={ShoolTextBook_7} />
								<SliderItem imgLink={ShoolTextBook_8} />
								<SliderItem imgLink={ShoolTextBook_9} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// Professional Licenses
	const testPrepThumbnail_1 = "https://chs-psfa.org/wp-content/uploads/2024/06/Online-SAT-Prep-Course.jpeg";
	const testPrepThumbnail_2 = "https://phsprowl.com/wp-content/uploads/2024/04/Streeter-ACT.jpg";
	const testPrepThumbnail_3 = "https://images.shiksha.com/mediadata/images/articles/1705904852phpNX9uwq.jpeg";
	const testPrepThumbnail_4 =
		"https://static.wixstatic.com/media/70216d_9308a4898647470b9f191eb5ec233cbb~mv2.png/v1/fill/w_614,h_432,al_c,lg_1,q_85,enc_auto/70216d_9308a4898647470b9f191eb5ec233cbb~mv2.png";
	const testPrepThumbnail_5 = "https://testprep.byu.edu/sites/testprep.ce.byu.edu/files/new_hero_gre.png";
	const testPrepThumbnail_6 = "https://www.approvedcourse.com/wp-content/uploads/2021/10/GMAT-Prep-Course.png";
	const testPrepThumbnail_7 = "https://www.approvedcourse.com/wp-content/uploads/2021/01/LSAT-Prep-Course.png";
	const testPrepThumbnail_8 = "https://leah4sci.com/wp-content/uploads/2014/05/leah4sci-mcat.jpg";
	const testPrepThumbnail_9 = "https://cdn-another71.pressidium.com/wp-content/uploads/2023/03/cpa-exam-test-banks-600x338.png";
	const TestPrep = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>Test Prep</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={testPrepThumbnail_1} />
								<SliderItem imgLink={testPrepThumbnail_2} />
								<SliderItem imgLink={testPrepThumbnail_3} />
								<SliderItem imgLink={testPrepThumbnail_4} />
								<SliderItem imgLink={testPrepThumbnail_5} />
								<SliderItem imgLink={testPrepThumbnail_6} />
								<SliderItem imgLink={testPrepThumbnail_7} />
								<SliderItem imgLink={testPrepThumbnail_8} />
								<SliderItem imgLink={testPrepThumbnail_9} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// Vehicle Manuals
	const VehicleManuals_1 = "https://m.media-amazon.com/images/I/51D9OqRWnGL._SY780_.jpg";
	const VehicleManuals_2 = "https://i.etsystatic.com/40325819/r/il/569501/5026649606/il_570xN.5026649606_o813.jpg";
	const VehicleManuals_3 = "https://www.starbikeforums.com/attachments/screenshot_20210112_152548-jpg.102713/";
	const VehicleManuals_4 = "https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1fushkdq042815hu1b6r1o9kg81r.jpg";
	const VehicleManuals_5 =
		"https://www.ctx1300forum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down//media/2014-yamaha-bolt-very-smooth-engine-great-transmission-and-fun-to-ride-the-styling-is-bobber-the-technology-is-new-and-the-bike-is-totally-reli.449/full";
	const VehicleManuals_6 = "https://images-stag.jazelc.com/uploads/theautopian-m2en/toaping1.jpg";
	const VehicleManuals_7 = "https://manuali-officina.com/897-home_default/workshop-manual-ford-explorer-2016-2019-en.jpg";

	const VehicleManuals = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>Vehicle Manuals</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={VehicleManuals_1} />
								<SliderItem imgLink={VehicleManuals_2} />
								<SliderItem imgLink={VehicleManuals_3} />
								<SliderItem imgLink={VehicleManuals_4} />
								<SliderItem imgLink={VehicleManuals_5} />
								<SliderItem imgLink={VehicleManuals_6} />
								<SliderItem imgLink={VehicleManuals_7} />
								<SliderItem imgLink={VehicleManuals_7} />
								<SliderItem imgLink={VehicleManuals_7} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	//DIY
	const DIY_1 = "https://i.ytimg.com/vi/c5AXj6afENc/sddefault.jpg";
	const DIY_2 = "https://www.prudentpennypincher.com/wp-content/uploads/2021/03/VERTICAL-garden-ideas.jpg";
	const DIY_3 =
		"https://external-preview.redd.it/tCg49xWuuWWxJ0Zteb7ito1SUgwwkM6-kep6jLuSW-U.jpg?width=1080&crop=smart&auto=webp&s=28f9dab4d26dfaf6d2edd2af6b6e982335d64030";
	const DIY_4 = "https://www.apieceofrainbow.com/wp-content/uploads/2017/05/DIY-terrarium-apieceofrainbowblog-1.jpg";
	const DIY_5 = "https://i.ytimg.com/vi/UpdSw9JhWM0/maxresdefault.jpg";
	const DIY_6 = "https://www.100daysofrealfood.com/wp-content/uploads/2018/12/DIY-Candles-1-5--1200x1600.jpg";
	const DIY_7 = "https://theownerbuildernetwork.co/wp-content/uploads/2014/03/Garage-Ceiling-Storage-03.jpg";
	const DIY = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>DIY</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={DIY_1} />
								<SliderItem imgLink={DIY_2} />
								<SliderItem imgLink={DIY_3} />
								<SliderItem imgLink={DIY_4} />
								<SliderItem imgLink={DIY_5} />
								<SliderItem imgLink={DIY_6} />
								<SliderItem imgLink={DIY_7} />
								<SliderItem imgLink={DIY_7} />
								<SliderItem imgLink={DIY_7} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	//Originals
	const Originals_1 = "https://scheetzlaw.com/wp-content/uploads/2021/05/Citizenship-Exam.jpeg";
	// const Originals_2 [Img]
	// const Originals_3 [Img]
	const Originals_4 = "https://img-b.udemycdn.com/course/750x422/5622220_879e.jpg";
	// const Originals_5 [Img]
	// const Originals_6 [Img]
	const Originals_7 = "https://m.media-amazon.com/images/I/51069S9aq7L._SY445_SX342_.jpg";
	const Originals = (
		<div className={classes.lolomoRow}>
			<h2 className={classes.rowHeader}>
				<a className={classes.rowTitle}>
					<div className={classes.rowHeaderTitle}>Originals</div>
				</a>
			</h2>
			<div className={classes.rowContainer}>
				<div className={classes.rowContent}>
					<div className={classes.slider}>
						<div className={classes.sliderMask}>
							<div className={classes.sliderContent}>
								<SliderItem imgLink={Originals_1} />
								<SliderItem imgLink={Originals_2} />
								<SliderItem imgLink={Originals_3} />
								<SliderItem imgLink={Originals_4} />
								<SliderItem imgLink={Originals_5} />
								<SliderItem imgLink={Originals_6} />
								<SliderItem imgLink={Originals_7} />
								<SliderItem imgLink={Originals_7} />
								<SliderItem imgLink={Originals_7} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	return (
		<main className={classes.container}>
			<div className={classes.billboardContainer}>
				<div className={classes.billboardRow}>
					<div className={classes.billboardPane}>
						<div className={classes.billboardMotion}>
							<div className={classes.motionBackgroundComponent}>
								<div className={classes.heroImageWrapper}>
									<img src="https://www.dmv.ca.gov/portal/uploads/2023/10/Teen-Microsite_The-Exciting-Journey-Ahead_360x180.jpg" alt="" />
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
			{SchoolTextBooks}
			{TestPrep}
			{VehicleManuals}
			{DIY}
			{Originals}
		</main>
	);
};

export default Demo_LandingPage;
