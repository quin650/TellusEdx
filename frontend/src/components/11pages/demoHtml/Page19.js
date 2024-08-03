import React, { Fragment } from "react";
import classes from "./../../../App.module.css";

const Page19 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p> Page 19 of 22 </p> <h1>Section 11: Vehicle Registration Requirements</h1>
			</div>
			<div className={classes.page_content}>
				<p>
					You need to register your vehicle in California to use it in the state. For more information, visit <a href="http://dmv.ca.gov/vrservices">dmv.ca.gov/vrservices</a>.
				</p>
				<h2>Buying or Selling a Vehicle</h2> <p>When you buy a vehicle, you have 10 days to transfer ownership to your name.</p>
				<p>
					When you sell a vehicle, you must notify DMV within five days by completing a Notice of Transfer and Release of Liability at <a href="http://dmv.ca.gov/nrl">dmv.ca.gov/nrl</a>.
				</p>
				<h2>Out-of-State Vehicles</h2>
				<p>
					You have 20 days to register your vehicle after you become a resident or get a job in California. For more information, visit <a href="http://dmv.ca.gov/outofstatevr">dmv.ca.gov/outofstatevr</a>.
				</p>
				<p>All vehicles registered in California are required to meet California requirements including vehicle emission controls in support of California’s clean air standards. DMV cannot register a vehicle if it does not qualify.</p>
			</div>
		</Fragment>
	);
};

export default Page19;
