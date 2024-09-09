let ex6 = () => {
    matriz = []
    vetor = []
    leituraMatriz6(matriz)
    somaColunas(matriz, vetor)
    multiplicacaoMatriz(matriz, vetor)
}
let leituraMatriz6 = (mat) => {
    for(i = 0; i < 20; i++){
        mat[i] = [] 
        for(j = 0; j < 10; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`))
        }
    }
}
let somaColunas = (mat, vet) => {
    let soma
    for(j = 0; j < 10; j++){
        soma = 0
        for(i = 0; i < 20; i++){
            soma += mat[i][j]
        }
        vet[j] = soma
    }
}
let multiplicacaoMatriz = (mat, vet) => {
    for(i = 0; i < 20; i++){
        for(j = 0; j < 10; j++){
            mat[i][j] = mat[i][j] * vet[j]
        }
    }
    console.log(mat)
}

let ex7 = () => {
    M = []
    N = []
    leituraMatrizes(M, N)
    terceiraMatriz(M, N)
}
let leituraMatrizes = (m, n) => {
    alert('LEITURA DA MATRIZ M')
    for(i = 0; i < 4; i++){
        m[i] = []
        for(j = 0; j < 6; j++){
            m[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da matriz M`))
        }
    }
    alert('LEITURA DA MATRIZ N')
    for(i = 0; i < 6; i++){
        n[i] = []
        for(j = 0; j < 4; j++){
            n[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da matriz N`))
        }
    }
}

let ex8 = () => {
    mat1 = []
    mat2 = []
    leituraMatrizes2(mat1, mat2)
    matrizSoma(mat1, mat2)
    matrizSub(mat1, mat2)
}
let leituraMatrizes2 = (m, n) => {
    for(i=0; i<3; i++){
        m[i] = []
        for(j=0; j<8; j++){
            m[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da PRIMEIRA matriz`))
        }
    }
    for(i=0; i<3; i++){
        n[i] = []
        for(j=0; j<8; j++){
            n[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da SEGUNDA matriz`))
        }
    }
}
let matrizSoma = (m, n) => {
    matSoma = []
    for(i=0; i<3; i++){
        matSoma[i] = []
        for(j=0; j<8; j++){
            matSoma[i][j] = m[i][j] + n[i][j]
        }
    }
}
let matrizSub = (m, n) => {
    matSub = []
    for(i=0; i<3; i++){
        matSub[i] = []
        for(j=0; j<8; j++){
            matSub[i][j] = m[i][j] - n[i][j]
        }
    }
}

let ex9 = () => {
    matriz = []
    leituraMatriz9(matriz)
    matrizMult(matriz)
}
let leituraMatriz9 = (mat) => {
    for(i=0; i<3; i++){
        mat[i] = []
        for(j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`)).toFixed(1)
        }
    }
}
let matrizMult = (mat) => {
    valor = Number(prompt('Insira o número que multiplicará a matriz'))
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            mat[i][j] = mat[i][j] * valor
        }
    }
    console.log(mat)
}

let ex10 = () => {
    matriz = []
    leituraMatriz10(matriz)
    exA(matriz)
    exB(matriz)
    exC(matriz)
    exD(matriz)
    exE(matriz)
}
let leituraMatriz10 = (mat) => {
    for(i=0; i<5; i++){
        mat[i] = []
        for(j=0; j<5; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`))
        }
    }
}
let exA = (mat) => {
    let somaA = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(i == 4){
                somaA += mat[i][j]
            }
        }
    }
    console.log(`a) ${somaA}`)
}
let exB = (mat) => {
    let somaB = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(j == 2){
                somaB += mat[i][j]
            }
        }
    }
    console.log(`b) ${somaB}`)
}
let exC = (mat) => {
    let somaC = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(i == j){
                somaC += mat[i][j]
            }
        }
    }
    console.log(`c) ${somaC}`)
}
let exD = (mat) => {
    let somaD = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(j == 4 - i){
                somaD += mat[i][j]
            }
        }
    }
    console.log(`d) ${somaD}`)
}
let exE = (mat) => {
    let somaE = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            somaE += mat[i][j]
        }
    }
    console.log(`a) ${somaE}`)
}