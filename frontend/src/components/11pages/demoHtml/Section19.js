import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 19 of 22 </p> <h2 className="handbook-section__title">Section 11: Vehicle Registration Requirements</h2>
							</div>
							<div className="handbook-page-content container container--wide mt-60">
								<p>
									You need to register your vehicle in California to use it in the state. For more information, visit <a href="http://dmv.ca.gov/vrservices">dmv.ca.gov/vrservices</a>.
								</p>
								<h2 className="wp-block-heading">Buying or Selling a Vehicle</h2> <p>When you buy a vehicle, you have 10 days to transfer ownership to your name.</p>
								<p>
									When you sell a vehicle, you must notify DMV within five days by completing a Notice of Transfer and Release of Liability at <a href="http://dmv.ca.gov/nrl">dmv.ca.gov/nrl</a>.
								</p>
								<h2 className="wp-block-heading">Out-of-State Vehicles</h2>
								<p>
									You have 20 days to register your vehicle after you become a resident or get a job in California. For more information, visit <a href="http://dmv.ca.gov/outofstatevr">dmv.ca.gov/outofstatevr</a>.
								</p>
								<p>All vehicles registered in California are required to meet California requirements including vehicle emission controls in support of California’s clean air standards. DMV cannot register a vehicle if it does not qualify.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
