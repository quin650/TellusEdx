import React, { Fragment } from "react";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page4 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 6 of 24 </p>
				<h1>Section 1: The California Driver’s License</h1>
			</div>
			<div className={classes.page_content}>
				<p>A California driver’s license allows you to drive on public roads.</p>

				<p>
					Before you can get a driver’s license in California, you are required to pass the knowledge and behind-the-wheel drive tests based on information in this
					handbook.
				</p>

				<p>
					You must have the correct license to drive your vehicle type. Most people need a noncommercial Class C driver’s license. To operate commercial vehicles,
					motorcycles, and other types of vehicles, you must have a different class of license.
				</p>

				<p>
					For information on vehicles covered by a Class C, visit <a href="http://dmv.ca.gov/dl">dmv.ca.gov/dl</a>.
				</p>

				<h2>Card Designations</h2>

				<h3>REAL ID Driver’s License</h3>

				<p>Beginning May 2025, your driver’s license or identification (ID) card must be REAL ID compliant if you use it to:</p>

				<ul>
					<li>Board an airplane for domestic flights.</li>

					<li>Enter military bases.</li>

					<li>Enter most federal facilities.</li>
				</ul>

				<p>
					Visit <a href="http://dmv.ca.gov/realid">dmv.ca.gov/realid</a> to learn more about applying for a REAL ID.
				</p>

				<h3>Driver’s Licenses for Undocumented Residents</h3>

				<p>
					California offers driver’s licenses for all residents regardless of immigration status. For more information, visit{" "}
					<a href="http://dmv.ca.gov/dl">dmv.ca.gov/dl</a>.
				</p>

				<h3>Organ and Tissue Donor</h3>

				<p>
					For information, visit <a href="http://donateLIFEcalifornia.org">donateLIFEcalifornia.org</a>.
				</p>

				<h3>Veterans</h3>

				<p>
					Visit <a href="http://dmv.ca.gov/veterans">dmv.ca.gov/veterans</a> to learn more about the requirements and benefits of a Veteran designation.
				</p>

				<h3>ID Cards</h3>

				<p>
					ID cards are issued for identification purposes to eligible persons of any age. They do not permit you to drive. To get an ID, you must provide your identity
					document, residency documents, and social security number.
				</p>

				<p>
					Visit <a href="http://dmv.ca.gov/id-cards">dmv.ca.gov/id-cards</a> to complete an ID card application and get information on current acceptable documents and
					reduced-fee, no-fee, or senior ID cards.
				</p>
			</div>
		</Fragment>
	);
};

export default Page4;
