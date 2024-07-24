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
													<title id="title-arrow-chevron-down-blue-21823">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-90760">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-80620">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 13 of 22 </p> <h2 className="handbook-section__title">Section 7: Laws and Rules of the Road (Continued)</h2>
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
											<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-75918">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/safe-driving/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-77070">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
							</div>
							<div className="handbook-page-content container container--wide mt-60">
								<h2 className="wp-block-heading">Other Important Roadway Information</h2>
								<p>
									<strong>You must:</strong>
								</p>
								<ul>
									<li>
										<strong>Not</strong> smoke when a minor is in the vehicle. You can be fined.
									</li>
									<li>
										<strong>Not</strong> dump or abandon animals on a highway. This crime is punishable by a fine of up to $1,000, six months in jail, or both.
									</li>
									<li>
										<strong>Not</strong> drive a vehicle so overloaded that you cannot control it, see ahead, or see to the sides of your vehicle.
									</li>
									<li>
										<strong>Not</strong> drive a vehicle with an unsecured load that is a safety hazard.
									</li>
									<li>
										<strong>Not</strong> carry anything in or on a passenger vehicle which extends beyond the fenders on the left side or more than 6-inches beyond the fenders on the right side.
										<ul>
											<li>Cargo that extends more than 4 feet from the back-rear bumper of the vehicle must display a 12-inch red or fluorescent orange square flag.</li> <li>At night, this cargo must be marked with two red lights.</li>
										</ul>
									</li>
									<li>
										<strong>Not</strong> allow a person to ride in the back of a pickup or other truck unless the vehicle has secure seats and seat (safety) belts.
									</li>
									<li>
										<strong>Not</strong> transport animals in the back of a pickup or other truck unless the animal is properly secured. This prevents the animal from falling, jumping, or being thrown from the vehicle.
									</li>
									<li>
										<strong>Not</strong> drive a vehicle equipped with a video monitor visible to the driver, unless it only displays vehicle information, navigation system, media player, or radio.
									</li>
									<li>
										<strong>Not</strong> throw a cigarette, cigar, or other flaming or glowing substance from your vehicle.
									</li>
									<li>
										<strong>Not</strong> put signs or other objects on the front windshield or side rear windows that block your view. Do not hang objects on the mirror. Objects may only be affixed in these locations:
										<ul>
											<li>A 7-inch square on the lower corner of the passenger’s side windshield or the lower corner of the rear window.</li> <li>A 5-inch square on the lower corner of the driver’s side window.</li>
											<li>A 5-inch square located in the center uppermost portion of your windshield for an electronic toll payment device.</li> <li>On the side windows behind the driver.</li>
										</ul>
									</li>
									<li>
										<strong>Not</strong> interfere with a funeral procession. A funeral procession is led by a traffic officer and has the right-of-way. All vehicles taking part in the procession have windshield markers to identify them and have their headlights on. You can be ticketed if you
										interrupt a funeral procession.
									</li>
									<li>
										<strong>Not</strong> operate a vehicle with an illegible license plate.
									</li>
									<li>
										<strong>Not</strong> alter a license plate in any way.
									</li>
								</ul>
								<h3 className="wp-block-heading">Evading Law Enforcement</h3> <p>It is a misdemeanor to use a motor vehicle to flee or attempt to evade law enforcement performing their duties. This is punishable by imprisonment in a county jail for one year or less.</p>
								<p>A person convicted of causing serious bodily injury during a law enforcement pursuit is subject to imprisonment in a state prison for up to seven years, or a county jail for one year or less.</p>
								<p>A person convicted of manslaughter resulting from evading law enforcement during a pursuit is subject to imprisonment in a state prison for a minimum of 4 to 10 years.</p> <p>If an unlicensed person is caught driving your vehicle, it may be impounded for 30 days.</p>
								<h3 className="wp-block-heading">Speed Contests and Reckless Driving</h3> <p>A person convicted of reckless driving or engaging in a speed contest that causes injury to another person is subject to imprisonment, a fine, or both.</p>
								<h3 className="wp-block-heading">Points on Your Driver’s Record</h3>
								<p>
									DMV monitors your driver’s record. If you are stopped by a law enforcement officer and cited (ticketed) for a traffic violation, you sign the ticket as a promise to appear in traffic court. As an adult or minor, if you get a traffic ticket and fail to appear (FTA) in court, DMV may
									suspend your driving privilege until you appear. If you do not keep your promise to appear in court, the FTA goes on your driver record.
								</p>
								<p>
									Each time you are convicted of a moving traffic violation, the court notifies DMV. The conviction is placed on your driver’s record. Convictions reported by other states and juvenile court are also added to your driver’s record. Traffic convictions and collisions stay on your
									record for 36 months or longer, depending on the type of conviction. As an adult, your license may be suspended if your driver’s record shows one of the following point totals:
								</p>
								<ul>
									<li>4 points in 12 months.</li> <li>6 points in 24 months.</li> <li>8 points in 36 months.</li>
								</ul>
								<h3 className="wp-block-heading">Traffic Violator School</h3>
								<p>
									If you are given a one-point traffic violation, the judge may offer you the choice to attend a traffic violator school to have the citation not reported to your insurance company but remain on your driving record. You can do this once in any 18-month period. The school will report
									your course completion to the court. You will also get a completion receipt.
								</p>
								<p>
									If you are a commercial driver cited in a noncommercial vehicle, see the <em>California Commercial Driver Handbook</em>.
								</p>
								<h3 className="wp-block-heading">Suspension or Revocation</h3>
								<p>
									If you have too many points on your driver’s record, you will be considered a negligent driver. DMV will place you on probation, suspend, or revoke your driving privilege. When this happens, you have the right to a hearing. DMV will notify you in writing of any action taken against
									your driving privilege and inform you of your legal rights, including your right to a hearing.
								</p>
								<p>DMV will revoke your driving privilege if you are convicted of a hit-and-run or reckless driving that resulted in injury. Courts also have the authority to suspend a person’s driving privilege.</p>
								<p>At the end of your suspension or revocation, you may apply for a replacement driver’s license. You must show proof of financial responsibility (such as SR 22/SR 1P).</p> <h3 className="wp-block-heading">Maintaining Your Minor’s (Provisional) Driver’s License</h3>
								<p>If you get into collisions or commit traffic violations within the first 12 months of obtaining your minor’s driver’s license, DMV may restrict or suspend your driving privilege. You cannot drive if your driving privilege is suspended or revoked.</p>
								<p>As a minor, DMV may take action against your license if you have:</p>
								<ul>
									<li>One at fault collision or traffic violation conviction: An at fault collision means you were found responsible.</li>
									<li>Two at fault collisions, two traffic violation convictions, or one of each: You cannot drive for 30 days unless a licensed adult, at least 25 years old, rides with you.</li>
									<li>
										Three at fault collisions, three traffic violation convictions, or a combination: Your driving privilege will be suspended for six months. You will be on probation for one year.
										<ul>
											<li>If you have more at fault collisions or traffic violation convictions while on probation, your license will be suspended again.</li>
										</ul>
									</li>
									<li>A conviction of using alcohol or a controlled substance, or both and are 15-20 years old: The court will order DMV to suspend your driving privilege for one year or delay your eligibility to apply for a driver’s license.</li>
								</ul>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										Turning 18 years old does not erase or end existing restrictions, suspensions, or probation sentences.
									</span>
								</p>
								<h3 className="wp-block-heading">Administrative Hearing</h3>
								<p>
									Administrative hearings are conducted by DMV. If you received notification that a proposed action is being taken against your driving privilege, you must request a hearing within 10 days of being served or 14 days from the date the notice is mailed. If you do not make a timely
									request, your right to a hearing will be lost.
								</p>
								<p>This hearing provides you with an opportunity to be heard before an action is taken against your driving privilege. You may also have to appear in court for the same reason. Any action taken by the court is independent of the action taken by DMV.</p>
								<h3 className="wp-block-heading">Your Hearing Rights</h3> <p>You have the right to:</p>
								<ul>
									<li>Present relevant evidence and witnesses on your behalf.</li> <li>Testify on your behalf or be represented by an attorney or other representative at your expense. Representation by an attorney is not required.</li>
									<li>Review the evidence and cross examine the testimony of any witness. DMV bases its case only on written documents. If you wish to question someone who prepared a document or is listed on a document used as evidence, it is your responsibility to acquire a subpoena.</li>
								</ul>
								<p>
									For more information regarding Administrative Hearings, visit <a href="/portal/driver-education-and-safety/educational-materials/fast-facts/driver-safety-administrative-hearings-process-ffdl-26/">dmv.ca.gov/driversafety</a>.
								</p>
								<h3 className="wp-block-heading">Unsafe Driver</h3>
								<p>
									If you know someone who no longer drives safely, you may submit a Request for Driver Reexamination to DMV to review their driving qualifications. To obtain a form, visit
									<a href="/portal/driver-education-and-safety/educational-materials/fast-facts/dmvs-reexamination-process-ffdl-27/">dmv.ca.gov/reexamination</a>.
								</p>
								<h2 className="wp-block-heading">Record Confidentiality</h2> <p>Most information in your driver’s record is available to the public, except physical or mental conditions, address, and social security number.</p>
								<p>
									You can get a copy of your driver’s record online or at a kiosk. For more information on record requests, visit <a href="/portal/customer-service/request-vehicle-or-driver-records/">dmv.ca.gov/record-requests</a>.
								</p>
							</div>
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-47739">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-61532">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
