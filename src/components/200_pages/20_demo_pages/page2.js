import React, { Fragment } from "react";
import classes from "../../500_demos/10_demo_DMV_ClassC/demo_DMV_ClassC.module.css";

const Page1A = () => {
	return (
		<Fragment>
			<div className={classes.handbook_header_section}>
				<p>Page 2 of 24 </p>
				<h1>Secretary’s Message</h1>
			</div>
			<div className={classes.page_content}>
				<h3>Secretary’s Message</h3>
				<div className={classes.imageDivColContainer}>
					<div className={classes.imageDivCol}>
						<p>
							Whether traveling by car, transit, bike, scooter, skateboard or on foot, we all want to reach our destination safely. Tragically, many Californians do not.
						</p>
						<p>
							Since 2010, more than 30,000 people have been killed and another 100,000 people seriously injured on California roads. This deadly trend is getting worse,
							especially for people walking or biking. We’ve seen a nearly 50 percent rise in annual deaths and serious injuries for pedestrians and greater than 60
							percent increase in bicyclists killed per year since 2010.
						</p>
						<p>
							Unlike those of us traveling in vehicles with seat belts, airbags and other safety features, people outside of vehicles don’t have the same level of
							protection and are more vulnerable every time they are on the road. Their safety must always be top of mind when we’re driving.
						</p>
						<p>
							California is doing everything possible to implement comprehensive traffic safety measures to eliminate deaths and serious injuries on our roadways. It
							includes strategies to reduce our dependence on driving, to the way we design roads and intersections, to expanding safe walking and biking options.
						</p>
						<p>
							But we need your help. Without all of us practicing safe driving habits, these avoidable tragedies will continue to occur. Please make sure to buckle up,
							follow all traffic laws, pay extra attention to pedestrians and bicyclists, and do not drive if you’re distracted or impaired.
						</p>
						<p>
							I hope the information in this California Driver’s Handbook can help everyone on the road – drivers, bicyclists and pedestrians – reach their destination
							safely. Because it’s about more than just learning the rules of the roads. It could be a matter of life and death.
						</p>
						<p>Wishing you safe journeys,</p>
						<p>Sincerely,</p>
						<figure>
							<img
								decoding="async"
								width="239"
								height="53"
								src="/portal/uploads/2020/04/ToksOmishakinsignture.jpg"
								alt="Toks Omishakin signture"
								className="wp-image-153358"
								title="David S. Kim signature"
								srcSet="https://www.dmv.ca.gov/portal/uploads/2020/04/ToksOmishakinsignture.jpg 239w, https://www.dmv.ca.gov/portal/uploads/2020/04/ToksOmishakinsignture-18x4.jpg 18w"
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
					</div>
					<div className={classes.imageDivCol}>
						<div className={classes.imageDiv}>
							<figure className="aligncenter size-full">
								<img
									className={classes.image0}
									loading="lazy"
									decoding="async"
									// width="auto"
									// height="auto"
									src="/portal/uploads/2022/07/Toks-Omishakin.png"
									alt="Secretary of California State Transportation Agency Toks Ominshakin"
									srcSet="https://www.dmv.ca.gov/portal/uploads/2022/07/Toks-Omishakin.png 227w, https://www.dmv.ca.gov/portal/uploads/2022/07/Toks-Omishakin-10x12.png 10w"
									style={{
										minWidth: "200px !important",
										maxWidth: "300px !important",
										marginLeft: "2%",
									}}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Page1A;
