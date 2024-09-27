import React, { Fragment } from "react";
import classes from "../../400_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page5 = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 7 of 25 </p>
				<h1>Section 2: Getting an Instruction Permit and Driver’s License</h1>
			</div>
			<div className={classes.page_content}>
				<p>
					If you do not have a driver’s license from California or another state, you must apply for an instruction permit before taking the behind-the-wheel drive test
					to get your driver’s license.
				</p>

				<h2>What You Need</h2>

				<p>To apply for an instruction permit or driver’s license, you must provide:</p>

				<ul>
					<li>
						<strong>Proof of identity: </strong>Proving who you are.
					</li>

					<li>
						<strong>Two proofs of residency: </strong>Proving you live in California. Exceptions may apply.
					</li>

					<li>
						<strong>Legal full name document:</strong> Proving your current name if the name on your identity document and application do not match.
					</li>

					<li>
						<strong>Social security number:</strong> Exceptions may apply.
					</li>
				</ul>

				<p>
					For REAL ID requirements, current acceptable documents, and eligibility, visit <a href="http://dmv.ca.gov/realid">dmv.ca.gov/realid</a>.
				</p>

				<h2>Register To Vote</h2>

				<p>
					For information on registering to vote, visit California Secretary of State at <a href="http://sos.ca.gov">sos.ca.gov</a>.
				</p>

				<h2>Applying For An Instruction Permit</h2>

				<p>To apply for a Class C instruction permit:</p>

				<ol>
					<li>Complete a Driver’s License &amp; ID Card Application.</li>

					<li>Provide your documents.</li>

					<li>Pay a non-refundable application fee.</li>

					<li>Pass your knowledge test(s).</li>

					<li>Pass a vision test.</li>
				</ol>

				<p>
					For more information, visit <a href="http://dmv.ca.gov/instructionpermit">dmv.ca.gov/instructionpermit</a> for a complete list of application steps and
					requirements.
				</p>

				<h3>If you are under 18 years old, you will also need to:</h3>

				<ul>
					<li>Be at least 15½ years old.</li>

					<li>Complete a driver education program.</li>

					<li>
						Have a parent or guardian sign to approve the application and accept financial responsibility (see Section 10). If your parents or guardians share joint
						custody of you, both must sign.
					</li>

					<li>Wait to use your instruction permit until you start behind-the-wheel driver training with an instructor who will validate the permit.</li>
				</ul>

				<h2>Driving Schools</h2>

				<p>
					Driver education and driver training are offered at DMV-licensed driving schools and some high schools. Instructors must carry an instructor’s ID card. Ask to
					see it.
				</p>

				<p>
					See the Driver Training Schools page at <a href="http://dmv.ca.gov/driver-ed">dmv.ca.gov/driver-ed</a> for more information about selecting a driving school.
				</p>

				<h2>Applying For A Driver’s License</h2>

				<h3>To get your driver’s license after you have your instruction permit, you need to:</h3>

				<ul>
					<li>
						Practice driving with a California-licensed driver who is at least 18 years old (25 for minors). This person must sit close enough to take control of the
						vehicle if needed.
					</li>

					<li>Pass a behind-the-wheel drive test.</li>
				</ul>

				<h3>If you are under 18 yrs. old, you will also need to: </h3>

				<ul>
					<li>Be at least 16 years old.</li>

					<li>
						Have an instruction permit from California or another state for at least 6 months (or turn 18 years old) before scheduling your behind-the-wheel drive test.
					</li>

					<li>
						Prove that you completed <strong>both </strong>driver education and driver training.
					</li>

					<li>Practice driving for at least 50 hours with a California-licensed driver who is at least 25 years old. Ten hours must be at night.</li>
				</ul>

				<p>
					See the Driver’s Licenses page at <a href="http://dmv.ca.gov/dlservices">dmv.ca.gov/dlservices</a> for the complete list of application steps, requirements, the
					Parent Teen Driving Contract, and Driving Performance Evaluation (DPE) Score Sheet.
				</p>

				<h2>Minor’s Restrictions and Exceptions</h2>

				<p>
					When you are under 18 years old, your driver’s license will have the word provisional. As a provisional driver, you <strong>cannot</strong> drive:
				</p>

				<ul>
					<li>Between 11 p.m. and 5 a.m. during the first 12 months you have your license.</li>

					<li>With passengers under 20 years old, unless your parent or guardian or other California-licensed driver (at least 25 years old) rides with you.</li>

					<li>For pay or operate vehicles that require a commercial Class A, B, or C license.</li>
				</ul>

				<p>There are exceptions to these restrictions if you:</p>

				<ul>
					<li>
						Have a medical need and cannot reasonably find another way to travel. You must carry a note signed by your physician. The note must have your medical
						condition and date you are expected to recover.
					</li>

					<li>Drive for schooling or a school activity. You must carry a note signed by your school principal, dean, or designee.</li>

					<li>Must drive for work reasons. You must carry a note signed by your employer. The note must confirm your employment.</li>

					<li>
						Must drive an immediate family member. You must carry a note signed by your parent or legal guardian. The note must state the reason you need to drive, the
						family member, and date when the need will end.
					</li>
				</ul>

				<p>
					<span role="region" aria-label="Note" className={classes.formatLabelNote}>
						A parent or guardian may cancel their teen’s license by completing a Request for Cancellation or Surrender of a Driver License or ID Card form.
					</span>
				</p>
			</div>
		</Fragment>
	);
};

export default Page5;
