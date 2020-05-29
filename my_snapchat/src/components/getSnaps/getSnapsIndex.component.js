import React, { useState, useEffect } from 'react';
import { getSnaps } from '../../utils/axiosAPI';
import SnapsList from './snapsList.component';
import ShowSnap from './showSnap.component';

function GetSnapsIndex(props) {
    const [selectedSnap, setSelectedSnap] = useState(false);
    const [snaps, setSnaps] = useState([]);

    function showSnap(id, from, duration) {
        setSelectedSnap(<ShowSnap id={id} from={from} duration={duration} />);
    }

    function updateSnaps() {
        getSnaps()
            .then(res => {
                setSnaps(res.data.data);
            })
            .catch(err => console.log(err));
        setSelectedSnap(false);
    }

    useEffect(() => {
        getSnaps()
            .then(res => {
                setSnaps(res.data.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {selectedSnap || <SnapsList snaps={snaps} showSnap={showSnap}/>}
        </div>
    );
}

export default GetSnapsIndex;