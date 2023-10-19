import React , { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarMenu from "../layout/header/navbarMenu";
import GetStartedModal from "../layout/getStarted/modal/GetStartedModal";
// import { delete_account } from "../../a.actions/auth_Actions";
import { update_user_profile } from "../../a.actions/profile_Actions";
import { create_user_profile } from "../../a.actions/profile_Actions";
import classes from './dashboard.module.css';

const Dashboard = () => {
    console.log('Dashboard')
    const dispatch = useDispatch();

    const { navbarMenuStatus } = useSelector(state => state.user);
    let navbarMenu = <NavbarMenu />;
    navbarMenuStatus ? navbarMenu = <NavbarMenu /> : navbarMenu = "";

    const { getStartedModalStatus } = useSelector(state => state.user);
    let modal = <GetStartedModal />;
    getStartedModalStatus ? modal = <GetStartedModal /> : modal = "";

    const profile_id = useSelector(state => state.prof.profile_id);
    const first_name_global = useSelector(state => state.prof.first_name);
    const last_name_global = useSelector(state => state.prof.last_name);
    const phone_global = useSelector(state => state.prof.phone);
    const city_global = useSelector(state => state.prof.city);

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone:'',
        city:''
    });

    const { first_name, last_name, phone, city } = formData;
    useEffect(() =>{
        console.log('Dashboard.useEffect')
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            phone: phone_global,
            city: city_global
        })
    },[first_name_global])

    var SubmitButtonText = "Create"
    const checkProfStatus = () => {
        console.log('Dashboard.checkProfStatus')
        if (profile_id){
            SubmitButtonText = "Submit";
        } else {
            SubmitButtonText = "Create";
        }
    }

    checkProfStatus();

    const onChange = e  => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        console.log('Dashboard.onSubmit')
        e.preventDefault();
        if (profile_id) {
            dispatch(update_user_profile(first_name, last_name, phone, city));
        } else {
            dispatch(create_user_profile(first_name, last_name, phone, city));
        }
    };

    return (
        <div className={classes.outer_container_top}>
            {navbarMenu}
            {modal}
            <div className={classes.main}>
                <div className={classes.container2}>
                    <h1>Welcome to your User Dashboard</h1>
                    <p>Update your user profile below: </p>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className={classes.input_section}>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type='text'
                                placeholder={`${first_name_global}`}
                                name='first_name'
                                onChange={e => onChange(e)}
                                value={first_name}
                                required
                            />
                        </div>
                        <div className={classes.input_section}>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type='text'
                                placeholder={`${last_name_global}`}
                                name='last_name'
                                onChange={e => onChange(e)}
                                value={last_name}
                            />
                        </div>
                        <div className={classes.input_section}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type='text'
                                placeholder={`${phone_global}`}
                                name='phone'
                                onChange={e => onChange(e)}
                                value={phone}
                            />
                        </div>
                        <div className={classes.input_section}>
                            <label htmlFor="city">City</label>
                            <input
                                type='city'
                                placeholder={`${city_global}`}
                                name='city'
                                onChange={e => onChange(e)}
                                value={city}
                            />
                        </div>
                        <button type='submit'>{SubmitButtonText}</button>
                    </form>
                    <p>
                        Click the button below to delete your account:
                    </p>
                    <button 
                    href='#!'
                    // onClick={() => dispatch(delete_account())}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;