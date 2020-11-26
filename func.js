const fs = require('fs');
const isBinaryFile = require("isbinaryfile");

const SIZE_LIMIT = process.env.MAX_FILE_SIZE_KB || 50;

/**
 * Find largest word and transpose letters in it, possible has multiple largest words with same length
 * 
 * @param filePath 
 * @returns result Map of result, largestWord as key and transposedWord as value. e.g. {word: transposedWord}, 
 */
function findAndTranspose(filePath) {
    let largestSet = findLargestWord(filePath);

    let result = new Map();
    for (const largestWord of largestSet) {
        result.set(largestWord, reverseStr(largestWord));
    }
    return result;
}

/**
 * Find largest words in the file
 * 
 * @param filePath File path for read
 * @returns set A set includes largest words
 */
function findLargestWord(filePath) {
    if (!filePath || filePath.length === 1) {
        throw new Error('Invalid file path');
    }

    // check file size, for illustration set upper limit as 50kb
    let stats = fs.statSync(filePath);
    if ((stats.size / 1024) > SIZE_LIMIT) {
        throw new Error('File size exceed upper limit ' + SIZE_LIMIT + 'kb');
    }

    let bytes = fs.readFileSync(filePath);

    if (isBinaryFile.isBinaryFileSync(bytes, stats.size)) {
        throw new Error('Binary file is not expected');
    }

    let content = bytes.toString();
    let set = new Set();
    let largest = 1;
    try {
        // split with whitespace including line feed/carriage return, space, tab
        let words = content.split(/[\s]+/);
        for (const word of words) {
            if (word.length > largest) {
                largest = word.length;

                set.clear();
                set.add(word);
            } else if (word.length == largest) {
                // multiple largest words with same length
                set.add(word);
            }
        }

        return set;
    } catch (err) {
        throw err;
    }
}

/**
 * Reverse a string
 * 
 * @param str Input string
 */
function reverseStr(str) {
    if (!str || str.length === 1) {
        return str;
    }

    let newStr = '';
    let arr = str.split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i];
    }

    return newStr;
}

module.exports = { findAndTranspose };