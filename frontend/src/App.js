import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import Software from './components/software/Software';
import Explore from './components/pages/explore/Explore';
// import { checkAuthenticated } from './actions/auth_Actions';
// import { load_user_profile } from './actions/profile_Actions';
import { useDispatch, useSelector} from 'react-redux';
import { userReducerActions } from './a.reducers/auth_Reducers';

function App() {
    console.log('App')
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);
    useEffect(() => {
        userInfo && dispatch(userReducerActions.authSuccess())
        console.log('App.UseEffect')
        // dispatch(checkAuthenticated());
        // dispatch(load_user_profile());
    }, []);

    return (
        <Fragment>
            <header>
                <MainNavbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/software" element={<Software />} />
                    <Route path="/explore" element={<Explore />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};
export default App;