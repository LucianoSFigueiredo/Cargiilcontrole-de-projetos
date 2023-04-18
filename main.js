$(function () {
	$('#file-upload').fileupload({
	  url: 'https://storage.googleapis.com/cargill-porto-franco',
	  formData: {
		// Coloque o nome do seu arquivo de credenciais aqui
		key: 'google-creds.json'
	  },
	  add: function (e, data) {
		$('#etapa1-aprovar').prop('disabled', true);
		$('#etapa1-reprovar').prop('disabled', true);
		data.submit();
	  },
	  done: function (e, data) {
		const etapa1Status = $('#etapa1-status');
		const etapa1Aprovar = $('#etapa1-aprovar');
		const etapa1Reprovar = $('#etapa1-reprovar');
		const etapa1Download = $('#etapa1-download');
	  
		etapa1Aprovar.prop('disabled', false);
		etapa1Reprovar.prop('disabled', false);
	  
		etapa1Status.text('Aguardando aprovação');
		etapa1Download.prop('href', data.result.mediaLink);
		etapa1Download.prop('download', data.files[0].name);
		etapa1Download.prop('disabled', true);
	  }
	});
  
	
	// Etapa 1
	const etapa1Status = $('#etapa1-status');
	const etapa1Aprovar = $('#etapa1-aprovar');
	const etapa1Reprovar = $('#etapa1-reprovar');
	const etapa1Download = $('#etapa1-download');
	
	let etapa1Aprovada = false;
	etapa1Status.text('Aguardando aprovação');
	
	etapa1Aprovar.on('click', function () {
	  etapa1Aprovada = true;
	  etapa1Status.text('Aprovado');
	  etapa1Download.prop('disabled', false);
	  etapa1Aprovar.prop('disabled', true);
	  etapa1Reprovar.prop('disabled', true);
	});
	
	etapa1Reprovar.on('click', function () {
	  etapa1Aprovada = false;
	  etapa1Status.text('Reprovado');
	  etapa1Download.prop('disabled', true);
	  etapa1Aprovar.prop('disabled', true);
	  etapa1Reprovar.prop('disabled', true);
	});
  
	// Etapa 2
	const etapa2Status = $('#etapa2-status');
	const etapa2Aprovar = $('#etapa2-aprovar');
	const etapa2Reprovar = $('#etapa2-reprovar');
	const etapa2Download = $('#etapa2-download');
	
	let etapa2Aprovada = false;
	etapa2Status.text('Aguardando aprovação');
	
	etapa2Aprovar.on('click', function () {
	  etapa2Aprovada = true;
	  etapa2Status.text('Aprovado');
	  etapa2Download.prop('disabled', false);
	  etapa2Aprovar.prop('disabled', true);
	  etapa2Reprovar.prop('disabled', true);
	});
	
	etapa2Reprovar.on('click', function () {
	  etapa2Aprovada = false;
	  etapa2Status.text('Reprovado');
	  etapa2Download.prop('disabled', true);
	  etapa2Aprovar.prop('disabled', true);
	  etapa2Reprovar.prop('disabled', true);
	});

// Etapa 3
const etapa3Status = $('#etapa3-status');
const etapa3Aprovar = $('#etapa3-aprovar');
const etapa3Reprovar = $('#etapa3-reprovar');
const etapa3Download = $('#etapa3-download');

let etapa3Aprovada = false;
etapa3Status.text('Aguardando aprovação');

etapa3Aprovar.on('click', function () {
etapa3Aprovada = true;
etapa3Status.text('Aprovado');
etapa3Download.prop('disabled', false);
etapa3Aprovar.prop('disabled', true);
etapa3Reprovar.prop('disabled', true);
});

etapa3Reprovar.on('click', function () {
etapa3Aprovada = false;
etapa3Status.text('Reprovado');
etapa3Download.prop('disabled', true);
etapa3Aprovar.prop('disabled', true);
etapa3Reprovar.prop('disabled', true);
});

// Etapa 4
const etapa4Status = $('#etapa4-status');
const etapa4Aprovar = $('#etapa4-aprovar');
const etapa4Reprovar = $('#etapa4-reprovar');
const etapa4Download = $('#etapa4-download');

let etapa4Aprovada = false;
etapa4Status.text('Aguardando aprovação');

etapa4Aprovar.on('click', function () {
etapa4Aprovada = true;
etapa4Status.text('Aprovado');
etapa4Download.prop('disabled', false);
etapa4Aprovar.prop('disabled', true);
etapa4Reprovar.prop('disabled', true);
});

etapa4Reprovar.on('click', function () {
etapa4Aprovada = false;
etapa4Status.text('Reprovado');
etapa4Download.prop('disabled', true);
etapa4Aprovar.prop('disabled', true);
etapa4Reprovar.prop('disabled', true);
});

// Etapa 5
const etapa5Status = $('#etapa5-status');
const etapa5Aprovar = $('#etapa5-aprovar');
const etapa5Reprovar = $('#etapa5-reprovar');
const etapa5Download = $('#etapa5-download');

let etapa5Aprovada = false;
etapa5Status.text('Aguardando aprovação');

etapa5Aprovar.on('click', function () {
etapa5Aprovada = true;
etapa5Status.text('Aprovado');
etapa5Download.prop('disabled', false);
etapa5Aprovar.prop('disabled', true);
etapa5Reprovar.prop('disabled', true);
});

etapa5Reprovar.on('click', function () {
etapa5Aprovada = false;
etapa5Status.text('Reprovado');
etapa5Download.prop('disabled', true);
etapa5Aprovar.prop('disabled', true);
etapa5Reprovar.prop('disabled', true);
})});
