import React, { useState } from 'react';
import Login from './login/login.component';
import Register from './register/register.component';
import ChoiceButtons from './choiceButtons.component';

function LoginIndex(props) {
    const [selectedPage, setSelectedPage] = useState(false);

    function handleChoice(choice) {
        choice = choice === 'register' ? <Register handleSubmit={handleRegister} handleClick={handleChoice}/> : <Login handleSubmit={handleLogin} handleClick={handleChoice}/>;
        setSelectedPage(choice);
    }

    function handleRegister(data) {
        console.log('OMEGALUL');
        
        // console.log(formControl);
    }

    function handleLogin(data) {
        console.log('OMEGALOGIN');
        
        // console.log(formControl);
    }

    return (
        <div className="login-index">
            <div className="logo">
                <img src="https://cdn.frankerfacez.com/emoticon/145916/4"></img>
                <h1 className="text-center">Our Snapchat</h1>
            </div>
            <div className="d-flex flex-column justify-content-center vh-100">
                {selectedPage || <ChoiceButtons handleClick={handleChoice}/>}
            </div>
        </div>
    );
}

export default LoginIndex;