import React from 'react';

function ListItem(props) {
    const { from, duration, id } = props;

    //h2 on click setselectedsnap

    return (
        <div className="list-item ml-4 mr-3 my-3 d-flex justify-content-between">
            <h2 className="text-center text-white w-100" onClick={() => props.showSnap(id, from, duration)}>{from}</h2>
        </div>
    )
}

export default ListItem;