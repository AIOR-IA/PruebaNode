//require
const fs = require('fs');

let showconsole = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(console.log('El limite o la base No son NUMEROS '));
        } else {
            let res = '';
            for (let i = 1; i <= limite; i++) {
                res += (` ${base} * ${i} = ${base * i } \n`);
            }
            resolve(console.log(res));
        }
    });
};



let resultado = (num, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(num)) {
            reject(` ${num} no es un Numero`)
            return;
        }
        if (num <= 0) {
            reject(` ${num} debe ser un numero mayor a 0`);
            return;
        }
        let concat = '';
        for (let index = 1; index <= limite; index++) {

            concat += (` ${num} * ${index} = ${ num*index} \n`);

        }
        fs.writeFile(`tabla_del_${num}.txt`, concat, (err) => {
            if (err) { reject(err) } else {
                resolve(`tabla_del_${num}.txt`);
            }


        });


    });
};

module.exports = {
    resultado,
    showconsole
}