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
													<title id="title-arrow-chevron-down-blue-58757">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-91315">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-56305">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 17 of 22 </p> <h2 className="handbook-section__title">Section 9: Alcohol and Drugs</h2>
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
											<a href="/portal/handbook/california-driver-handbook/safe-driving-cont2/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-26132">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-66760">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
								<p>
									California’s driving under the influence (DUI) laws apply to both alcohol and drugs. It is illegal to drive while under the influence of alcohol or any drug that affects your ability to drive safely. As you age, your tolerance to alcohol decreases, which increases the risk of
									alcohol-related driving problems. The law does not see a difference between illegal drugs and medications you get from a doctor or pharmacy. They can all affect your ability to drive safely and react to what you see and hear.
								</p>
								<p>No matter what age you are, it is illegal to drive after:</p>
								<ul>
									<li>Drinking excessive amounts of alcohol in any form. This includes medications like cough syrup.</li> <li>Taking any drug that affects your ability to drive. This includes prescriptions or over-the-counter medications.</li>
									<li>Using any combination of alcohol or drugs that decreases your ability to drive safely.</li>
								</ul>
								<p>
									Make sure you read medication labels and know the effects of any drug you use.&nbsp; If a law enforcement officer thinks you are driving while under the influence of drugs or alcohol, they have the right to ask you to take a blood or urine test. If you refuse to take one, DMV will
									suspend or revoke your driving privilege for one year.
								</p>
								<p>
									<span role="region" aria-label="Important" className="format-label--important">
										If you are 13 to 20 years old and convicted of operating a bicycle while under the influence of alcohol or drugs, your driving privilege may be suspended or delayed for one year once you are eligible to drive.
									</span>
								</p>
								<h2 className="wp-block-heading">Use or Possession of Alcohol or Cannabis Products in a Vehicle</h2>
								<p>
									The law is very strict about carrying alcohol or cannabis products in your vehicle with you. It is illegal to drink any alcohol, to smoke or eat a cannabis product while you are driving or riding as a passenger in a vehicle. If you are carrying any alcohol, cannabis in your
									vehicle, the container must be sealed and unopened. If it is open, you must keep the container in the trunk or place where passengers do not sit. It is also illegal to keep an open container of alcohol in your glove box. This law does not apply if you are a passenger in a bus,
									taxi, camper, or motorhome.
								</p>
								<h2 className="wp-block-heading">Blood Alcohol Concentration (BAC) Limits</h2> <p>When you consume alcohol, traces of it enter your bloodstream. Your BAC measures how much alcohol is present in your bloodstream.</p> <p>It is illegal for you to drive if you have a BAC of:</p>
								<ul>
									<li>0.08% or higher if you are over 21 years old.</li> <li>0.01% or higher if you are under 21 years old.</li> <li>0.01% or higher at any age if you are on DUI probation.</li> <li>0.04% or higher if you drive a vehicle that requires a commercial driver’s license.</li>
									<li>0.04% or higher if you are driving a passenger for hire.</li>
								</ul>
								<p>
									If you drive with an illegal BAC, a law enforcement officer can charge you with DUI. Even if your BAC is below legal limits, that does not mean it is safe for you to drive. Almost everyone feels negative effects of alcohol, even at levels lower than the legal limit. Depending on
									how badly you are impaired, you may be arrested and convicted of a DUI even without a BAC measurement.
								</p>
								<p>The table below shows BAC estimates based on how many drinks are consumed, gender, and body weight. Remember, even one drink can affect your ability to drive safely.</p>
								<figure className="wp-block-image size-large">
									<img
										fetchpriority="high"
										decoding="async"
										width="1024"
										height="529"
										src="https://www.dmv.ca.govhttps://wsi2uat.dmv.ca.gov/portal/uploads/2020/02/dui-1024x529.png"
										alt="Blood Alcohol Content Chart"
										className="wp-image-247"
										title=""
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/02/dui-1024x529.png 1024w, https://www.dmv.ca.gov/portal/uploads/2020/02/dui-300x155.png 300w, https://www.dmv.ca.gov/portal/uploads/2020/02/dui-768x397.png 768w, https://www.dmv.ca.gov/portal/uploads/2020/02/dui.png 1038w"
										sizes="(max-width: 1024px) 100vw, 1024px"
									/>
								</figure>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										It is illegal to drink alcohol or take drugs when you are operating a boat, jet ski, water skis, aquaplane, or similar vessels. Learn more in the <em>California Harbors and Navigation Code</em>.
									</span>
								</p>
								<h2 className="wp-block-heading">DUI Arrests</h2>
								<p>
									When you drive in California, you consent to a breath, blood, or urine test if a law enforcement officer suspects you of DUI.&nbsp; If you agreed to take a preliminary alcohol screening (PAS) or breath test, you may still be required to take a blood or urine test to detect the
									presence of drugs.&nbsp; If you refuse, DMV will suspend or revoke your driving privilege. If you are arrested for DUI:
								</p>
								<ul>
									<li>California’s Administrative Per Se law requires DMV to suspend your driving privilege.</li> <li>The law enforcement officer may take your driver’s license and give you a temporary driver’s license for 30 days.</li>
									<li>You may request a DMV administrative hearing within 10 days from the date of your arrest.</li>
								</ul>
								<h2 className="wp-block-heading">DUI Convictions</h2> <p>If you are convicted of a DUI, DMV will suspend or revoke your driving privilege and you:</p>
								<ul>
									<li>Must complete a DUI program.</li> <li>Must file SR 22/SR 1P.</li> <li>Must pay any applicable license reissue or restriction fees.</li> <li>May be required to install an ignition interlock device (IID) on your vehicle.</li>
								</ul>
								<p>Here are some additional penalties if you are convicted of DUI:</p>
								<ul>
									<li>You may be sentenced to up to six months in jail.</li> <li>You may have to pay a fine.</li> <li>Law enforcement may impound your vehicle and you may have to pay a storage fee.</li>
									<li>If you cause serious injury or death while driving under the influence of drugs or alcohol, you may face civil lawsuits.</li>
								</ul>
								<p>All DUI convictions remain on your driver’s record for 10 years. If you get any other DUIs during that time, the court or DMV may give you an additional penalty.</p> <h2 className="wp-block-heading">Drivers Under 21</h2>
								<p>If you are under 21 years old, there are additional laws for possessing and consuming alcohol.</p> <h3 className="wp-block-heading">Possessing alcohol:</h3>
								<ul>
									<li>
										You may not carry any alcohol beverage inside a vehicle unless an individual who is 21 years old or older is with you. The container must be full, sealed, and unopened. If opened, the alcohol must be kept in the trunk or place where passengers do not sit. <br />
										<strong>Exception</strong>: If you are working for someone with an off-site liquor sales license, you may carry alcoholic beverages in closed containers.
									</li>
									<li>
										If you are caught with alcohol in your vehicle, law enforcement can impound your vehicle for up to 30 days. The court may fine you and suspend your driver’s license for one year. If you do not already have a driver’s license, the court may ask DMV to delay giving you your first
										driver’s license for up to one year.
									</li>
								</ul>
								<h3 className="wp-block-heading">Consuming alcohol:</h3>
								<ul>
									<li>If a law enforcement officer suspects you of consuming alcohol, they can require you to take a hand-held breath test, PAS, or another chemical test.</li>
									<li>If you are convicted of a DUI with a BAC of 0.01% or higher, DMV may revoke your driving privilege for one year. You must also complete a licensed DUI program.</li> <li>If your PAS shows a BAC of 0.05% or higher, the officer may require you to take a breath or blood test.</li>
									<li>If a later test shows you have a BAC of 0.05% or higher, you may be arrested for a DUI and your driving privilege may be suspended.</li>
								</ul>
							</div>
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving-cont2/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-79799">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-49137">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
