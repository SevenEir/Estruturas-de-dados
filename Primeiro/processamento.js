var readlineSync = require('readline-sync');
var fs = require('fs');

var array = [];
var consoleK = "1"

 fs.readFile("suggestions_2017_06_07.csv", 'utf8', function(err, files){
	if(err) {
	    console.error("Could not open file: %s", err);
	    process.exit(1);
	}	
	var linhas = files.split(/\r?\n/);
	linhas.forEach(function(linha){
		array.push(linha)

	})

	consoleK = readlineSync.question("Qual estrutura deseja utilizar? \n - 1/ Pilha \n - 2/ Fila \n - 3/ Deque \n R:")
	switch (consoleK){
		case "1":
			require ('./Lerpilha.js');
			break;

		case "2":
			require ('./Lerfila.js');
			break;
		case "3":
			require('./Lerdeque.js');
			break;
		// case "4":
		// 	require('./LeracessarArray.js');
		// 	break;
	}
});