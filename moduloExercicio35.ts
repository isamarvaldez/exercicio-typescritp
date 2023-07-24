import promptSync from "prompt-sync"
let prompt = promptSync()
export function exercicio35() {
    
    

    let nome: string = prompt("Digite o nome do funcionário: ")
    let cargo: string = prompt("Digite o cargo do funcionário: ")
    let salario: number = parseFloat(prompt("Digite o salario do funcionário: "))
    
    if(salario < 1000) {
        // salario = salario * 1.1
        salario = salario + ( (salario / 100) * 10 )
    }
    
    console.log("Nome: " + nome)
    console.log("Cargo:", cargo)
    // console.log(`Salario: ${salario.toFixed(2)}`)
    console.log("Salario: " + salario.toFixed(2))
}