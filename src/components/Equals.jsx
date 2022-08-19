import React, { useState } from "react";

function Equals(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={isHovered ? "btn btn_equals btnHover" : "btn btn_equals"}
            id={props.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.onCalculate}
        >
            {props.value}
        </div>
    );
}

export default Equals;
