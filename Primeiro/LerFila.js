var readlineSync = require('readline-sync');
var fs = require('fs');

var array = []
var consoleKey = "1"
var consoleAdd = ""


fs.readFile("suggestions_2017_06_07.csv", 'utf8', function(err, files){
	if(err) {
	    console.error("Could not open file: %s", err);
	    process.exit(1);
	}	
	var linhas = files.split(/\r?\n/);
	linhas.forEach(function(linha){
		array.push(linha)
	
	})
	while(consoleKey !=0){
		consoleKey = readlineSync.question("O que deseja fazer? \n 1 - Mostrar Csv \n 2 - Remover Primeiro elemento \nR:")
		
		switch(consoleKey){
			case "1":
			console.log(array)
			break

			case "2":
			array.splice(0,1)
			console.log(array)
			break

		}	
	}
})