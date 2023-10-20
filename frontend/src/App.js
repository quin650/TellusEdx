import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import { useDispatch, useSelector} from 'react-redux';
import { userReducerActions } from './a.reducers/auth_Reducers';

function App() {
    console.log('App')
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);
    useEffect(() => {
        userInfo && dispatch(userReducerActions.authSuccess())
        console.log('App.UseEffect')
    }, [userInfo]);

    return (
        <Fragment>
            <header>
                <MainNavbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};
export default App;