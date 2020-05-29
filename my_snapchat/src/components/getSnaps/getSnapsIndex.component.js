import React, { useState, useEffect } from 'react';
import { getSnaps } from '../../utils/axiosAPI';
import SnapsList from './snapsList.component';
import ShowSnap from './showSnap.component';

function GetSnapsIndex(props) {
    const [selectedSnap, setSelectedSnap] = useState(false);
    const [snaps, setSnaps] = useState([]);

    function showSnap(id, from, duration) {
        setSelectedSnap(<ShowSnap id={id} from={from} duration={duration} updateSnaps={updateSnaps} />);
    }

    function updateSnaps() {
        getSnaps()
            .then(res => {
                setSnaps(res.data.data);
                setSelectedSnap(false);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        function getSnapsFN() {
            getSnaps()
                .then(res => {
                    setSnaps(res.data.data);
                })
                .catch(err => console.log(err));
        }
        getSnapsFN();
        const interval = setInterval(() => {
            getSnapsFN();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {selectedSnap || <SnapsList snaps={snaps} showSnap={showSnap} updateSnaps={updateSnaps} />}
        </div>
    );
}

export default GetSnapsIndex;