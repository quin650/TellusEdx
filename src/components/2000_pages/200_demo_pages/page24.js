import React, { Fragment } from "react";
import classes from "../../5000_demos/100_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page22 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p> Page 24 of 24 </p> <h1>Section 14: Glossary</h1>
			</div>
			<div className={classes.page_content}>
				<figure className="wp-block-table is-style-stripes">
					<table className="has-black-color has-white-background-color has-text-color has-background">
						<thead>
							<tr>
								<th>Term</th>
								<th>Definition</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-title="Term">Behind-the-wheel drive test</td>
								<td data-title="Definition">
									A drive test where you have control of the vehicle and are accompanied by a DMV examiner who is evaluating your driving skills.
								</td>
							</tr>
							<tr>
								<td data-title="Term">Blood alcohol concentration (BAC)</td>
								<td data-title="Definition">
									Your BAC is the amount of alcohol in your blood. For example, if your BAC is 0.10%, that means you have 0.10 grams of alcohol in 100 milliliters of
									blood.
								</td>
							</tr>
							<tr>
								<td data-title="Term">Driving performance evaluation (DPE)</td>
								<td data-title="Definition">
									DPE is the portion of the behind-the-wheel drive test when you drive your car with a DMV examiner who evaluates your driving skills.
								</td>
							</tr>
							<tr>
								<td data-title="Term">Pedestrian</td>
								<td data-title="Definition">A pedestrian can also be a person with a disability using a tricycle, quadricycle, or wheelchair for transportation.</td>
							</tr>
							<tr>
								<td data-title="Term">Right-of-way</td>
								<td data-title="Definition">Helps determine who is allowed to go first in situations where vehicles, pedestrians, and cyclists meet on the road.</td>
							</tr>
							<tr>
								<td data-title="Term">Three-second rule</td>
								<td data-title="Definition">
									A driving rule that helps you estimate how closely you should follow other vehicles. When the vehicle in front of you passes a certain point, such as a
									sign, count three seconds. If you pass the same point before you finish counting, you are following too closely.
								</td>
							</tr>
							<tr>
								<td data-title="Term">Traffic citation</td>
								<td data-title="Definition">Also known as a ticket, a traffic citation is an official summons issued by law enforcement for violating a traffic law.</td>
							</tr>
							<tr>
								<td data-title="Term">Vulnerable road users (VRU)</td>
								<td data-title="Definition">
									VRUs are non-motorized road users, such as cyclists, pedestrians, and persons with disabilities or reduced mobility and orientation using a wheelchair,
									tricycle, or quadricycle.
								</td>
							</tr>
							<tr>
								<td data-title="Term">Yield</td>
								<td data-title="Definition">
									Yield means to wait for, slow down, and be ready to stop (if necessary) to allow other vehicles or pedestrians who have right-of-way to proceed.
								</td>
							</tr>
						</tbody>
					</table>
				</figure>
			</div>
		</Fragment>
	);
};

export default Page22;
