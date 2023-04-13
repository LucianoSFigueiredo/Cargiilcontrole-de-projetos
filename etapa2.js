// Seleciona os elementos HTML relevantes para a segunda etapa
const etapa2Status = document.getElementById("etapa2-status");
const etapa2Aprovar = document.getElementById("etapa2-aprovar");
const etapa2Reprovar = document.getElementById("etapa2-reprovar");
const etapa2Download = document.getElementById("etapa2-download");

// Define o estado inicial da segunda etapa
let etapa2Aprovada = false;
etapa2Status.textContent = "Aguardando aprovação";

// Adiciona um listener ao botão de aprovar da primeira etapa
etapa1Aprovar.addEventListener("click", function () {
  etapa2Aprovar.disabled = false;
  etapa2Reprovar.disabled = false;
});

// Adiciona um listener ao botão de aprovar da segunda etapa
etapa2Aprovar.addEventListener("click", function() {
    // Verifica se a primeira etapa foi aprovada antes de permitir a aprovação da segunda etapa
    if (etapa1Aprovada && !etapa2Aprovada) {
        // Define o estado da segunda etapa como aprovada
        etapa2Aprovada = true;
        etapa2Status.textContent = "Aprovado";

        // Habilita o link de download do arquivo aprovado
        etapa2Download.href = etapa1Download.href;
        etapa2Download.download = etapa1Download.download;
        etapa2Download.disabled = false;

        // Desabilita os botões de aprovar e reprovar
        etapa2Aprovar.disabled = true;
        etapa2Reprovar.disabled = true;
    } else if (etapa2Aprovada) {
        alert("A segunda etapa já foi aprovada.");
    } else {
        alert("A primeira etapa ainda não foi aprovada.");
    }
});

// Adiciona um listener ao botão de reprovar da segunda etapa
etapa2Reprovar.addEventListener("click", function() {
    // Define o estado da segunda etapa como não aprovada
    etapa2Aprovada = false;
    etapa2Status.textContent = "Reprovado";

    // Desabilita o link de download do arquivo aprovado
    etapa2Download.disabled = true;

    // Desabilita os botões de aprovar e reprovar
    etapa2Aprovar.disabled = true;
    etapa2Reprovar.disabled = true;
});
