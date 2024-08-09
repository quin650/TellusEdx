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
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
							{/* <div className="handbook-formats horiz">
								<h2 className="formats-title">Additional Formats</h2>
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
													<title id="title-arrow-chevron-down-blue-57546">arrow-chevron-down-blue</title>
													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>

											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-7600">download</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video{" "}
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>

											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-85799">play-btn</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div> */}
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 9 of 22 </p>
								<h2 className="handbook-section__title">Section 6: Navigating the Roads</h2>
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
											<a href="/portal/handbook/california-driver-handbook/introduction-to-driving/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-13502">arrow-long-prev</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
												</svg>
												Previous Section{" "}
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-24792">arrow-long-next</title>

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
											<li className="menu-item active current">
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
								<h2 className="wp-block-heading">
									<strong>Traffic Lanes</strong>
								</h2>
								<p>A traffic lane is a section of road for a single line of traffic.</p>

								<h3 className="wp-block-heading">Lane Markings</h3>

								<p>Lane markings on road surfaces help drivers know which part of the road to use and understand traffic rules.</p>

								<h4 className="wp-block-heading">Single Solid Yellow Line</h4>

								<p>A single solid yellow line marks the center of a road with two-way traffic. Do not pass a vehicle in front of you if there is only one lane of traffic going your direction and a solid yellow line on your side of the road.</p>

								<h4 className="wp-block-heading">Double Solid Yellow Lines</h4>

								<p>Do not pass over double solid yellow lines. Stay to the right of these lines unless you are:</p>

								<figure className="wp-block-image size-full">
									<img
										fetchpriority="high"
										decoding="async"
										width="558"
										height="239"
										src="/portal/uploads/2023/02/Double_Solid_Yellow_Lines.png"
										alt="Double Solid Yellow Lines. End Divided Road Sign and U-Turn OK Sign"
										className="wp-image-179196"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Double_Solid_Yellow_Lines.png 558w, https://www.dmv.ca.gov/portal/uploads/2023/02/Double_Solid_Yellow_Lines-300x128.png 300w, https://www.dmv.ca.gov/portal/uploads/2023/02/Double_Solid_Yellow_Lines-18x8.png 18w, https://www.dmv.ca.gov/portal/uploads/2023/02/Double_Solid_Yellow_Lines-450x193.png 450w"
										sizes="(max-width: 558px) 100vw, 558px"
									/>
								</figure>

								<ul>
									<li>In a high-occupancy vehicle (HOV) carpool lane that has a designated entrance on the left.</li>

									<li>Instructed by construction or other signs to drive on the other side of the road because your side is closed or blocked.</li>

									<li>Turning left across a single set of double yellow lines to enter or exit a driveway or private road or make a U-turn.</li>
								</ul>

								<p>Two sets of solid double yellow lines spaced two or more feet apart are considered a barrier. Do not drive on or over this barrier, make a left turn, or make a U-turn across it, except at designated openings.</p>

								<h4 className="wp-block-heading">Broken Yellow Line</h4>

								<p>A broken yellow line indicates you may pass if the broken line is next to your driving lane. Only pass when it is safe.</p>

								<h4 className="wp-block-heading">Single Solid White Line</h4>

								<p>A single solid white line marks traffic lanes going in the same direction. This includes one-way streets.</p>

								<h4 className="wp-block-heading">Double Solid White Lines</h4>

								<p>
									Double solid white lines indicate a lane barrier between a regular use and a preferential use lane, such as a carpool (HOV) lane. You may also see double solid white lines in or near freeway on and off ramps. Never change lanes over double solid white lines. Wait until you see a
									single broken white line.
								</p>

								<h4 className="wp-block-heading">Broken White Lines</h4>

								<p>Broken white lines separate traffic lanes on roads with two or more lanes in the same direction.</p>

								<div className="wp-block-image">
									<figure className="alignleft size-full">
										<img
											decoding="async"
											width="339"
											height="178"
											src="/portal/uploads/2020/05/ExampleofEnd-of-Lanesign.png"
											alt="End of Lane Markings"
											className="wp-image-43900"
											srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/ExampleofEnd-of-Lanesign.png 339w, https://www.dmv.ca.gov/portal/uploads/2020/05/ExampleofEnd-of-Lanesign-300x158.png 300w"
											sizes="(max-width: 339px) 100vw, 339px"
										/>
									</figure>
								</div>
								<p></p>
								<p></p>
								<p></p>
								<p></p>
								<p></p>
								<h4 className="wp-block-heading">End of Lane Markings</h4>
								<p>Ending freeway and street lanes are usually marked with large broken lines. If you are driving in a lane marked with broken lines, be prepared to exit the freeway or for the lane to end. Look for a sign that tells you to exit or merge.</p>
								<h4 className="wp-block-heading">Yield Line</h4>
								<p>A yield line is a solid white line of triangles that shows approaching vehicles where to yield or stop. The triangles point towards approaching vehicles.</p>
								<figure className="wp-block-image size-full">
									<img decoding="async" width="273" height="189" srcSet="https://www.dmv.ca.gov/portal/uploads/2020/02/imageofyieldlines.png" alt="" className="wp-image-324" />
								</figure>
								<h3 className="wp-block-heading">Choosing a Lane </h3>
								<p>Traffic lanes are often referred to by number. The left (or fast) lane is called the Number 1 Lane. The lane to the right of the Number 1 Lane is called the Number 2 Lane. Then the Number 3 Lane, etc.</p>
								<div className="wp-block-image">
									<figure className="alignleft size-full is-resized">
										<img
											decoding="async"
											width="361"
											height="135"
											src="/portal/uploads/2020/05/Imageofamulti-lanedividedhighway..png"
											alt="Example of numbered traffic lanes."
											className="wp-image-43888"
											style={{ width: "361px", height: "135px" }}
											srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Imageofamulti-lanedividedhighway..png 361w, https://www.dmv.ca.gov/portal/uploads/2020/05/Imageofamulti-lanedividedhighway.-300x112.png 300w"
											sizes="(max-width: 361px) 100vw, 361px"
										/>
										<figcaption className="wp-element-caption">Example of numbered traffic lanes</figcaption>
									</figure>
								</div>
								<p></p>
								<p></p>
								<p></p>
								<p></p>
								<p></p>
								<p>Here are some tips for choosing a lane:</p>
								<ul>
									<li>Use the left lane to pass or turn left.</li>

									<li>Use the right lane to enter or exit traffic or when you enter the road from a curb or shoulder.</li>
								</ul>

								<h3 className="wp-block-heading">Changing Lanes</h3>

								<p>Before you change lanes:</p>

								<ul>
									<li>Signal.</li>

									<li>Check your mirrors.</li>

									<li>Check traffic behind and beside you.</li>

									<li>Look over your shoulder in the direction you plan to move to make sure the lane is clear.</li>

									<li>Check your blind spots for other vehicles, motorcyclists, and bicyclists. Do not let the vehicle drift into another lane.</li>

									<li>Be sure there is enough space for your vehicle in the next lane. It is not necessary to slow down before a lane change.</li>
								</ul>

								<p>
									Stay in one lane as much as possible. Do not weave in and out of traffic. Last minute lane or direction changes may increase the risk of collisions. Once you start moving through an intersection, keep going. If you start to make a turn, follow through. If you miss a turn, keep
									driving until you can safely and legally turn around.
								</p>

								<h3 className="wp-block-heading">Types of Lanes</h3>

								<h4 className="wp-block-heading">Passing Lanes</h4>

								<p>On a multilane road, the passing lane (far left lane) is the lane closest to the center divider and is used to pass other vehicles.</p>

								<h4 className="wp-block-heading">Carpool/High-Occupancy Vehicle (HOV) Lanes</h4>

								<p>An HOV lane is a special lane reserved for carpools, buses, motorcycles, or low-emission vehicles with decals. To use an HOV lane, one of these must apply:</p>

								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full is-resized">
											<img
												loading="lazy"
												decoding="async"
												width="202"
												height="452"
												src="/portal/uploads/2024/01/HOV3-2.png"
												alt=""
												className="wp-image-223547"
												style={{ width: "153px", height: "auto" }}
												srcSet="https://www.dmv.ca.gov/portal/uploads/2024/01/HOV3-2.png 202w, https://www.dmv.ca.gov/portal/uploads/2024/01/HOV3-2-134x300.png 134w, https://www.dmv.ca.gov/portal/uploads/2024/01/HOV3-2-5x12.png 5w, https://www.dmv.ca.gov/portal/uploads/2024/01/HOV3-2-126x283.png 126w"
												sizes="(max-width: 202px) 100vw, 202px"
											/>
										</figure>
									</div>

									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												loading="lazy"
												decoding="async"
												width="177"
												height="260"
												src="/portal/uploads/2024/01/HOV_2.jpg"
												alt=""
												className="wp-image-223541"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2024/01/HOV_2.jpg 177w, https://www.dmv.ca.gov/portal/uploads/2024/01/HOV_2-8x12.jpg 8w"
												sizes="(max-width: 177px) 100vw, 177px"
											/>
										</figure>
									</div>
								</div>

								<ul>
									<li>You have a certain number of people in your vehicle. There will be signs at the on-ramp or along the road to tell you the minimum number of people. Road signs also list the hours when the HOV rules apply.</li>

									<li>You are driving a low emission or zero emission vehicle. You must display a special DMV-issued decal.</li>

									<li>You are riding a motorcycle (unless otherwise posted).</li>
								</ul>

								<p>The road surface in a HOV lane is marked with a diamond symbol and the words Carpool Lane. Do not cross over double solid lines to enter or exit an HOV lane. Use designated entrances and exits.</p>

								<h4 className="wp-block-heading">Center Left Turn Lanes</h4>

								<p>
									A center left turn lane is located in the middle of a two-way street. It is marked on both sides by two painted lines. The inner line is broken and the outer line is solid. Use the center left turn lane to prepare for and make a left turn or U-turn. It is not a regular traffic lane
									or passing lane. You may only drive for 200 feet in the center left turn lane. To turn left from this lane:
								</p>

								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<ul>
											<li>Look for other vehicles coming toward you in the center left turn lane.</li>

											<li>Signal.</li>

											<li>Look over your shoulder to check your blind spots.</li>

											<li>Merge completely into the center left turn lane so you do not block traffic.</li>

											<li>Turn when it is safe.</li>
										</ul>
									</div>

									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full is-resized">
											<img
												loading="lazy"
												decoding="async"
												width="469"
												height="626"
												src="/portal/uploads/2024/01/Center_Left_Turn_Lane.png"
												alt="Image of cars navigating thru a Center Left Turn Lane"
												className="wp-image-222674"
												style={{ width: "239px", height: "auto" }}
												srcSet="https://www.dmv.ca.gov/portal/uploads/2024/01/Center_Left_Turn_Lane.png 469w, https://www.dmv.ca.gov/portal/uploads/2024/01/Center_Left_Turn_Lane-225x300.png 225w, https://www.dmv.ca.gov/portal/uploads/2024/01/Center_Left_Turn_Lane-9x12.png 9w, https://www.dmv.ca.gov/portal/uploads/2024/01/Center_Left_Turn_Lane-212x283.png 212w"
												sizes="(max-width: 469px) 100vw, 469px"
											/>
											<figcaption className="wp-element-caption">Example of Center Left Turn Lane</figcaption>
										</figure>
									</div>
								</div>

								<h4 className="wp-block-heading">Turnout Areas or Lanes</h4>

								<p>Some two-lane roads have special turnout areas or lanes. Merge into these areas or lanes to allow cars behind you to pass.</p>

								<figure className="wp-block-image size-full">
									<img loading="lazy" decoding="async" width="102" height="130" src="/portal/uploads/2020/05/Imageofaturnoutsign.png" srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Imageofaturnoutsign.png" alt="Slower Traffic Use Turnouts" className="wp-image-43897" />
								</figure>

								<p>You must use a turnout area or lane to let other vehicles pass when you are driving slowly on a two-lane road, where passing is unsafe, and there are five or more vehicles following you.</p>

								<h4 className="wp-block-heading">Bicycle Lanes</h4>

								<p>Bicycle lanes are for bicyclists only and run alongside vehicle traffic. They are typically marked by a single solid white line and signs. They are sometimes painted bright green to make them easier to see.</p>

								<div className="wp-block-image is-resized">
									<figure className="alignleft size-full">
										<img
											loading="lazy"
											decoding="async"
											width="220"
											height="251"
											src="/portal/uploads/2020/05/Bicycle_Lane.png"
											alt="Bicycle Lane"
											className="wp-image-179262"
											srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Bicycle_Lane.png 220w, https://www.dmv.ca.gov/portal/uploads/2020/05/Bicycle_Lane-11x12.png 11w"
											sizes="(max-width: 220px) 100vw, 220px"
										/>
										<figcaption className="wp-element-caption">Example of shared roadway.</figcaption>
									</figure>
								</div>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p>It is illegal to drive in a bicycle lane unless you are:</p>

								<ul>
									<li>Parking (where permitted).</li>

									<li>Entering or leaving the road.</li>

									<li>Turning (within 200 feet of an intersection).</li>
								</ul>

								<p>There are multiple types of bike lanes and markings:</p>

								<ul>
									<li>
										<strong>Bike lane:</strong> Established along streets adjacent to vehicle traffic.&nbsp; Typically marked by a single solid white line that turns into a dash-line near an intersection.
									</li>

									<li>
										<strong>Buffered bike lane:</strong> Uses chevrons or diagonal markings to provide greater separation from traffic and on-street parking.
									</li>

									<li>
										<strong>Bike route:</strong> Uses bike route signs and shared road markings to designate a preferred route for bicyclists on streets shared with vehicle traffic.
									</li>

									<li>
										<strong>Bicycle boulevard:</strong> Prioritizes bicycle travel on streets shared with vehicle traffic.
									</li>

									<li>
										<strong>Separated bikeway:</strong> Is physically separated from motor vehicle traffic and for exclusive use of bicyclists. They are also known as a cycle track or protected bike lanes. The separation may include flexible posts, grade separation, inflexible barriers, or on-street
										parking.
									</li>

									<li>
										<strong>Shared roadway bicycle markings:</strong> Alert drivers that bicyclists can occupy the lane and help bicyclists maintain a safe lane position in traffic.
									</li>
								</ul>

								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										Check your blind spots before entering a bike lane. If you drive a motorized bicycle, use caution to avoid other bicyclists. Travel at a reasonable speed and do not endanger the safety of other bicyclists.
									</span>
								</p>

								<h2 className="wp-block-heading">Turns</h2>

								<h3 className="wp-block-heading">Right Turns</h3>

								<div className="wp-block-image">
									<figure className="alignleft size-full">
										<img loading="lazy" decoding="async" width="216" height="84" src="/portal/uploads/2020/02/rightturn.png" srcSet="https://www.dmv.ca.gov/portal/uploads/2020/02/rightturn.png" alt="Image of a vehicle making a right turn" className="wp-image-357" />
										<figcaption className="wp-element-caption">Example of a right turn.</figcaption>
									</figure>
								</div>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p className="has-text-align-left">To make a right turn:­</p>

								<ul>
									<li>
										Drive close to the right edge of the road.
										<ul>
											<li>If a designated right turn lane is available, enter at the opening.</li>

											<li>You can drive in a bike lane within 200 feet from the turn. Check for bicyclists in your blind spots.</li>
										</ul>
									</li>

									<li>Watch for pedestrians, bicyclists, or motorcyclists between your vehicle and the curb.</li>

									<li>Start signaling about 100 feet before the turn.</li>

									<li>Look over your right shoulder and reduce your speed.</li>

									<li>Stop behind the limit line. A limit line is a wide white line that shows the drivers where to stop before an intersection or crosswalk. If there is no limit line, stop before you enter the crosswalk. If there is no crosswalk, stop before you enter the intersection.</li>

									<li>Look both ways (left-right-left) and turn when it is safe.</li>

									<li>Complete your turn in the right lane. Do not turn wide into another lane.</li>
								</ul>

								<h4 className="wp-block-heading">Right Turn Against a Red Light</h4>

								<p>You may turn right at a red light after a complete stop unless there is a No Turn on Red sign. Follow the same steps listed above for right turns.</p>

								<h4 className="wp-block-heading">Right Turn Against a Red Arrow</h4>

								<p>You may not turn right if you are stopped at a red arrow light. Wait until the light changes to green before making your turn.</p>

								<h4 className="wp-block-heading">Right Turn at a Public Transit Bus Lane</h4>

								<p>It is illegal to drive, stop, park, or leave a vehicle in an area designated for public transit buses. Signs will be posted to indicate the lanes are for bus only use. However, you may cross a bus lane to make a right turn.</p>

								<h4 className="wp-block-heading">Right Turn onto a Road with a Dedicated Lane</h4>

								<p>
									A dedicated right turn lane does not merge into another lane and allows you to make a right turn without stopping. You may make your turn even if there is a red light for vehicles going straight through the intersection. If there is a traffic light or sign on the right curb of the
									right turn lane, you must obey that light or sign. Always yield to pedestrians in a crosswalk when turning.
								</p>

								<figure className="wp-block-image size-full is-resized">
									<img
										loading="lazy"
										decoding="async"
										width="228"
										height="190"
										src="/portal/uploads/2020/05/Right_Turn_Road_Dedicated_Lane-1.png"
										alt="Right Turn onto a Road with a Dedicated Lane"
										className="wp-image-179223"
										style={{ width: "296px", height: "auto" }}
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Right_Turn_Road_Dedicated_Lane-1.png 228w, https://www.dmv.ca.gov/portal/uploads/2020/05/Right_Turn_Road_Dedicated_Lane-1-14x12.png 14w"
										sizes="(max-width: 228px) 100vw, 228px"
									/>
									<figcaption className="wp-element-caption">Example of a Right Turn into a Dedicated Lane</figcaption>
								</figure>

								<h3 className="wp-block-heading">Left Turns</h3>

								<div className="wp-block-image">
									<figure className="alignleft size-full">
										<img
											loading="lazy"
											decoding="async"
											width="300"
											height="79"
											src="/portal/uploads/2020/05/Left_Turn.png"
											alt="Left Turn"
											className="wp-image-179229"
											srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn.png 300w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn-18x5.png 18w"
											sizes="(max-width: 300px) 100vw, 300px"
										/>
										<figcaption className="wp-element-caption">Example of a left turn.</figcaption>
									</figure>
								</div>

								<p></p>

								<p></p>

								<p></p>

								<p>To turn left:</p>

								<ul>
									<li>
										Drive close to the center divider or into the left turn lane.
										<ul>
											<li>Enter a designated left turn lane at the opening. Do not cross any solid line.</li>

											<li>Enter a two-way center left turn lane within 200 feet of the turn. Respect the right-of-way of any vehicle, bicyclist, or motorcyclist already in the lane. Always yield to pedestrians.</li>
										</ul>
									</li>

									<li>Start signaling 100 feet before the turn.</li>

									<li>Look over your left shoulder and reduce your speed.</li>

									<li>Stop behind the limit line. If there is no limit line, stop before you enter the crosswalk. If there is no crosswalk, stop before you enter the intersection.</li>

									<li>Look both ways (left-right-left) and begin your turn when it is safe.</li>

									<li>Proceed into the intersection while turning to complete your turn in the left lane.</li>

									<li>
										Do not turn the steering wheel too soon and enter the lane of oncoming vehicles.
										<ul>
											<li>Keep your wheels pointed straight ahead until it is safe to start your turn. If your wheels are pointed to the left and a vehicle hits you from behind, you could be pushed into oncoming traffic.</li>
										</ul>
									</li>

									<li>Accelerate smoothly during and after the turn.</li>

									<li>Allow the steering wheel to straighten in the new lane.</li>
								</ul>

								<h4 className="wp-block-heading">Left Turn Against a Red Light</h4>

								<p>You may turn left against a red light when you are turning from a one-way street onto a one-way street. Make sure there is no sign prohibiting the turn. Yield to other vehicles, pedestrians, or bicyclists who have a green light. Look both ways and turn when it is safe.</p>

								<h3 className="wp-block-heading">U-turns</h3>

								<p>A U-turn is when you turn your vehicle around to go back in the direction you came. To make a U-turn, signal and use the left turn lane or far-left lane. You may make a U-turn:</p>

								<ul>
									<li>Across a double yellow line.</li>

									<li>In a residential district if no vehicles are approaching you within 200 feet.</li>

									<li>At an intersection on a green traffic light or green arrow, unless a No U-turn sign is posted.</li>

									<li>On a divided highway if a center divider opening is provided.</li>
								</ul>

								<p>Never make a U-turn:</p>

								<ul>
									<li>Where a No U-turn sign is posted.</li>

									<li>At or on a railroad crossing.</li>

									<li>On a divided highway by crossing a dividing section, curb, strip of land, or two sets of double yellow lines.</li>

									<li>When you cannot see clearly for 200 feet in each direction.</li>

									<li>On a one-way street.</li>

									<li>
										In front of a fire station. <strong>Never </strong>use a fire station driveway to turn around.
									</li>

									<li>In business districts (the part of a city or town where most offices and businesses are).</li>
								</ul>

								<h3 className="wp-block-heading">Examples of Turns</h3>

								<p>The descriptions below refer to the numbers next to the cars in the images. Watch for pedestrians, motorcycles, and bicycles between your vehicle and the curb. When making turns, there may be signs or arrows that indicate you can turn from or end in more than one lane.</p>

								<ol>
									<li>
										<strong>Left turn from a two-way street.</strong> Start the turn in the left lane closest to the middle of the street. To reduce the risk of collision, end the turn in the left lane closest to the middle of the street going in your vehicle’s direction.
									</li>
								</ol>

								<div className="wp-block-image">
									<figure className="alignleft size-full is-resized">
										<img
											loading="lazy"
											decoding="async"
											width="304"
											height="285"
											src="/portal/uploads/2020/05/Left_Turn_Two_Way_Street.png"
											alt="Left turn from a two-way street"
											className="wp-image-179232"
											style={{ width: "304px", height: "285px" }}
											srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_Street.png 304w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_Street-300x281.png 300w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_Street-13x12.png 13w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_Street-302x283.png 302w"
											sizes="(max-width: 304px) 100vw, 304px"
										/>
									</figure>
								</div>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p></p>

								<p>
									2. <strong>Right turn.</strong> Begin and end the turn in the lane closest to the right edge of the road. Do not swing wide into another lane of traffic.{" "}
								</p>

								<p>
									3. <strong>Left turn from a two-way street onto a one-way street.</strong> Start the turn from the lane closest to the middle of the street (far-left lane). If there are three or more lanes in your direction of travel, you may end your turn in any lane that is open.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="306"
										height="203"
										src="/portal/uploads/2020/05/Left_Turn_Two_Way_One_Way_Street.png"
										alt="Left turn from a two-way street onto a one-way street"
										className="wp-image-179238"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_One_Way_Street.png 306w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_One_Way_Street-300x199.png 300w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_Two_Way_One_Way_Street-18x12.png 18w"
										sizes="(max-width: 306px) 100vw, 306px"
									/>
								</figure>

								<p>
									4. <strong>Left turn from a one-way street onto a two-way street. </strong>Start the turn from the far-left lane. To reduce the risk of collision, end the turn in the left lane closest to the middle of the street going in your vehicle’s direction.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="293"
										height="236"
										src="/portal/uploads/2020/05/Left_Turn_OneWay_TwoWay_Street.png"
										alt="Left turn from a one-way street onto a two-way street"
										className="wp-image-179241"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_OneWay_TwoWay_Street.png 293w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_OneWay_TwoWay_Street-15x12.png 15w"
										sizes="(max-width: 293px) 100vw, 293px"
									/>
								</figure>

								<p>
									5. <strong>Left turn from a one-way street onto a one-way street.</strong> Start the turn from the far-left lane. Bicyclists can legally use the left turn lane for their left turns. If there are three or more lanes in your direction of travel, you may end your turn in any lane that
									is open.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="226"
										height="225"
										src="/portal/uploads/2020/05/Left_Turn_OneWay_Street.png"
										alt="Left turn from a one-way street onto a one-way street"
										className="wp-image-179247"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_OneWay_Street.png 226w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_OneWay_Street-150x150.png 150w, https://www.dmv.ca.gov/portal/uploads/2020/05/Left_Turn_OneWay_Street-12x12.png 12w"
										sizes="(max-width: 226px) 100vw, 226px"
									/>
								</figure>

								<p>
									6. <strong>Right turn from a one-way street onto a one-way street.</strong> Start the turn in the far-right lane. If safe, you may end the turn in any lane.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="224"
										height="226"
										src="/portal/uploads/2020/05/Right_Turn_OneWay_Street.png"
										alt="Right turn from a one-way street onto a one-way street"
										className="wp-image-179250"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/Right_Turn_OneWay_Street.png 224w, https://www.dmv.ca.gov/portal/uploads/2020/05/Right_Turn_OneWay_Street-150x150.png 150w, https://www.dmv.ca.gov/portal/uploads/2020/05/Right_Turn_OneWay_Street-12x12.png 12w"
										sizes="(max-width: 224px) 100vw, 224px"
									/>
								</figure>

								<p>
									7. <strong>Turn at a “T” intersection from a one-way street onto a two-way street.</strong> Traffic going straight through the intersection has the right-of-way. You may turn either right or left from the center lane.
								</p>

								<figure className="wp-block-image size-full">
									<img
										loading="lazy"
										decoding="async"
										width="265"
										height="176"
										src="/portal/uploads/2020/05/T_Intersection-1.png"
										alt='Turn at a "T" intersection from a one-way street onto a two-way street'
										className="wp-image-179259"
										srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/T_Intersection-1.png 265w, https://www.dmv.ca.gov/portal/uploads/2020/05/T_Intersection-1-18x12.png 18w"
										sizes="(max-width: 265px) 100vw, 265px"
									/>
								</figure>

								<h3 className="wp-block-heading">Braking</h3>

								<ul>
									<li>Remove your foot from the gas pedal (accelerator) and allow the vehicle to slow down. Lightly press the brake until you come to a full stop. Give yourself enough space and time to perform this maneuver.</li>

									<li>When stopping at a limit line, do not cross over the line. If stopping behind a vehicle, leave enough space to see their rear wheels.</li>
								</ul>

								<h2 className="wp-block-heading">Merging And Exiting</h2>

								<h3 className="wp-block-heading">Merging</h3>

								<p>Highway traffic has the right-of-way. For more information, see Right-of-Way Rules: Who Goes First in Section 7. When you enter a highway, you will need to:</p>

								<ul>
									<li>Be in the proper lane on the on-ramp.</li>

									<li>Be at or near the speed of traffic.</li>

									<li>Merge into highway traffic when safe to do so. Do not stop unless absolutely necessary.</li>

									<li>Merge into a space large enough for your vehicle to safely join the lane.</li>

									<li>Use your mirrors and turn signals.</li>

									<li>Turn your head quickly to look over your shoulder before changing lanes or merging into traffic.</li>

									<li>Make sure you can stop safely by leaving three seconds of space between you and the vehicle in front of you.</li>

									<li>Do not cross over any solid lines when merging. If you need to cross several lanes, signal and cross them one at a time. Check your blind spots for vehicles, motorcyclists, bicyclists, and pedestrians each time.</li>
								</ul>

								<h3 className="wp-block-heading">Exiting</h3>

								<p>To exit a highway safely:</p>

								<ul>
									<li>Know your exit and be aware of when it is approaching.</li>

									<li>If you plan to change lanes, do so one at a time. Signal and look over your shoulder to check your blind spots.</li>

									<li>When in the proper lane, signal five seconds (approximately 400 feet) before you exit.</li>

									<li>Make sure you are at a safe speed to exit.</li>

									<li>Do not cross over any solid lines when exiting.</li>
								</ul>

								<h3 className="wp-block-heading">Crossing or Entering Traffic</h3>

								<p>When entering traffic from a full stop, signal and leave a large enough space to get up to the speed of traffic. To merge, enter, or exit traffic, you need a space that is:</p>

								<ul>
									<li>Half a block on city streets, which is about 150 feet.</li>

									<li>A full block on the highway, which is about 300 feet.</li>
								</ul>

								<p>Even if you have a green light, do not start across the intersection if there are pedestrians or vehicles blocking your pathway.</p>

								<p>When turning left, do not assume that an oncoming vehicle with its right turn signal on is turning before it reaches you. The driver may have their signal on by mistake or plan to turn just beyond you. Wait for the vehicle to start its turn before beginning the left turn.</p>

								<h2 className="wp-block-heading">Passing</h2>

								<p>You must judge whether you have enough space to pass whenever you approach:</p>

								<ul>
									<li>An oncoming vehicle or bicyclist.</li>

									<li>A hill, curve, intersection, or road obstruction. To safely pass, the hill or curve should be at least one-third of a mile ahead.</li>
								</ul>

								<p>Before you pass, look ahead for road conditions that may cause other vehicles to move into your lane.</p>

								<p>
									<strong>Do not pass:</strong>
								</p>

								<ul>
									<li>If you are approaching a hill or curve and cannot see if other traffic is approaching. This is very dangerous on one and two lane roads.</li>

									<li>Within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.</li>

									<li>At crossroads and driveways.</li>

									<li>Unless you have enough space to return to your lane.</li>
								</ul>

								<h3 className="wp-block-heading">How to Pass</h3>

								<p>When you are going to pass on an open highway:</p>

								<ul>
									<li>Signal that you plan on passing.</li>

									<li>Look over your shoulder to check your blind spots.</li>

									<li>Drive into the passing lane.</li>

									<li>Speed up to pass the vehicle.</li>

									<li>Signal and return to your original lane.</li>
								</ul>

								<p>You may pass on the right only when:</p>

								<ul>
									<li>An open highway has two or more lanes going in your direction.</li>

									<li>The driver ahead of you is turning left and you can safely pass on the right. Never pass on the left if the driver is signaling a left turn.</li>

									<li>You are on a one-way street.</li>
								</ul>

								<p>Never drive off the paved or main-traveled part of the road to pass.</p>

								<h3 className="wp-block-heading">Being Passed</h3>

								<p>If a vehicle is passing you or signals that they plan on passing, allow the vehicle to pass. Maintain your lane position and your speed.</p>
							</div>
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
							{/* <nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/introduction-to-driving/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-68896">arrow-long-prev</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-96761">arrow-long-next</title>

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
