import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Route, Routes, useLocation} from 'react-router-dom';
import { userReducerActions } from './a.reducers/auth_Reducers';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import Demo from './components/pages/demo';
import AboutUs from './components/pages/AboutUs';
import SupportCenter from './components/pages/SupportCenter';
import Help from './components/pages/Help';
// import { checkAuthenticated } from './a.actions/auth_Actions';

const App = () => {
    const dispatch = useDispatch();
    const isDemoView = useSelector(({ user }) => user.isDemoView)
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/demo') {
            dispatch(userReducerActions.setDemoView());
        } else if (isDemoView && location.pathname !== '/demo') {
            dispatch(userReducerActions.setRegularView());
        }
    }, [location, dispatch, isDemoView]);

    // const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
    // useEffect(()=>{
    //     dispatch(checkAuthenticated());
    // },[])

    return (
        <main>
            <header>
                { !isDemoView ? <MainNavbar /> :  ''}  
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/supportcenter" element={<SupportCenter />} />
                <Route path="/help" element={<Help />} />
            </Routes>
            <footer >
                { !isDemoView ? <Footer /> :  ''}      
            </footer >
        </main>
    );
};
export default App;