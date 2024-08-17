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
													<title id="title-arrow-chevron-down-blue-81095">arrow-chevron-down-blue</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-chevron-down-blue"></use>
												</svg>
											</div>
										</div>
										<a className="handbook-pdf-link download-icon download-icon--disabled">
											<span className="screen-reader-text">Download PDF</span>
											<svg className="icon icon-download" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-download-3583">download</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-download"></use>
											</svg>
										</a>
									</li>
									<li className="format-wrapper format-sign-language">
										American Sign Language Video
										<a href="https://www.youtube.com/playlist?list=PL2ZduCrEeD5yon5twvvlkNBJQ7FHO4D7l" className="video__icon">
											<span className="screen-reader-text">Play Video on YouTube</span>
											<svg className="icon icon-play-btn" height="16" width="16" aria-hidden="true" role="presentation">
												<title id="title-play-btn-98563">play-btn</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-play-btn"></use>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div className="handbook-section__header dark">
								<p className="handbook-section__counter xxsmall"> Section 15 of 22 </p> <h2 className="handbook-section__title">Section 8: Safe Driving (Continued)</h2>
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
											<a href="/portal/handbook/california-driver-handbook/safe-driving/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-prev-72591">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
												</svg>
												Previous Section
											</a>
										</li>
										<li>
											<a href="/portal/handbook/california-driver-handbook/safe-driving-cont2/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
												Next Section
												<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
													<title id="title-arrow-long-next-37676">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
											<li className="menu-item active current">
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
								<h2 className="wp-block-heading">Protect Yourself and Your Passengers</h2> <h3 className="wp-block-heading">Seat Belts</h3>
								<div className="wp-block-dmv-columns content-columns colums-1-2-1-2">
									<div className="wp-block-dmv-column col">
										<p>You and your passengers must wear seat belts. You can get a ticket if you do not. If your passenger is under 16 years old, you can also get a ticket if they are not wearing their seat belt.</p>
										<p>Wearing the lap belt and shoulder harness of a seat belt will increase your chance of survival in most types of collisions. This image shows what can happen in a collision.</p>
										<p>
											When you are in a collision, your vehicle stops. But you keep moving at the same speed you were traveling. You only stop when you hit the dashboard or windshield. If you are struck from the side, the impact could push you back and forth across the seat. Seat and shoulder belts
											keep you in a better position to control the vehicle. They may also minimize serious injuries.
										</p>
										<p>It is important to wear the seat belt correctly to avoid injury or death:</p>
										<ul>
											<li>Wear the shoulder harness across your shoulder and chest. There should be little to no slack. Do not wear the shoulder belt under your arm or behind your back.</li>
											<li>Adjust the lap belt so that it is snug and lies low across your hips. Otherwise you might slide out of the belt in a crash.</li>
											<li>If you are pregnant, wear the lap belt as low as possible under your abdomen. Place the shoulder strap between your breasts and to the side of your abdomen’s bulge.</li>
										</ul>
									</div>
									<div className="wp-block-dmv-column col">
										<div className="wp-block-dmv-spacer-block spacer-box"></div>
										<figure className="wp-block-image size-full">
											<img
												fetchpriority="high"
												decoding="async"
												width="341"
												height="347"
												src="https://www.dmv.ca.gov/portal/uploads/2023/02/Impact.png"
												alt="Image showing how your body would be thrown during an traffic collision."
												className="wp-image-179358"
												srcSet="https://www.dmv.ca.gov/portal/uploads/2023/02/Impact.png 341w, https://www.dmv.ca.gov/portal/uploads/2023/02/Impact-295x300.png 295w, https://www.dmv.ca.gov/portal/uploads/2023/02/Impact-12x12.png 12w, https://www.dmv.ca.gov/portal/uploads/2023/02/Impact-278x283.png 278w"
												sizes="(max-width: 341px) 100vw, 341px"
											/>
										</figure>
										<p>
											<strong>IMPACT – </strong>If the red arrow were another car hitting your car on the driver’s side:
										</p>
										<ol>
											<li>You would first be thrown against the driver’s side door,</li> <li>Then you would be thrown toward the passenger’s side door.</li>
										</ol>
									</div>
								</div>
								<h3 className="wp-block-heading">Child Restraint System and Safety Seats</h3> <p>You must secure children with a federally-approved child passenger restraint system or safety belt. The requirements depend on the child’s height and age.</p>
								<ul>
									<li>
										<strong>Children who are under 2 years old, under 40 pounds, and under 3 feet 4 inches tall:</strong> Secure in a rear-facing child passenger restraint system.
									</li>
								</ul>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										A child in a rear-facing child passenger restraint system may not ride in the front seat of an airbag-equipped vehicle.
									</span>
								</p>
								<ul>
									<li>
										<strong>Children who are under 8 years old, or who are less than 4 feet 9 inches tall:</strong> Secure in a child passenger restraint system in a rear seat. In some cases, children under 8 years old may ride in the front seat of a vehicle in a federally-approved child passenger
										restraint system. They may ride in the front seat if:
										<ul>
											<li>There is no rear seat.</li> <li>The rear seats are side-facing jump seats.</li> <li>The child passenger restraint system cannot be installed properly in the rear seat.</li> <li>All rear seats are already occupied by children 7 years old or younger.</li>
											<li>Medical reasons prevent the child from riding in the back seat.</li>
										</ul>
									</li>
									<li>
										<strong>Children who are 8 years old or older, or at least 4 feet 9 inches tall:</strong> May use a properly secured safety belt that meets federal standards.
									</li>
								</ul>
								<p>Your local law enforcement agency or fire department can check the installation of your child passenger restraint system. As your child grows, check that the child passenger restraint system is the right size.</p> <h3 className="wp-block-heading">Air Bags</h3>
								<p>Air bags are a valuable safety feature on many vehicles. They can help keep you safer than a seat belt alone.</p>
								<p>
									Ride at least 10 inches from the airbag cover, as long as you can maintain full control of your vehicle. Measure from the center of the steering wheel to your breastbone. Contact your vehicle dealer or manufacturer if you cannot safely sit 10 inches away from the air bag. They may
									have advice about additional ways to move back from your air bag. Passengers should also sit at least 10 inches away from the passenger-side air bag.
								</p>
								<p>
									<span role="region" aria-label="Note" className="format-label--note">
										Children seated next to a side air bag may be at risk of serious or fatal injury.
									</span>
								</p>
								<h3 className="wp-block-heading">Unattended Children and Pets</h3> <p>It is illegal to leave a child who is six years old or younger unattended in a vehicle. A child may be left under the supervision of a person who is at least 12 years old.</p>
								<p>
									It is dangerous and illegal to leave children or animals in a hot vehicle. The temperature inside a parked vehicle can rise rapidly when it is sitting in the sun. This is true even if a window is left slightly open. Too much exposure to heat can lead to dehydration, heat stroke,
									and death.
								</p>
							</div>
							<nav className="handbook-pagination container container--wide" aria-label="Pagination">
								<ul className="horiz handbook-pagination__list">
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving/" className="btn btn-sq btn-prev txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											<svg className="icon icon-arrow-long-prev" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-prev-79702">arrow-long-prev</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-prev"></use>
											</svg>
											Previous Section
										</a>
									</li>
									<li>
										<a href="/portal/handbook/california-driver-handbook/safe-driving-cont2/" className="btn btn-sq btn-next txt--spacing txt--tighten pb-10 pt-12 pl-20 pr-15">
											Next Section
											<svg className="icon icon-arrow-long-next" height="10" width="19" aria-hidden="true" role="presentation">
												<title id="title-arrow-long-next-66758">arrow-long-next</title> <use href="https://www.dmv.ca.gov/portal/wp-content/themes/dmv/dist/svg/svg-sprite.svg?ver=1721779593#icon-arrow-long-next"></use>
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
