import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 2 of 22 </p>
								<h2 className="handbook-section__title">Copyright</h2>
							</div>
							<div className="handbook-page-content container container--wide mt-60">
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
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
