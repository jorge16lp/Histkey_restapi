const util = require('util');
const fs = require('fs');

module.exports = {
    getDemoText: main
};

let demoTextPath = '/demoText.txt'

const readFileAsync = util.promisify(fs.readFile)

async function main() {
    try {
        const text = await readFileAsync(demoTextPath, 'utf8')
        return text 
    } catch (error) {
        console.error('Error reading demo text file:', demoTextPath, error)
        throw error
    }
}