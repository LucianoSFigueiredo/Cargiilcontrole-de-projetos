GOOGLE_APPLICATION_CREDENTIALS=/Cargiilcontrole-de-projetos/woven-backbone-383702-a4338996d2b1.json
BUCKET_NAME=cargill-porto-franco
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env



const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

const bucketName = process.env.BUCKET_NAME;

async function uploadFile(file) {
  await storage.bucket(bucketName).upload(file.path, {
    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000',
      contentType: 'application/acad'
    },
  });
  console.log(`${file.originalname} uploaded to ${bucketName}.`);
}

const files = [
  { originalname: 'nome-do-arquivo.dwg', path: '/caminho/do/arquivo/nome-do-arquivo.dwg' },
  // adicione quantos arquivos quiser
];

files.forEach(uploadFile);
