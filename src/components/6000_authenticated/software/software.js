import React from "react";
import Tasks from "../../3000_modals/40_modal_tasks/tasks";
import classes from "./Software.module.css";

const Software = () => {
	console.log("Software");
	return (
		<div className={classes.software_container}>
			<div className={classes.tasks_container}>
				<Tasks />
			</div>
		</div>
	);
};

export default Software;
