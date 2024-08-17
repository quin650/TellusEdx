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
													<title id="title-arrow-chevron-down-blue-32252">arrow-chevron-down-blue</title>
													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-50345">download</title>
												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video{" "}
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-25501">play-btn</title>
												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div> */}
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 1 of 22 </p>
								<h2 className="handbook-section__title">California Driver’s Handbook</h2>
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
											<a href="/portal/handbook/california-driver-handbook/dmv-services/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-63192">arrow-long-next</title>
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
								{/* // !delete here 4of4 --------------------------------------------------------------------------- */}
								{/* <div className="wp-block-dmv-columns content-columns colums-1-3-1-3-1-3">
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-dmv-illustration alignright is-resized">
											<img decoding="async" src="/portal/wp-content/themes/dmv/dist/images/illustrations/isolated_shapes_red_arrow_flipped.svg" className="dmv-illustration" width="75" height="77" aria-hidden="true" alt=" " />
										</figure>
									</div>
									<div className="wp-block-dmv-column col">
										<div className="wp-block-dmv-spacer-block spacer-box"></div>
										<p className="has-text-align-center">Move through the handbook using the Table of Contents or the Next/Previous buttons</p>
									</div>
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-dmv-illustration alignleft is-resized">
											<img decoding="async" src="/portal/wp-content/themes/dmv/dist/images/illustrations/isolated_shapes_red_arrow.svg" className="dmv-illustration" width="75" height="77" aria-hidden="true" alt=" " />
										</figure>
									</div>
								</div>
								<div className="wp-block-dmv-spacer-block spacer-box"></div> */}
								<h3 className="wp-block-heading">Secretary’s Message</h3>
								<div className="wp-block-dmv-columns content-columns colums-2-3-1-2">
									<div className="wp-block-dmv-column col">
										<p>Whether traveling by car, transit, bike, scooter, skateboard or on foot, we all want to reach our destination safely. Tragically, many Californians do not.</p>
										<p>
											Since 2010, more than 30,000 people have been killed and another 100,000 people seriously injured on California roads. This deadly trend is getting worse, especially for people walking or biking. We’ve seen a nearly 50 percent rise in annual deaths and serious injuries for
											pedestrians and greater than 60 percent increase in bicyclists killed per year since 2010.
										</p>
										<p>
											Unlike those of us traveling in vehicles with seat belts, airbags and other safety features, people outside of vehicles don’t have the same level of protection and are more vulnerable every time they are on the road. Their safety must always be top of mind when we’re driving.
										</p>
										<p>
											California is doing everything possible to implement comprehensive traffic safety measures to eliminate deaths and serious injuries on our roadways. It includes strategies to reduce our dependence on driving, to the way we design roads and intersections, to expanding safe
											walking and biking options.
										</p>
										<p>
											But we need your help. Without all of us practicing safe driving habits, these avoidable tragedies will continue to occur. Please make sure to buckle up, follow all traffic laws, pay extra attention to pedestrians and bicyclists, and do not drive if you’re distracted or
											impaired.
										</p>
										<p>I hope the information in this California Driver’s Handbook can help everyone on the road – drivers, bicyclists and pedestrians – reach their destination safely. Because it’s about more than just learning the rules of the roads. It could be a matter of life and death.</p>
										<p>Wishing you safe journeys,</p>
										<p>Sincerely,</p>
										<figure className="wp-block-image size-full">
											<img
												decoding="async"
												width="239"
												height="53"
												src="/portal/uploads/2020/04/ToksOmishakinsignture.jpg"
												alt="Toks Omishakin signture"
												className="wp-image-153358"
												title="David S. Kim signature"
												srcset="https://www.dmv.ca.gov/portal/uploads/2020/04/ToksOmishakinsignture.jpg 239w, https://www.dmv.ca.gov/portal/uploads/2020/04/ToksOmishakinsignture-18x4.jpg 18w"
												sizes="(max-width: 239px) 100vw, 239px"
											/>
										</figure>
										<p>
											<strong>Toks Omishakin</strong>
											<br />
											Secretary
											<br />
											California State Transportation Agency
										</p>
										<p></p>
									</div>
									<div className="wp-block-dmv-column col">
										<div className="wp-block-image">
											<figure className="aligncenter size-full">
												<img
													loading="lazy"
													decoding="async"
													width="227"
													height="283"
													src="/portal/uploads/2022/07/Toks-Omishakin.png"
													alt="Secretary of California State Transportation Agency Toks Ominshakin"
													className="wp-image-153355"
													srcset="https://www.dmv.ca.gov/portal/uploads/2022/07/Toks-Omishakin.png 227w, https://www.dmv.ca.gov/portal/uploads/2022/07/Toks-Omishakin-10x12.png 10w"
													sizes="(max-width: 227px) 100vw, 227px"
												/>
											</figure>
										</div>
									</div>
								</div>
								<p></p>
							</div>
							{/* // !delete here 5of4 --------------------------------------------------------------------------- */}
							{/* <nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/dmv-services/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-23302">arrow-long-next</title>
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
