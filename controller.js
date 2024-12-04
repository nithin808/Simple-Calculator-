const CalculatorController = {
    handleOperation: (operator) => {
        const num1Input = document.getElementById("num1");
        const num2Input = document.getElementById("num2");
        const resultDiv = document.getElementById("result");

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerText = "Error: Please enter valid numbers.";
            return;
        }

        const result = CalculatorModel.calculate(num1, num2, operator);
        const historyEntry = `${num1} ${operator} ${num2} = ${result}`;
        CalculatorModel.addToHistory(historyEntry);

        resultDiv.innerText = `Result: ${result}`;
        CalculatorController.updateHistory();
    },

    updateHistory: () => {
        const historyList = document.getElementById("history");
        historyList.innerHTML = ""; 
        CalculatorModel.getHistory().forEach((entry) => {
            const listItem = document.createElement("li");
            listItem.innerText = entry;
            historyList.appendChild(listItem);
        });
    },
};
