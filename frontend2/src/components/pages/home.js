import React, { Fragment }  from "react";
import LandingPage0 from "../layout/body/landingPage0";
import LandingPage1 from "../layout/body/landingPage1";
import Dashboard from "./dashboard";
import { useSelector } from 'react-redux';

const Home = () => {
    const { isAuthenticated } = useSelector(state => state.user);

    const homepage = (<Fragment><LandingPage0 /><LandingPage1 /></Fragment>);
    const dashboard = (<Fragment><Dashboard /></Fragment>);
    
    return(<Fragment>{ !isAuthenticated ? homepage : dashboard }</Fragment>);
};

export default Home;