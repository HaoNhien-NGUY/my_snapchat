import React, { useState, useEffect } from 'react';

function SnapImage(props) {
    const { from, duration, imageData } = props;
    const [counter, setCounter] = useState(duration);

    useEffect(() => {
        let interval;
        if(props.startCounter) {
            interval = setInterval(() => {
                setCounter(counter => counter - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [props.startCounter]);

    return (
        <div className="px-4">
            <div className="snap-frame h-50">
                <img src={imageData} className='snap-image' alt="snapimage" />
            </div>
            <h3 className="text-white text-center mb-3">From : {from}</h3>
            <h1 className="counter-strike text-white text-center">{counter}</h1>
            <button className="btn-back btn btn-lg btn-block btn-secondary mt-3" onClick={props.updateSnaps}>Back</button>
        </div>
    );
}

export default SnapImage;