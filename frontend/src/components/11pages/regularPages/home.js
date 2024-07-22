import React, { Fragment }  from "react";
import { useSelector } from 'react-redux';
import HomeTop from "../../10layout/20body/1_HomeTop";
import HomeMiddle from "../../10layout/20body/2_HomeMiddle";
import Dashboard from "../../20authenticated/Dashboard/Dashboard";

const Home = () => {
    // console.log('Home')
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
    const homepage = (<Fragment><HomeTop /><HomeMiddle /></Fragment>);
    const dashboard = (<Fragment><Dashboard /></Fragment>);
    return(<Fragment>{ !isAuthenticated ? homepage : dashboard }</Fragment>);
};

export default Home;