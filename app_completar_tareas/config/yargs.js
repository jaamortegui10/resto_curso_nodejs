const titulo = {
	demand:true,
	desc: 'Titulo de la tarea'
}

const completado = {
	alias:'c',
	default:false,
	desc: 'Marca como completada o pendiente la tarea'
}
const argv = require('yargs')
	.command('crear', 'crea una nueva tarea con su descripción',{
		titulo,
		descripcion:{
			demand:true,
			alias: 'd',
			desc:'descripcion de la tarea por hacer'
		},
		completado
	})
	.command('actualizar', 'Actualiza una tarea ya existente',{
		titulo,
		descripcion:{
			alias:'d'
		},
		completado
	})
	.command('listar', 'Lista todos los datos que están guardados', {

	})
	.help()
	.argv;

module.exports = {
	argv
}