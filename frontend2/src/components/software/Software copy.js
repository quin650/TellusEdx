import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { update_profile } from "../../actions/profile";
import { delete_account } from "../../actions/auth";

import classes from './software.module.css';

const Software = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone:'',
        city:''
        
    });

    const { first_name, last_name, phone, city } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(update_profile(first_name, last_name, phone, city));
    };


    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Welcome to your User Notes</h1>
                <p>Update your user notes below: </p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={classes.input_section}>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type='text'
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
                            onChange={e => onChange(e)}
                            name='last_name'
                            value={last_name}
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type='text'
                            onChange={e => onChange(e)}
                            name='phone'
                            value={phone}
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="city">City</label>
                        <input
                            type='city'
                            onChange={e => onChange(e)}
                            name='city'
                            value={city}
                        />
                    </div>
                    <button type='submit'>Update</button>
                </form>
                <p>
                    Click the button below to delete your account:
                </p>
                <button 
                href='#!'
                onClick={() => dispatch(delete_account())}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Software;