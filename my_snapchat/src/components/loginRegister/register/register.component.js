import React, { useState } from 'react';

function Register(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confPassword, setConfPassword] = useState('');

    //{email: email, password:password, cpassword: cpassword}
    //setFormControl(formControl => formControle)
    const [formControl, setFormControl] = useState();


    function handleChange(event) {
        //   setState({ [event.target.name]: event.target.value });
        setFormControl({ ...formControl, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formControl);
    }

    return (
        <div className="container my-5 text-center">
            <form onSubmit={handleSubmit} className="forminscri">
                <div className="form-group">
                    <label className="white">
                        Email:
                <input type="text" className="form-control" name="email" onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label className="white">
                        Password:
                <input type="password" className="form-control" name="password" onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label className="white">
                        Confirm Password:
                <input type="password" className="form-control" name="cpassword" onChange={handleChange} />
                    </label>
                </div>
                <small className="form-text text-muted white">Already have an account ? login</small>
                <button type="submit" className="btn btn-warning white">Submit</button>
            </form>
        </div>
    );
}

export default Register;