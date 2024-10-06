import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const decompress = async () => {
  // Write your code here
  const sourceFilePath = path.join(__dirName, "files", "archive.gz");
  const destinationFilePath = path.join(
    __dirName,
    "files",
    "fileToCompress.txt"
  );
  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);
  const unZip = zlib.createGunzip();

  readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
