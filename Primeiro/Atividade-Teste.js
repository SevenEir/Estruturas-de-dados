

fs.readFile('../Docs/suggestions_2017_06_07.csvs', 'utf-8', function(err, data){
    var linhas = data.split(/\r?\n/);
    linhas.forEach(function(linha){
       console.log(linha); // aqui podes fazer o que precisas com cada linha
    })
})