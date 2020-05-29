import React, { useState, useEffect } from 'react';
import { getSnap } from '../../utils/axiosAPI';

function ShowSnap(props) {
    const { id, from, duration } = props;
    const [imageData, setImageData] = useState();

    useEffect(() => {
        getSnap(id).then(res => {
            let myImage = new Image;
            myImage.src = URL.createObjectURL(res.data);
            setImageData(myImage.src);
        });

        const timer = setTimeout(() => {
            //remove from snaps
        }, (duration*1000));
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <img src={imageData} className='apercuSnap' />
        </div>
    );
}

export default ShowSnap;