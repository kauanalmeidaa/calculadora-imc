// Função para calcular o IMC
function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    // Verifica se os campos estão preenchidos
    if (peso === "" || altura === "") {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    // Cálculo do IMC e formatação para duas casas decimais
    let imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";
    
    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    
    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc} (${classificacao}).`;
    document.activeElement.blur();  // Remove o foco do input
}

// Evento para calcular o IMC ao pressionar a tecla Enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularIMC();
    }
});