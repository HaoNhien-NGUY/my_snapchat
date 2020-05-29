import React, { useState } from 'react';
import Login from './login/login.component';
import Register from './register/register.component';
import ChoiceButtons from './choiceButtons.component';
import { postRegister, postLogin } from '../../utils/axiosAPI';
import { loginUser } from '../../utils/auth';

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
        setSelectedPage(<Register handleSubmit={handleRegister} handleClick={handleChoice} errorMessage={null}/>);

        postRegister(data.email, data.password)
            .then(() => {
                setSelectedPage(<Login handleSubmit={handleLogin} handleClick={handleChoice} loginEmail={data.email} registered={true}/>)
            })
            .catch(() => {
                setSelectedPage(<Register handleSubmit={handleRegister} handleClick={handleChoice} errorMessage={'Email already taken.'}/>);
            });
    }

    function handleLogin(data) {
        setSelectedPage(<Login handleSubmit={handleLogin} handleClick={handleChoice} loginEmail={data.email} errorMessage={null}/>)
        postLogin(data.email, data.password)
            .then(res => {
                loginUser(res.data.data.email, res.data.data.token);
                props.handleLogin(res.data.data.email);
            })
            .catch(() => {
                setSelectedPage(<Login handleSubmit={handleLogin} handleClick={handleChoice} loginEmail={data.email} errorMessage={'Incorrect email or password.'}/>)
            });
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