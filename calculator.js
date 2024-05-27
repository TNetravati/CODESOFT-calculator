
    let display = document.getElementById('display');
    let expression = '';

    function appendToDisplay(value) {
      if (value === '.' && expression.includes('.')) {
        return;
      }

      if (isOperator(value)) {
        if (isOperator(expression[expression.length - 1])) {
          return;
        }
      }

      expression += value;
      display.innerText = expression;
    }

    function clearDisplay() {
      expression = '';
      display.innerText = '0';
    }

    function calculate() {
      try {
        let result = eval(expression);
        display.innerText = result;
        expression = '';
      } catch (error) {
        display.innerText = 'Error';
        expression = '';
      }
    }

    function isOperator(char) {
      return ['+', '-', '*', '/'].includes(char);
    }
  