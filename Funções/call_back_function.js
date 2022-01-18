
//A função callback e utilizada por exemplo para algo que demora um certo tempo responder,e quando o resultado e entregue  a função callback chama novamente a função com a resposta

function exec (fn,a,b){
    return fn(a,b)
}

const somarNoTerminal = (x,y) => console.log(x+y)
const subtrairNoTerminal = (w,z) => console.log(w-z)
const subtrair = (w,z) => w-z

exec (somarNoTerminal,56,38)
exec (subtrairNoTerminal,187,27)


const resposta = exec(subtrair,50,25)
console.log(resposta)

const callback = () =>console.log('Exec...') 
setInterval(callback,1000) //Chama a função com um intervalo infinitamente,setInterval não para de repetir a função 