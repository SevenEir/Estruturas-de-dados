var readlineSync = require('readline-sync');

var pilha = [];

var consoleKey = "1"
var consoleAdd = ""

while (consoleKey != 0){
	consoleKey = readlineSync.question("\n Ola, o que deseja fazer?\n - 1/ Para adicionar \n - 2/Para remover \n - 9/Para mostrar a pilha \n - 0/Para cancelar\n R:");
	
	switch (consoleKey){
		case "1":
			consoleAdd = readlineSync.question("\n O que deseja adicionar?")
			pilha.push(consoleAdd)
			console.log(pilha)
			break;

		case "2":
			pilha.pop(1);
			console.log(pilha)
			break;

		case "3":
			console.log("Conteudo da pilha")
			console.log(pilha)
			break;
	}

} 