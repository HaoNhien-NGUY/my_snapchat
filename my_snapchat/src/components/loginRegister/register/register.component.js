import React, { useState } from 'react';

function Register(props) {
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
            {/* <h2 className="text-white mb-4">Sign up</h2> */}
            <form onSubmit={handleSubmit}>
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
                <div className="form-group">
                    <label className="white text-left">
                        Confirm Password
                <input type="password" className="form-control" name="cpassword" onChange={handleChange} />
                    </label>
                </div>
                <small className="form-text text-primary">Already have an account ? <span onClick={() => props.handleClick('login')}><b><u>login</u></b></span></small>
                <button type="submit" className="btn btn-warning white mt-3">Sign up</button>
            </form>
        </div>
    );
}

export default Register;