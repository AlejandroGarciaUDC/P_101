function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function nan() {
    document.getElementById("display").value = "NaN";
}
function invalid() {
    document.getElementById("display").value = "Expresión inválida";
}

async function calculate() {
    try {
        let result = eval(document.getElementById("display").value);

        if (!isFinite(result)) {
            nan();
            return; 
        }

        if (Math.abs(result) >= 1e7 || Math.abs(result) < 1e-6) {
            document.getElementById("display").value = result.toExponential(6);
        } else {
            document.getElementById("display").value = parseFloat(result.toFixed(6));
        }

    } catch (e) {
        invalid();
        await new Promise(resolve => setTimeout(resolve, 1000));
        clearDisplay();
    }
}