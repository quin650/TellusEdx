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
													<title id="title-arrow-chevron-down-blue-74985">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-79658">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-77633">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 16 of 22 </p> <h2 className="handbook-section__title">Section 8: Safe Driving (Continued)</h2>
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
											<a href="/portal/handbook/california-driver-handbook/safe-driving-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-25886">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/alcohol-and-drugs/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-44210">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
								<h2 className="wp-block-heading">Manage Your Speed</h2> <p>In California, you may never drive faster than is safe for the current road conditions. This is known as the Basic Speed Law.</p>
								<p>Make sure you manage your speed and slow down when conditions call for it. Regardless of the posted speed limit, your speed should depend on:</p>
								<ul>
									<li>The number of vehicles on the road.</li> <li>The speed of other vehicles on the road.</li> <li>The road surface: smooth, rough, graveled, wet, dry, wide, or narrow.</li> <li>Bicyclists or pedestrians on or crossing the road.</li>
									<li>Weather: rain, fog, snow, wind, or dust.</li> <li>Traffic congestion: small changes in your driving habits can help reduce congestion. Avoid weaving in and out of freeway lanes.</li>
								</ul>
								<p>
									There are also situations with specific speed limit laws and conditions where you should reduce your speed. Unless otherwise posted, the ideal maximum speed limit on most California highways is 65 mph. It is 55 mph on a two-lane undivided highway and for vehicles towing trailers.
								</p>
								<h2 className="wp-block-heading">Choose Between Hazards</h2> <p>Sometimes dangers will be on both sides of the road at the same time. For example, parked cars to the right and oncoming cars to the left.</p>
								<p>
									If one danger is greater than the other, give more space to the most dangerous situation. Suppose you are on a two-lane road with an oncoming vehicle to the left and a bicyclist ahead to your right. Instead of driving between the vehicle and the bicyclist, take one danger at a
									time. Slow down and let the oncoming vehicle pass. When the vehicle has passed, move to the left to allow plenty of space (at least three feet) to pass the bicyclist. If there is a steady flow of oncoming vehicles, use as much of the left lane as you safely can to pass the
									bicyclist.
								</p>
								<h2 className="wp-block-heading">Know How to Handle Emergencies</h2> <p>There are many types of emergencies you may encounter when you drive. Knowing how to handle emergencies can help keep you safe.</p> <h3 className="wp-block-heading">Tire Blowout</h3>
								<p>
									If you have a tire blowout, do not panic or overreact. Suddenly braking or abruptly removing your foot from the accelerator can result in a loss of control over the vehicle. Instead, you should take the following steps recommended by the National Highway Traffic Safety
									Administration:
								</p>
								<ul>
									<li>Hold the steering wheel with both hands.</li> <li>Maintain your vehicle speed if possible and safe.</li> <li>Gradually release the accelerator.</li> <li>Correct the steering as necessary to stabilize your vehicle and regain control.</li>
									<li>Look and steer in the direction you want your vehicle to go.</li> <li>Once your vehicle has stabilized, continue to slow down and pull off the road where and when it’s safe.</li>
								</ul>
								<h3 className="wp-block-heading">Driving Off the Pavement</h3> <p>If your wheels drift off the pavement:</p>
								<ol>
									<li>Grip the steering wheel firmly.</li> <li>Remove your foot from the accelerator.</li> <li>Brake gently.</li> <li>Check for traffic behind you.</li> <li>Carefully steer back onto the pavement.</li>
								</ol>
								<p>Do not pull or turn your steering wheel with too much force. This may cause you to drive into oncoming traffic.</p> <h3 className="wp-block-heading">Overheating Conditions</h3> <p>In extreme heat, you should:</p>
								<ul>
									<li>Watch the temperature gauge.</li> <li>Avoid driving at high speeds for long periods.</li> <li>Turn off the air conditioner.</li>
								</ul>
								<p>In extreme cold, you should:</p>
								<ul>
									<li>Watch the temperature gauge. The engine may not have the correct level of antifreeze.</li> <li>Use the defroster or slightly open your windows to keep them from fogging up.</li>
								</ul>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										See the vehicle owner’s manual for more information.
									</span>
								</p>
								<h3 className="wp-block-heading">If Your Vehicle Becomes Disabled on the Freeway</h3> <p>If your vehicle stops working on the freeway:</p>
								<ol>
									<li>Safely pull over to the right shoulder.</li> <li>Exit on the right side so you are away from traffic if you must get out of the vehicle.</li> <li>Dial 511 from your cell phone or locate call box for assistance..</li>
									<li>Return to your vehicle as soon as you can. Get back into the vehicle from the right side (away from traffic).</li> <li>Stay inside your vehicle with your seat belt on until help arrives.</li>
									<li>Use your emergency flashers at your discretion. They can help other vehicles see you at night and in different weather conditions.</li>
								</ol>
								<p>There are certain circumstances where it is safer to get out of your vehicle and stay away. These include situations where there is:</p>
								<ul>
									<li>Not enough space on the shoulder.</li> <li>A guardrail.</li> <li>An area for you to safely stay away from freeway lanes.</li>
								</ul>
								<h4 className="wp-block-heading">California Highway Patrol (CHP) Freeway Service Patrol (FSP)</h4> <p>During commute times, the CHP FSP provides free emergency roadside services in certain areas. If you get stuck on the freeway because your vehicle stops running, FSP will:</p>
								<ul>
									<li>Provide a gallon of gas if you run out.</li> <li>Jump start your vehicle if the battery is dead.</li> <li>Refill your radiator and tape hoses.</li> <li>Change a flat tire.</li> <li>Report a collision to CHP.</li>
								</ul>
								<p>If FSP cannot start your vehicle, they will have it towed (free of charge) to a CHP-approved location. CHP will notify an auto club or towing service.</p> <p>FSP will not:</p>
								<ul>
									<li>Tow your vehicle to a private repair service or residence.</li> <li>Recommend tow service companies or repair and body shops.</li> <li>Tow motorcycles.</li> <li>Help vehicles which have been involved in a collision, unless they are directed to by CHP.</li>
								</ul>
								<p>Call 511 for FSP information and assistance.</p> <h3 className="wp-block-heading">Disabled Vehicles on Railroad Tracks</h3>
								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<p>If your vehicle stalls or stops while blocking part of a train track with a train approaching and warning lights flashing:</p>
										<ul>
											<li>Immediately exit your vehicle. Run away from the tracks diagonally in the direction the train is coming from. Then call 911.</li>
										</ul>
										<p>If you do not see a train approaching and warning lights are not flashing:</p>
										<ul>
											<li>Exit your vehicle. Dial the number located on the railroad crossing posts or metal control box near the tracks. Provide the crossing number (if posted). Tell them a vehicle is on the tracks. Then call 911.</li>
										</ul>
									</div>
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full is-resized">
											<img
												fetchpriority="high"
												decoding="async"
												width="510"
												height="402"
												src="https://www.dmv.ca.gov/portal/uploads/2020/05/disabled_vehicle_railroad.png"
												alt="picture of a disabled vehicle blocking an oncoming train"
												className="wp-image-179385"
												style={{ width: "350px" }}
												srcSet="https://www.dmv.ca.gov/portal/uploads/2020/05/disabled_vehicle_railroad.png 510w, https://www.dmv.ca.gov/portal/uploads/2020/05/disabled_vehicle_railroad-300x236.png 300w, https://www.dmv.ca.gov/portal/uploads/2020/05/disabled_vehicle_railroad-15x12.png 15w, https://www.dmv.ca.gov/portal/uploads/2020/05/disabled_vehicle_railroad-359x283.png 359w"
												sizes="(max-width: 510px) 100vw, 510px"
											/>
										</figure>
									</div>
								</div>
								<h2 className="wp-block-heading">Do Not Drive Distracted</h2> <p>Avoid distractions while you drive. Some common distractions are:</p>
								<ul>
									<li>Looking at a phone, navigation system, children, and pets.</li> <li>Changing music or volume.</li> <li>Applying makeup or shaving.</li>
								</ul>
								<h2 className="wp-block-heading">Cell Phones and Texting</h2> <p>Cell phones are the main source of distracted driving.&nbsp;Driving while using a handheld cell phone is unsafe and illegal.&nbsp;</p> <p>Adult drivers should only use a cell phone in hands-free mode when necessary.</p>
								<ul>
									<li>Do not answer your cell phone if it rings. Let the call go to voicemail. If you must return or make a call, pull safely off the road.</li> <li>Do not send or read text messages or emails while driving.</li>
									<li>Mount your cell phone on the windshield, dashboard, or center console. It cannot block your view of the road.</li> <li>Use the single swipe or touch feature on the mounted cell phone.</li>
								</ul>
								<h2 className="wp-block-heading">Minors And Cell Phones</h2> <p>It is against the law for a minor to use a cell phone or electronic wireless device to answer calls and send or respond to text messages while driving.</p>
								<p>
									<strong>EXCEPTION</strong>: Minors may use a cell phone to make a call for emergency assistance.
								</p>
								<h2 className="wp-block-heading">Be Familiar with New Technology</h2>
								<p>The technology in vehicles is always advancing. We will see more self-driving vehicles and vehicles with advanced driver assistance systems (ADAS) on the road. Vehicles with these systems may respond to road situations differently than a human driver would.</p>
								<h2 className="wp-block-heading">Be Aware of Carbon Monoxide</h2>
								<p>All gas-powered vehicles produce carbon monoxide. Carbon monoxide is a deadly odorless gas released from a vehicle’s exhaust pipe. Never start your vehicle inside the garage with the door closed. Symptoms of carbon monoxide poisoning include:</p>
								<ul>
									<li>Tiredness</li> <li>Yawning</li> <li>Dizziness</li> <li>Nausea</li> <li>Headache</li> <li>Ringing in the ears</li>
								</ul>
								<p>If you are experiencing any of these symptoms, have your exhaust system checked.</p>
							</div>
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving-cont1/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-92977">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/alcohol-and-drugs/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-22151">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
