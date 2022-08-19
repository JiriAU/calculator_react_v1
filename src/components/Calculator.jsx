import React, { useState } from "react";
import Clear from "./Clear";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Operator";
import { numbers, operators } from "../data";
import Decimal from "./Decimal";
import Equals from "./Equals";
import RemoveLast from "./RemoveLast";

function Calculator() {
    const [number, setNumber] = useState("0");
    const [numbersState, setNumbersState] = useState([]);

    function addValue(newValue) {
        number === "0" && setNumber("");

        setNumber((prevValue) => {
            if (prevValue.length === 23) {
                return prevValue;
            } else {
                return prevValue + newValue;
            }
        });
    }

    function addDecimal(value) {
        setNumber((prevValue) => {
            const regex = new RegExp(/\./);
            return regex.test(number) ? prevValue : prevValue + value;
        });
    }

    function addOperator(newOperator) {
        const operatorsRegex = /[*/+-]/;

        setNumbersState((prevValue) => {
            //
            //
            //
            //
            //
            if (
                number === "0" &&
                operatorsRegex.test(prevValue[prevValue.length - 1]) &&
                operatorsRegex.test(prevValue[prevValue.length - 2])
            ) {
                return [...prevValue].slice(0, -2).concat(newOperator);
            } else if (number === "0" && newOperator === "-") {
                return [...prevValue].concat(newOperator);
            } else if (
                number === "0" &&
                operatorsRegex.test(prevValue[prevValue.length - 1])
            ) {
                return [...prevValue].slice(0, -1).concat(newOperator);
            }
            //
            //
            //
            //
            //
            else if (number === "0") {
                return [...prevValue];
            }
            return [...prevValue, number, newOperator];
        });
        setNumber("0");
    }

    function calculate() {
        const calculation = numbersState.join("") + number;
        const result = Math.fround(eval(calculation));
        console.log(result);
        setNumber(result);
        setNumbersState([]);
    }

    function removeLastDigit() {
        setNumber((prevValue) => {
            return prevValue.length <= 1 ? "0" : prevValue.slice(0, -1);
        });
    }

    function clear() {
        setNumber("0");
        setNumbersState([]);
    }

    return (
        <div id="calculator">
            <Display value1={number} value2={numbersState.join("") + number} />
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
            <Decimal id="decimal" value="." onAddDecimal={addDecimal} />

            {operators.map((operator, i) => {
                return (
                    <Operator
                        key={i}
                        id={operator.id}
                        value={operator.value}
                        onAddOperator={addOperator}
                    />
                );
            })}

            <Equals id="equals" value="=" onCalculate={calculate} />
        </div>
    );
}

export default Calculator;
