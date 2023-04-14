// Seleciona os elementos HTML relevantes para a terceira etapa
const etapa3Status = document.getElementById("etapa3-status");
const etapa3Aprovar = document.getElementById("etapa3-aprovar");
const etapa3Reprovar = document.getElementById("etapa3-reprovar");
const etapa3Download = document.getElementById("etapa3-download");

// Define o estado inicial da terceira etapa
let etapa3Aprovada = false;
etapa3Status.textContent = "Aguardando aprovação";

// Adiciona um listener ao botão de aprovar da segunda etapa
etapa2Aprovar.addEventListener("click", function () {
  etapa3Aprovar.disabled = false;
  etapa3Reprovar.disabled = false;
});

// Adiciona um listener ao botão de aprovar da terceira etapa
etapa3Aprovar.addEventListener("click", function() {
    // Verifica se a segunda etapa foi aprovada antes de permitir a aprovação da terceira etapa
    if (etapa2Aprovada && !etapa3Aprovada) {
        // Define o estado da terceira etapa como aprovada
        etapa3Aprovada = true;
        etapa3Status.textContent = "Aprovado";

        // Habilita o link de download do arquivo aprovado
        etapa3Download.href = etapa2Download.href;
        etapa3Download.download = etapa2Download.download;
        etapa3Download.disabled = false;

        // Desabilita os botões de aprovar e reprovar
        etapa3Aprovar.disabled = true;
        etapa3Reprovar.disabled = true;
    } else if (etapa3Aprovada) {
        alert("A terceira etapa já foi aprovada.");
    } else {
        alert("A segunda etapa ainda não foi aprovada.");
    }
});

// Adiciona um listener ao botão de reprovar da terceira etapa
etapa3Reprovar.addEventListener("click", function() {
    // Define o estado da terceira etapa como não aprovada
    etapa3Aprovada = false;
    etapa3Status.textContent = "Reprovado";

    // Desabilita o link de download do arquivo aprovado
    etapa3Download.disabled = true;

    // Desabilita os botões de aprovar e reprovar
    etapa3Aprovar.disabled = true;
    etapa3Reprovar.disabled = true;
});
