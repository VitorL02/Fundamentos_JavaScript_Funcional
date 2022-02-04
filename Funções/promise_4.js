
function funcionarOuNão(valor, chanceError){

    //são passados dois parametros quando se espera que a promise entregue uma erro, o reject faz essa função
    return new Promise((resolve,reject)=> {

        try {
            con.log('temp')
        if(Math.random() < chanceError){
            reject('Ocorreu um Erro')
        }else{
            resolve(valor)
        }
    } catch (error) {
        reject(error)
    }


    }) 
}


funcionarOuNão('Testes',0.5)
.then(valor => console.log(valor))
.catch(error => console.log(error)) //Trata o erro e permite visualizar o que aconteceu


funcionarOuNão('Testes',0.5)
.then(valor => consol.log(valor),
error_espc => console.log(`Erro Especifico : ${error_espc}`))//Quando o erro e tratado no then o catch não e chamado
.catch(error => console.log(error))
