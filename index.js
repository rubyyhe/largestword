const { findAndTranspose } = require('./func');

/**
 * Main function to accept file path argument
 */
function main() {
    let filePath = process.argv.slice(2)[0];

    let resultMap = findAndTranspose(filePath);
    resultMap.forEach((value, key) => {
        console.log(key);
        console.log(value);
        console.log('');
    });
}

main();