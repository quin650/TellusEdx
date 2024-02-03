import React, { Fragment }  from "react";
import { useSelector } from 'react-redux';
import HomeTop from "../layout/body/1_HomeTop";
import HomeMiddle from "../layout/body/2_HomeMiddle";
import Dashboard from "./dashboard";

const Home = () => {
    // console.log('Home')
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
    const homepage = (<Fragment><HomeTop /><HomeMiddle /></Fragment>);
    const dashboard = (<Fragment><Dashboard /></Fragment>);
    return(<Fragment>{ !isAuthenticated ? homepage : dashboard }</Fragment>);
};

export default Home;