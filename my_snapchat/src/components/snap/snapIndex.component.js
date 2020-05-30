import React, { useState } from 'react';
import SendSnap from './sendSnap.component';
import ChoiceSnap from './choiceSnap.component';

function SnapIndex(props) {
    const [isCliqued, setIsCliqued] = useState(false);

    function handleImg(data) {
        setIsCliqued(<SendSnap handleClick={handleChoiceImg} imageFile={data} />)
    }

    function handleChoiceImg(choice) {
        choice = choice === 'snaped' ? <SendSnap handleClick={handleChoiceImg} /> : <ChoiceSnap handleClick={handleChoiceImg} handleImg={handleImg}/>;
        setIsCliqued(choice);
    }

    return (
        <div className="login-index">
            <div className={"logo"}>
                <img src="https://cdn.frankerfacez.com/emoticon/145916/4" alt="KKOMRADE"></img>
                <h1 className="text-center">Take a Snap</h1>
            </div>
            <div className="d-flex flex-column justify-content-center vh-100">
                {isCliqued || <ChoiceSnap handleClick={handleChoiceImg} handleImg={handleImg}/>}
            </div>
        </div>
    );
}

export default SnapIndex;