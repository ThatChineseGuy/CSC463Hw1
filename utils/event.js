import { add } from "./math";
import { multiply } from "./multiply";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplybutton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        document.getElementById('output').innerHTML="Result of Addition";
        result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value,number2.value);
    }
    const updateDomWithMultiplyNumbers = () => {
        document.getElementById('output').innerHTML="Result of Multiply:";   
        result.innerHTML = 
         multiply(number1.value,number2.value);
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplybutton.addEventListener('click', updateDomWithMultiplyNumbers);
}

export  {eventHandler};