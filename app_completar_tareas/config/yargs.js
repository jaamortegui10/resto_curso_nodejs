const argv = require('yargs')
	.command('crear', 'crea una nueva tarea con su descripción',{
		titulo:{
			demand:true
		},
		descripcion:{
			demand:true,
			alias: 'd',
			desc:'descripcion de la tarea por hacer'
		},
		completado:{
			alias:'c',
			default:false
		}
	})
	.command('actualizar', 'Actualiza una tarea ya existente',{
		titulo:{
			demand:true
		},
		descripcion:{
			alias:'d'
		},
		completado:{
			default:false,
			alias:'c',
			desc:'Marca como completado o pendiente la tarea'
		}
	})
	.help()
	.argv;

module.exports = {
	argv
}