
import promptSync from "prompt-sync"
let prompt = promptSync()
export function exercicio38() {

    

    let nome = prompt('Digite o nome de usuario: ')
    let senha = prompt('Digite a senha: ')
    
    if (nome == "admin" && senha == "senha123") {
        // Usuario permitido 
        console.log("Usuário admin permitido!!!")
    } else {
        console.log("You shall not pass!!")
        console.log("Você não passará!")

}}
