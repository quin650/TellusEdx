import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
			{/* <nav className="page-breadcrumbs container container--wide" aria-label="breadcrumbs">
				<ul className="page-breadcrumbs__list">
					<li className="page-breadcrumbs__list-item">
						<a href="/portal">Home</a>
					</li>
					<li className="page-breadcrumbs__list-item" aria-current="page">
						<a href="/portal/handbook/california-driver-handbook/">California Driver’s Handbook</a>
					</li>
				</ul>
			</nav>
			<div className="hero hero--handbook">
				<div className="container container--full">
					<div className="hero__content hero__content--illustration">
						<h1 className="hero__title">California Driver’s Handbook</h1>
						<figure className="hero__top-illustration">
							<img src="/portal/wp-content/themes/dmv/assets/images/illustrations/driver_education_1.svg" alt="Driver Education illustration" />
						</figure>
					</div>
				</div>
			</div> */}
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							{/* // !delete here 2of4 --------------------------------------------------------------------------- */}
							{/* <div className="handbook-formats horiz">
								<h2 className="formats-title">Additional Formats </h2>
								<ul className="formats-list horiz">
									<li className="format-wrapper">
										<div className="custom-select custom-select--icon">
											<label className="screen-reader-text" htmlFor="handbook-pdf-select">
												PDF Select &amp; Download
											</label>
											<select id="handbook-pdf-select">
												<option selected disabled>
													Select PDF Language
												</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/">English</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-spanish-pdf/">Español (Spanish)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-tagalog-pdf/">Tagalog</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-vietnamese-pdf/">ngôn ngữ tiếng Việt (Vietnamese)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-russian-pdf/">русский язык (Russian)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-armenian-pdf/">հայոց լեզու (Armenian)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-farsi-pdf/">زبان فارسی (Farsi)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-punjabi-pdf/">ਪੰਜਾਬੀ ਭਾਸ਼ਾ (Punjabi)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-chinese-pdf/">中文 (Chinese)</option>
											</select>
											<div className="custom-select__icon">
												<span className="screen-reader-text">Open selection options</span>

												<svg className="icon icon-arrow-chevron-down-blue" height="16" width="16" aria-hidden="true" role="presentation">
													<title id="title-arrow-chevron-down-blue-75499">arrow-chevron-down-blue</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>

											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-86191">download</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video{" "}
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>

											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-310">play-btn</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div> */}
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 6 of 22 </p>
								<h2 className="handbook-section__title">Section 3: The Testing Process</h2>
							</div>
							{/* // !delete here 3of4 --------------------------------------------------------------------------- */}
							{/* <div className="handbook-toc__wrapper dark">
								<a href="#handbook-toc__container" id="js-handbook-menu-toggle" className="handbook-menu-toggle" aria-expanded="false" aria-controls="handbook-toc__container">
									<div className="burger-menu" id="js-handbook-burger-menu">
										<div className="burger"></div>
									</div>
									<div className="toggle-title">
										<span className="close">Close </span>
										Handbook Table of Contents{" "}
									</div>
								</a>
								<nav className="handbook-pagination container container--wide" aria-label="Pagination">
									<ul className="horiz handbook-pagination__list">
										<li>
											<a href="/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-93808">arrow-long-prev</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
												</svg>
												Previous Section{" "}
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/changing-replacing-and-renewing-your-drivers-license/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-46931">arrow-long-next</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-next"></use>
												</svg>
											</a>
										</li>
									</ul>
								</nav>
								<div className="handbook-toc__container" id="handbook-toc__container" aria-hidden="true">
									<nav id="handbook-toc" className="handbook-toc" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" aria-label=" Handbook Table of Contents Navigation">
										<ul className="toc-menu col-1">
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/dmv-services/">DMV Services</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/copyright/">Copyright</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/disclaimer/">Disclaimer</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/the-california-driver-license/">Section 1: The California Driver's License</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/">Section 2: Getting an Instruction Permit and Driver’s License</a>
												</div>
											</li>
											<li className="menu-item active current">
												<div>
													<a href="/portal/handbook/california-driver-handbook/the-testing-process/">Section 3: The Testing Process</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/changing-replacing-and-renewing-your-drivers-license/">Section 4: Changing, Replacing, and Renewing Your Driver’s License</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/introduction-to-driving/">Section 5: An Introduction to Driving</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/navigating-the-roads/">Section 6: Navigating the Roads</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/">Section 6: Navigating the Roads (Continued)</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/">Section 7: Laws and Rules of the Road</a>
												</div>
											</li>
										</ul>
										<ul className="toc-menu col-2">
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/">Section 7: Laws and Rules of the Road (Continued)</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont2/">Section 7: Laws and Rules of the Road (Continued)</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/safe-driving/">Section 8: Safe Driving</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/safe-driving-cont1/">Section 8: Safe Driving (Continued)</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/safe-driving-cont2/">Section 8: Safe Driving (Continued)</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/alcohol-and-drugs/">Section 9: Alcohol and Drugs</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/">Section 10: Financial Responsibility, Insurance Requirements, and Collisions</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/vehicle-registration-requirements/">Section 11: Vehicle Registration Requirements</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/driver-safety/">Section 12: Driver Safety</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/seniors-and-driving/">Section 13: Seniors and Driving</a>
												</div>
											</li>
											<li className="menu-item">
												<div>
													<a href="/portal/handbook/california-driver-handbook/glossary/">Section 14: Glossary</a>
												</div>
											</li>
										</ul>
									</nav>
								</div>
							</div> */}
							<div className="handbook-page-content container container--wide mt-60">
								<div className="large-list-block">
									<div className="large-list-block__inner">
										<h2 className="large-list-block__title">Driver’s License Tests </h2>
										<ol className="large-list-block__list ">
											<li className="wp-block-dmv-large-list-content large-list-block__list-item">
												<p>
													<strong>Vision Test</strong>
												</p>

												<p>
													DMV tests all applicants to ensure they can see well enough to drive safely. If you take your vision test with corrective or contact lenses, your driver’s license will have a corrective lenses restriction. If you do not pass your vision test, you will be asked to have your
													eye doctor complete a Report of Vision Examination form.
												</p>
											</li>

											<li className="wp-block-dmv-large-list-content large-list-block__list-item">
												<p>
													<strong>Knowledge Test</strong>
												</p>

												<p>
													When you apply for an original driver’s license, you must pass a knowledge test with multiple choice questions. You are allowed three attempts to pass before you must reapply. Minors must wait seven days to retake a failed knowledge test, not including the day of the
													failure.
												</p>

												<p>
													Testing options will be available once you complete your application at <a href="http://dmv.ca.gov/dl">dmv.ca.gov/dl</a>.
												</p>

												<p>
													<span role="region" aria-label="Important" className="format-label--important">
														You are not allowed to use any testing aids during knowledge tests, such as a California Driver’s Handbook or cell phone.
													</span>
												</p>
											</li>

											<li className="wp-block-dmv-large-list-content large-list-block__list-item">
												<p>
													<strong>Behind-the-Wheel Drive Test</strong>
												</p>

												<p>
													When you apply for an original driver’s license, you will be tested on your ability to safely drive a vehicle. Upon renewal, drivers with a vision or medical condition may be required to take a behind-the-wheel test. The examiner may give two or more instructions at one
													time to determine whether you can understand and properly follow both directions. For example, “At the next street, make a left turn, and then at the first intersection make another left turn.”
												</p>

												<p>
													Visit <a href="http://dmv.ca.gov/make-an-appointment">dmv.ca.gov/make-an-appointment</a> to schedule a behind-the-wheel drive test appointment.
												</p>
											</li>
										</ol>
									</div>
								</div>

								<p></p>

								<h3 className="wp-block-heading">On the day of your behind-the-wheel test, you must bring:</h3>

								<ol>
									<li>Your instruction permit or driver’s license (if you have one).</li>

									<li>Another California-licensed driver who is at least 18 years old (25 for minors), unless you are already licensed to drive.</li>

									<li>A vehicle that is safe to drive for your test.</li>

									<li>Valid proof of insurance and vehicle registration.</li>

									<li>If you plan to use a rental vehicle for your drive test, your name must be listed on the rental contract. The contract must not exclude behind-the-wheel drive tests.</li>
								</ol>

								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										Minors must wait 14 days to retake a failed behind-the-wheel drive test, not including the day of the failure.
									</span>
								</p>

								<h3 className="wp-block-heading">Before you begin, the DMV examiner will ask you to locate and demonstrate the following:</h3>

								<ul>
									<li>
										<strong>Driver window</strong> – The window on the driver side must open.
									</li>

									<li>
										<strong>Windshield </strong>– The windshield must allow a full, clear, unblocked view for you and the DMV examiner. Windshield cracks may postpone your test.
									</li>

									<li>
										<strong>Rear-view mirrors</strong> – At least two rearview mirrors. One of them must be on the left side of your vehicle.
									</li>

									<li>
										<strong>Brake lights</strong> – The right and left brake lights must be operational.
									</li>

									<li>
										<strong>Tires </strong>– The tires must have at least 1/32-inch of uniformed tread depth. The use of a donut tire is not allowed during a drive test.
									</li>

									<li>
										<strong>Foot brake</strong> – There must be at least one inch of clearance between the bottom of the brake pedal and the floorboard when depressed.
									</li>

									<li>
										<strong>Horn </strong>– Designed for the vehicle, in proper working condition, and loud enough to be heard from a distance of at least 200 feet.
									</li>

									<li>
										<strong>Emergency (parking brake)</strong> – How to set and release the parking brake.
									</li>

									<li>
										<strong>Turn/Arm signals</strong>
										<ul>
											<li>Left turn.</li>

											<li>Right turn.</li>

											<li>Slowing down or stopping.</li>
										</ul>
									</li>

									<li>
										<strong>Windshield wipers: control arm or switch</strong> – You may be required to show they function.
									</li>

									<li>
										<strong>Seat belts</strong> – All seat belts must work properly and be used by the individual(s) in the vehicle.
									</li>

									<li>
										<strong>Recording Device</strong> – All interior recording devices must be powered off or disabled.
									</li>
								</ul>

								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										If your vehicle does not meet the requirements, your drive test will be rescheduled.<span></span>
									</span>
								</p>

								<p>Interpreters may be used during the pre-drive inspection for the identification and use of certain controls in the vehicle but may not accompany you during the drive test.</p>

								<p>Only the examiner is allowed to accompany you during the drive test. Exceptions are made for training, service animals, and certain law enforcement situations.</p>

								<p>The use of a recording device, including a video/audio recorder, is prohibited during a behind-the-wheel drive test. If the recording device cannot be powered off or disabled, the applicant must block it so there is no visual or audio recording during the drive test.</p>

								<h2 className="wp-block-heading">Other Things to Know for Your Behind-the-Wheel Test</h2>

								<p>
									The drive test is intended to determine your skill in operating a motor vehicle in most road situations and evaluate your abilities, not the vehicle’s technology. Therefore, advanced driver assistance systems technologies, such as automated parallel parking, lane departure, and
									adaptive cruise control, are not permitted during the drive test. Vehicle safety technology, such as backup cameras and blind spot monitors, may be used on the drive test, but are not a replacement for an actual visual check of your mirrors and blind spots.
								</p>

								<p>
									To view a sample of the Driving Performance Evaluation (DPE) Score Sheet, visit <a href="/portal/driver-education-and-safety/special-interest-driver-guides/teen-drivers/">dmv.ca.gov/teendriver</a>. For a sample of the Supplemental/Area DPE Score Sheet, visit{" "}
									<a href="http://dmv.ca.gov/seniors">dmv.ca.gov/seniors</a>.
								</p>
							</div>
							{/* // !delete here 4of4 --------------------------------------------------------------------------- */}
							{/* <nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-47246">arrow-long-prev</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
											</svg>
											Previous Section{" "}
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/changing-replacing-and-renewing-your-drivers-license/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-98970">arrow-long-next</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-next"></use>
											</svg>
										</a>
									</li>
								</ul>
							</nav> */}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
