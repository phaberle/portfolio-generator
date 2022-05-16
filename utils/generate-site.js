const fs = require('fs');
const writeFile = fileCOntent => {
    return new Promise((resolve, reject) => {
        //fu there is an error, reject the promise and send the error to the promise catch() method
        if (err) {
            reject(err);
            //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
        //if everything went well, resolve the Promise and send the successful data to the .then() method
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};

// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports={writeFile, copyFile};