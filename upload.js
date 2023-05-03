const axios = require('axios');

async function uploadFiles(files) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
  }

  try {
    await axios.post('/upload', formData);
    console.log('Arquivos enviados com sucesso!');
  } catch (error) {
    console.error(error);
  }
}

const files = [
  { originalname: 'nome-do-arquivo-1.extensao', path: '/caminho/do/arquivo/nome-do-arquivo-1.extensao' },
  { originalname: 'nome-do-arquivo-2.extensao', path: '/caminho/do/arquivo/nome-do-arquivo-2.extensao' },
  // adicione quantos arquivos quiser
];

document.getElementById('submit-button').addEventListener('click', () => {
  uploadFiles(files);
});
