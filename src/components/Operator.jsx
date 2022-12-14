import React, { useState } from "react";

function Operator(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={
                isHovered ? "btn btn_operator btnHover" : "btn btn_operator"
            }
            id={props.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                props.onAddOperator(props.value);
            }}
        >
            {props.value}
        </div>
    );
}

export default Operator;
