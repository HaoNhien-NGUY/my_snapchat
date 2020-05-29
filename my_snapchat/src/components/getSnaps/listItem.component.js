import React from 'react';

function ListItem(props) {
    const { from, duration, id } = props;

    return (
        <div className="list-item my-1 mx-2 d-flex justify-content-between">
            <h3 className="text-center text-white w-100" onClick={() => props.showSnap(id, from, duration)}>{from}</h3>
        </div>
    )
}

export default ListItem;