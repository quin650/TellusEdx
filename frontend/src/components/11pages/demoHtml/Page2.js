import React, { Fragment } from "react";
import classes from "./../../../App.module.css";

const Page2 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 2 of 22 </p>
				<h2>Copyright</h2>
			</div>
			<div className={classes.page_content}>
				<p>© Copyright, Department of Motor Vehicles 2024</p>
				<p>All rights reserved.</p>
				<p>This work is protected by U.S. Copyright Law. The Department of Motor Vehicles (DMV) owns the copyright to this work. Copyright Law makes it illegal to:</p>
				<ol>
					<li>Make a copy of any part of this handbook.</li>
					<li>Print copies of this handbook and give them to other people.</li>
					<li>Write your own version of this handbook.</li>
					<li>Put this handbook on public display.</li>
					<li>Perform (read aloud) the handbook in public.</li>
				</ol>
				<p>If you have questions about whether you can make copies of any part of this handbook, address them to:</p>
				<p>
					Department of Motor Vehicles
					<br />
					Legal Office, MS C128
					<br />
					PO Box 932382
					<br />
					Sacramento, CA 94232-3820
				</p>
			</div>
		</Fragment>
	);
};

export default Page2;
