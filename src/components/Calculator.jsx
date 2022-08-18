import React, { useState } from "react";
import Clear from "./Clear";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Operator";
import { numbers, operators } from "../data";
import Decimal from "./Decimal";
import Equals from "./Equals";
import RemoveLast from "./RemoveLast";

// const string = "5+5";
// console.log(eval(string));

function Calculator() {
    const [display, setDisplay] = useState("0");

    function addValue(newValue) {
        display === "0" && setDisplay("");

        setDisplay((prevValue) => {
            if (prevValue.length === 22) {
                return prevValue;
            } else {
                return prevValue + newValue;
            }
        });
    }

    function removeLastDigit() {
        setDisplay((prevValue) => {
            return prevValue.length <= 1 ? "0" : prevValue.slice(0, -1);
        });
    }

    function clear() {
        setDisplay("0");
    }

    return (
        <div id="calculator">
            <Display id="display" value={display} />
            <Clear id="clear" value="C" onClear={clear} />
            <RemoveLast id="removeLast" value="<-" onRemove={removeLastDigit} />

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
