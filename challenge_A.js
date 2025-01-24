const fs = require("fs");

// File path and target size
const filePath = "random_objects.txt";
const targetSize = 10 * 1024 * 1024; // 10MB


const generateAlpha = () => {
  let ascii = [] ;
  for(let i = 65;i<=90;i++) ascii.push(String.fromCharCode(i));
  for(let i = 97;i<=122;i++) ascii.push(String.fromCharCode(i));
  //convert array to string here
  return ascii.join("");
};

const alpha  = generateAlpha();
const alphaNumeric = "0123456789" + alpha;


const getRandomAlphabetical = () => {
  //assuming max length of 10
  const length = Math.floor(Math.random() * 10) + 1;
  //create a string of random characters with length of length
  let str = "";
  for(let i = 0;i<length;i++){
    str += alpha[Math.floor(Math.random() * alpha.length)];
  }
  return str;
};

const getRandomInteger = () => {
  return Math.floor(Math.random() * 10000).toString();
};

const getRandomRealNumber = () => {
  const integerPart = Math.floor(Math.random() * 10000);
  const fractionalPart = Math.random().toFixed(4).slice(2);
  return `${integerPart}.${fractionalPart}`;
};

const getRandomAlphanumericWithSpaces = () => {
  const length = Math.floor(Math.random() * 10) + 1;
  let str = "";
  for(let i = 0;i<length;i++){
    str += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
  }
 // max length of 10 spaces
  const spacesBefore = " ".repeat(Math.floor(Math.random() * 5));
  const spacesAfter = " ".repeat(Math.floor(Math.random() * 5));
  return `${spacesBefore}${str}${spacesAfter}`;
};

const generators = [
  getRandomAlphabetical,
  getRandomRealNumber,
  getRandomInteger,
  getRandomAlphanumericWithSpaces,
];

const generateFile = () => {
  const writeStream = fs.createWriteStream(filePath);
  let currentSize = 0;

  while (currentSize < targetSize) {
    const randomObject = generators[Math.floor(Math.random() * generators.length)]();
    const data = currentSize === 0 ? randomObject : "," + randomObject;
    writeStream.write(data);
    currentSize += Buffer.byteLength(data, "utf-8");
  }

  writeStream.end(() => {
    console.log(`File ${filePath} with size ${targetSize} bytes created.`);
  });
};

generateFile();