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
							<img src="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/assets/images/illustrations/driver_education_1.svg" alt="Driver Education illustration" />
						</figure>
					</div>
				</div>
			</div> */}
			<div id="handbook-page" className="page-wrapper skewed-bg green-xlight">
				<div className="container container--wide">
					<div className="page-content">
						<div className="handbook-container">
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
							{/* <div className="handbook-formats horiz">
								<h2 className="formats-title">Additional Formats </h2>
								<ul className="formats-list horiz">
									<li className="format-wrapper">
										<div className="custom-select custom-select--icon">
											<label className="screen-reader-text" for="handbook-pdf-select">
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
													<title id="title-arrow-chevron-down-blue-19355">arrow-chevron-down-blue</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>

											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-62051">download</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video{" "}
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>

											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-67100">play-btn</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div> */}
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 11 of 22 </p>
								<h2 className="handbook-section__title">Section 7: Laws and Rules of the Road</h2>
							</div>
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
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
											<a href="/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-8355">arrow-long-prev</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section{" "}
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-30103">arrow-long-next</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
								<h2 className="wp-block-heading">Traffic Control</h2>

								<p>
									When at or approaching traffic signals or signs, yield to pedestrians, bicyclists, and other nearby vehicles that may have the right-of-way. See <a href="#rightofway">Right of Way Rules: Who Goes First</a>, in this section.
								</p>

								<h3 className="wp-block-heading">Traffic Signals</h3>

								<h4 className="wp-block-heading">Solid Red Light</h4>

								<figure className="wp-block-image size-full">
									<img decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_light_red.gif" alt="solid red light" className="wp-image-43774" />
								</figure>

								<p>A red traffic signal light means STOP. You can turn right at a red light, if:</p>

								<ul>
									<li>There is not a NO TURN ON RED sign posted.</li>

									<li>You stop at the stop or limit line, yield for pedestrians, and turn when it is safe.</li>
								</ul>

								<h4 className="wp-block-heading">Red Arrow</h4>

								<figure className="wp-block-image size-full">
									<img decoding="async" width="58" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_arrow_red.gif" alt="red arrow" className="wp-image-43777" />
								</figure>

								<p>A red arrow means STOP. Do not turn at a red arrow. Remain stopped until a green traffic signal light or green arrow appears.</p>

								<h4 className="wp-block-heading">Flashing Red Light</h4>

								<figure className="wp-block-image size-full">
									<img decoding="async" width="58" height="54" src="https://www.dmv.ca.gov/portal/uploads/2020/05/Redflashinglight.png" alt="flashing red light" className="wp-image-43780" />
								</figure>

								<p>A flashing red signal light means STOP. After stopping, you may go when it is safe.</p>

								<h4 className="wp-block-heading">Solid Yellow Light</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_yellow_signal.gif" alt="solid yellow light" className="wp-image-43783" />
								</figure>

								<p>A yellow traffic signal light means CAUTION. The light is about to turn red. When you see a yellow traffic signal light, stop, if you can do so safely. If you cannot stop safely, cautiously cross the intersection.</p>

								<h4 className="wp-block-heading">Yellow Arrow</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_yellow_arrow_left.gif" alt="yellow arrow" className="wp-image-43786" />
								</figure>

								<p>A yellow arrow means the protected turning time is ending. The signal will change soon. If you cannot stop safely or you are already in the intersection, cautiously complete your turn. Pay attention to the next signal. It could be a:</p>

								<ul>
									<li>Green or red traffic signal light.</li>

									<li>Red Arrow.</li>
								</ul>

								<h4 className="wp-block-heading">Flashing Yellow Light</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="61" height="59" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_flashing_yellow.gif" alt="flashing yellow light" className="wp-image-43789" />
								</figure>

								<p>A flashing yellow traffic signal light is a warning to PROCEED WITH CAUTION. Slow down and be alert. You do not need to stop.</p>

								<h4 className="wp-block-heading">Flashing Yellow Arrow</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="68" height="61" src="https://www.dmv.ca.gov/portal/uploads/2020/05/flashing_yellow_arrow.gif" alt="flashing yellow arrow" className="wp-image-43792" />
								</figure>

								<p>You can turn, but your turn is not protected from other traffic. Proceed to turn left after yielding to oncoming traffic and proceed with caution.</p>

								<h4 className="wp-block-heading">Solid Green Light</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_green_light.gif" alt="solid green light" className="wp-image-43795" />
								</figure>

								<p>
									A green traffic signal light means GO. You should still stop for any vehicle, bicyclist, or pedestrian in the intersection. Only proceed if you have enough space without creating a danger to any oncoming vehicle, bicyclist, or pedestrian. Do not enter the intersection if you cannot
									get completely across before the traffic signal light turns red.
								</p>

								<h4 className="wp-block-heading">Green Arrow</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/14_green_arrow_left.gif" alt="green arrow" className="wp-image-43798" />
								</figure>

								<p>A green arrow means GO in the direction the arrow is pointing. The green arrow allows you to make a protected turn. Oncoming vehicles are stopped by a red traffic signal light.</p>

								<h4 className="wp-block-heading">Traffic Light Not Working</h4>

								<p>When a traffic light is not working, stop as if the intersection is controlled by STOP signs in all directions. Then proceed cautiously when it is safe to do so.</p>

								<h3 className="wp-block-heading">Pedestrian Signals and Signs</h3>

								<h4 className="wp-block-heading">WALK or Walking Person</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="53" height="77" src="https://www.dmv.ca.gov/portal/uploads/2020/02/walk.png" alt="walk signals" className="wp-image-246" />
								</figure>

								<p>You may cross the street.</p>

								<h4 className="wp-block-heading">Don’t Walk or Raised Hand</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="52" height="78" src="https://www.dmv.ca.gov/portal/uploads/2020/02/donotwalk.png" alt="do not walk signals" className="wp-image-244" />
								</figure>

								<p>You may not cross the street.</p>

								<h4 className="wp-block-heading">Flashing Don’t Walk or Flashing Raised Hand</h4>

								<p>Do not start crossing the street. The traffic signal light is about to change. Drivers must yield to pedestrians, even if the Don’t Walk light is flashing.</p>

								<h4 className="wp-block-heading">Numbers</h4>

								<p>The numbers count down the seconds left for crossing the street.</p>

								<h4 className="wp-block-heading">Diagonal Crossing</h4>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="75"
										height="74"
										src="https://www.dmv.ca.gov/portal/uploads/2020/05/Diagonal-Crossing.png"
										alt="Diagonal Crossing OK sign"
										className="wp-image-179190"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Diagonal-Crossing.png 75w, https://www.dmv.ca.gov/portal/uploads/2020/05/Diagonal-Crossing-12x12.png 12w"
										sizes="(max-width: 75px) 100vw, 75px"
									/>
								</figure>

								<p>These are crisscross and diagonal crosswalks that allow pedestrians to cross the intersection in any direction at the same time. Cross only when the walk signal allows it.</p>

								<h4 className="wp-block-heading">Sounds</h4>

								<p>Sounds such as beeping, chirping, or verbal messages help blind or visually impaired pedestrians cross the street.</p>

								<h4 className="wp-block-heading">Pedestrian Push Button</h4>

								<p>This is used to activate the Walk or Walking Person signal.</p>

								<h4 className="wp-block-heading">No Pedestrian Signals</h4>

								<p>If there are no pedestrian signals, obey the vehicle traffic signals.</p>

								<h3 className="wp-block-heading">Signs</h3>

								<p>
									<strong>Obey all warning signs regardless of their shape or color.</strong>
								</p>

								<h4 className="wp-block-heading">STOP Sign</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/16_stopsign.gif" alt="stop sign" className="wp-image-43813" />
								</figure>

								<p>Make a full stop before entering the crosswalk or at the limit line. If there is no limit line or crosswalk, stop before entering the intersection. Check traffic in all directions before proceeding.</p>

								<h4 className="wp-block-heading">Red YIELD Sign</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="60" height="58" src="https://www.dmv.ca.gov/portal/uploads/2020/05/16_yieldsign.gif" alt="red yield sign" className="wp-image-43816" />
								</figure>

								<p>Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed.</p>

								<h4 className="wp-block-heading">Red and White Regulatory Sign</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="67" height="79" src="https://www.dmv.ca.gov/portal/uploads/2020/02/donotenter.png" alt="do not enter sign" className="wp-image-242" />
								</figure>

								<p>Follow the sign’s instruction. For example, DO NOT ENTER means do not enter the road or ramp where the sign is posted.</p>

								<h4 className="wp-block-heading">WRONG WAY Sign</h4>

								<figure className="wp-block-image size-full is-resized">
									<img loading="lazy" decoding="async" width="119" height="61" src="https://www.dmv.ca.gov/portal/uploads/2020/05/16_wrong_way_sign.gif" alt="Wrong Way sign" className="wp-image-43822" style={{ width: "85px", height: "44px" }} />
								</figure>

								<p>If you enter a roadway against traffic, DO NOT ENTER and WRONG WAY signs may be posted. When it is safe, back out or turn around. If you are driving at night, you will know you are going the wrong way if the road reflectors shine red in your headlights.</p>

								<h4 className="wp-block-heading">Red Circle with a Red Line Through It</h4>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="77" height="79" src="https://www.dmv.ca.gov/portal/uploads/2020/02/nouturn.png" alt="no u turn sign" className="wp-image-241" />
								</figure>

								<p>The picture inside the circle shows what you cannot do and may be shown with words.</p>

								<h4 className="wp-block-heading">Yellow and Black Circular Sign or X-shaped Sign</h4>

								<figure className="wp-block-image size-full is-resized">
									<img loading="lazy" decoding="async" width="211" height="189" src="https://www.dmv.ca.gov/portal/uploads/2020/02/railroad.png" alt="railroad crossing sign" className="wp-image-239" style={{ width: "70px", height: "63px" }} />
								</figure>

								<p>You are approaching a railroad crossing. Look, listen, slow down, and prepare to stop. Let any trains pass before you proceed.</p>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="66" height="50" src="https://www.dmv.ca.gov/portal/uploads/2020/02/railroad2.png" alt="blue railroad sign with emergency information" className="wp-image-240" />
								</figure>

								<p>Many railroad crossings also have a blue and white sign to tell you what to do if there is an emergency on or near the tracks, or if your vehicle has stalled on the tracks.</p>

								<h4 className="wp-block-heading">5-sided Sign</h4>

								<figure className="wp-block-image size-full is-resized">
									<img loading="lazy" decoding="async" width="183" height="176" src="https://www.dmv.ca.gov/portal/uploads/2020/02/schoolzone.png" alt="" className="wp-image-237" style={{ width: "73px", height: "71px" }} />
								</figure>

								<p>You are near a school. Drive slowly and stop for children in the crosswalk.</p>

								<h4 className="wp-block-heading">Diamond-shaped Sign</h4>

								<p>Warns you of specific road conditions and dangers ahead.</p>

								<h4 className="wp-block-heading">White Rectangular Sign</h4>

								<p>Communicates many important rules you must obey.</p>

								<h4 className="wp-block-heading">Warning Signs</h4>

								<p>Warns of conditions related to pedestrians, bicyclists, schools, playgrounds, school buses, and school passenger loading zones.</p>

								<p>
									For more information about signs, visit <a href="https://dot.ca.gov/programs/safety-programs/sign-charts">dot.ca.gov/programs/safety-programs/sign-charts</a>.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="433"
										height="731"
										src="https://www.dmv.ca.gov/portal/uploads/2020/05/Sign-Sample-1.png"
										alt="Examples of Red and White Regulatory Signs, White Regulatory Signs, Highway Construction and Maintenance Signs, Guide Signs, Hazardous Loads Placards, and Slow Moving Vehicle Placard"
										className="wp-image-179199"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Sign-Sample-1.png 433w, https://www.dmv.ca.gov/portal/uploads/2020/05/Sign-Sample-1-178x300.png 178w, https://www.dmv.ca.gov/portal/uploads/2020/05/Sign-Sample-1-7x12.png 7w, https://www.dmv.ca.gov/portal/uploads/2020/05/Sign-Sample-1-168x283.png 168w"
										sizes="(max-width: 433px) 100vw, 433px"
									/>
								</figure>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="420"
										height="658"
										src="https://www.dmv.ca.gov/portal/uploads/2023/02/Sign-Sample-2.png"
										alt="Examples of Warning Signs. For more information, visit dot.ca.gov."
										className="wp-image-179202"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Sign-Sample-2.png 420w, https://www.dmv.ca.gov/portal/uploads/2023/02/Sign-Sample-2-191x300.png 191w, https://www.dmv.ca.gov/portal/uploads/2023/02/Sign-Sample-2-8x12.png 8w, https://www.dmv.ca.gov/portal/uploads/2023/02/Sign-Sample-2-181x283.png 181w"
										sizes="(max-width: 420px) 100vw, 420px"
									/>
								</figure>

								<h2 className="wp-block-heading" id="rightofway">
									Right-of-Way Rules: Who Goes First?
								</h2>

								<p>
									Right-of-way rules help you understand who goes first when vehicles, pedestrians, and bicyclists meet on the road. The vehicle that arrives to the intersection first has the right-of-way. Other vehicles, bicyclists, and pedestrians must wait for the person who has the right-of-way.
									Never assume that other drivers will give you the right-of-way. Give up your right-of-way when it will help prevent collisions.
								</p>

								<h3 className="wp-block-heading">Intersections</h3>

								<p>
									An intersection is any place where one road meets another road. Controlled intersections have signs or traffic signal lights. Uncontrolled and blind intersections do not. Before entering an intersection, look left, right, and ahead to check for vehicles, bicyclists, and
									pedestrians. Be prepared to slow down and stop if necessary. Pedestrians always have the right-of-way. Here are some right-of-way rules at intersections:
								</p>

								<ul>
									<li>
										<strong>Without STOP or YIELD signs:</strong> The vehicle that arrives to the intersection first has the right-of-way. However, if a vehicle, pedestrian, or bicyclist gets to the intersection at the same time as you, give the right-of-way to the vehicle, pedestrian, or bicyclist
										on your right. If you approach a stop sign and there is a stop sign on all four corners, stop first and proceed as above.
									</li>

									<li>
										<strong>T intersections without STOP or YIELD signs:</strong> Vehicles, bicyclists, and pedestrians on the through road (continuing to go straight) have the right-of-way.
									</li>

									<li>
										<strong>Turning left:</strong> Check for pedestrians. Give the right-of-way to any pedestrian or approaching vehicle that is close enough to be dangerous.
									</li>

									<li>
										<strong>Turning right:</strong> Always check for pedestrians crossing the street, and motorcycles and bicycles riding next to you.
									</li>

									<li>
										<strong>Green traffic signal light:</strong> Proceed with caution. Pedestrians have the right-of-way.
									</li>

									<li>
										<strong>Entering traffic:</strong> When entering traffic, you must proceed with caution and yield to the traffic already occupying the lanes. It is against the law to stop or block an intersection where there is not enough space to completely cross before the traffic signal light
										turns red.
									</li>
								</ul>

								<h3 className="wp-block-heading">Roundabouts</h3>

								<p>In a roundabout, traffic travels in one direction around a central island.</p>

								<p>How to use a roundabout:</p>

								<ol>
									<li>Slow down as you approach.</li>

									<li>Yield to all traffic already in the roundabout.</li>

									<li>Enter heading to the right when there is a big enough gap in traffic to merge safely.</li>

									<li>Watch for signs and lane markings that guide you.</li>

									<li>Travel in a counter-clockwise direction. Do not stop or pass.</li>

									<li>Signal when you change lanes or exit.</li>

									<li>If you miss your exit, continue around until you return to your exit.</li>
								</ol>

								<p>If the roundabout has multiple lanes, choose your entry or exit lane based on your destination. This is shown in the image below. To:</p>

								<ol>
									<li>Turn right (yellow car): Choose the right lane and exit in the right lane.</li>

									<li>Go straight (red car): Choose either lane. Exit in the lane you entered.</li>

									<li>Turn left: Enter and continue driving until you reach the exit in the direction you choose (blue car).</li>
								</ol>

								<div className="wp-block-dmv-columns content-columns colums-1-3-1-3-1-3">
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												loading="lazy"
												decoding="async"
												width="289"
												height="284"
												src="https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-right.png"
												alt="Overhead view of yellow car making a right turn at a roundabout."
												className="wp-image-179430"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-right.png 289w, https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-right-12x12.png 12w"
												sizes="(max-width: 289px) 100vw, 289px"
											/>
											<figcaption className="wp-element-caption">Right Turn</figcaption>
										</figure>
									</div>

									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												loading="lazy"
												decoding="async"
												width="291"
												height="290"
												src="https://www.dmv.ca.gov/portal/uploads/2023/02/roundabout-straight.png"
												alt="Overhead view of a red car going straight at a roundabout."
												className="wp-image-179421"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/roundabout-straight.png 291w, https://www.dmv.ca.gov/portal/uploads/2023/02/roundabout-straight-150x150.png 150w, https://www.dmv.ca.gov/portal/uploads/2023/02/roundabout-straight-12x12.png 12w, https://www.dmv.ca.gov/portal/uploads/2023/02/roundabout-straight-284x283.png 284w"
												sizes="(max-width: 291px) 100vw, 291px"
											/>
											<figcaption className="wp-element-caption">Straight</figcaption>
										</figure>
									</div>

									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												loading="lazy"
												decoding="async"
												width="286"
												height="289"
												src="https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-left.png"
												alt="Overhead view of a blue car turning left at a roundabout."
												className="wp-image-179436"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-left.png 286w, https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-left-12x12.png 12w, https://www.dmv.ca.gov/portal/uploads/2020/05/roundabout-left-280x283.png 280w"
												sizes="(max-width: 286px) 100vw, 286px"
											/>
											<figcaption className="wp-element-caption">Left Turn</figcaption>
										</figure>
									</div>
								</div>

								<h3 className="wp-block-heading">Pedestrians</h3>

								<p>These are considered pedestrians or vulnerable road users:</p>

								<ul>
									<li>A person walking.</li>

									<li>A person traveling on something other than a vehicle or bicycle. This includes roller skates, a skateboard, etc.</li>

									<li>
										A person with a{" "}
										<strong>
											<em>disability</em>
										</strong>{" "}
										using a tricycle, quadricycle, or wheelchair for transportation.
									</li>
								</ul>

								<figure className="wp-block-image size-large">
									<img
										loading="lazy"
										decoding="async"
										width="1024"
										height="206"
										src="https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-1024x206.png"
										alt="Tricycle, Quadricycle, Standard Wheelchair, and Electric Wheelchair next to each other."
										className="wp-image-179439"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-1024x206.png 1024w, https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-300x60.png 300w, https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-768x154.png 768w, https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-18x4.png 18w, https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices-450x90.png 450w, https://www.dmv.ca.gov/portal/uploads/2023/02/Mobility-Devices.png 1050w"
										sizes="(max-width: 1024px) 100vw, 1024px"
									/>
									<figcaption className="wp-element-caption">From left to right: Tricycle, Quadricycle, Standard Wheelchair, Electric Wheelchair.</figcaption>
								</figure>

								<p>Although pedestrians have the right-of-way, they also must follow the rules of the road.</p>

								<p>
									When there is a pedestrian crossing a roadway with or without a crosswalk, you <strong>must</strong> use caution, reduce your speed, or stop to allow the pedestrian to safely finish crossing.
								</p>

								<p>Other things to keep in mind:</p>

								<ul>
									<li>Do not pass a vehicle stopped at a crosswalk. You may not be able to see a pedestrian crossing the street.</li>

									<li>If a pedestrian makes eye contact with you, they are ready to cross the street. Yield to the pedestrian.</li>

									<li>Always allow pedestrians enough time to safely cross a street as some groups such as seniors, people with small children, and people with disabilities may require extra time.</li>
								</ul>

								<h4 className="wp-block-heading">Crosswalks</h4>

								<p>A crosswalk is the part of the road set aside for pedestrians to safely cross the road. They are often marked with white lines. School crossings may have yellow crosswalk lines. Not all crosswalks are marked.</p>

								<p>Pedestrians have the right-of-way in marked or unmarked crosswalks. If there is a limit line before the crosswalk, stop at the limit line and allow pedestrians to cross the street.</p>

								<p>Some crosswalks have flashing lights. Whether or not the lights are flashing, look for pedestrians and be prepared to stop.</p>

								<h4 className="wp-block-heading">Pedestrians who are Blind</h4>

								<p>
									Pedestrians using guide dogs or white canes have the right-of-way at all times. These pedestrians are partially or totally blind. Be careful when you are turning or backing up. This is particularly important if you are driving a hybrid or electric vehicle because blind pedestrians
									rely on sound to know there is a vehicle nearby.
								</p>

								<ul>
									<li>Do not stop in the middle of a crosswalk. This could force a blind pedestrian to walk into traffic outside of the crosswalk.</li>

									<li>Do not honk your horn at a blind person.</li>

									<li>When a blind person pulls in their cane and steps away from the intersection, this gesture usually means you may go.</li>
								</ul>

								<h3 className="wp-block-heading">Mountain Roads</h3>

								<p>If two vehicles meet on a steep narrow road and neither vehicle can pass, the vehicle facing uphill has the right-of-way. The vehicle facing downhill has more control when backing up the hill. The vehicle facing downhill should back up until the vehicle going uphill can pass.</p>
							</div>
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
							{/* <nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-3242">arrow-long-prev</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section{" "}
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-94555">arrow-long-next</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
