// Seleciona os elementos HTML relevantes para a primeira etapa
const fileUpload = document.getElementById("file-upload");
const etapa1Status = document.getElementById("etapa1-status");
const etapa1Aprovar = document.getElementById("etapa1-aprovar");
const etapa1Reprovar = document.getElementById("etapa1-reprovar");
const etapa1Download = document.getElementById("etapa1-download");

// Define o estado inicial da primeira etapa
let etapa1Aprovada = false;
etapa1Status.textContent = "Aguardando arquivo DWG";

// Adiciona um listener ao input de upload de arquivo
fileUpload.addEventListener("change", function() {
    // Verifica se um arquivo foi selecionado
    if (fileUpload.files.length > 0) {
        etapa1Status.textContent = "Aguardando aprovação";
        etapa1Aprovar.disabled = false;
        etapa1Reprovar.disabled = false;
    }
});

// Adiciona um listener ao botão de aprovar da primeira etapa
etapa1Aprovar.addEventListener("click", function() {
    // Verifica se um arquivo foi selecionado antes de permitir a aprovação
    if (fileUpload.files.length > 0 && !etapa1Aprovada) {
        // Define o estado da primeira etapa como aprovada
        etapa1Aprovada = true;
        etapa1Status.textContent = "Aprovado";

        // Habilita o link de download do arquivo aprovado
        etapa1Download.href = URL.createObjectURL(fileUpload.files[0]);
        etapa1Download.download = fileUpload.files[0].name;
        etapa1Download.disabled = false;

        // Desabilita o input de upload de arquivo e o botão de aprovar/reprovar
        fileUpload.disabled = true;
        etapa1Aprovar.disabled = true;
        etapa1Reprovar.disabled = true;
    } else if (etapa1Aprovada) {
        alert("A primeira etapa já foi aprovada.");
    } else {
        alert("Por favor, selecione um arquivo antes de aprovar.");
    }
});

// Adiciona um listener ao botão de reprovar da primeira etapa
etapa1Reprovar.addEventListener("click", function() {
    // Define o estado da primeira etapa como não aprovada
    etapa1Aprovada = false;
    etapa1Status.textContent = "Reprovado";

    // Desabilita o link de download do arquivo aprovado
    etapa1Download.disabled = true;

    // Limpa o input de upload de arquivo e habilita o botão de upload
    fileUpload.value = "";
    fileUpload.disabled = false;

    // Desabilita o botão de aprovar/reprovar
    etapa1Aprovar.disabled = true;
    etapa1Reprovar.disabled = true;
});
