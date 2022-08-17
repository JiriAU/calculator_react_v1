import React from "react";

function Number(props) {
    return (
        <div
            id={props.id}
            onClick={() => {
                props.onAddValue(props.value);
            }}
        >
            {props.value}
        </div>
    );
}

export default Number;
