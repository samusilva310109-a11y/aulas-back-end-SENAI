/****************************************************************************
* Objetivo: Projeto para realizar o cálculo de média escolares
* Autor: Samuel Silva
* Data 29/01/2026
* Versão 1.0.1.26
******************************************************************************/

/**
 *  Formas de criar variáveis:
 * 
 *      var -> forma antiga de se criar variáveis. Possui escopo global (ou de função).
 * 
 *      let -> forma moderna de criar variáveis. Possui escopo local (ou escopo de bloco), ou seja, 
 *          ela não será "vista" pelo restante do código.
 * 
 *      const -> é recomendável utilizá-la em criação de valores inalteráveis (valores constantes).
 *          As variáveis que recebem valores constantes, por boa prática deve-se serem nomeadas com
 *          todas as letras maiscúlas.
 *          Pode ser criada tanto em escopo global quanto em escopo local.
 *          OBS: em caso da variável cosntante for um import de uma biblioteca (que não é sua), deve-se
 *          por boa prática criar com a case da biblioteca.
*/

/**
 *  Operadores de comparação no Javascript
 *      
 *      == -> Permite comparar a igualdade de dois valores
 *      != -> Permite comparar a difernça de dois conteúdos
 *      <  -> Permite validar se o valor é menor 
 *      >  -> Permite validar se o valor é maior 
 *      <= -> Permite validar se o valor é menor ou igual
 *      >= -> Permite validar se o valor é maior ou igual
 *      === -> Compara a igualdade de conteúdo e tipagem de dados 
 *      !== -> Compara a difernça de conteúdo e a igualdade de tipagem de dados
 *      ==! -> Compara a igualdade de conteúdo e a diferença de tipagem de dados
 * 
 * Operadores Lógicos
 * 
 *  E -> AND -> &&
 *  OU -> OR -> ||
 *  NAO -> NOT -> !
 */

//Import da biblioteca de entrada de dados
const readLine = require('readline');

//instanciação de um objeto para captar as entradas de dados
const entradaDeDados  = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criamos uma réplica da variável de argumentação da função de callback para a utilização do valor sem a perda do seu valor original
entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    let nome = nomeAluno;

    entradaDeDados.question('Digite a primeira nota: ', function(valor1){
        let nota1 = valor1;

        entradaDeDados.question('Digite a segunda nota: ', function(valor2){
            let nota2 = valor2

            entradaDeDados.question('Digite a terceira nota: ', function(valor3){
                let nota3 = valor3;

                entradaDeDados.question('Digite a quarta nota: ', function(valor4){
                    let nota4 = valor4;

                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: existem campos obrigatórios que não foram preenchidos!!!')
                    }else if(nota1 < 0 || nota1 > 100 || 
                        nota2 < 0 || nota2 > 100|| 
                        nota3 < 0 || nota3 > 100 || 
                        nota4 < 0 || nota4 > 100
                    ){
                        console.log('ERRO: VALOR DA NOTA INVALIDO')
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: TODOS OS VALORES DAS NOTAS DEVEM SEREM NÚMEROS')
                    }else{
                        console.log('Calcular')
                    }
                })
            })
        })
    })
})

function calcularMedia(nota1, nota2, nota3, nota4){
    if(nota1 || nota2 || nota3 || nota4 == null){
        
    }
}
