// Função para calcular o IMC
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    if (!peso || !altura) {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";
    
    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        destacarLinha("baixo-peso");
    } else if (imc < 25) {
        classificacao = "Peso normal";
        destacarLinha("peso-normal");
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        destacarLinha("sobrepeso");
    } else {
        classificacao = "Obesidade";
        destacarLinha("obesidade");
    }
    
    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc} (${classificacao}).`;
}

// Função para destacar a linha correspondente
function destacarLinha(id) {
    // Remove o destaque anterior
    document.querySelectorAll("tr").forEach(row => row.classList.remove("destacado"));

    // Adiciona a classe de destaque na linha correspondente
    document.getElementById(id).classList.add("destacado");
}

// Evento para calcular o IMC ao pressionar a tecla Enter
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularIMC();
    }
});
