//require


const { resultado } = require('./multiplicar/multiplicar.js');
const { showconsole } = require('./multiplicar/multiplicar.js');
const argv2 = require('./Config/Yargs.js').argv2;

let num = 1;

let arhv = process.argv;


let comando = argv2._[0];

switch (comando) {
    case 'listar':
        showconsole(argv2.base, argv2.limite);
        break;
    case 'crear':
        resultado(argv2.base2, argv2.limite2).then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(error => {
                console.log(error);
            });
        break;
    default:
        console.log('No selecciono ningun Comando');
}
//console.log(arhv);
//console.log(comando);
// let parameter = arhv[2];
// let base = parameter.split('=')[1];


// resultado(base).then(archivo => {
//         console.log(`Archivo creado: ${archivo}`);
//     })
//     .catch(error => {
//         console.log(error);
//     });