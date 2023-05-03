const { Storage } = require('@google-cloud/storage');
const storage = new Storage({ keyFilename: './google-creds.json' });
const bucketName = 'cargill-porto-franco';

async function uploadFiles(files) {
  const promises = files.map(async (file) => {
    await storage.bucket(bucketName).upload(file.path, {
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    });
    console.log(`${file.originalname} uploaded to ${bucketName}.`);
  });
  await Promise.all(promises);
}

const files = [
  { originalname: 'nome-do-arquivo-1.extensao', path: '/caminho/do/arquivo/nome-do-arquivo-1.extensao' },
  { originalname: 'nome-do-arquivo-2.extensao', path: '/caminho/do/arquivo/nome-do-arquivo-2.extensao' },
  // adicione quantos arquivos quiser
];


const axios = require('axios');

async function handleFileUpload() {
  const fileInput = document.getElementById('file-input');
  const files = fileInput.files;
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

document.getElementById('submit-button').addEventListener('click', handleFileUpload);
