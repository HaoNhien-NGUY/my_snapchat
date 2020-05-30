import React from 'react';
import ListItem from './listItem.component';

function SnapsList(props) {
    const { snaps } = props;

    return (
        <div className="snaplist">
            <div className="logo">
                <img src="https://cdn.frankerfacez.com/emoticon/145916/4" alt="KKOMRADE"></img>
                <h1 className="text-center">Your Snaps</h1>
            </div>
            <div className="container px-3">

                <div className="list px-2">
                    {snaps.map(snap => <ListItem key={snap.snap_id} showSnap={props.showSnap} id={snap.snap_id} from={snap.from} duration={snap.duration} />)}
                </div>

            </div>
            <button className="btn btn-secondary btn-refresh" onClick={props.updateSnaps}>refresh</button>

        </div>
    );
}

export default SnapsList;