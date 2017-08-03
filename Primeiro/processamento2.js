var readlineSync = require('readline-sync');
var fs = require('fs');
var sleepTime = require ('sleep-time')

var array = [];
var consoleK = "1"
var consoleKey = "1"


 fs.readFile("suggestions_2017_06_07.csv", 'utf8', function(err, files){
	if(err) {
	    console.error("Could not open file: %s", err);
	    process.exit(1);
	}	
	//console.log(files)
	var linhas = files.split(/\r?\n/)
	//console.log(linhas)
	
	linhas.forEach(function(linha){
//		var intervalo = setTimeout(myFunction, 1);
//		function myFunction(){
//			sleepTime(500);
			array.push(linha)
			console.log("Linha:" + array.length)
			console.log(array)
//		}
//		console.log(array)

	})
	sleepTime(100)
	consoleK = readlineSync.question("\n O que deseja fazer? \n - 1/ Pilha \n - 2/ Fila \n - 3/ Deque \n 4 - Consultar Posicao \n 5 - Consultar Elemento \n R:")
	switch (consoleK){
		case "1":
			while(consoleKey !=0){
			consoleKey = readlineSync.question("\n O que deseja fazer? \n 1 - Mostrar Csv \n 2 - Remover ultimo elemento \nR:")
				switch(consoleKey){
					case "1":
					console.log(array)
					break

					case "2":
					array.pop(1)
					console.log(array)
					break
				}	
			}
		break;

		case "2":
		while(consoleKey !=0){
			consoleKey = readlineSync.question("\n O que deseja fazer? \n 1 - Mostrar Csv \n 2 - Remover Primeiro elemento \nR:")
			switch(consoleKey){
				case "1":
				console.log(array)
				break

				case "2":
				array.shift()
				console.log(array)
				break

			}	
		}
		break;

		case "3":
		while(consoleKey !=0){
			consoleKey = readlineSync.question("\n O que deseja fazer? \n 1 - Mostrar Csv \n 2 - Remover Primerio e ultimo elemento \n R:")
			switch(consoleKey){
				case "1":
				console.log(array)
				break

				case "2":
				array.splice(0,1)
				array.pop(1)
				console.log(array)
				break

				// case "3":
				// console.log(array)
				// consoleSelectKey = readlineSync.question("\n Qual linha deseja excluir? \n")
				// if (consoleSelectKey <= array.length -1) {
				// 	consoleSelectKey = consoleSelectKey -1
				// 	array.splice(consoleSelectKey,1)
				// }
				// break
			}	
		}	
		break;

		case "4":
		consoleKey = readlineSync.question("\n Qual posicao deseja acessar no Array? \n R: ")
		if (consoleKey <= array.length -1) {
			console.log("	" + array[consoleKey])
		}else{
			console.log("\n Posição informada ultrapassa o numero de elementos no Array. \n")	
		}
		break;

		case "5":
		consoleKey = readlineSync.question("\n Qual elemento deseja buscar no Array? \n R:")
		var pos = array.indexOf(consoleKey)	
		if (pos == -1) {
			console.log("\n Elemento nao existe neste array. \n");
		}else{
			console.log("\n Posicao do elemento:	" + pos)
		}
		break;	

	}
});