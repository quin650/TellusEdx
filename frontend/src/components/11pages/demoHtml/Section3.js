import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 3 of 22 </p>
								<h2 className="handbook-section__title">Disclaimer</h2>
							</div>
							<div className="handbook-page-content container container--wide mt-60">
								<h2 className="wp-block-heading">Disclaimer</h2>

								<p>
									This handbook is a summary of the laws and regulations in the <em>Vehicle Code</em> available at <a href="http://leginfo.legislature.ca.gov">leginfo.legislature.ca.gov</a>. DMV, law enforcement, and the courts follow the full, exact language.
								</p>

								<h2 className="wp-block-heading">Contact Us</h2>

								<p>
									Send comments or suggestions for this driver’s handbook to <a href="http://dmv.ca.gov/customerservice">dmv.ca.gov/customerservice</a>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
