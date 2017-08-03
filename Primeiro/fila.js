var readlineSync = require('readline-sync');

var fila = [];

var consoleKey = "1"
var consoleAdd = ""
while (consoleKey != 0){
consoleKey = readlineSync.question("\n Ola, o que deseja fazer?\n - 1/ Para adicionar \n - 2/Para remover \n - 9/Para mostrar a fila \n - 0/Para cancelar\n R:");
	switch (consoleKey) {
		case "1":
			consoleAdd = readlineSync.question("\n O que deseja adicionar?");
			fila.unshift(consoleAdd);
			console.log(fila);
			break;

		case "2":
			fila.splice(0,1);
			console.log(fila);
			break;

		default:
			console.log("Conteudo da fila");
			console.log(fila);
			break;
	}
} 