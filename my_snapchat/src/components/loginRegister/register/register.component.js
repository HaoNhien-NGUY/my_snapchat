import React, { useState, useEffect } from 'react';

function Register(props) {
    const [formControl, setFormControl] = useState({});
    const [isInvalid, setIsInvalid] = useState(false);

    function handleChange(event) {
        setFormControl({ ...formControl, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        let invalids = {};

        if(formControl.email){
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formControl.email))) {
                invalids.email = 'Please enter a correct email adress';
            }
        } else {
            invalids.email = 'Email required';
        }
        
        if(formControl.password) {
            if(formControl.password.length < 5) {
                invalids.password = 'Your password need to be at least 5 characters long';
            }
        } else {
            invalids.password = 'Password required';
        }

        if(formControl.cpassword){
            if(formControl.cpassword !== formControl.password) {
                invalids.cpassword = 'Password do not match';
            }
        } else {
            invalids.cpassword = 'Password confirmation required';
        }

        if(Object.keys(invalids).length === 0) {
            props.handleSubmit(formControl);
            setIsInvalid(invalids);   
        } else {
            setIsInvalid(invalids);   
        }
    }


    useEffect(() => {
        if(props.errorMessage) {
            setIsInvalid({email:props.errorMessage});
        }
    }, [props.errorMessage]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <form onSubmit={handleSubmit} className="px-5">
                        <div className="form-group">
                            <label className="white">Email</label>
                            <input type="text" className={"form-control " + (isInvalid.email ? 'is-invalid' : '')} name="email" onChange={handleChange} />
                            <div className="invalid-feedback">{ isInvalid.email }</div>
                        </div>
                        <div className="form-group">
                            <label className="white">Password</label>
                            <input type="password" className={"form-control " + (isInvalid.password ? 'is-invalid' : '')} name="password" onChange={handleChange} />
                            <div className="invalid-feedback">{isInvalid.password}</div>
                        </div>
                        <div className="form-group has-danger">
                            <label className="white">Confirm Password</label>
                            <input type="password" className={"form-control " + (isInvalid.cpassword ? 'is-invalid' : '')} name="cpassword" onChange={handleChange} />
                            <div className="invalid-feedback">{isInvalid.cpassword}</div>
                        </div>
                        <div className="text-center mt-4">
                            <small className="form-text text-white">Already have an account ? <span onClick={() => props.handleClick('login')}><b><u>login</u></b></span></small>
                            <button type="submit" className="btn btn-warning white mt-3">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;