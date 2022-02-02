function geradorDeNumeros_Entre(min,max){
    //Realiza uma validação caso o usuario inverta os valores
    if(min > max){
        [max,min] = [min,max] //Destructuring
  
    }
    return new Promise(resolve =>{
        const random = parseInt(Math.random()  * (max - min + 1) + min)
        resolve(random)
    })
}

geradorDeNumeros_Entre(10,30).then(console.log)

geradorDeNumeros_Entre(10,60)
.then(num => num * 10) 
.then(numeroX10 => `O numero gerado x 10 foi ${numeroX10}`)
.then(console.log)