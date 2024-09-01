import React, { Fragment } from "react";
import classes from "../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page1B = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 1 of 22 </p>
				<h1>
					DMV Services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</h1>
			</div>
			<div className={classes.page_content}>
				<p>Have your driver’s license or identification (ID) card number, vehicle license plate number, or vehicle identification number (VIN) available.</p>

				<h2>Online Services</h2>

				<p>
					Vehicle Registration Renewal at <a href="http://dmv.ca.gov/vrservices">dmv.ca.gov/vrservices</a>.
				</p>

				<p>
					Driver’s License Renewal at <a href="http://dmv.ca.gov/dlservices">dmv.ca.gov/dlservices</a>.
				</p>

				<p>
					Office Appointments at <a href="http://dmv.ca.gov/make-an-appointment">dmv.ca.gov/make-an-appointment</a>.
				</p>

				<p>
					Visit <a href="http://dmv.ca.gov/online">dmv.ca.gov/online</a> to find many other online services.
				</p>

				<h2>Kiosk Services</h2>

				<p>
					Visit <a href="http://dmv.ca.gov/kiosks">dmv.ca.gov/kiosks</a> to find kiosk services and locations.
				</p>

				<h2>Phone Services</h2>

				<p>Call 1-800-777-0133:</p>

				<h3>During normal business hours:</h3>

				<ul>
					<li>Talk to a DMV representative.</li>
				</ul>

				<h3>Automated 24/7 Phone Services:</h3>

				<ul>
					<li>Renew your vehicle registration.</li>

					<li>Make a DMV office appointment.</li>
				</ul>

				<p>Individuals who are deaf, hard of hearing, or speech impaired may call 1-800-368-4327 for assistance.</p>
			</div>
		</Fragment>
	);
};

export default Page1B;
