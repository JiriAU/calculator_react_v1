import React, { useState } from "react";
import Clear from "./Clear";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Oparator";
import { numbers, operators } from "../data";
import Decimal from "./Decimal";

function Calculator() {
    const [display, setDisplay] = useState("");

    function addValue(newValue) {
        setDisplay((prevValue) => {
            return prevValue + newValue;
        });
    }

    return (
        <div id="calculator">
            <Display id="display" value={display} />
            <Clear id="clear" value="C" />

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
        </div>
    );
}

export default Calculator;
