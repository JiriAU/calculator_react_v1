import React from "react";

function Display(props) {
    return (
        <div className="whole_display">
            <div className="smallDisplay">{props.value2}</div>
            <div id="display">{props.value1}</div>
        </div>
    );
}
export default Display;
