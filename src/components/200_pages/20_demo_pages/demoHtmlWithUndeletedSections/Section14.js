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
													<title id="title-arrow-chevron-down-blue-1613">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-72321">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-95199">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 14 of 22 </p> <h2 className="handbook-section__title">Section 8: Safe Driving</h2>
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
											<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont2/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-12224">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/safe-driving-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-57349">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
								<h2 className="wp-block-heading">Be Aware of Your Surroundings</h2> <p>To drive safely, you need to know what is around you. This helps you make good decisions and react to hazards on the road. This image shows the areas around your vehicle.</p>
								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<ul>
											<li>Green: Ahead of you.</li> <li>Blue: Next to you.</li> <li>Yellow: Blinds spots. </li> <li>Red: Behind you.</li>
										</ul>
									</div>
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												fetchpriority="high"
												decoding="async"
												width="263"
												height="255"
												src="https://www.dmv.ca.gov/portal/uploads/2023/02/Be-Aware-of-Your-Surroundings.png"
												alt="Image showing a driver's field of vision."
												className="wp-image-179235"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Be-Aware-of-Your-Surroundings.png 263w, https://www.dmv.ca.gov/portal/uploads/2023/02/Be-Aware-of-Your-Surroundings-12x12.png 12w"
												sizes="(max-width: 263px) 100vw, 263px"
											/>
										</figure>
									</div>
								</div>
								<h3 className="wp-block-heading">Scan Your Surroundings</h3> <p>To give yourself time to react, avoid last minute moves and hazards, always keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle.&nbsp;</p>
								<h3 className="wp-block-heading">Tailgating (Following Too Closely)</h3>
								<p>
									Tailgating makes it harder for you to see the road ahead because the vehicle in front of you blocks your view. You will not have enough time to react if the driver in front of you brakes suddenly. Use the three-second rule to ensure a safe following distance and avoid a collision.
									Following other vehicles at a safe distance gives you enough time to react if another driver makes a mistake.
								</p>
								<p>If a vehicle merges in front of you too closely, take your foot off the accelerator. This creates space between you and the vehicle ahead.</p> <p>Create more space in front of your vehicle when:</p>
								<ul>
									<li>A tailgater is behind you. Maintain your course and speed. Then, when safe to do so, merge right to change into another lane and allow the tailgater to pass.</li> <li>Following motorcyclists on metal surfaces (bridge gratings, railroad tracks, etc.), and gravel.</li>
								</ul>
								<h3 className="wp-block-heading">Know What is At Your Side</h3>
								<p>
									Be aware of what is on each side of you. To maintain enough space to
									<br />
									maneuver safely and react to other drivers:
								</p>
								<ul>
									<li>Do not stay in another driver’s blind spot.</li> <li>Avoid driving directly alongside other vehicles.</li> <li>Make space for vehicles entering freeways, even if you have the rightof-way. Be ready for rapid changes and watch for signals from other drivers.</li>
									<li>Keep space between your vehicle and parked vehicles.</li> <li>Look both ways, even at intersections where traffic has a red light or stop sign.</li>
								</ul>
								<h3 className="wp-block-heading">Blind Spots</h3> <p>Every vehicle has blind spots. These are areas around the vehicle that a driver cannot see when looking straight ahead or using the mirrors. For most vehicles, the blinds spots are at the sides, slightly behind the driver.</p>
								<p>To check your blind spots, look over your right and left shoulders out of your side windows. Only turn your head when you look. Do not turn your whole body or steering wheel. Check your blind spots before you:</p>
								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<ul>
											<li>Change lanes.</li> <li>Turn at an intersection.</li> <li>Merge with traffic.</li> <li>Back up.</li> <li>Leave a parking space.</li> <li>Parallel park.</li> <li>Pull out from the curb.</li> <li>Open your car door.</li>
										</ul>
									</div>
									<div className="wp-block-dmv-column col">
										<figure className="wp-block-image size-full">
											<img
												decoding="async"
												width="481"
												height="242"
												src="https://www.dmv.ca.gov/portal/uploads/2023/02/Blind-Spots.png"
												alt="Image depicting a driver's blind spots."
												className="wp-image-179268"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Blind-Spots.png 481w, https://www.dmv.ca.gov/portal/uploads/2023/02/Blind-Spots-300x151.png 300w, https://www.dmv.ca.gov/portal/uploads/2023/02/Blind-Spots-18x9.png 18w, https://www.dmv.ca.gov/portal/uploads/2023/02/Blind-Spots-450x226.png 450w"
												sizes="(max-width: 481px) 100vw, 481px"
											/>
											<figcaption className="wp-element-caption">
												<strong>The shaded areas are your blind spots</strong>
											</figcaption>
										</figure>
									</div>
								</div>
								<h3 className="wp-block-heading">Know What is Behind You</h3> <p>Knowing what is behind you can help you avoid rear-end collisions. Check traffic behind you often by using your rearview mirror, side mirrors, and turning your head when you:</p>
								<ul>
									<li>Change lanes.</li> <li>Check your blind spots.</li> <li>Reduce your speed.</li> <li>Turn into a side road or driveway.</li> <li>Stop to pull into a parking space.</li> <li>Pull up to and away from the curb.</li> <li>Back up.</li>
								</ul>
								<h2 className="wp-block-heading">Understand the Road Conditions</h2> <h3 className="wp-block-heading">Darkness</h3>
								<p>
									When driving at night, use your high-beam headlights on open country roads or dark city streets. Make sure you can stop in the distance lit by your headlights. Do not use high-beam headlights in areas where they are illegal. Dim your high-beam headlights to avoid blinding the
									driver of an oncoming vehicle. If another vehicle’s lights are too bright:
								</p>
								<ul>
									<li>Do not look directly into the oncoming headlights.</li> <li>Look toward the right edge of your lane.</li> <li>Watch the oncoming vehicle out of the corner of your eye.</li>
									<li>Do not react to the other driver by keeping your high-beam headlights on. This only makes it harder for both of you to see.</li>
								</ul>
								<p>When it is raining, use your low-beam headlights. Do not drive using only your parking lights. When you drive at night, remember:</p>
								<ul>
									<li>Motorcycles, pedestrians, and bicyclists are much harder to see.</li> <li>Highway construction can take place at night. Reduce your speed in highway construction zones.</li> <li>When you leave a brightly lit place, drive slowly until your eyes adjust to the darkness.</li>
									<li>When a vehicle with one light drives toward you, drive as far to the right as possible. It could be a bicyclist, motorcyclist, or vehicle with a missing headlight.</li>
								</ul>
								<h3 className="wp-block-heading">Sun Glare</h3> <p>To help manage sun glare:</p>
								<ul>
									<li>Keep the inside and outside of your windshield clean.</li> <li>Wear polarized sunglasses.</li> <li>Maintain enough space between your vehicle and the vehicles around you.</li> <li>Make sure your car visor works and is free of anything that would restrict use.</li>
									<li>Be aware of pedestrians. You may have difficulty seeing them.</li> <li>Try to avoid driving during sunrise and sunset.</li>
								</ul>
								<h3 className="wp-block-heading">Skids</h3> <p>A skid is when one or more of the tires lose traction with the road and the vehicle starts to slip. You may not be able to control your vehicle. There are a few different types of skids.</p>
								<h4 className="wp-block-heading">Slippery Surface Skids</h4>
								<p>Ice and packed snow on the road can cause your vehicle to skid. This is even more likely if you are driving too fast or going downhill. Drive slowly and leave space between your vehicle and the vehicle ahead of you. To prevent skidding on slippery surfaces:</p>
								<ul>
									<li>Slow down as you approach intersections and curves. For sharp curves, slow down as you approach and move through.</li> <li>Avoid fast turns and quick stops.</li> <li>Shift to low gear before going down a steep hill.</li>
									<li>Avoid areas like ice patches, wet leaves, oil, or standing water.</li>
								</ul>
								<p>If you start to skid, follow these steps:</p>
								<ol>
									<li>Slowly remove your foot from the accelerator</li> <li>Do not use the brakes.</li> <li>Turn the steering wheel in the direction of the skid.</li> <li>Try to get a wheel on dry pavement.</li>
								</ol>
								<h4 className="wp-block-heading">Locked Wheel Skids</h4>
								<p>A locked wheel skid is usually caused by braking too hard when you are going too fast. If this happens, your vehicle will skid no matter which way the steering wheel is turned. To get out of a locked wheel skid if your vehicle is equipped with:</p>
								<ul>
									<li>Four-wheel antilock braking system (ABS), apply firm pressure on the brake pedal.</li>
									<li>
										Rear-wheel ABS (common in light trucks):
										<ul>
											<li>Ease up on the brake pedal while maintaining just enough pressure to allow the front wheels to roll again so you can steer.</li> <li>Stop braking and turn the steering wheel into the direction of the skid.</li>
										</ul>
									</li>
									<li>Front-wheel ABS, remove your foot from the brake pedal to unlock the wheels. Steer in the direction you want to go and straighten the front wheels as the vehicle begins to straighten out.</li>
								</ul>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										To determine if your vehicle has ABS, refer to the vehicle owner’s manual.
									</span>
								</p>
								<p>If your vehicle is not equipped with ABS and begins to skid, quickly pump your brakes until you are at a safe speed. If you:</p>
								<ul>
									<li>Press the brake pedal and it sinks to the floor, quickly pump the brakes by gently applying and releasing pressure on your brake pedal.</li> <li>Pump the brakes, down shift your vehicle into a lower or neutral gear to slow down. Then try using your emergency brake to stop.</li>
								</ul>
								<p>If your brakes get wet, you can dry them by lightly pressing the accelerator and brake pedals at the same time. Only do this until the brakes dry.</p> <h3 className="wp-block-heading">Slippery Roads</h3>
								<p>Rain, snow, or mud can make the roads slippery. Drive more slowly than you would on a dry road. Adjust your speed for different conditions:</p>
								<ul>
									<li>
										<strong>Wet road: </strong>Reduce your speed by 5 to 10 mph.
									</li>
									<li>
										<strong>Packed snow:</strong> Reduce your speed by half.
									</li>
									<li>
										<strong>Ice:</strong> Reduce your speed to no more than 5 mph.
									</li>
								</ul>
								<p>Some road surfaces are more slippery than others when wet. These usually have warning signs posted. Here are situations where the road may be more slippery:</p>
								<ul>
									<li>Shade from trees or buildings can hide icy spots on cold, wet days. These areas freeze first and dry out last.</li> <li>Bridges and overpasses tend to freeze before the rest of the road. They can have icy spots.</li>
									<li>When it starts to rain, the pavement can be very slippery.</li>
								</ul>
								<p>Slow down at the first sign of rain, drizzle, or snow on the road. This is especially true if it has been dry and hot for some time, because oil and dust on the road’s surface have not been washed away.</p>
								<p>
									Turn on your windshield wipers, low-beam headlights, and defroster. In a heavy rainstorm or snowstorm, you may not be able to see more than 100 feet in front of your vehicle. If you cannot see farther than 100 feet, it is not safe to drive faster than 30 mph. You may have to stop
									from time to time to wipe mud or snow off your windshield, headlights, and taillights. If you drive in snowy areas, carry snow chains for your tires. Snow chains give your tires more traction. Carry the correct number and type of chains for your vehicle.
								</p>
								<h3 className="wp-block-heading">Hydroplaning</h3>
								<p>
									Hydroplaning occurs when driving in wet or rainy conditions. Hydroplaning is a vehicle riding on water because the tires lose all contact with the road. A slight change of direction, applying the brakes, or a gust of wind could throw the vehicle into a skid. To avoid hydroplaning:
								</p>
								<ul>
									<li>Drive slowly.</li> <li>Steer around standing water, if possible.</li> <li>Slow down if you hear sloshing sounds from the tires.</li> <li>Slow down when changing lanes or direction.</li>
								</ul>
								<p>If your vehicle starts to hydroplane:</p>
								<ul>
									<li>Slow down gradually.</li> <li>Do not use the brakes. Sudden braking may cause you to lose control of your vehicle.</li>
								</ul>
								<h3 className="wp-block-heading">Stuck in Snow or Mud</h3> <p>If stuck in the snow or mud, follow these steps:</p>
								<ol>
									<li>Shift into a low gear and keep the front wheels straight.</li> <li>Gently step on the accelerator. Avoid spinning the wheels.</li> <li>Drive slowly forward as far as possible.</li> <li>Shift into reverse and slowly back up as far as possible. Do not spin the wheels.</li>
									<li>Shift into a low gear again and drive forward.</li> <li>Repeat a forward-backward motion until the vehicle rolls free.</li> <li>In deep mud or snow, put boards, tree branches, etc., under the tires. Only take this action when the vehicle is stopped.</li>
								</ol>
								<h3 className="wp-block-heading">Flooded Roads</h3> <p>Excessive water on a road may cause flooding. This can happen gradually or suddenly. It is important to understand the dangers of water on the road, including:</p>
								<ul>
									<li>Being swept off the road.</li> <li>Floating debris and unseen hazards.</li> <li>The road collapsing.</li> <li>Vehicle malfunction.</li> <li>Electrocution if there are fallen power lines.</li>
								</ul>
								<p>
									It may not be possible to determine the depth of the flood by looking. If the water is deep, the road may be too dangerous to cross. It is best to find another route. If you have no other option but to drive through a flooded road, drive slowly. After you make it through the water,
									test your brakes to make sure they work correctly.
								</p>
								<h3 className="wp-block-heading">High Winds</h3> <p>High winds can be a hazard while driving. This is especially true for larger vehicles such as trucks, campers, and vehicles with trailers. When driving in high winds:</p>
								<ul>
									<li>Reduce your speed. This gives you better control over your vehicle. You will have more time to react if your vehicle gets hit by a strong gust of wind.</li>
									<li>Maintain a firm hand position on the steering wheel. Strong wind gusts are unpredictable. If you are not holding the wheel properly and a gust hits, you can lose control of the vehicle.</li>
									<li>Be alert. Look ahead and watch for any debris on the road. Give yourself enough time to react to road hazards.</li> <li>Do not use cruise control. Maintain maximum control of the accelerator if a gust occurs.</li>
									<li>Be proactive. It may be safer to pull over and wait for the storm to pass.</li>
								</ul>
								<h3 className="wp-block-heading">Fog or Heavy Smoke</h3> <p>It is best to avoid driving in heavy fog or smoke. Consider postponing your trip until the fog clears. If you must drive in heavy fog or smoke:</p>
								<ul>
									<li>Drive slowly.</li> <li>Use your low-beam headlights. High-beam headlights will reflect back and cause glare.</li> <li>Never drive using only your parking or fog lights.</li> <li>Make sure you can stop within the space you can see ahead.</li>
									<li>Increase your following distance.</li> <li>Use your windshield wipers and defroster as necessary.</li> <li>Avoid crossing lanes or passing traffic unless absolutely necessary.</li> <li>Listen for traffic you cannot see.</li>
								</ul>
								<p>If the fog becomes too thick to drive safely, consider pulling off the road. Activate your emergency flashers and wait for conditions to improve.</p> <h3 className="wp-block-heading">Law Enforcement Traffic Breaks</h3>
								<p>During a traffic break, the officer turns on their emergency lights and slowly weaves across lanes. Law enforcement uses traffic breaks to:</p>
								<ul>
									<li>Slow or stop traffic to remove hazards from the road.</li> <li>Slow or stop traffic during heavy fog or unusual traffic conditions.</li> <li>Prevent collisions during unusual conditions.</li>
								</ul>
								<p>You should:</p>
								<ul>
									<li>Turn on your emergency flashers to warn other drivers.</li> <li>Slowly decrease your speed to the same speed as the officer. Do not brake suddenly unless necessary to avoid a collision. Keep a safe distance from the patrol vehicle ahead of you.</li>
									<li>Not drive past the patrol vehicle. Do not speed up until the officer turns off their emergency lights and traffic conditions allow you to return to your normal speed.</li>
								</ul>
							</div>
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont2/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-64663">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving-cont1/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-37792">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
