import React, { useState } from "react";
import Clear from "./Clear";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Operator";
import { numbers, operators } from "../data";
import Decimal from "./Decimal";
import Equals from "./Equals";
import RemoveLast from "./RemoveLast";

// if pressing "-" and there is already operator set to "-", then change num1 to "-num1" if pressed again, change it back to "+num1" ... maybe useState "negative" ... true or false to control this

// when press operator check there is num2(or 0)
// if !num2 then add num1 to num2, change num1 to 0 and add operator
//if num2 change operator to new one

// const string = "5+5";
// console.log(eval(string));

function Calculator() {
    const [num1, setNum1] = useState("0");
    const [num2, setNum2] = useState("0");
    const [operator, setOperator] = useState("");

    function addValue1(newValue) {
        num1 === "0" && setNum1("");

        setNum1((prevValue) => {
            if (prevValue.length === 23) {
                return prevValue;
            } else {
                return prevValue + newValue;
            }
        });
    }

    function addDecimal(value) {
        setNum1((prevValue) => {
            const regex = new RegExp(/,/);
            return regex.test(num1) ? prevValue : prevValue + value;
        });
    }

    function addOperator(value) {}

    function removeLastDigit() {
        setNum1((prevValue) => {
            return prevValue.length <= 1 ? "0" : prevValue.slice(0, -1);
        });
    }

    function clear() {
        setNum1("0");
        setNum2("0");
        setOperator("");
    }

    return (
        <div id="calculator">
            <Display value1={num1} value2={num2} operator={operator} />
            <Clear id="clear" value="C" onClear={clear} />
            <RemoveLast id="removeLast" value="<-" onRemove={removeLastDigit} />

            {numbers.map((number, i) => {
                return (
                    <Number
                        key={i}
                        id={number.id}
                        value={number.value}
                        onAddValue={addValue1}
                    />
                );
            })}
            <Decimal id="decimal" value="," onAddDecimal={addDecimal} />

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

            <Equals id="equals" value="=" />
        </div>
    );
}

export default Calculator;
