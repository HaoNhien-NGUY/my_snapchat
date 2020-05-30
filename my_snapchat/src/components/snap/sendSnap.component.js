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

        let formData = new FormData();
        formData.set("to", recipient);
        formData.set("duration", duration);
        formData.append("image", props.imageFile);

        postSnap(formData).then(() => {
            console.log('sent');
        }).catch(() => {
            console.log('error');
        });

        props.handleClick('send');
    }

    return (
        <div className="px-2 pt-0 test">
            <img src={url} className='apercuSnap' alt="snapPreview" />
            <div className="px-5">
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
            </div>
            <p className="mt-3 w-100 text-center text-white" onClick={() => props.handleClick('send')}><u>Take another picture</u></p>
        </div>
    );
}

export default SendSnap;