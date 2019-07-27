//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
console.log('el argv: ', argv);
console.log('el argv._: ', argv._);

const porHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];


switch( comando ){
	case 'crear':
		let tarea = porHacer.crear(argv.titulo, argv.descripcion)
		console.log('Tarea: ', tarea);
	break;
	case 'listar':
		console.log('Listar: por hacer');
	break;
	case 'actualizar':
		console.log('Actualizar: por hacer');
	break;
	default:
		console.log('Comando no reconocido');
}