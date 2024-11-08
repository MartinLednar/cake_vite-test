// Import required modules
const glob = require("glob");
const path = require("path");

// Function to get all import.scss files in the resources folder
function getImportScssFiles(dirPath) {
    const pattern = path.join(dirPath, "**/*.scss"); // Pattern to match all import.scss files in subdirectories

    // Find all files matching the pattern
    const files = glob.sync(pattern);

    // Create an object where key is the folder name and value is the file path
    const result = {};
    files.forEach((file) => {
        const key = path.basename(path.dirname(file)); // Use the parent folder name as the key
        result[key] = file; // Set the full path as the value
    });

    return result;
}

export { getImportScssFiles };
