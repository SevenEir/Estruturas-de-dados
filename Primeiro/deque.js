var readlineSync = require('readline-sync');

var deque = [];

var consoleKey = "1"
var consoleAdd = ""

while (consoleKey != 0){
	consoleKey = readlineSync.question("\n Ola, o que deseja fazer?\n - 1/ Para adicionar \n - 2/Para remover \n - 9/Para mostrar a deque \n - 0/Para cancelar\n R:");
	
	switch (consoleKey) {
		case "1":
			consoleInsertKey = readlineSync.question("\n Aonde deseja adicionar?\n - 1/ Para adicionar no começo\n - 2/ Para adicionar no fim\n - 3/ Para adicionar em ambos \n")
		
			switch(consoleInsertKey) {
				case "1":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					deque.unshift(consoleAdd)
					console.log(deque)
					break;

				case "2":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					deque.push(consoleAdd)
					console.log(deque)
					break;

				case "3":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					deque.unshift(consoleAdd)
					deque.push(consoleAdd)				
					console.log(deque)
					break;
			}
		break;
		case "2":
			consoleRemoveKey = readlineSync.question("\n Aonde deseja remover?\n - 1/ Para remover no começo\n - 2/ Para remover no fim\n - 3/ Para remover em ambos \n")
			
			switch(consoleRemoveKey) {
				case "1":
					deque.splice(0,1)
					console.log(deque)
					break;

				case "2":
					deque.pop(1)
					console.log(deque)
					break;

				case "3":
					deque.pop(1)
					deque.splice(0,1)
					console.log(deque)
					break;	
			}
			break;

		case "9":
			console.log("Conteudo da deque:")
			console.log(deque)
			break;
	}
}
