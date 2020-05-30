import React, { useState, useEffect } from 'react';
import { getSnap, postSeen } from '../../utils/axiosAPI';
import SnapImage from './snapImage.component';

function ShowSnap(props) {
    const { id, from, duration, updateSnaps} = props;
    const [imageData, setImageData] = useState();
    const [deleted, setDeleted] = useState(false);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        getSnap(id)
            .then(res => {
                let myImage = new Image;
                myImage.src = URL.createObjectURL(res.data);
                setImageData(myImage.src);
                setStartCounter(true);
                postSeen(id);
            })
            .catch(() => {
                setDeleted(true);
            })

        const timer = setTimeout(() => {
            updateSnaps();
        }, (duration * 1000));
        return () => clearTimeout(timer);
    }, [duration, id, updateSnaps]);

    return (
        <div>
            {deleted ? <h1 className="text-white text-center mt-5">Snap deleted</h1>
            : <SnapImage startCounter={startCounter} updateSnaps={props.updateSnaps} from={from} duration={duration} imageData={imageData} />}
        </div>
    );
}

export default ShowSnap;