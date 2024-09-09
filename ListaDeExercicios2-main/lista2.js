function ex5(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let escolha = Number (document.getElementById("escolha").value)
    let resultado
    switch(escolha){
        case 1: resultado = (n1 + n2) / 2
                break //nao entra nos cases de baixo
        case 2: if (n1 >= n2){
                    resultado = n1 - n2
                }
                else {
                    resultado = n2 - n1
                }
                break
        case 3: (resultado = n1 * n2)
                break
        case 4: if (resultado != 0){
                (resultado = n1 / n2)
                }
                else {
                    resultado = "Não pode dividir por 0"
                }
                break
        default: resultado = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}
