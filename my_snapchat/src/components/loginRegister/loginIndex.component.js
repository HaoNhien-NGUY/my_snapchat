import React, { useState } from 'react';
import Login from './login/login.component';
import Register from './register/register.component';
import ChoiceButtons from './choiceButtons.component';
import { postRegister } from '../../utils/axiosAPI';
import Cookies from 'js-cookie';

function LoginIndex(props) {
    const [selectedPage, setSelectedPage] = useState(false);

    function handleChoice(choice) {
        if (choice === 'register') {
            setSelectedPage(<Register handleSubmit={handleRegister} handleClick={handleChoice} />);
        } else {
            setSelectedPage(<Login handleSubmit={handleLogin} handleClick={handleChoice} />);
        }
    }

    function handleRegister(data) {
        postRegister(data.email, data.password)
            .then(res => {
                console.log(res);
                console.log(res.data.data.email);
                console.log(data.email);

                setSelectedPage(<Login handleSubmit={handleLogin} handleClick={handleChoice} loginEmail={data.email} />)
            })
            .catch(err => {
                setSelectedPage(<Register handleSubmit={handleRegister} handleClick={handleChoice} errorMessage={'Email already taken'}/>);
            });
    }

    function handleLogin(data) {
        console.log('OMEGALOGIN');
        Cookies.set('userToken', 'wFEKbkz6wvgH5fg2dVkejSAZ');
    }

    return (
        <div className="login-index">
            <div className="logo">
                <img src="https://cdn.frankerfacez.com/emoticon/145916/4"></img>
                <h1 className="text-center">Our Snapchat</h1>
            </div>
            <div className="d-flex flex-column justify-content-center vh-100">
                {selectedPage || <ChoiceButtons handleClick={handleChoice} />}
            </div>
        </div>
    );
}

export default LoginIndex;