function selectRange(primeiro_numero,segundo_numero,steps = 1 ){

    const numero1 = segundo_numero === undefined ? 1: primeiro_numero
    const numero2 = segundo_numero === undefined ? primeiro_numero : segundo_numero 
    const step = numero1 <= numero2 ? Math.abs(steps) : -Math.abs(steps)

    const nums=[]
    for(let i = numero1; numero1 <= numero2 ? i<= numero2 : i >= numero2 ; i += step){
        nums.push(i)
    }
    return nums
}

console.log(selectRange(5))

console.log(selectRange(6,11))

console.log(selectRange(10,19,2))

console.log(selectRange(6,2))

console.log(selectRange(8,-3,4))