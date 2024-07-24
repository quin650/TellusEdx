import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 1 of 22 </p>
								<h2 className="handbook-section__title">DMV Services</h2>
							</div>
							<div className="handbook-page-content container container--wide mt-60">
								<p>Have your driver’s license or identification (ID) card number, vehicle license plate number, or vehicle identification number (VIN) available.</p>

								<h2 className="wp-block-heading">Online Services</h2>

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

								<h2 className="wp-block-heading">Kiosk Services</h2>

								<p>
									Visit <a href="http://dmv.ca.gov/kiosks">dmv.ca.gov/kiosks</a> to find kiosk services and locations.
								</p>

								<h2 className="wp-block-heading">Phone Services</h2>

								<p>Call 1-800-777-0133:</p>

								<h3 className="wp-block-heading">During normal business hours:</h3>

								<ul>
									<li>Talk to a DMV representative.</li>
								</ul>

								<h3 className="wp-block-heading">Automated 24/7 Phone Services:</h3>

								<ul>
									<li>Renew your vehicle registration.</li>

									<li>Make a DMV office appointment.</li>
								</ul>

								<p>Individuals who are deaf, hard of hearing, or speech impaired may call 1-800-368-4327 for assistance.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
