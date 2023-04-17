const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
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

uploadFiles(files);
