// Anonymous Function

(function (a,b,c) {
    console.log( `A soma é ${a+b+c}`)
})(1,2,3); //Forma de "Chamar" uma função anonima,uma vez que a mesma não possui nome e necessario passar os parametros em seguida


(function () {
    let primeiro_numero = 100
    console.log(primeiro_numero)
})(); //necessario colocar ; para conseguir realizar a execução

(()=> {
    console.log('Ola arrow function invocada imediatamente')
})();
(()=> console.log ('ola arrow function reduzida'))();