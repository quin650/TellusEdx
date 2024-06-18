import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import { useDispatch, useSelector} from 'react-redux';
import { checkAuthenticated } from './a.actions/auth_Actions';

function App() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)
    useEffect(()=>{
        dispatch(checkAuthenticated());
    },[])

    return (
        <main>
            <header>
                { !isAuthenticated ? <MainNavbar /> :  ''}  {/* Navbar is removed when isAuth */}
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <footer >
                { !isAuthenticated ? <Footer /> :  ''}      {/* Footer is removed when isAuth */}
            </footer >
        </main>
    );
};
export default App;