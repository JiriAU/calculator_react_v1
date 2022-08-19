import React, { useState } from "react";

function RemoveLast(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={isHovered ? "btn btn_remove btnHover" : "btn btn_remove"}
            id={props.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.onRemove}
        >
            {props.value}
        </div>
    );
}

export default RemoveLast;
