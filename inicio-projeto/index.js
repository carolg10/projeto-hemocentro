let usuarios = [] //declarando uma variavel GLOBAL

//Menu principal
function imprimirMenu(){
    let mensagem = ""
    mensagem += " !! SISTEMA DE CADRASTRO DE DOARES !! \n" 
    mensagem += "------------------------------------------\n"
    mensagem += "1. Cadrastrar doador\n"
    mensagem += "2. Listar doador\n"
    mensagem += "3. Buscar doador por tipo sanguíneo\n"
    mensagem += "4. Buscar doador por data da última doação\n"
    mensagem += "5. Sair\n"
    mensagem += "-------------------------------------------"
    let opcao = Number(prompt(mensagem))
    return opcao
}

//1 >> Cadrastrando pessoas - nova função para coletar os dados do usuario
function cadastroUsuario() { 
    const nome = prompt("Digite seu nome: ")
    const idade = prompt("Digite sua idade: ")
    const peso = prompt("Digite seu peso: ") 
    const tipoSanguineo = prompt("Digite seu tipo sanguíneo: ").toUpperCase()
    const dataDoacao = prompt("Digite a data de sua última doação dd/mm/aaaa: ")
    
    usuarios.push({ nome, idade, peso, tipoSanguineo, dataDoacao })
    alert(`Doador cadrastado com sucesso! \n Nome: ${nome}\nIdade: ${idade} anos\nPeso: ${peso} kg\nTipo Sanguíneo: ${tipoSanguineo}\nData da última doação: ${dataDoacao}`)
}

//2 >> Listando doadores - apresenta uma lista com os usuarios já registrados 
function listarDoadores(){
    let mensagem = ""
    mensagem += "!! LISTAGEM DE DOADORES !! \n"
    mensagem += "----------------------------------------------------------------- \n"
    mensagem += "NOME  | IDADE   |  PESO   |  TIPO SANGUÍNEO  | ÚLTIMA DOAÇÃO \n"
    mensagem += "----------------------------------------------------------------- \n"
    for (let doador of usuarios) {
        mensagem += `${doador.nome} | ${doador.idade} | ${doador.peso} kg | ${doador.tipoSanguineo} | ${doador.dataDoacao}\n` // print as informações do usuario registradas na primeira função
    }
    
    alert(mensagem)
}


//4 >> Buscar por tipo sanguineo (TS)
function buscarDoadorTS() { // busca doadores da array usuario que tem o tipo sanguinio digitado pelo usuario
    if (usuarios.length === 0) {
        alert("Nenhum doador cadastrado.")
        return;
    }

    const tipoSanguineo = prompt("Digite o tipo de sangue que deseja buscar:").toUpperCase() // toUpperCase imprime o caracter digitado em maisculo
    let mensagem = `Lista de doadores com tipo sanguíneo ${tipoSanguineo}:\n`
    let existe = false //Foi utilizado de uma nova variavel para caso o usuario digite um tipo de sangue que ainda não foi cadastrado

    for (let doador of usuarios) {
        if (doador.tipoSanguineo === tipoSanguineo) {
            mensagem += `${doador.nome} | ${doador.idade} | ${doador.peso} kg | ${doador.tipoSanguineo} | ${doador.dataDoacao}\n`
            existe = true
        }
    }

    if (!existe) {
        mensagem = "Nenhum doador encontrado com esse tipo sanguíneo."
    }
    
    alert(mensagem)
}

//5 >> Buscar doador por data da última doação (UD)
function buscarDoadorUD() { // busca doadoes que tem a data de doação especifica pelo usuario
    if (usuarios.length === 0) {
        alert("Nenhum doador cadastrado.")
        return // retorna a primeira condição
    }
    const dataDoacao = prompt("Digite a data da doação que deseja buscar: ")
    let mensagem = `Lista de doadores com data de doação ${dataDoacao}:\n`
    let existe = false

    for (let doador of usuarios) {
        if (doador.dataDoacao === dataDoacao) {
            mensagem += `${doador.nome} | ${doador.idade} | ${doador.peso} kg | ${doador.tipoSanguineo} | ${doador.dataDoacao}\n`
            existe = true
        } 
    }

    if (!existe) { 
        mensagem = "Nenhum doador encontrado com essa data de doação."
    }
    
    alert(mensagem)
}

function main() {
    let opcao = 0;
    while (opcao !== 5) {
        opcao = imprimirMenu()
        switch (opcao) {
            case 1:
                cadastroUsuario() 
                break
            case 2:
                listarDoadores()
                break
            case 3:
                buscarDoadorTS() // buscar doador por Tipo Sanguineo (TS)
                break
            case 4:
                buscarDoadorUD() // buscar doador por Ultima Doaçao (UD)
                break
            case 5:
                alert("Saindo do sistema.") // sair
                break
            default:
                alert("Opção inválida, tente novamente.")
                break
        }
    }
}

main() // função MAIN = função principal que realiza as ações, essa função é um looping até que o usuario escolha SAIR 