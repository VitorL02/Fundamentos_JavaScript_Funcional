function esperarPromise( tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout(() => resolve(),tempo)
    })
}



// await esperarPromise(3000) //Utilizar o await só e possivel em JS em funções asincronas 


// esperarPromise(2000)
// .then(() => console.log('Executando Promise'))
// .then(esperarPromise)
// .then(() => console.log('Executando Promise'))
// .then(esperarPromise)
// .then(() => console.log('Executando Promise'))



async function executar (){
    //Utilizando o codigo dessa forma ele executa todas as funções juntas e não espera a execução de uma a uma 
    esperarPromise(1500)
    console.log('Async  1')
    esperarPromise(1500)
    console.log('Async  2')
    esperarPromise(1500)
    console.log('Async 3')
}

executar()


async function executarAwait (){
    //Utilizando o codigo dessa forma ele executa o await faz a função aguardar a execução de uma a uma
    await esperarPromise(1500)
    console.log('Async Await 1')
    await esperarPromise(1500)
    console.log('Async Await 2')
    await esperarPromise(1500)
    console.log('Async Await 3')
}

executarAwait()


function retornaValor(){
    return new Promise(resolve => {
        return setTimeout(()=> resolve(10),5000)
    })
}

async function executarAwait_RetornaValor (){
    let valor = await retornaValor()

    await esperarPromise(1500)
    console.log(`Async Await 1 ${valor}`)
    await esperarPromise(1500)
    console.log(`Async Await 1 ${valor + 2 }`)
    await esperarPromise(1500)
    console.log(`Async Await 3 ${valor + 3}`)

    return valor + 3
}

executarAwait_RetornaValor()

executarAwait_RetornaValor().then(console.log) //Somente utilizando o then e possivel acessar o return valor + 3 


async function executarDeVerdade(){
    const valor = await executarAwait_RetornaValor()
    console.log(valor)
}

executarDeVerdade()