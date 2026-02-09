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
	const DMV_Demo_Feature = (
		<section>
			<div className={classes.billboardContainer} id="DMV_Demo">
				<img src="https://www.dmv.ca.gov/portal/uploads/2023/10/Teen-Microsite_The-Exciting-Journey-Ahead_360x180.jpg" alt="California DMV Driver’s Handbook" />
				<div className={classes.topShadow}></div>
				<div className={classes.leftShadow}></div>
				<div className={classes.infoContainer}>
					<div className={classes.featureTitle}>
						<h1>CALIFORNIA DRIVER'S HANDBOOK</h1>
					</div>
					<div className={classes.featureDescription}>
						<p>If you are preparing to take a knowledge test to get a DL or permit, prepare with this tutorial. Practice with real sample questions and get feedback.</p>
					</div>
					<div className={classes.buttonsContainer}>
						<Link to="/demo_dmvClassC" className={classes.startButton}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" data-icon="PlayStandard" aria-hidden="true">
								<path
									d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
									fill="currentColor"
								></path>
							</svg>
							<span>Start</span>
						</Link>
						<button className={classes.moreInfoButton}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" data-icon="CircleIStandard" aria-hidden="true">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
									fill="currentColor"
								></path>
							</svg>
							<span>More Info</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
	const DMV_Demo_Feature_Info = (
		<section>
			<div className={classes.mainContainer} id="DMV_Demo_Info">
				<div className={classes.bodyContainer}>
					<div className={classes.handbook_outerContainer}>
						<div className={classes.handbook_header_section}>
							<p>Class C</p>
							<h1>California DMV Practice Tests</h1>
						</div>
						<div className={classes.page_content}>
							<h2>Why get ready with us?</h2>
							<p>
								Prepare for your California DMV permit test using free interactive practice tests. Review handbook material, answer real exam questions, and get instant
								feedback to build confidence before test day. Questions are based on the official California DMV test.
							</p>

							<ul>
								<li>
									<strong>Read a page </strong>of the official handbook
								</li>
								<li>
									<strong>Reinforce your learning</strong> - test yourself on that page as soon as reading it
								</li>
								<li>
									Practice <strong>real </strong>DMV questions
								</li>
								<li>
									<strong>Repeat failed questions</strong>
								</li>
								<li>
									Get <strong>feedback</strong> on questions
								</li>
							</ul>

							<h2>Under 18 years old</h2>

							<h3>Apply for an instruction permit</h3>
							<ol>
								Be at least 15.5 years old
								<br />
								Complete a <a href="dmv.ca.gov/dlservices">Driver’s License & ID Card Application</a>
								<br />
								Have a parent or guardian sign to approve the application and accept financial responsibility. If your parents or guardians share joint custody of you,
								both must sign. <br />
								Provide Documents:
								<li>Proof of identify</li>
								<li>Two proofs of residency</li>
								<li>Legal full name document</li>
								<li>Social security number</li>
								Pay a non-refundable application fee. <br />
								Pass your knowledge test(s). <br />
								Pass a vision test. <br />
								Complete permit driving school <a href="http://dmv.ca.gov/driver-ed">http://dmv.ca.gov/driver-ed</a> <br />
								Wait to use your instruction permit until you start behind-the-wheel driver training with an instructor who will validate the permit. <br />
								Practice driving with a California-licensed driver who is at least 18 years old (25 for minors). This person must sit close enough to take control of the
								vehicle if needed. <br />
							</ol>
							<h3>Apply for license</h3>
							<ol>
								Be at least 16 years old <br />
								Have an instruction permit from California or another state for at least 6 months (or turn 18 years old) before scheduling your behind-the-wheel drive
								test.
								<br />
								Prove that you completed both driver education and driver training.
								<br />
								Practice driving for at least 50 hours with a California-licensed driver who is at least 25 years old. Ten hours must be at night.
								<br />
								See the Driver’s Licenses page at <a href="dmv.ca.gov/dlservices">dmv.ca.gov/dlservices</a> for the complete list of application steps, requirements, the
								Parent Teen Driving Contract, and Driving Performance Evaluation (DPE) Score Sheet. <br />
								Pass a behind-the-wheel drive test.
							</ol>
							<div>
								<h2>18 years old or older</h2>
								<h3>Apply for license</h3>
							</div>
							<ol>
								Complete a <a href="dmv.ca.gov/dlservices">Driver’s License & ID Card Application</a>
								<br />
								Provide Documents:
								<li>Proof of identify</li>
								<li>Two proofs of residency</li>
								<li>Legal full name document</li>
								<li>Social security number</li>
								Pay a non-refundable application fee. <br />
								Pass your knowledge test(s). <br />
								Pass a vision test. <br />
								Practice driving with a California-licensed driver who is at least 18 years old (25 for minors). This person must sit close enough to take control of the
								vehicle if needed. <br />
								Pass a behind-the-wheel drive test.
							</ol>
							<h2>Frequently Asked Questions</h2>

							<h3>Is this based on the official California DMV handbook?</h3>
							<p>
								Yes. All practice questions are derived from the official California DMV Driver Handbook and follow the same topics covered on the real Class C permit
								test.
							</p>

							<h3>Is this a real California DMV practice test?</h3>
							<p>This is an unofficial practice test designed to closely match the format and difficulty of the real California DMV Class C permit exam.</p>

							<h3>Can I study by section?</h3>
							<p>Yes. You can practice questions by handbook section and review missed answers to focus on the topics where you need the most improvement.</p>
							<h3>Is this based on the official California DMV handbook?</h3>
							<p>
								Yes. All practice questions are derived from the official California DMV Driver Handbook and follow the same topics covered on the real Class C permit
								test.
							</p>

							<h3>Is this a real California DMV practice test?</h3>
							<p>This is an unofficial practice test designed to closely match the format and difficulty of the real California DMV Class C permit exam.</p>

							<h3>Can I study by section?</h3>
							<p>Yes. You can practice questions by handbook section and review missed answers to focus on the topics where you need the most improvement.</p>

							<p>
								<small>Updated to reflect current California DMV testing guidelines.</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
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
	const DMV_TestPrep_Options = (
		<section>
			<div className={classes.courseSelections} id="Dmv_Course_Options">
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
			</div>
		</section>
	);
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Demo_LandingPage;
