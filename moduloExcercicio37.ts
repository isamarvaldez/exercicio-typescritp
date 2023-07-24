import promptSync from "prompt-sync"
let prompt = promptSync()
export function exercicio37() {
    
    let numero = parseInt(prompt("Digite um número inteiro: "))
    
    if (numero % 2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O número é impar")


}}