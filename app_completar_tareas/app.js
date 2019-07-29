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
		porHacer.listar()
		.then((data)=>{
			console.log('Lista de datos: ', data);
		})
		.catch((err)=>{
			console.log('Ocurrió un error: ', err)
		});
	break;
	case 'actualizar':
		porHacer.actualizar(argv.titulo, argv.descripcion, argv.completado)
		.then((actualicedData) => {
			console.log('task actualizada: ', actualicedData);
		})
		.catch((err) => {
			console.log('Ha ocurrido un error: ', err);
		});
	break;
	default:
		console.log('Comando no reconocido');
}