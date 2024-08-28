import React, { Fragment } from "react";
import classes from "../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page3 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 3 of 22 </p>
				<h1>
					Disclaimer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</h1>
			</div>
			<div className={classes.page_content}>
				<h2>Disclaimer</h2>

				<p>
					This handbook is a summary of the laws and regulations in the <em>Vehicle Code</em> available at{" "}
					<a href="http://leginfo.legislature.ca.gov">leginfo.legislature.ca.gov</a>. DMV, law enforcement, and the courts follow the full, exact language.
				</p>

				<h2>Contact Us</h2>

				<p>
					Send comments or suggestions for this driver’s handbook to <a href="http://dmv.ca.gov/customerservice">dmv.ca.gov/customerservice</a>.
				</p>
			</div>
		</Fragment>
	);
};

export default Page3;
