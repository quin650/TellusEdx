import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReducerActions } from "../../../../a.reducers/auth_Reducers";
import SideBar_R_QuestionsChild from "./3_sideBar_R_QuestionsChild";
import classes from "./sideBar_R_QuestionsModal.module.css";

const SideBar_R_QuestionsParent = ({ questionData }) => {
	const question = questionData.question;
	const answersData = questionData.answers;

	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p></p>
				<h2>{question}</h2>
			</div>
			<div className={classes.page_content}>
				<ul>
					{answersData.map((answer) => (
						<SideBar_R_QuestionsChild key={answer.id} id={answer.id} text={answer.text} isCorrect={answer.isCorrect} />
					))}
				</ul>
			</div>
		</Fragment>
	);
};

export default SideBar_R_QuestionsParent;
