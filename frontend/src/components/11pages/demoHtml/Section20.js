import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 20 of 22 </p> <h2 className="handbook-section__title">Section 12: Driver Safety</h2>
							</div>
							<div className="handbook-page-content container container--wide mt-60">
								<p>
									Eventually, every driver will need to evaluate and assess their driving skills and abilities. If you are concerned about your driving, ask a trusted driver with a valid driver’s license to sit in the passenger seat and observe your driving. Your observer should note any dangerous
									driving behaviors and give suggestions for improvement. Listen carefully and apply what you have learned. Consider professional driving lessons or driving classes as an alternative.
								</p>
								<h2 className="wp-block-heading">Reexamination</h2>
								<p>
									The <em>Vehicle Code</em> allows DMV to investigate and reexamine every driver’s ability to operate a motor vehicle safely. A physical or mental condition or poor driver’s record can be the basis for a reexamination, not a driver’s age. Drivers with a physical or mental condition
									can be referred to DMV by a physician, law enforcement, or family member by submitting a completed Request for Driver Reexamination form.
								</p>
								<p>Cognitive disorders, such as dementia, seizure disorder, brain tumor, Parkinson’s disease, stroke, or vertigo, present a significant challenge to safe driving. Individuals suffering from these conditions may lose their ability to drive safely.</p>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										When a referral or diagnosis for someone with a mild cognitive impairment is received by DMV, the Driver Safety team will schedule a reexamination. For more information regarding the reexamination process, visit
										<a href="http://dmv.ca.gov/reexamination">dmv.ca.gov/reexamination</a>.
									</span>
								</p>
								<p>DMV may do the following:</p>
								<ul>
									<li>Request medical information from you or your physician.</li> <li>Conduct an in-person or over the telephone reexamination.</li> <li>Require you to take a knowledge, vision, or driving test(s).</li> <li>Issue you a limited term driver’s license.</li>
									<li>Immediately suspend or revoke your driving privilege if your physical or mental condition presents an immediate threat to public safety.</li> <li>Take no action against your driving privilege.</li>
								</ul>
								<h2 className="wp-block-heading">Priority Reexamination</h2>
								<p>
									If you come in contact with law enforcement and receive a Notice of Priority Reexamination of Driver with a check mark in the top box, carefully read the form. You have five working days to contact DMV to initiate the process or your driving privilege will be automatically
									suspended.
								</p>
								<div className="wp-block-image">
									<figure className="aligncenter size-full is-resized">
										<img
											fetchpriority="high"
											decoding="async"
											src="https://www.dmv.ca.gov/portal/uploads/2023/02/example-notice-of-priority-reexamination.png"
											alt="example of a Notice of Priority Reexamination of Driver"
											className="wp-image-179316"
											width="553"
											height="302"
											srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/example-notice-of-priority-reexamination.png 737w, https://www.dmv.ca.gov/portal/uploads/2023/02/example-notice-of-priority-reexamination-300x164.png 300w, https://www.dmv.ca.gov/portal/uploads/2023/02/example-notice-of-priority-reexamination-18x10.png 18w, https://www.dmv.ca.gov/portal/uploads/2023/02/example-notice-of-priority-reexamination-450x246.png 450w"
											sizes="(max-width: 553px) 100vw, 553px"
										/>
									</figure>
								</div>
								<h2 className="wp-block-heading">Driver’s License Restrictions</h2>
								<p>
									DMV places restrictions on a driver’s license to ensure a driver is operating a vehicle within their ability. Restrictions may be imposed by DMV or required by law. Restrictions placed on your driving privilege will be reasonable and necessary for your safety and the safety of
									others. Restrictions and conditions may include:
								</p>
								<ul>
									<li>Requiring a driver to place special mechanical devices on their vehicle, such as hand controls.</li> <li>Limiting when and where a person may drive, such as no night or freeway driving.</li> <li>Requiring eyeglasses or corrective contact lenses.</li>
									<li>Requiring additional devices, such as outside mirrors.</li>
								</ul>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										There are no specific restrictions for seniors. All restrictions are based on conditions, not age.
									</span>
								</p>
								<p>Any restriction placed on your driver’s license is based on the examiner’s findings and recommendations.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
