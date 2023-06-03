const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const SOURCE_FILE = 'output/from-html.pdf';
const DESTINATION_FILE = 'compressed/from-html.gz';

const gzip = createGzip();
const source = createReadStream(SOURCE_FILE);
const destination = createWriteStream(DESTINATION_FILE);

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});
