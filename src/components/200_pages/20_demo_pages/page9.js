import React, { Fragment } from "react";
import classes from "../../500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page7 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 9 of 24 </p>
				<h1>Section 4: Changing, Replacing, and Renewing Your Driver’s License</h1>
			</div>
			<div className={classes.page_content}>
				<h2>Changes to Your License</h2>

				<p>
					If you legally change your name or need an update to your driver’s license, such as your physical description or gender identity, visit{" "}
					<a href="http://dmv.ca.gov/dlservices">dmv.ca.gov/dlservices</a>.
				</p>

				<h2>Change Your Address</h2>

				<p>
					If you move, you must notify DMV of your new address within ten days. Submit a change of address online at{" "}
					<a href="http://dmv.ca.gov/addresschange">dmv.ca.gov/addresschange</a> or by mail. It is your responsibility to ensure DMV has your correct mailing address on
					record.
				</p>

				<p>You do not automatically get a new driver’s license when you change your address. You may request a replacement for a fee.</p>

				<h2>Replace or Renew Your Driver’s License</h2>

				<p>
					It is against the law to drive with an expired driver’s license. To renew or replace a lost, stolen, or damaged driver’s license, visit{" "}
					<a href="http://dmv.ca.gov/dlservices">dmv.ca.gov/dlservices</a>, or DMV office.
				</p>

				<p>
					Before DMV can issue you a driver’s license, you may need to provide additional proof of your identity. Your driver’s license and identity document may expire
					on the same date. If so, you will be required to provide a valid identity document. If you are a minor, your parent or guardian must sign the application. Once
					you receive your replacement card, your old card is no longer valid. If you find the old card, destroy it.
				</p>

				<h2>Extend Your Driver’s License</h2>

				<p>
					If you are out-of-state and cannot renew, you may request a one year extension of your driver’s license. Before your driver’s license expires, submit a request
					with your name, driver’s license number, birth date, California residence address, and out-of-state address to{" "}
					<a href="mailto:dl-extensions@dmv.ca.gov">dl-extensions@dmv.ca.gov</a>.
				</p>

				<p>
					<span role="region" aria-label="note" className={classes.formatLabelNote}>
						Limited-term driver’s licenses are not eligible for this extension.
					</span>
				</p>
			</div>
		</Fragment>
	);
};

export default Page7;
