const CalculatorModel = {
    history: [],
    calculate: (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            default:
                return "Invalid operation";
        }
    },
    addToHistory: (entry) => {
        CalculatorModel.history.push(entry);
    },
    getHistory: () => CalculatorModel.history,
};
