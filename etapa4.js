// Seleciona os elementos HTML relevantes para a quarta etapa
const etapa4Status = document.getElementById("etapa4-status");
const etapa4Aprovar = document.getElementById("etapa4-aprovar");
const etapa4Reprovar = document.getElementById("etapa4-reprovar");
const etapa4Download = document.getElementById("etapa4-download");

// Define o estado inicial da quarta etapa
let etapa4Aprovada = false;
etapa4Status.textContent = "Aguardando aprovação";

// Adiciona um listener ao botão de aprovar da terceira etapa
etapa3Aprovar.addEventListener("click", function () {
  etapa4Aprovar.disabled = false;
  etapa4Reprovar.disabled = false;
});

// Adiciona um listener ao botão de aprovar da quarta etapa
etapa4Aprovar.addEventListener("click", function() {
    // Verifica se as etapas anteriores foram aprovadas antes de permitir a aprovação da quarta etapa
    if (etapa1Aprovada && etapa2Aprovada && etapa3Aprovada && !etapa4Aprovada) {
        // Define o estado da quarta etapa como aprovada
        etapa4Aprovada = true;
        etapa4Status.textContent = "Aprovado";

        // Habilita o link de download do arquivo aprovado
        etapa4Download.href = etapa3Download.href;
        etapa4Download.download = etapa3Download.download;
        etapa4Download.disabled = false;

        // Desabilita os botões de aprovar e reprovar
        etapa4Aprovar.disabled = true;
        etapa4Reprovar.disabled = true;
    } else if (etapa4Aprovada) {
        alert("A quarta etapa já foi aprovada.");
    } else {
        alert("Alguma das etapas anteriores ainda não foi aprovada.");
    }
});

// Adiciona um listener ao botão de reprovar da quarta etapa
etapa4Reprovar.addEventListener("click", function() {
    // Define o estado da quarta etapa como não aprovada
    etapa4Aprovada = false;
    etapa4Status.textContent = "Reprovado";

    // Desabilita o link de download do arquivo aprovado
    etapa4Download.disabled = true;

    // Desabilita os botões de aprovar e reprovar
    etapa4Aprovar.disabled = true;
    etapa4Reprovar.disabled = true;
});
