import React from "react";
import { useSelector } from "react-redux";
import NavbarMenuButton from "./features/navbarMenuButton";
import classes from "./demoNavbar.module.css";

const DemoNavbar = () => {
	const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);

	return (
		<nav className={classes.inner_container_nav}>
			<li className={classes.NavItem1}>
				<button className={classes.headerSubNav}>
					<svg
						aria-hidden="true"
						focusable="false"
						viewBox="0 0 16 16"
						width="16"
						height="16"
						fill="currentColor"
					>
						<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
					</svg>
				</button>
			</li>
			<li className={classes.NavItem3}>
				<NavbarMenuButton />
			</li>
		</nav>
	);
};

export default DemoNavbar;
