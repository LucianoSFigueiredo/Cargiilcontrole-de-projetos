etapaFileUpload[i].addEventListener("change", function() {
    if (etapaFileUpload[i].files.length > 0) {
        status.textContent = "Aguardando aprovação";
        etapaAprovar[i].disabled = false;
        etapaReprovar[i].disabled = false;
    }
    // Habilitar a segunda etapa se todas as etapas anteriores foram aprovadas
    if (etapaAprovada.every(a => a)) {
        const etapa2Aprovar = document.querySelectorAll(".etapa2-aprovar");
        const etapa2Reprovar = document.querySelectorAll(".etapa2-reprovar");
        const etapa2Status = document.querySelectorAll(".etapa2-status");
        etapa2Status[i].textContent = "Aguardando arquivo DWG";
        etapa2Aprovar[i].disabled = false;
        etapa2Reprovar[i].disabled = false;
    }
});
