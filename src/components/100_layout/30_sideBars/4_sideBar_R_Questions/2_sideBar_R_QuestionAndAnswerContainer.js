import React, { useState, useEffect, useRef, useCallback, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";

import SideBar_R_QuestionsParent from "./3_sideBar_R_Question";
import PaginationQuestionsGUI from "../../../400_demos/10_demo_DMV_ClassC/0_features/pagination/paginationQuestionsGUI";

import data from "../../../400_demos/10_demo_DMV_ClassC/data/questions.json";
import classes from "../../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";
import clsx from "clsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const SideBar_R_QuestionNumber = () => {
	const dispatch = useDispatch();
	const sideBar_R_QuestionTestResults_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResults_rdx);
	const sideBar_R_QuestionTestResultsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionTestResultsFailed_rdx);
	const sideBar_R_Questions_CurrentTestNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentTestNumber_rdx);
	const sideBar_R_Questions_CurrentQuestionNumber_rdx = useSelector(({ user }) => user.sideBar_R_Questions_CurrentQuestionNumber_rdx);
	const sideBar_R_QuestionsStatus_rdx = useSelector(({ user }) => user.sideBar_R_QuestionsStatus_rdx);
	const sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx = useSelector(({ user }) => user.sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx);
	const sideBar_R_QuestionsIsFailed_rdx = useSelector(({ user }) => user.sideBar_R_QuestionsIsFailed_rdx);
	const [questionComponent, setQuestionComponent] = useState(null);
	const [chosenAnswerID, setChosenAnswerID] = useState(null);
	const [previouslyCheckedID, setPreviouslyCheckedID] = useState(null);
	const [startGradingTest, setStartGradingTest] = useState(false);
	const questionContentRef = useRef(null);
	const [showHint, setShowHint] = useState(false);
	const [footerTaskBarTippyText, setFooterTaskBarTippyText] = useState("TaskBar - Click to pin");
	const [bookMark, setBookMark] = useState(false);
	const [commentBubble, setCommentBubble] = useState(false);
	const [thumbsUp, setThumbsUp] = useState(false);

	const get_ChosenAnswerID = (id, correctOrIncorrect) => {
		setChosenAnswerID(id);
		if (!sideBar_R_QuestionsIsFailed_rdx) {
			dispatch(
				userReducerActions.updateQuestionResults({
					testNumber: sideBar_R_Questions_CurrentTestNumber_rdx,
					questionNumber: sideBar_R_Questions_CurrentQuestionNumber_rdx,
					answerData: [sideBar_R_Questions_CurrentQuestionNumber_rdx, id, correctOrIncorrect],
				})
			);
		} else {
			dispatch(
				userReducerActions.updateFailedQuestionResults({
					testNumber: sideBar_R_Questions_CurrentTestNumber_rdx,
					questionNumber: sideBar_R_Questions_CurrentQuestionNumber_rdx,
					answerData: [sideBar_R_Questions_CurrentQuestionNumber_rdx, id, correctOrIncorrect],
				})
			);
			dispatch(
				userReducerActions.updateFailedQuestionResults_lastQuestionSubmitted({
					testNumber: sideBar_R_Questions_CurrentTestNumber_rdx,
					questionNumber: sideBar_R_Questions_CurrentQuestionNumber_rdx,
				})
			);
		}

		setStartGradingTest(true);
	};
	const gotoQuestion = useCallback(
		(questionNum) => {
			dispatch(userReducerActions.sideBar_R_Questions_GoTo_QuestionNumber(questionNum));
		},
		[sideBar_R_Questions_CurrentQuestionNumber_rdx, dispatch]
	);
	// Render Question Component
	useEffect(() => {
		const questionData = data.questions.find(
			(question) => question.testNumber === sideBar_R_Questions_CurrentTestNumber_rdx && question.questionNumber === sideBar_R_Questions_CurrentQuestionNumber_rdx
		);

		if (!sideBar_R_QuestionsIsFailed_rdx && questionData) {
			const currentQuestionData_ifSubmitted =
				sideBar_R_QuestionTestResults_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;
			if (currentQuestionData_ifSubmitted) {
				setPreviouslyCheckedID(currentQuestionData_ifSubmitted[1]);
				setStartGradingTest(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={currentQuestionData_ifSubmitted[1]}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={true}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else if (!currentQuestionData_ifSubmitted && !chosenAnswerID) {
				setPreviouslyCheckedID(null);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={false}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else {
				setPreviouslyCheckedID(null);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={startGradingTest}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			}
		} else if (sideBar_R_QuestionsIsFailed_rdx && questionData) {
			const currentQuestionData_ifSubmitted =
				sideBar_R_QuestionTestResultsFailed_rdx[sideBar_R_Questions_CurrentTestNumber_rdx]?.[sideBar_R_Questions_CurrentQuestionNumber_rdx] || null;

			if (currentQuestionData_ifSubmitted) {
				setPreviouslyCheckedID(currentQuestionData_ifSubmitted[1]);
				setStartGradingTest(false);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={currentQuestionData_ifSubmitted[1]}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={true}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else if (!currentQuestionData_ifSubmitted && !chosenAnswerID) {
				setPreviouslyCheckedID(null);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={false}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			} else {
				setPreviouslyCheckedID(null);
				setQuestionComponent(
					<SideBar_R_QuestionsParent
						testNumber={sideBar_R_Questions_CurrentTestNumber_rdx}
						questionNumber={sideBar_R_Questions_CurrentQuestionNumber_rdx}
						questionData={questionData}
						previouslyCheckedID={null}
						get_ChosenAnswerID={get_ChosenAnswerID}
						startGradingTest={startGradingTest}
						gotoQuestion={gotoQuestion}
						showHint={showHint}
					/>
				);
			}
		}
	}, [sideBar_R_Questions_CurrentTestNumber_rdx, sideBar_R_Questions_CurrentQuestionNumber_rdx, startGradingTest, showHint]);
	const handleQuestionSideBarClick = () => {
		dispatch(userReducerActions.setActivePanel("questions"));
	};
	useEffect(() => {
		setShowHint(false);
		setThumbsUp(false);
		setBookMark(false);
		setCommentBubble(false);
	}, [sideBar_R_Questions_CurrentQuestionNumber_rdx]);
	// Footer Actions
	useEffect(() => {
		if (sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx) {
			setFooterTaskBarTippyText("TaskBar - Click to unpin");
		} else {
			setFooterTaskBarTippyText("TaskBar - Click to pin");
		}
	}, [sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx]);
	const taskBarButtonAction = () => {
		if (sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx) {
			setAllowFooterOnHover(!allowFooterOnHover);
		}
		dispatch(userReducerActions.sideBar_R_Questions_FooterTaskBar_Toggle_OpenClose());
	};
	const lightBulbButtonAction = () => {
		setShowHint(!showHint);
	};
	const testResultsButtonAction = () => {
		dispatch(userReducerActions.sideBar_R_Questions_GoTo_TestResults());
	};
	const bookMarkButtonAction = () => {
		setBookMark(!bookMark);
	};
	const commentBubbleButtonAction = () => {
		setCommentBubble(!commentBubble);
	};
	const thumbsUpButtonAction = () => {
		setThumbsUp(!thumbsUp);
	};
	// Footer Buttons
	const [allowFooterOnHover, setAllowFooterOnHover] = useState(true);
	let taskBarButton = (
		<li>
			<Tippy content={footerTaskBarTippyText} placement="top" theme="custom" appendTo="parent">
				<button onClick={taskBarButtonAction} className={classes.footerButton}>
					<div className={`${classes["pinContainer"]} ${sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx && classes.pinned}`}>
						<svg className={classes.pinIconSvg} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
							<polygon points="13.4,20 12,18.6 3,27.6 3,29 4.4,29 " />
							<path d="M28,11.5L20.5,4C19.5,5.1,19,6.5,19,7.9l-4.6,4.6  c-2.3-0.6-4.9,0-6.7,1.8l9.9,9.9c2-2,2.5-4.8,1.7-7.2l4.2-4.2C25.1,13.2,26.8,12.7,28,11.5z" />
						</svg>
					</div>
					<svg className={classes.taskBarIconSvg} viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
						<circle cx="10" cy="20" r="5" />
						<rect x="24" y="16" width="70" height="8" />

						<circle cx="10" cy="45" r="5" />
						<rect x="24" y="41" width="60" height="8" />

						<circle cx="10" cy="70" r="5" />
						<rect x="24" y="66" width="70" height="8" />
					</svg>
				</button>
			</Tippy>
		</li>
	);
	const lightBulbButton = (
		<li>
			<Tippy content="Hint" placement="top" theme="custom" appendTo="parent">
				<button onClick={lightBulbButtonAction} className={classes.footerButton}>
					<svg
						className={`${classes["lightBulbSVG"]} ${showHint ? classes.active : ""}`}
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						id="Capa_1"
						viewBox="0 0 279.682 279.682"
					>
						<g>
							<path d="M143.25,55.486c-41.06,0-74.465,33.405-74.465,74.465c0,16.824,5.511,32.711,15.938,45.939   c1.998,2.536,4.15,5.033,6.23,7.448c6.212,7.208,12.078,14.017,14.166,21.675c0.045,0.165,0.438,1.773,0.38,7.247l-0.01,0.791   c-0.063,4.444-0.147,10.528,4.352,15.091c3.081,3.125,7.399,4.645,13.204,4.645h40.272c6.268,0,10.774-1.534,13.776-4.689   c4.061-4.267,3.789-9.779,3.608-13.427c-0.032-0.645-0.066-1.296-0.074-1.944c-0.065-5.48,0.345-7.025,0.362-7.09   c2.121-7.657,8.993-15.732,15.057-22.855c2.023-2.377,3.934-4.622,5.714-6.879c10.431-13.23,15.944-29.12,15.944-45.951   C217.705,88.892,184.305,55.486,143.25,55.486z M189.982,166.614c-1.607,2.036-3.429,4.178-5.358,6.445   c-7.07,8.307-15.084,17.722-18.089,28.572c-0.429,1.546-0.988,4.395-0.905,11.273c0.01,0.835,0.049,1.675,0.091,2.507   c0.032,0.657,0.075,1.523,0.071,2.209c-0.528,0.086-1.325,0.166-2.475,0.166h-40.272c-1.276,0-2.022-0.135-2.405-0.237   c-0.198-0.977-0.17-3.007-0.152-4.287l0.012-0.844c0.072-6.919-0.483-9.789-0.907-11.348c-2.98-10.936-10.575-19.749-17.275-27.524   c-2.066-2.398-4.019-4.664-5.813-6.942c-8.32-10.557-12.718-23.232-12.718-36.654c0-32.789,26.676-59.465,59.465-59.465   c32.783,0,59.455,26.676,59.455,59.465C202.705,143.379,198.306,156.058,189.982,166.614z" />
							<path d="M161.766,239.564h-37.041c-7.995,0-14.5,6.505-14.5,14.5v11.117c0,7.995,6.505,14.5,14.5,14.5   h37.041c7.995,0,14.5-6.505,14.5-14.5v-11.117C176.266,246.069,169.761,239.564,161.766,239.564z M161.266,264.682h-36.041v-10.117   h36.041V264.682z" />
							<path d="M143.245,45.779c4.143,0,7.5-3.357,7.5-7.5V7.5c0-4.143-3.357-7.5-7.5-7.5   c-4.143,0-7.5,3.357-7.5,7.5v30.779C135.745,42.422,139.103,45.779,143.245,45.779z" />
							<path d="M241.917,34.598c-2.858-2.995-7.606-3.106-10.604-0.248l-22.77,21.73   c-2.997,2.859-3.107,7.607-0.248,10.604c1.474,1.544,3.448,2.322,5.427,2.322c1.86,0,3.725-0.688,5.177-2.074l22.77-21.731   C244.666,42.342,244.776,37.594,241.917,34.598z" />
							<path d="M264.273,109.599c-0.004,0-0.008,0-0.012,0l-29.311,0.047c-4.143,0.007-7.495,3.37-7.488,7.512   c0.007,4.139,3.363,7.488,7.5,7.488c0.004,0,0.008,0,0.012,0l29.311-0.047c4.143-0.007,7.495-3.37,7.488-7.512   C271.767,112.948,268.41,109.599,264.273,109.599z" />
							<path d="M74.386,64.684c2.859-2.996,2.749-7.743-0.248-10.604l-22.77-21.73   c-2.994-2.858-7.742-2.749-10.604,0.248c-2.859,2.996-2.749,7.743,0.248,10.604l22.77,21.731c1.452,1.386,3.315,2.074,5.177,2.074   C70.937,67.006,72.912,66.228,74.386,64.684z" />
							<path d="M44.729,109.646l-29.31-0.047c-0.004,0-0.008,0-0.012,0c-4.137,0-7.493,3.351-7.5,7.488   c-0.007,4.142,3.346,7.505,7.488,7.512l29.31,0.047c0.004,0,0.008,0,0.012,0c4.137,0,7.493-3.351,7.5-7.488   C52.225,113.016,48.872,109.652,44.729,109.646z" />
						</g>
					</svg>
				</button>
			</Tippy>
		</li>
	);
	const testResultsButton = (
		<li>
			<Tippy content="Test Results" placement="top" theme="custom" appendTo="parent">
				<button onClick={testResultsButtonAction} className={classes.footerButton}>
					<svg
						className={`${classes["testResultsIconSvg"]} ${sideBar_R_QuestionsStatus_rdx === "TestResults" ? classes.active : ""}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<mask id="CopyIconMask">
							<path
								d="M20.25 8.249v-3a1.5 1.5 0 00-1.5-1.5h-4m-8.5 0h-4a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							></path>
							<path
								d="M14.421 4.736a.751.751 0 01-.712.513H7.291a.751.751 0 01-.712-.513l-1-3a.749.749 0 01.712-.987h8.418a.749.749 0 01.712.987z"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							></path>
							<rect
								x="11.25"
								y="11.249"
								width="12"
								height="12"
								rx="1.5"
								ry="1.5"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							></rect>
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 14.249h6m-6 3h6m-6 3h2.25"></path>
						</mask>
						<g mask="url(#CopyIconMask)">
							<rect width="100%" height="100%" fill="currentColor"></rect>
						</g>
					</svg>
				</button>
			</Tippy>
		</li>
	);
	const bookMarkButton = (
		<li>
			<Tippy content="Bookmark" placement="top" theme="custom" appendTo="parent">
				<button onClick={bookMarkButtonAction} className={classes.footerButton}>
					<svg className={`${classes["bookMarkIconSvg"]} ${bookMark ? classes.active : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" />
					</svg>
				</button>
			</Tippy>
		</li>
	);
	const commentBubbleButton = (
		<li>
			<Tippy content="Comments" placement="top" theme="custom" appendTo="parent">
				<button onClick={commentBubbleButtonAction} className={classes.footerButton}>
					<svg
						className={`${classes["commentBubbleIconSvg"]} ${commentBubble ? classes.active : ""}`}
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						id="Capa_1"
						viewBox="0 0 78.667 78.667"
					>
						<g>
							<path d="M9.49,73.833c-1.493,0-2.943-0.24-4.309-0.713l-3.113-1.077l2.392-2.265c3.165-2.997,3.964-6.455,4.016-9.046   C3.004,54.666,0,47.097,0,39.334c0-19.023,17.645-34.5,39.333-34.5s39.334,15.477,39.334,34.5   c0,19.022-17.646,34.498-39.334,34.498c-6.458,0-12.827-1.399-18.505-4.057C18.689,71.289,14.366,73.833,9.49,73.833z    M20.361,65.078l1.148,0.581c5.397,2.729,11.561,4.173,17.824,4.173c19.483,0,35.334-13.682,35.334-30.498   c0-16.818-15.851-30.5-35.334-30.5S4,22.516,4,39.334c0,6.99,2.814,13.823,7.925,19.238l0.52,0.552l0.024,0.757   c0.087,2.72-0.401,6.407-2.818,9.951c4.63-0.074,8.89-3.298,9.705-3.95L20.361,65.078z" />
						</g>
					</svg>
				</button>
			</Tippy>
		</li>
	);
	const thumbsUpButton = (
		<li>
			<Tippy content="Like" placement="top" theme="custom" appendTo="parent">
				<button onClick={thumbsUpButtonAction} className={classes.footerButton}>
					<svg className={`${classes["thumbsUpIconSvg"]} ${thumbsUp ? classes.active : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M5,11.5 L5,18.5 C5,18.7761424 5.22385763,19 5.5,19 L7.5,19 C7.77614237,19 8,18.7761424 8,18.5 L8,11.5 C8,11.2238576 7.77614237,11 7.5,11 L5.5,11 C5.22385763,11 5,11.2238576 5,11.5 Z M8.50000665,10.3819527 L9.38196601,8.61803399 C9.78840295,7.80516012 10,6.90882062 10,6 L10,5.75 C10,4.78350169 10.7835017,4 11.75,4 C12.7164869,4 13.5257292,4.73235419 13.6218982,5.69404463 L13.9524938,9 L17.2900249,9 C18.6707368,9 19.7900249,10.1192881 19.7900249,11.5 C19.7900249,11.5830744 19.7858841,11.6660972 19.7776179,11.7487593 L19.1776179,17.7487593 C19.0498174,19.0267638 17.9744035,20 16.6900249,20 L10.5,20 C9.82744055,20 9.21691089,19.7344189 8.76756301,19.3024088 C8.50158217,19.7216998 8.03329134,20 7.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 L7.5,10 C7.88418043,10 8.23462761,10.1444292 8.50000665,10.3819527 Z M9,11.618034 L9,17.5 C9,18.3284271 9.67157288,19 10.5,19 L16.6900249,19 C17.460652,19 18.1059004,18.4160583 18.1825807,17.6492556 L18.7825807,11.6492556 C18.7875404,11.5996583 18.7900249,11.5498446 18.7900249,11.5 C18.7900249,10.6715729 18.118452,10 17.2900249,10 L13.5,10 C13.2431243,10 13.0280415,9.80535276 13.0024814,9.54975186 L12.6268611,5.79354835 C12.5818122,5.34305971 12.2027355,5 11.75,5 C11.3357864,5 11,5.33578644 11,5.75 L11,6 C11,7.06406571 10.7522579,8.11351828 10.2763932,9.06524758 L9,11.618034 Z" />
					</svg>
				</button>
			</Tippy>
		</li>
	);
	return (
		<Fragment>
			<div className={classes.handbook_outerContainer2} ref={questionContentRef} onClick={handleQuestionSideBarClick}>
				<div className={classes.page_contentContainer}>
					{questionComponent}
					<PaginationQuestionsGUI />
				</div>
			</div>
			<div
				className={clsx(classes.handbook_footer_section_Outer, {
					[classes.allowHover]: allowFooterOnHover,
				})}
			>
				<div
					className={clsx(classes.handbook_footer_section_Inner, {
						[classes.open]: sideBar_R_Questions_FooterTaskBarIsPinnedOpen_rdx,
					})}
				>
					{taskBarButton}
					{lightBulbButton}
					{testResultsButton}
					{bookMarkButton}
					{commentBubbleButton}
					{thumbsUpButton}
				</div>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionNumber;
