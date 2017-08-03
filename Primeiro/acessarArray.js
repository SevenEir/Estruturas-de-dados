var readlineSync = require('readline-sync');

var acessarArray = [];

var consoleKey = "1"
var consoleAdd = ""

while (consoleKey != 0){
	consoleKey = readlineSync.question("\n Ola, o que deseja fazer?\n - 1/ Para adicionar \n - 2/ Para remover \n - 3/ Para selecionar uma posicao do array \n - 4/ Para pesquisar um array \n - 9/ Para mostrar a acessarArray \n - 0/ Para cancelar\n R: ");
	
	switch (consoleKey) {
		case "1":
			consoleInsertKey = readlineSync.question("\n Aonde deseja adicionar?\n - 1/ Para adicionar no comeco\n - 2/ Para adicionar no fim\n - 3/ Para adicionar em ambos \n")
		
			switch(consoleInsertKey) {
				case "1":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					acessarArray.unshift(consoleAdd)
					console.log(acessarArray)
					break;

				case "2":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					acessarArray.push(consoleAdd)
					console.log(acessarArray)
					break;

				case "3":
					consoleAdd = readlineSync.question("\n O que deseja adicionar?\n")
					acessarArray.unshift(consoleAdd)
					acessarArray.push(consoleAdd)				
					console.log(acessarArray)
					break;
			}
		break;
		case "2":
			consoleRemoveKey = readlineSync.question("\n Aonde deseja remover?\n - 1/ Para remover no comeco\n - 2/ Para remover no fim\n - 3/ Para remover em ambos \n")
			
			switch(consoleRemoveKey) {
				case "1":
					acessarArray.splice(0,1)
					console.log(acessarArray)
					break;

				case "2":
					acessarArray.pop(1)
					console.log(acessarArray)
					break;

				case "3":
					acessarArray.pop(1)
					acessarArray.splice(0,1)
					console.log(acessarArray)
					break;	
			}
			break;

		case "3":
			consoleSelectKey = readlineSync.question("\n Qual posição deseja acessar no Array? \n R: ")

			if (consoleSelectKey <= acessarArray.length -1) {
				console.log("	" + acessarArray[consoleSelectKey])
			}else{
				console.log("\n Posição informada ultrapassa o numero de elementos no Array. \n")
				
			}

			break;

		case "4":
			consoleFindKey = readlineSync.question("\n Qual elemento deseja buscar no Array? \n R:")
			var pos = acessarArray.indexOf(consoleFindKey)
			
			if (pos == -1) {
				console.log("\n Elemento não existe neste array. \n");
			}else{
				console.log("	" + pos)
			 }
			 break;
			// consoleFindRemoveKey = readlineSync.question("\n Deseja remover este elemento? \n - 1/Sim \n - 2/Nao \n R:")
			
			// if (consoleFindRemoveKey == "1") {
			// 	uniqueArray = acessarArray.filter(function (item, poss, self){
			// 		return self.indexOf(item) == poss;
			// 		console.log(poss)
			// 		console.log("Estou aqui")
			// 	})
			// 	// acessarArray.splice(pos,1)
			// }else{
			// 	break;
			// }			

		case "9":
			console.log("Conteudo da acessarArray:")
			console.log(acessarArray)
			break;
	}
}
