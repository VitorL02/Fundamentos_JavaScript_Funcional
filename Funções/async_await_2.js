function geradorDeNumeros_Entre(min,max, numerosProibidos){
    if(min > max){
        [max,min] = [min,max] //Destructuring
  
    }
    return new Promise((resolve,reject) =>{
        const random = parseInt(Math.random()  * (max - min + 1) + min)
        if(numerosProibidos.includes(random)){
            reject('Numero Repetido')
        }else{
        resolve(random)
        }
    })
}

async function gerarNumerosMegaSena(numerosAgerar,tentativas = 1){
    try {
        const numeros = []

        //Array.fill() ou Array.keys cria um array com a quantidade de elementos recebidos
        for(let _ of Array(numerosAgerar).fill()){
            numeros.push( await geradorDeNumeros_Entre(1,60,numeros))//espera a geração dos numeros pra assim colocar no array 
        }
        return numeros
    } catch (error) {
        if(tentativas >= 10){
            throw 'Impossivel gerar os numeros'
        }else{
           return gerarNumerosMegaSena(numerosAgerar,tentativas + 1)
        }
        
    }
}


gerarNumerosMegaSena(15)
.then(console.log)
.catch(console.log)