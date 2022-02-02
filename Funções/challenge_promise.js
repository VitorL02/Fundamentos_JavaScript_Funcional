const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados_funcao_callback.txt') 


function readConteudo(caminho){
   return new Promise(resolve =>{
        return fs.readFile(caminho,function(_,conteudo) {
            resolve(conteudo.toString())

        })
    })
}

readConteudo(caminho)
.then(conteudo => console.log(conteudo))

readConteudo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => console.log(linhas[1]))
