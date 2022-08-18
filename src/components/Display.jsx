import React from "react";

function Display(props) {
    return (
        <div id="display">
            <div className="smallDisplay">
                {props.value2} {props.operator}
            </div>
            <div>{props.value1}</div>
        </div>
    );
}
export default Display;
