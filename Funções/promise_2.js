

// setTimeout(function(){
//     console.log('Executando callback')


//     setTimeout(function(){
//         console.log('Executando callback...')


//         setTimeout(function(){
//             console.log('Executando callback...2')
//         }),3000

//     }),2000

// },2000)

function esperarPromise( tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout(function(){
            console.log('Executa promise')
            resolve('Resolve o "inferno de callback" ')
        },tempo)
    })
}

esperarPromise(3000).then(text => console.log(text))

esperarPromise().then(() => esperarPromise())
.then(esperarPromise) // Faz a mesma execução do  inferno de "callbacks",onde ele primeiro espera 2 segundos, depois espera mais 2 segundos e finaliza esperando o ultimo 2 segundos