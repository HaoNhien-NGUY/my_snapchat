import React, { useState, useEffect } from 'react';
import { getAll, postSnap } from '../../utils/axiosAPI';

function SendSnap(props) {
    let url = URL.createObjectURL(props.imageFile);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getAll().then(res => {
            setUserList(res.data.data)
        });
    }, []);

    function headersSnap() {
        let duration = document.getElementById("selectDuration").value;
        let recipient = document.getElementById("selectRecipient").value;
        var formData = new FormData();

        // const data = {
        //     'duration': duration,
        //     'to': recipient,
        //     'image': props.imageFile
        // }
        formData.set("to", recipient);
        formData.set("duration", duration);
        formData.append("image", props.imageFile);
    
        
        postSnap(formData).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });

        props.handleClick('send');
    }

    return (
        <div className="px-5 pt-5 test">
            <img src={url} className='apercuSnap' />
            <select id="selectDuration">
                <option value='3'>3</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
            </select>
            <select id="selectRecipient">
                {userList.map(e => (<option key={e.email}>{e.email}</option>))}
            </select>
            <button className="sendsnap" onClick={headersSnap}>Send <i className="fas fa-paper-plane"></i></button>
            <p className="mt-5 w-100 text-center text-white" onClick={() => props.handleClick('send')}><u>Take another picture</u></p>
        </div>
    );
}

export default SendSnap;