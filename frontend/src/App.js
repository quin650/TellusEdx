import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Route, Routes, useLocation} from 'react-router-dom';
import { userReducerActions } from './a.reducers/auth_Reducers';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import Demo from './components/pages/demo';
import AboutUs from './components/pages/aboutUs';
import SupportCenter from './components/pages/supportCenter';
import Help from './components/pages/help';
import TableOfContents from './components/features/1TableOfContents';
// import { checkAuthenticated } from './a.actions/auth_Actions';

const App = () => {
    const dispatch = useDispatch();
    const isDemoView = useSelector(({ user }) => user.isDemoView)
    const location = useLocation();
    const [contents, setContents] = useState([]);
    const [activePage, setActivePage] = useState('');

    useEffect(()=>{
        const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
        if (isDark){
            document.querySelector("main").setAttribute("data-theme", "dark");
        } else{
            document.querySelector("main").setAttribute("data-theme", "light");
        }
        dispatch(userReducerActions.setDarkLightMode(isDark));
    },[])

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

    useEffect(() => {
        let contentsArray = []
        const contentsId = document.querySelectorAll('div[id]');
        Array.from(contentsId).map((element) => {
            if (isNaN(element.id)){
                contentsArray.push(element.id);
            }
        });
        setContents(contentsArray);
    }, [location]); 

    useEffect(() => {
        const handleScroll = () => {
            const pages = document.querySelectorAll('div[id]');
            let currentPage = '';
            pages.forEach(page => {
                const rect = page.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentPage = page.id;
                }
            });
            setActivePage(currentPage);
        };
        const scrollContainer = document.querySelector('main');
        scrollContainer.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <main>
            <header>
                { !isDemoView ? <MainNavbar /> :  ''}  
            </header>
            <TableOfContents contents={contents} activePage={activePage} />
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