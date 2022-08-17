import React, { useState } from "react";

function Number(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={isHovered ? "btn btnHover" : "btn"}
            id={props.id}
            onClick={() => {
                props.onAddValue(props.value);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.value}
        </div>
    );
}

export default Number;
