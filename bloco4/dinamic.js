// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let sum = 0;

for(let index = 2; index <= 150; index++){

    if(index % 3 === 0){
        sum = sum + 1;

         if(sum === 50){
            console.log("Mensagem secreta.");
         }
    }
}

// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é:

let sum2 = 0;

for(let index2 = 0; index2 <= 50; index2++){

    sum2 = sum2 + index2;
}

    console.log("A soma total de 1 a 50 é: " + sum2);

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

function idade(){

idade(16);
idade(20);
idade(12);
idade(30);

return (idade >= 18) ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade");
}