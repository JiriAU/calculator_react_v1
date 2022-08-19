import React, { useState } from "react";

function Clear(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={isHovered ? "btn btn_clear btnHover" : "btn btn_clear"}
            id={props.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.onClear}
        >
            {props.value}
        </div>
    );
}

export default Clear;
