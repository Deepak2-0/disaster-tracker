import React from "react";
const LocationInfoBox = ({ info,onClick }) => {
    //console.log(info);
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TYPE: <strong>{ info.type }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
            <button onClick={onClick}>Remove</button>
        </div>
    )
}

export default LocationInfoBox;