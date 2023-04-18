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
  
	$(document).ready(function() {
	  var fileUploadContainer = $('#file-upload-container');
	  var addFileBtn = $('#add-file-btn');
  
	  addFileBtn.click(function() {
		var newInput = $('<input type="file" name="file-upload[]" multiple>');
		fileUploadContainer.append(newInput);
	  });
  
	  $('#upload-form').on('submit', function(e) {
		e.preventDefault();
  
		$.ajax({
		  url: 'upload.php',
		  type: 'POST',
		  data: new FormData(this),
		  contentType: false,
		  cache: false,
		  processData:false,
		  success: function(data) {
			alert('Arquivos enviados com sucesso!');
		  },
		  error: function(xhr, status, error) {
			alert('Erro ao enviar arquivos: ' + error);
		  }
		});
	  });
	});
  });
  