import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import { useDispatch, useSelector} from 'react-redux';
import { userReducerActions } from './a.reducers/auth_Reducers';

function App() {
    // console.log('App')
    const dispatch = useDispatch();
    const userInfo = useSelector(({ user }) => user.userInfo);
    //Above call, is good  b/c it is specific to the state we want, and only pulls that one, so only rerendering happens when this specific state happens
    //Bad call b/c it pulls the whole slice and will cause a re-render if any other unrelated state changes
    //const { userInfo } = useSelector(state => state.user);


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