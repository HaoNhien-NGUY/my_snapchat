import React, { useState } from 'react';
import SnapIndex from './snap/snapIndex.component';
import GetSnapsIndex from './getSnaps/getSnapsIndex.component';

function MainApp(props) {
    const [page, setPage] = useState(<GetSnapsIndex />);

    function handleSendClick() {
        setPage(<SnapIndex />);
    }

    function handleSnapsClick() {
        setPage(<GetSnapsIndex />);
    }

    return (
        <div className="px-0">
            { page }
            <div className="navigation d-flex justify-content-between">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleSendClick}>Send</button>
                <button type="button" className="btn btn-primary btn-lg" onClick={handleSnapsClick}>Snaps</button>
                <button type="button" className="btn btn-danger btn-lg" onClick={props.handleLogout}>log out</button>
            </div>
        </div>
    );
}

export default MainApp;