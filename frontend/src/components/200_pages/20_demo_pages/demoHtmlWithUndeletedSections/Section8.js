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
													<title id="title-arrow-chevron-down-blue-37211">arrow-chevron-down-blue</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>

											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-12756">download</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video{" "}
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>

											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-86969">play-btn</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div> */}
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall">Section 8 of 22 </p>
								<h2 className="handbook-section__title">Section 5: An Introduction to Driving</h2>
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
											<a href="/portal/handbook/california-driver-handbook/changing-replacing-and-renewing-your-drivers-license/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-34205">arrow-long-prev</title>

													<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
												</svg>
												Previous Section{" "}
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/navigating-the-roads/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-56757">arrow-long-next</title>

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
											<li className="menu-item active current">
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
								<p>Your health may affect your driving.</p>

								<p>
									<strong>Vision </strong>– You must be able to notice hazards in different types of lighting, judge distances, adjust to traffic speed, and read road signs.
								</p>

								<p>
									<strong>Hearing </strong>– You must be able to hear horns, sirens, motorcycles, or screeching tires that may alert you of hazards. It is illegal to wear a headset or earplugs in both ears while driving.&nbsp;
								</p>

								<p>
									<strong>Fatigue and Drowsiness</strong> – Can affect your vision and increase reaction time to hazards.
								</p>

								<p>
									<strong>Physical and Mental</strong> – You must be alert to quickly decide the correct course of action in any type of traffic situation, including unexpected ones.
								</p>

								<p>
									<strong>Medications</strong> – Prescription and over-the-counter medications can make you an unsafe driver. Some medicines can make you sleepy. It is your responsibility to know the effects of the medications you take.
								</p>

								<p>
									<strong>Health </strong>– Physicians are required to report patients, who are at least 14 years old, to DMV if they believe you have medical conditions that may affect your ability to drive safely, such as lapse of consciousness.
								</p>

								<h2 className="wp-block-heading">Controlling the Vehicle</h2>

								<p>To control your vehicle, it is critical to keep both hands on the wheel whenever possible.</p>

								<h3 className="wp-block-heading">Hand-to-Hand Steering (Push/Pull)</h3>

								<p>To use this steering wheel method:</p>

								<ol>
									<li>Start with your hands at 9 and 3 o’clock or 8 and 4 o’clock.</li>

									<li>Do not cross your hands over the middle of the steering wheel.</li>

									<li>Keep your hands in these positions, even when making turns.</li>
								</ol>

								<h3 className="wp-block-heading">Hand-Over-Hand Steering</h3>

								<p>Use this steering wheel method when you turn at low speeds, park, or need to recover from a skid. To use this method:</p>

								<ol>
									<li>Start with your hands at 8 and 4 o’clock.</li>

									<li>Reach across the steering wheel to grasp the opposite side.</li>

									<li>Let go of the steering wheel with your other hand.</li>

									<li>Reach across the arm still holding the wheel, grip the wheel, and pull up.</li>
								</ol>

								<h3 className="wp-block-heading">One-Hand Steering</h3>

								<p>There are only two situations that may require steering with one hand:</p>

								<ul>
									<li>When you are turning while backing up to see where you are going behind you. Place your hand at the 12 o’clock position on the steering wheel.</li>

									<li>When you are operating vehicle controls that require you to remove a hand from the steering wheel.</li>
								</ul>

								<h2 className="wp-block-heading">Signals, Horns, And Headlights</h2>

								<p>Your signals, horn, and headlights are important for communicating with other drivers, pedestrians, and bicyclists.</p>

								<h3 className="wp-block-heading">Signaling</h3>

								<p>Always signal when you turn, change lanes, slow down, or stop. </p>

								<p>You can signal using your vehicle’s signal lights or using hand-and-arm positions. If your signal lights are not functioning, or bright sunlight makes your signal lights hard to see, use the hand-and-arm signals shown in the image below.</p>

								<p>Bicyclists may signal a turn with their arm held straight out, pointing in the direction they plan to turn.</p>

								<figure className="wp-block-table">
									<table>
										<thead>
											<tr>
												<th className="has-text-align-center" data-align="center">
													LEFT TURN
												</th>
												<th className="has-text-align-center" data-align="center">
													RIGHT TURN
												</th>
												<th className="has-text-align-center" data-align="center">
													SLOW OR STOP
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="has-text-align-center" data-align="center" data-title="LEFT TURN">
													<img decoding="async" alt="left turn arm signal" src="https://wsi2uat.dmv.ca.gov/imageserver/dmv/images/dlhdbk/29_smleftturn.jpg" width="113" height="73" />
												</td>
												<td className="has-text-align-center" data-align="center" data-title="RIGHT TURN">
													<img decoding="async" alt="right turn arm signal" src="https://wsi2uat.dmv.ca.gov/imageserver/dmv/images/dlhdbk/29_smrightturn.jpg" width="100" height="78" />
												</td>
												<td className="has-text-align-center" data-align="center" data-title="SLOW OR STOP">
													<img decoding="async" alt="slow or stop arm signal" src="https://wsi2uat.dmv.ca.gov/imageserver/dmv/images/dlhdbk/29_smslostop.jpg" width="117" height="76" />
												</td>
											</tr>
										</tbody>
									</table>
								</figure>

								<p>You should signal:</p>

								<ul>
									<li>At least 100 feet before you turn.</li>

									<li>Before every lane change.</li>

									<li>At least five seconds before you change lanes on a freeway.</li>

									<li>Before pulling next to the curb or away from the curb.</li>

									<li>Even when you do not see other vehicles around you.</li>

									<li>When you are almost through the intersection if you plan to turn shortly after crossing the intersection.</li>
								</ul>

								<p>Remember to turn off your signal when you no longer need it.</p>

								<h3 className="wp-block-heading">Using Your Horn</h3>

								<p>Use your vehicle’s horn to let other drivers know you are there or warn others of a hazard. Use your horn to:</p>

								<ul>
									<li>Avoid collisions.</li>

									<li>Alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.</li>
								</ul>

								<h3 className="wp-block-heading">Using Your Headlights</h3>

								<p>
									Your vehicle’s headlights help you see what is in front of you. They also make it easier for other drivers to see your vehicle. Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you or within 300 feet of a vehicle you are following. It is illegal
									to drive using only parking lights. Use your headlights:
								</p>

								<ul>
									<li>When it is too dark to see from 1,000 feet away.</li>

									<li>Beginning 30 minutes after sunset.</li>

									<li>Until 30 minutes before sunrise.</li>

									<li>In adverse weather. If you need to use your windshield wipers due to fog, rain, or snow, you must turn on your low-beam headlights.</li>

									<li>When conditions (such as clouds, dust, smoke, or fog) prevent you from seeing other vehicles.</li>

									<li>On mountain roads and tunnels (even on sunny days).</li>

									<li>When a road sign states that headlights must be on.</li>

									<li>To help other drivers see your vehicle, especially when the sun is low on the horizon.</li>
								</ul>

								<h3 className="wp-block-heading">Using Your Emergency Flashers</h3>

								<p>If you can see a collision or hazard ahead, warn drivers behind you using these methods:</p>

								<ul>
									<li>Turn on your emergency flashers.</li>

									<li>Lightly tap your brake pedal three or four times.</li>

									<li>Use a hand signal when slowing and stopping.</li>
								</ul>

								<p>If you need to stop because of vehicle trouble:</p>

								<ul>
									<li>Turn on your emergency flashers. If your vehicle does not have emergency flashers, use your turn signals.</li>

									<li>If possible, pull off the road away from all traffic.</li>

									<li>If you cannot get completely off the road, stop where people can see you and your vehicle from behind.</li>

									<li>Do not stop just over a hill or just around a curve. Other drivers may not see your vehicle in time to avoid a collision.</li>

									<li>Call for emergency roadside assistance and stay in your vehicle until help arrives.</li>
								</ul>
							</div>
							{/* // !delete here 1of4 --------------------------------------------------------------------------- */}
							{/* <nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/changing-replacing-and-renewing-your-drivers-license/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-65848">arrow-long-prev</title>

												<use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1720569353#icon-arrow-long-prev"></use>
											</svg>
											Previous Section{" "}
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/navigating-the-roads/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-67267">arrow-long-next</title>

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
