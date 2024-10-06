import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const compress = async () => {
  // Write your code here
  const sourceFilePath = path.join(__dirName, "files", "fileToCompress.txt");
  const destinationFilePath = path.join(__dirName, "files", "archive.gz");
  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
