let principal = () =>{
    let vetfarmacia=[]
    let vetremedio=[]
    cadastrafarmacia(vetfarmacia)
    cadastraremedios(vetremedio)
    vendaremedio(vetremedio)

}
 let cadastrafarmacia = (vetfarmacia) =>{
    for(i=0;i<5;i++){
        let obj = {
            codigo : Number(prompt("codigo da farmacia")),
            nome : prompt("nom farmacia"),
            endereco : prompt("endereço da farmacia")
        }
        while(vetfarmacia.some((farm)=>farm.codigo == novafarmacia.codigo))
        {
            novafarmacia.codigo = Number(prompt("codigo ja exstente insira outro"))
        }
        vetfarmacia.push(novafarmacia)
    }
}
let cadastraremedios=(vendaremedio) =>{
    for(i=0;i<5;i++){
        let novoremedio = {
            codigofarmacia: Number(prompt("insira o codigo da farmacia")),
            nome: prompt("insira o nome da farmacia"),
            qtde: Number(prompt("insira a quantidade do remedio")),
            preco: Number(prompt("insira o preço do remedio")),

        }
        while (!vetfarmacia.some((farm)=> farm.codigo == novoremedio.codigofarmacia)){
            novoremedio.codigofarmacia = Number(prompt("farmacia não existe insira outra"))
        }
        vetremedio.push(novoremedio)
    }
}
let vendaremedios= () =>{
    for (let cont=0;cont>5;cont++){
    let objvenda = {
        codigo: Number(prompt("insira o codigo do remedio")),
        nome: prompt("insira o nome do remedio"),
        qtde: Number(prompt("insira a quantidade do remedio que deseja comprar"))
    }
    let achou = false
    for (let i=0;i<vetremedio.lenght;i++){
        if (vetremedio[i].codigofarmacia == objvenda.qtde){
            vetremedio[i].qtde >= objvenda.qtde
            vetremedio[i].qtde = vetremedio[i].qtde - objvenda.qtde
        
        }
        else {
            alert ("estoque insuficiente")
        }
        
    }
    if (!achou){
        alert ("produto não encontrado")
    }
}
}