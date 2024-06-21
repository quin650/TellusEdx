import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import SearchBar from './searchBar';
import GetStartedButton from '../getStarted/button/GetStartedButton';
import { logout_APIAction } from '../../../a.actions/auth_Actions';
import { userReducerActions } from '../../../a.reducers/auth_Reducers';
import Logo from '../../../../static/images/1Logo.png';
import classes from './NavbarMenu.module.css';

const NavbarMenu = () => {
    const handleClickScroll = () => {
        document.querySelector('main').scrollTo(0,0)
    };
    const homeIcon = (
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 0.0625L0.75 7.9375H3.375V18.4375H8.625V13.1875H13.875V18.4375H19.125V7.85875L21.75 7.9375L11.25 0.0625Z" fill="#9E9E9E"/>
        </svg>
    );
    const dashboardIcon = (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.75 1.14062C0.75 0.786818 1.03682 0.5 1.39062 0.5H9.55859C9.9124 0.5 10.1992 0.786818 10.1992 1.14063V12.1914C10.1992 12.5452 9.9124 12.832 9.55859 12.832H1.39062C1.03682 12.832 0.75 12.5452 0.75 12.1914V1.14062ZM2.35156 2.10156V11.2305H8.59766V2.10156H2.35156ZM11.8008 1.14062C11.8008 0.786818 12.0876 0.5 12.4414 0.5H20.6094C20.9632 0.5 21.25 0.786818 21.25 1.14063V6.42578C21.25 6.77959 20.9632 7.06641 20.6094 7.06641H12.4414C12.0876 7.06641 11.8008 6.77959 11.8008 6.42578V1.14062ZM13.4023 2.10156V5.46484H19.6484V2.10156H13.4023ZM11.8008 9.30859C11.8008 8.95479 12.0876 8.66797 12.4414 8.66797H20.6094C20.9632 8.66797 21.25 8.95479 21.25 9.30859V20.3594C21.25 20.7132 20.9632 21 20.6094 21H12.4414C12.0876 21 11.8008 20.7132 11.8008 20.3594V9.30859ZM13.4023 10.2695V19.3984H19.6484V10.2695H13.4023ZM0.75 15.0742C0.75 14.7204 1.03682 14.4336 1.39062 14.4336H9.55859C9.9124 14.4336 10.1992 14.7204 10.1992 15.0742V20.3594C10.1992 20.7132 9.9124 21 9.55859 21H1.39062C1.03682 21 0.75 20.7132 0.75 20.3594V15.0742ZM2.35156 16.0352V19.3984H8.59766V16.0352H2.35156Z" fill="#9E9E9E"/>
        </svg>
    );
    const aboutUsIcon = (
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 7.67422C16.2847 7.67422 17.8125 6.36465 17.8125 4.74922C17.8125 3.13379 16.2847 1.82422 14.4 1.82422M14.6625 10.8242H14.7938C17.6208 10.8242 19.9125 12.7886 19.9125 15.2117C19.9125 16.0194 19.1486 16.6742 18.2063 16.6742H16.5M11.5125 4.74922C11.5125 6.36465 9.9847 7.67422 8.10002 7.67422C6.21535 7.67422 4.68752 6.36465 4.68752 4.74922C4.68752 3.13379 6.21535 1.82422 8.10002 1.82422C9.9847 1.82422 11.5125 3.13379 11.5125 4.74922ZM4.29377 16.6742H11.9063C12.8486 16.6742 13.6125 16.0194 13.6125 15.2117C13.6125 12.7886 11.3208 10.8242 8.49377 10.8242H7.70627C4.87927 10.8242 2.58752 12.7886 2.58752 15.2117C2.58752 16.0194 3.35144 16.6742 4.29377 16.6742Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const supportCenterIcon = (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00004 5.33333H7.16671C6.68048 5.33333 6.21416 5.52649 5.87034 5.8703C5.52653 6.21412 5.33337 6.68044 5.33337 7.16667V18.1667C5.33337 18.6529 5.52653 19.1192 5.87034 19.463C6.21416 19.8068 6.68048 20 7.16671 20H16.3334C16.8196 20 17.2859 19.8068 17.6297 19.463C17.9736 19.1192 18.1667 18.6529 18.1667 18.1667V7.16667C18.1667 6.68044 17.9736 6.21412 17.6297 5.8703C17.2859 5.52649 16.8196 5.33333 16.3334 5.33333H14.5M9.00004 5.33333C9.00004 5.81956 9.19319 6.28588 9.53701 6.6297C9.88083 6.97351 10.3471 7.16667 10.8334 7.16667H12.6667C13.1529 7.16667 13.6193 6.97351 13.9631 6.6297C14.3069 6.28588 14.5 5.81956 14.5 5.33333M9.00004 5.33333C9.00004 4.8471 9.19319 4.38079 9.53701 4.03697C9.88083 3.69315 10.3471 3.5 10.8334 3.5H12.6667C13.1529 3.5 13.6193 3.69315 13.9631 4.03697C14.3069 4.38079 14.5 4.8471 14.5 5.33333M9.00004 13.5833L10.8334 15.4167L14.5 11.75" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const helpIcon = (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29233 8.5C8.79558 7.43208 10.1532 6.66667 11.75 6.66667C13.7758 6.66667 15.4167 7.89775 15.4167 9.41667C15.4167 10.7 14.2452 11.7771 12.6612 12.0814C12.1643 12.1767 11.75 12.5764 11.75 13.0833M11.75 15.8333H11.7592M20 11.25C20 12.3334 19.7866 13.4062 19.372 14.4071C18.9574 15.4081 18.3497 16.3175 17.5836 17.0836C16.8175 17.8497 15.9081 18.4574 14.9071 18.872C13.9062 19.2866 12.8334 19.5 11.75 19.5C10.6666 19.5 9.5938 19.2866 8.59286 18.872C7.59193 18.4574 6.68245 17.8497 5.91637 17.0836C5.15029 16.3175 4.5426 15.4081 4.12799 14.4071C3.71339 13.4062 3.5 12.3334 3.5 11.25C3.5 9.06196 4.36919 6.96354 5.91637 5.41637C7.46354 3.86919 9.56196 3 11.75 3C13.938 3 16.0365 3.86919 17.5836 5.41637C19.1308 6.96354 20 9.06196 20 11.25Z" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const languageIcon = (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1117_999)">
                <path d="M10.65 0.25C8.02436 0.25 5.50625 1.29303 3.64964 3.14964C1.79303 5.00625 0.75 7.52436 0.75 10.15C0.75 12.7756 1.79303 15.2937 3.64964 17.1504C5.50625 19.007 8.02436 20.05 10.65 20.05C13.2756 20.05 15.7937 19.007 17.6504 17.1504C19.507 15.2937 20.55 12.7756 20.55 10.15C20.55 7.52436 19.507 5.00625 17.6504 3.14964C15.7937 1.29303 13.2756 0.25 10.65 0.25V0.25ZM1.971 10.898H4.732C4.776 11.899 4.9157 12.8934 5.15 13.868H2.774C2.33093 12.934 2.05895 11.928 1.971 10.898ZM11.398 4.958V1.559C12.458 1.96185 13.3291 2.74659 13.84 3.759C14.0655 4.1407 14.2646 4.5378 14.434 4.947L11.398 4.958ZM14.94 6.443C15.1952 7.4143 15.347 8.4098 15.391 9.413H11.398V6.443H14.94ZM9.902 1.559V4.958H6.866C7.03569 4.54847 7.23418 4.15147 7.46 3.77C7.96871 2.75344 8.84005 1.96453 9.902 1.559ZM9.902 6.443V9.413H5.92C5.964 8.4098 6.1158 7.4143 6.371 6.443H9.902ZM4.732 9.402H1.971C2.05895 8.37195 2.33093 7.36603 2.774 6.432H5.15C4.91525 7.40621 4.77527 8.40084 4.732 9.402ZM5.92 10.898H9.902V13.868H6.371C6.11584 12.8968 5.96466 11.9012 5.92 10.898ZM9.913 15.298V18.697C8.85295 18.2942 7.98189 17.5094 7.471 16.497C7.24518 16.1155 7.04669 15.7185 6.877 15.309L9.913 15.298ZM11.398 18.697V15.353H14.434C14.2643 15.7625 14.0658 16.1595 13.84 16.541C13.3291 17.5534 12.458 18.3382 11.398 18.741V18.697ZM11.398 13.813V10.843H15.38C15.3353 11.8462 15.1842 12.8418 14.929 13.813H11.398ZM16.579 10.843H19.34C19.252 11.873 18.9801 12.879 18.537 13.813H16.15C16.381 12.856 16.5207 11.8803 16.568 10.898L16.579 10.843ZM16.579 9.358C16.5286 8.37494 16.385 7.39889 16.15 6.443H18.526C18.9693 7.378 19.241 8.3834 19.329 9.413L16.579 9.358ZM17.679 4.958H15.71C15.3537 3.95733 14.8373 3.02115 14.181 2.186C15.5498 2.80044 16.7388 3.75466 17.635 4.958H17.679ZM7.119 2.186C6.46265 3.02115 5.94627 3.95733 5.59 4.958H3.665C4.56119 3.75466 5.75018 2.80044 7.119 2.186ZM3.654 15.386H5.59C5.94627 16.3867 6.46265 17.3229 7.119 18.158C5.74639 17.5343 4.55704 16.5684 3.665 15.353L3.654 15.386ZM14.17 18.158C14.8263 17.3229 15.3427 16.3867 15.699 15.386H17.635C16.7333 16.5732 15.5448 17.5119 14.181 18.114L14.17 18.158Z" fill="#9E9E9E"/>
            </g>
            <defs>
                <clipPath id="clip0_1117_999">
                    <rect width="22" height="22" fill="white" transform="translate(0.75 0.25)"/>
                </clipPath>
            </defs>
        </svg>
    );
    const darkModeIcon = (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6784 15.2529C16.2628 15.5766 17.9074 15.4275 19.4078 14.8241C18.7936 16.3525 17.7361 17.6621 16.3714 18.5845C15.0066 19.5068 13.3971 19.9997 11.7499 19.9996C9.83446 19.9976 7.97935 19.3292 6.50262 18.1093C5.0259 16.8893 4.01954 15.1936 3.65606 13.3129C3.29258 11.4322 3.59462 9.48368 4.51041 7.80129C5.42619 6.1189 6.89868 4.80747 8.67544 4.0918C8.07209 5.59217 7.923 7.23679 8.2467 8.82121C8.57039 10.4056 9.35261 11.86 10.4961 13.0035C11.6396 14.147 13.0939 14.9292 14.6784 15.2529Z" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const logInIcon = (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 7.58398L16.3333 11.2507M16.3333 11.2507L12.6667 14.9173M16.3333 11.2507L3.5 11.2507M8.08333 7.58398V6.66732C8.08333 5.93797 8.37306 5.2385 8.88879 4.72277C9.40451 4.20705 10.104 3.91732 10.8333 3.91732L17.25 3.91732C17.9793 3.91732 18.6788 4.20705 19.1945 4.72277C19.7103 5.2385 20 5.93797 20 6.66732V15.834C20 16.5633 19.7103 17.2628 19.1945 17.7785C18.6788 18.2943 17.9793 18.584 17.25 18.584H10.8333C10.104 18.584 9.40451 18.2943 8.88879 17.7785C8.37306 17.2628 8.08333 16.5633 8.08333 15.834V14.9173" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    const logOutIcon = (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5833 14.666L19.25 10.9993M19.25 10.9993L15.5833 7.33268M19.25 10.9993H6.41667M11.9167 14.666V15.5827C11.9167 16.312 11.6269 17.0115 11.1112 17.5272C10.5955 18.043 9.89601 18.3327 9.16667 18.3327H5.5C4.77065 18.3327 4.07118 18.043 3.55546 17.5272C3.03973 17.0115 2.75 16.312 2.75 15.5827V6.41602C2.75 5.68667 3.03973 4.9872 3.55546 4.47147C4.07118 3.95575 4.77065 3.66602 5.5 3.66602H9.16667C9.89601 3.66602 10.5955 3.95575 11.1112 4.47147C11.6269 4.9872 11.9167 5.68667 11.9167 6.41602V7.33268" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
    const dispatch = useDispatch();

    let content = (<GetStartedButton />)

    isAuthenticated 
    ? content = null 
    : content = (<GetStartedButton />)

    const LogInHandler = () => {
        dispatch(userReducerActions.getStartedModalLogIn());
    }
    const LogOutHandler = () => {
        dispatch(logout_APIAction());
        dispatch(userReducerActions.navBarMenuClose());
    }

    let option = (<a href='#' onClick={LogInHandler} className={classes.menuItemLast}><i className={classes.icon} onClick={LogInHandler}>{logInIcon}</i><span>Log in</span></a>)
    isAuthenticated
    ? option = (<a  href='#' onClick={LogOutHandler} className={classes.menuItemLast}><i className={classes.icon} onClick={LogOutHandler}>{logOutIcon}</i><span>Log in</span></a>)
    : option = (<a href='#' onClick={LogInHandler} className={classes.menuItemLast}><i className={classes.icon} onClick={LogInHandler}>{logInIcon}</i><span>Log in</span></a>)

    return (
        <div className={classes.blurredBackgroundContainer}>
            <menu className={classes.sidebar}>
                <div className={classes.top}>
                    <div className={classes.outerLogoContainer}>
                        <Link to="/home" onClick={handleClickScroll} className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                        <span className={classes.companyName} onClick={handleClickScroll} >TellusEd</span>
                    </div>
                    <SearchBar />
                    <div className={classes.sidebarMenu}>
                        <a href='home.html' className={classes.menuItem}><i className={classes.icon}>{homeIcon}</i><span>Home</span></a>
                        <a href='demo.html' className={classes.menuItem}><i className={classes.icon}>{dashboardIcon}</i><span>Demo</span></a>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.subgroup}>
                        <div className={classes.sidebarMenu}>
                            <a href='aboutus.html' className={classes.menuItem}><i className={classes.icon}>{aboutUsIcon}</i><span>About Us</span></a>
                            <a href='supportcenter.html' className={classes.menuItem}><i className={classes.icon}>{supportCenterIcon}</i><span>Support Center</span></a>
                            <a href='help.html' className={classes.menuItem}><i className={classes.icon}>{helpIcon}</i><span>Help</span></a>
                        </div>
                    </div>

                    <div className={classes.break}></div>

                    <div className={classes.subgroup}>
                        <div className={classes.sidebarMenu}>
                            <a href='language.html' className={classes.menuItem}><i className={classes.icon}>{languageIcon}</i><span>Language</span></a>
                            <a href='darkmode.html' className={classes.menuItem}><i className={classes.icon}>{darkModeIcon}</i><span>Dark Mode</span><input type="checkbox" checked /></a>
                        </div>
                    </div>

                    <div className={classes.break}></div>

                    <div className={classes.subgroup}>
                    {option}
                    {content}
                    </div>

                </div>
            </menu>
        </div>
    );
};

export default NavbarMenu;

