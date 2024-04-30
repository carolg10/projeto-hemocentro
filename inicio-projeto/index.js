//Menu principal
function imprimirMenu(){
    let mensagem = ""
    mensagem += " !! SISTEMA DE CADRASTRO DE DOARES !! "
    mensagem += "---------------------------------------"
    mensagem += "1. Cadrastrar doador"
    mensagem += "2. Listar doador"
    mensagem += "3. Buscar doador por tipo sanguineo"
    mensagem += "4. Buscar doador por data da última doação"
    mensagem += "5. Sair"
    mensagem += "---------------------------------------"
    let opcao = Number(prompt(mensagem))
    return opcao
}

//1 >> Cadrastrando pessoas
function cadastroUsuario(){
    let nomePessoa = prompt("Digite seu nome: ")
    let idadePessoa = Number(prompt("Digite sua idade"))
    let pesoPessoa = Number(prompt("Digite seu peso: "))
    let tipoDeSangue = prompt("Digite seu tipo sanguíneo: ")
    let dataDeDoacao = prompt("Digite a data de sua última doação: ")
}

function main() {
   let option = 0
   while(option != 5 ){
    option = imprimirMenu  
    switch(option){
        case 1:
            cadastroUsuario()
        break

        default:
        break
    }
 }
}
main()