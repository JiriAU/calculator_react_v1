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

    function addOperator(operator) {
        if (numbersState[numbersState.length] === "-") {
            setNumbersState((prevValue) => {
                return [...prevValue, operator];
            });
        }
        setNumbersState((prevValue) => {
            return [...prevValue, number, operator];
        });
    }

    function calculate() {
        console.log(numbersState[numbersState.length - 1]);
        // const calculation = numbersState + operator + number1;
        // const result = eval(calculation);
        // clear();
        // setNumber(result);
    }

    function removeLastDigit() {
        setNumber((prevValue) => {
            return prevValue.length <= 1 ? "0" : prevValue.slice(0, -1);
        });
    }

    function clear() {
        setNumber("0");
        // setNumbersState("0");
    }

    return (
        <div id="calculator">
            <Display value1={number} value2={numbersState} />
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
