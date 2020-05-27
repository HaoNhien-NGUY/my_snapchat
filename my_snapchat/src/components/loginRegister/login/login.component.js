import React, { useState } from 'react';

function Login(props) {
    const [formControl, setFormControl] = useState();


    function handleChange(event) {
        setFormControl({ ...formControl, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(formControl);
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label className="white text-left">
                        Email
                <input type="text" className="form-control" name="email" onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label className="white text-left">
                        Password
                <input type="password" className="form-control" name="password" onChange={handleChange} />
                    </label>
                </div>
                <small className="form-text text-primary">Don't have an account yet ? <span onClick={() => props.handleClick('register')}><b><u>Sign up</u></b></span></small>
                <button type="submit" className="btn btn-warning white mt-3">Login</button>
            </form>
        </div>
    );
}

export default Login;