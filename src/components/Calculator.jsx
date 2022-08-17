import React, { useState } from "react";
import Clear from "./Clear";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Oparator";
import { numbers, operators } from "../data";
import Decimal from "./Decimal";
import Equals from "./Equals";
import ClearAll from "./ClearAll";

function Calculator() {
    const [display, setDisplay] = useState("0");

    function addValue(newValue) {
        display === "0" && setDisplay("");

        setDisplay((prevValue) => {
            if (prevValue.length === 20) {
                return prevValue;
            } else {
                return prevValue + newValue;
            }
        });
    }

    return (
        <div id="calculator">
            <Display id="display" value={display} />
            <Clear id="clear" value="C" />
            <ClearAll id="clearall" value="CA" />

            {numbers.map((number, i) => {
                return (
                    <Number
                        key={i}
                        id={number.id}
                        value={number.value}
                        onAddValue={addValue}
                    />
                );
            })}
            <Decimal id="decimal" value="," />

            {operators.map((operator, i) => {
                return (
                    <Operator key={i} id={operator.id} value={operator.value} />
                );
            })}

            <Equals id="equals" value="=" />
        </div>
    );
}

export default Calculator;
