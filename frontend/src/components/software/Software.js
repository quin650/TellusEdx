import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { update_note } from "../../actions/profile";
// import { delete_account } from "../../actions/auth";

import classes from './software.module.css';

const Software = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        note_place_id:'',
        note_tags:'',
        note:''
        
    });

    const { note_place_id, note_tags, note } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(update_note(note_place_id, note_tags, note));
    };


    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Welcome to your User Notes</h1>
                <p>Update your user notes below: </p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={classes.input_section}>
                        <label htmlFor="note_place_id">note_place_id</label>
                        <input
                            type='text'
                            name='note_place_id'
                            onChange={e => onChange(e)}
                            value={note_place_id}
                            required
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="note_tags">note_tags</label>
                        <input
                            type='text'
                            onChange={e => onChange(e)}
                            name='note_tags'
                            value={note_tags}
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="note">note</label>
                        <input
                            type='text'
                            onChange={e => onChange(e)}
                            name='note'
                            value={note}
                        />
                    </div>
                    <button type='submit'>Update</button>
                </form>
                <p>
                    Click the button below to delete your account:
                </p>
                {/* <button 
                href='#!'
                onClick={() => dispatch(delete_account())}
                >
                    Delete
                </button> */}
            </div>
        </div>
    );
};

export default Software;