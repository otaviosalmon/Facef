function ex1(){
    let n1 =  (document.getElementById("n1").value)
    let n2 =  (document.getElementById("n2").value)
    let sub = (n1 - n2)
    alert ("O resultado da subtração é: " + sub)
}

function ex2(){
    let n1 =  (document.getElementById("n1").value)
    let n2 =  (document.getElementById("n2").value)
    let n3 =  (document.getElementById("n3").value)
    let mult = (n1*n2*n3)
    alert ("O resultado da multiplicação é: " + mult)
}

function ex3(){
    let n1 =  (document.getElementById("n1").value)
    let n2 =  (document.getElementById("n2").value)
    let div = (n1/n2)
    alert ("O resultado da divisão é: " + div)
}

function ex4(){
    let n1 =  (document.getElementById("n1").value)
    let n2 =  (document.getElementById("n2").value)
    let mdp = ((n1*2 + n2*3)/5)
    alert ("O resultado da média ponderada é: " + mdp)
}

function ex5(){
    let p = Number (document.getElementById("p").value)
    let pf = (p*0.9)
    alert ("O preço final do produto é: " + pf)
}

function ex6(){
    let fixo = Number (document.getElementById("fixo").value)
    let vendas = Number (document.getElementById("vendas").value)
    let comissao = (vendas*0.04)
    let total = (comissao + fixo)
    alert ("comissao " + comissao + "\nSalario total: " + total)
}

function ex7(){
    let peso = Number (document.getElementById("peso").value)
    let engorda = (peso*1.15)
    let emagrece = (peso*0.8)
    alert ("Se engordar: " + engorda + "\nSe emagrecer: " + emagrece)
}

function ex8(){
    let kg = Number (document.getElementById("kg").value)
    let g = (kg*1000)
    alert ("O seu peso em gramas é: " + g + "g")
}

function ex9(){
    let bmaior = Number (document.getElementById("bmaior").value)
    let bmenor = Number (document.getElementById("bmenor").value)
    let h = Number (document.getElementById("h").value)
    let a = (((bmaior + bmenor)* h)/2)
    alert ("A área do trapézio é: " + a)
}

function ex10(){
    let l = Number (document.getElementById("l").value)
    let a = (l*l)
    alert ("A área do quadrado é: " + a)
}
