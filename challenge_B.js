const fs = require("fs");

// Input and Output File Paths
const inputFile = process?.env?.INPUT_FILE || "random_objects.txt";
const outputFile = process?.env?.OUTPUT_FILE || "processed_output.txt";

// Function to determine the type of an object
const getObjectType = (obj) => {
  // Trim spaces and check if it is an alphanumeric
  const trimmedObj = obj.trim();

  if (isAlphabetical(trimmedObj)) {
    return "Alphabetical String";
  } else if (isRealNumber(trimmedObj)) {
    return "Real Number";
  } else if (isInteger(trimmedObj)) {
    return "Integer";
  } else {
    return "Alphanumeric";
  }
};

// Helper function to check if a string is alphabetical
const isAlphabetical = (str) => {
  for (let char of str) {
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      return false;
    }
  }
  return true;
};

// Helper function to check if a string is a real number
const isRealNumber = (str) => {
  const parts = str.split(".");
  if (parts.length === 2) {
    return isInteger(parts[0]) && isInteger(parts[1]);
  }
  return false;
};

// Helper function to check if a string is an integer
const isInteger = (str) => {
  for (let char of str) {
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return str.length > 0; // Ensure it is not an empty string
};

// Read and process the file
const processFile = () => {
  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Split the data into objects
    const objects = data.split(",");
    const results = objects.map((obj) => {
      const trimmedObj = obj.trim();
      const type = getObjectType(trimmedObj);
      //console.log(`Object: "${trimmedObj}", Type: ${type}`);
      return `Object: "${trimmedObj}", Type: ${type}`;
    });
    console.log(results);

    // Write results to the output file
    fs.writeFile(outputFile, results.join("\n"), (err) => {
      if (err) {
        console.error("Error writing output file:", err);
        return;
      }
      console.log(`Processing complete. Results saved to ${outputFile}`);
    });
  });
};

processFile();