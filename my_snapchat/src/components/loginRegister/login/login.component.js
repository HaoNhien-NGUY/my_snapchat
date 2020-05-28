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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <form onSubmit={handleSubmit} className="px-5" >
                        <div className="form-group">
                            <label className="white text-left">Email</label>
                            <input type="text" className="form-control" value={props.loginEmail} name="email" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="white text-left">Password</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} />
                        </div>
                        <div className="text-center mt-4">
                            <small className="form-text text-primary">Don't have an account yet ? <span onClick={() => props.handleClick('register')}><b><u>Sign up</u></b></span></small>
                            <button type="submit" className="btn btn-warning white mt-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;