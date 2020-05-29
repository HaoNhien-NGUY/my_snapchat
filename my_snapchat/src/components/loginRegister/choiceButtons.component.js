import React from 'react';

function ChoiceButtons(props) {

    function onRegisterClick(e) {
        e.preventDefault();
        props.handleClick('register');
    }

    function onLoginClick(e) {
        e.preventDefault();
        props.handleClick('login');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 px-5">
                    <button type="button" className="btn btn-warning btn-lg btn-block mb-4" onClick={onRegisterClick}>Sign up</button>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default ChoiceButtons;