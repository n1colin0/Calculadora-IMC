document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);

    let message = '';

    if (imc < 18.5) {
        message = `Seu IMC é ${imc} (Abaixo do peso).`;
        document.getElementById('result').style.color = 'orange';
    } else if (imc < 24.9) {
        message = `Seu IMC é ${imc} (Peso normal).`;
        document.getElementById('result').style.color = 'green';
    } else if (imc < 29.9) {
        message = `Seu IMC é ${imc} (Sobrepeso).`;
        document.getElementById('result').style.color = 'yellow';
    } else {
        message = `Seu IMC é ${imc} (Obesidade).`;
        document.getElementById('result').style.color = 'red';
    }

    document.getElementById('result').innerHTML = message;
});
