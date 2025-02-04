function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);

        if (!isFinite(result)) {
            alert("Infinity");
            clearDisplay();
            return;
        }

        if (Math.abs(result) >= 1e7 || Math.abs(result) < 1e-6) {
            document.getElementById("display").value = result.toExponential(6);
        } else {
            document.getElementById("display").value = parseFloat(result.toFixed(6));
        }
    } catch (e) {
        alert("Expresión inválida");
    }
}