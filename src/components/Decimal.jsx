import React, { useState } from "react";

function Decimal(props) {
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                props.onAddDecimal(props.value);
            }}
        >
            {props.value}
        </div>
    );
}

export default Decimal;
