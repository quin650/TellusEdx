import React from "react";

const App = () => {
	return (
		<main id="main" className="main" role="main">
			<nav className="page-breadcrumbs container container--wide" aria-label="breadcrumbs">
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
							<img src="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/assets/images/illustrations/driver_education_1.svg" alt="Driver Education illustration" />
						</figure>
					</div>
				</div>
			</div>
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							<div className="handbook-formats horiz">
								<h2 className="formats-title"> Additional Formats </h2>
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
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/">English</option> <option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-spanish-pdf/">Español (Spanish)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-tagalog-pdf/">Tagalog</option> <option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-vietnamese-pdf/">ngôn ngữ tiếng Việt (Vietnamese)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-russian-pdf/">русский язык (Russian)</option> <option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-armenian-pdf/">հայոց լեզու (Armenian)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-farsi-pdf/">زبان فارسی (Farsi)</option> <option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-punjabi-pdf/">ਪੰਜਾਬੀ ਭਾਸ਼ਾ (Punjabi)</option>
												<option value="https://www.dmv.ca.gov/portal/file/california-driver-handbook-chinese-pdf/">中文 (Chinese)</option>
											</select>
											<div className="custom-select__icon">
												<span className="screen-reader-text">Open selection options</span>
												<svg className="icon icon-arrow-chevron-down-blue" height="16" width="16" aria-hidden="true" role="presentation">
													<title id="title-arrow-chevron-down-blue-7882">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-47462">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-54164">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 20 of 22 </p> <h2 className="handbook-section__title">Section 12: Driver Safety</h2>
							</div>
							<div className="handbook-toc__wrapper dark">
								<a href="#handbook-toc__container" id="js-handbook-menu-toggle" className="handbook-menu-toggle" aria-expanded="false" aria-controls="handbook-toc__container">
									<div className="burger-menu" id="js-handbook-burger-menu">
										<div className="burger"></div>
									</div>
									<div className="toggle-title">
										<span className="close">Close </span> Handbook Table of Contents
									</div>
								</a>
								<nav className="handbook-pagination container container--wide" aria-label="Pagination">
									<ul className="horiz handbook-pagination__list">
										<li>
											<a href="/portal/handbook/california-driver-handbook/vehicle-registration-requirements/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-8385">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/seniors-and-driving/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-80555">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item">
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
											<li className="menu-item active current">
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
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/vehicle-registration-requirements/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-17816">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/seniors-and-driving/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-91011">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
											</svg>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
