let result = undefined;

// AND Operator - Este operador retorna verdadeiro quando os dois valores de entrada são verdadeiros, caso contrário ele retorna falso
// const a = true;
// const b = true
// result = a && b;
// exercício
// const felipe_eh_maior_de_idade = true
// const vitor_eh_maior_de_idade = true
// const sao_maiores = felipe_eh_maior_de_idade && vitor_eh_maior_de_idade
// console.log(sao_maiores);


// OR Operator - Este operador retorna verdadeiro quando um ao menos um valor de entrada é verdadeiro
// const a = true;
// const b = true
// result = a || b;
// exercício
// const felipe_eh_idoso = false
// const vitor_eh_idoso = false
// const ha_algum_idoso = felipe_eh_idoso || vitor_eh_idoso
// console.log(sao_idosos);


// XOR
// const a = false;
// const b = true
// result = !!(a ^ b);
// exercício
// const sou_homem = true
// const parceira_eh_homem = true
// const deu_match = sou_homem && !parceira_eh_homem
// console.log(deu_match);


// NOT
// const a = true;
// const b = false
// result = !b;
// exercício
// const origem_nordestina = true
// console.log(!origem_nordestina);


// JavaScript Comparison Operators
// result = '18' == 18
// result = '18' === 18
// result = '18' === 18
// result = 18 === 18
// result = 18 !== 20
// result = 18 !== 18
// result = 18 > 20
// result = 18 < 20
// result = 20 < 18
// result = 20 > 18
// result = 20 >= 19
// result = 20 >= 20
// result = 20 <= 20
// result = 20 <= 21

const a = 11
const b = 11

if (a > b) {
    console.log('1')
} else if (a < b) {
    console.log('2')
} else {
    console.log('3')
}

document.querySelector('.title').textContent = result;
