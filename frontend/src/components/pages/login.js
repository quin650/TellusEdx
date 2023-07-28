import React , { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../../actions/auth";
import CSRFToken from "../csrftoken";
import classes from './login.module.css';

const Login = () => {
    const { isAuthenticated } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        dispatch(login(username, password));
    };

    if (isAuthenticated)
        return <Navigate to="/home" />;

    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Sign In</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken />
                    <div className={classes.input_section}>
                        <label>Username: </label>
                        <input
                            type='text'
                            placeholder='Username*'
                            name='username'
                            onChange={e => onChange(e)}
                            value={username}
                            required
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label>Password: </label>
                        <input
                            type='password'
                            placeholder='Password*'
                            name='password'
                            onChange={e => onChange(e)}
                            value={password}
                            minLength='6'
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <p>
                    Don't have an Account? <Link to='/register'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;