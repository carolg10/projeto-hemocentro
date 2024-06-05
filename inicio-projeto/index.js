usuario = []

//Menu principal
function imprimirMenu(){
    let mensagem = ""
    mensagem += " !! SISTEMA DE CADRASTRO DE DOARES !! \n" 
    mensagem += "---------------------------------------\n"
    mensagem += "1. Cadrastrar doador\n"
    mensagem += "2. Listar doador\n"
    mensagem += "3. Buscar doador por tipo sanguineo\n"
    mensagem += "4. Buscar doador por data da última doação\n"
    mensagem += "5. Sair\n"
    mensagem += "---------------------------------------"
    let opcao = Number(prompt(mensagem))
    return opcao
}


//1 >> Cadrastrando pessoas
//usuario = ""
function cadastroUsuario(){ 
    nomePessoa: prompt("Digite seu nome: ")
    idadePessoa: prompt("Digite sua idade")
    pesoPessoa: prompt("Digite seu peso: ")
    tipoDeSangue: prompt("Digite seu tipo sanguíneo: ")
    dataDeDoacao: prompt("Digite a data de sua última doação: ")
    usuario.push()
}

//2 >> Listando doadores
function listarDoadores(){
    let mensagem = ""
    mensagem += "!! LISTAGEM DE DOADORES !! \n"
    mensagem += "-------------------- \n"
    mensagem += "NOME          | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO \n"
    mensagem += "----------------------------------------------------------------- \n"
    for (let doador of usuario){
    alert(doador.nomePessoa , doador.idadePessoa , doador.pesoPessoa , doador.tipoDeSangue , doador.dataDeDoacao)}
}

function main() {
   let option = 0
   while(option !== 5 ){
    option = imprimirMenu ()
    switch(option){
        case 1:
            cadastroUsuario()
        break;
        case 2:
            listarDoadores()
        break;
        case 3:
            buscarDoadorTS() //buscar doador po tipo sanguineo(TS)
        break;
        case 4:
            buscarDoadorUD() //buscar doador por data de última doação (UD)
        default:
            sair()
        break
    }
 }
}
main()