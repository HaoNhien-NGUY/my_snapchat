import React from 'react';
import WebCam from './webcam.component';

function ChoiceImage(props) {

    function getImage(e) {
        props.handleImg(e.target.files[0]);
    }

    return (
        <div className="px-5">
            <label className="labelfile">
                <p className='choiceSnap'>Choose Image</p>
                <input type="file" className="inputfile" onChange={getImage}/>
            </label>
            <WebCam handleImg={props.handleImg}/>
        </div>
    );
}

export default ChoiceImage;