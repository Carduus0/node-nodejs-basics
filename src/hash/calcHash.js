import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const calculateHash = async () => {
  // Write your code here
  const filePath = path.join(__dirName, "files", "fileToCalculateHashFor.txt");
  const readStream = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");
  readStream.pipe(hash);
  hash.on("finish", () => {
    console.log(hash.read().toString("hex"));
  });
};

await calculateHash();
