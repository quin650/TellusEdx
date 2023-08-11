import React, { Fragment }  from "react";
import HomeTop from "../layout/body/1_HomeTop";
import HomeMiddle from "../layout/body/2_HomeMiddle";
import Dashboard from "./dashboard";
import { useSelector } from 'react-redux';

const Home = () => {
    const { isAuthenticated } = useSelector(state => state.user);


    const homepage = (<Fragment><HomeTop /><HomeMiddle /></Fragment>);
    const dashboard = (<Fragment><Dashboard /></Fragment>);
    
    return(<Fragment>{ !isAuthenticated ? homepage : dashboard }</Fragment>);
};

export default Home;