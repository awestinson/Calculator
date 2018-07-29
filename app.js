let intervID;

function updateInterval() {
    intervID = setInterval(() => {
        let dt = new Date();
        document.getElementById("datetime").innerHTML = dt.toLocaleString();
    },1000)
}

let calculator = (()=> {
    let inputA = [],inputB = [],operator;
    document.querySelector('.numbers-1').addEventListener('click',(event)=> {
        if(operator === undefined) {
            inputA.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA);
        } else  {
            inputB.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
        }
    });
    document.querySelector('.numbers-2').addEventListener('click',(event)=> {
        if(operator === undefined) {
            inputA.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA);
        } else {
            inputB.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
        }
    });
    document.querySelector('.numbers-3').addEventListener('click',(event)=> {
        if(operator === undefined) {
            inputA.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA);
        } else {
            inputB.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
        }
    });

    document.querySelector('.numbers-4').addEventListener('click',(event)=> {
        if(operator === undefined) {
            inputA.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA);
        } else {
            inputB.push(event.target.textContent);
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
        }
    });

    document.querySelector('.point').addEventListener('click',()=> {
        if(operator === undefined) {
            if(inputA.indexOf('.') === -1) {
                inputA.push(event.target.textContent);
                document.querySelector('input').value = calculator.inputFinder(inputA);
            }
            if(inputA.indexOf('.')+1 === inputA.length) {
                document.querySelector('input').value = calculator.inputFinder(inputA) + '.0';
            }
        } else {
            if(inputB.indexOf('.') === -1) {
                inputB.push(event.target.textContent);
                document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
            } 
            if(inputB.indexOf('.')+1 === inputB.length) {
                document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB) + '.0';
            }
        }
    });

    document.querySelector(".operators").addEventListener('click',event => {
        operator = event.target.textContent;
        document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator;
    });

    document.querySelector('.mod').addEventListener('click',(event) => {
        operator = event.target.textContent;
        document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator;
    })

    document.querySelector('.equals').addEventListener('click',() => {
        let result;
        let inputNoA = calculator.inputFinder(inputA);
        let inputNoB = calculator.inputFinder(inputB);
        if(operator === '+') {
            result = inputNoA + inputNoB;
        } else if(operator === '-') {
            result = inputNoA - inputNoB;
        } else if(operator === '*') {
            result = inputNoA * inputNoB;
        } else if(operator === '/') {
            result = inputNoA / inputNoB;
        } else {
            result = inputNoA % inputNoB;
        }
        document.querySelector('input').value = result;
        inputA = [];
        inputB = [];
        operator = undefined;
    });

    document.querySelector('.AC').addEventListener('click',() => {
        inputA = [];
        inputB = [];
        operator = undefined;
        document.querySelector('input').value = 0;
    });

    document.querySelector('.Del').addEventListener('click',() => {
       if(operator === undefined) {
            inputA.pop();
            document.querySelector('input').value = calculator.inputFinder(inputA);
       } else if(inputB.length === 0) {
            operator = undefined;
            document.querySelector('input').value = calculator.inputFinder(inputA);
       } else if(inputB.length === 1) {
            inputB.pop();
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator;
       } else {
            inputB.pop();
            document.querySelector('input').value = calculator.inputFinder(inputA) + " " + operator + " " + calculator.inputFinder(inputB);
       }
    });
    return {
        inputFinder : input => {
            if(input !== undefined) {
                let output = 0;
                if(input.indexOf('.') !== -1) {
                    for(let i=0;i<input.indexOf('.');i++) {
                        output = output + input[i]*Math.pow(10,input.indexOf('.')-1-i);
                    }
                    for(let i=input.length-1;i>input.indexOf('.');i--) {
                        output = output + input[i]/Math.pow(10,i-input.indexOf('.'));
                    }
                } else {
                    for(let i=0;i<input.length;i++) {
                        output = output + input[i]*Math.pow(10,input.length-1-i);
                    }
                }
                return output;
            }
            return ;
        }
    }
})();