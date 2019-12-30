let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
};


const argv2 = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea el doc de Texto ', opciones)
    .help()
    .argv;

module.exports = {
    argv2
}