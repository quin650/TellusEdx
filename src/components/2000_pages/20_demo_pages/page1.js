import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userReducerActions } from "../../../a.reducers/auth_Reducers";
import classes from "../../5000_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page1A = () => {
	const sideBar_R_Questions_isOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_isOpen_rdx);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 1 of 24 </p>
				<h1>California Driver’s Handbook 2.0</h1>
			</div>
			<div className={classes.DemoDMVClassCLandingPage}>
				<div className={classes.leftSide}>
					<div className={classes.top}>
						<div className={classes.demoIntroTopLeft}>
							<div className={classes.welcome}>
								<h2>Welcome!</h2>
								<div className={classes.sectionContent}>
									<p>
										This version contains practice questions to help you <span className={classes.italicSpan}>pass</span> the DMV knowledge test.
									</p>
								</div>
							</div>
							<div className={classes.options}>
								<h2>Where to Start?</h2>
								<ul>
									<li className={classes.contentContainerWhereToStart}>
										<div className={classes.parentLabelOuterContainerPage1}>
											<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(6))}>
												<span>
													<span className={classes.sectionSection}>Sections 1-4:</span> Information about the licensing process.
												</span>
											</a>
										</div>
									</li>
									<li className={classes.contentContainerWhereToStart}>
										<div className={classes.parentLabelOuterContainerPage1}>
											<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(10))}>
												<span>
													<span className={classes.sectionSection}>Sections 5-14:</span> Information to pass the DMV knowledge test.
												</span>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className={`${classes["topRight"]} ${sideBar_R_Questions_isOpen_rdx ? classes.open : ""}`}>
							<div className={classes.imageDiv}>
								<Link to="/PDFViewer" target="_blank" rel="noopener noreferrer">
									<figure>
										<img loading="lazy" decoding="async" src="https://cdn.dmv-test-pro.com/handbook/ca-drivers-handbook.jpg" />
									</figure>
								</Link>
								<Link to="/PDFViewer" target="_blank" rel="noopener noreferrer">
									California Driver’s Handbook 1.0
								</Link>
							</div>
						</div>
					</div>
					<nav className={classes.bottom}>
						<div className={classes.tocTitleLabel}>
							<h2>Handbook Sections</h2>
						</div>
						<div className={classes.tocInnerContainer}>
							<ul>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(2))}>
											<span>Secretary's Message</span>
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(3))}>
											<span>DMV Services</span>
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(4))}>
											<span>Copyright</span>
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(5))}>
											<span>Disclaimer</span>
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(6))}>
											<span className={classes.sectionNUm}>Section 1:</span> The California Driver's License
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(7))}>
											<span className={classes.sectionNUm}>Section 2:</span> Getting an Instruction Permit and Driver’s License
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(8))}>
											<span className={classes.sectionNUm}>Section 3:</span> The Testing Process
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(9))}>
											<span className={classes.sectionNUm}>Section 4:</span> Changing, Replacing, and Renewing Your Driver’s License
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(10))}>
											<span className={classes.sectionNUm}>Section 5:</span> An Introduction to Driving
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(11))}>
											<span className={classes.sectionNUm}>Section 6:</span> Navigating the Roads
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(12))}>
											<span className={classes.sectionNUm}>Section 6:</span> Navigating the Roads (Continued)
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(13))}>
											<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road
										</a>
									</div>
								</li>
							</ul>
							<ul>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(14))}>
											<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road (Continued)
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(15))}>
											<span className={classes.sectionNUm}>Section 7:</span> Laws and Rules of the Road (Continued)
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(16))}>
											<span className={classes.sectionNUm}>Section 8:</span> Safe Driving
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(17))}>
											<span className={classes.sectionNUm}>Section 8:</span> Safe Driving (Continued)
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(18))}>
											<span className={classes.sectionNUm}>Section 8:</span> Safe Driving (Continued)
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(19))}>
											<span className={classes.sectionNUm}>Section 9:</span> Alcohol and Drugs
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(20))}>
											<span className={classes.sectionNUm}>Section 10:</span> Financial Responsibility, Insurance Requirements, and Collisions
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(21))}>
											<span className={classes.sectionNUm}>Section 11:</span> Vehicle Registration Requirements
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(22))}>
											<span className={classes.sectionNUm}>Section 12:</span> Driver Safety
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(23))}>
											<span className={classes.sectionNUm}>Section 13:</span> Seniors and Driving
										</a>
									</div>
								</li>
								<li className={classes.contentContainer}>
									<div className={classes.parentLabelOuterContainerPage1}>
										<a className={classes.parentLabelPage1} onClick={() => dispatch(userReducerActions.setDemoCurrentPageNum(24))}>
											<span className={classes.sectionNUm}>Section 14:</span> Glossary
										</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</div>

				<div className={`${classes["rightSide"]} ${sideBar_R_Questions_isOpen_rdx ? classes.open : ""}`}>
					<div className={classes.imageDiv}>
						<Link to="/PDFViewer" target="_blank" rel="noopener noreferrer">
							<figure>
								<img loading="lazy" decoding="async" src="https://cdn.dmv-test-pro.com/handbook/ca-drivers-handbook.jpg" />
							</figure>
						</Link>
						<Link to="/PDFViewer" target="_blank" rel="noopener noreferrer">
							California Driver’s Handbook 1.0
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Page1A;
