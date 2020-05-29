import React, { useState, useEffect } from 'react';

function SnapImage(props) {
    const { from, duration, imageData } = props;
    const [counter, setCounter] = useState(duration);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-4">
            <div className="snap-frame h-50">
                <img src={imageData} className='snap-image' />
            </div>
            <h3 className="text-white text-center mb-5">From : {from}</h3>
            <h1 className="counter-strike text-white text-center">{counter}</h1>
            <button className="btn btn-lg btn-block btn-secondary mt-5" onClick={props.updateSnaps}>Back</button>
        </div>
    );
}

export default SnapImage;