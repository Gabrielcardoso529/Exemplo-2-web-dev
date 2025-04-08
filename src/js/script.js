//DECLARAÇÕES E VARIAVEIS
var nome ="fiap";
console.log(nome)

let idade =17;
console.log(idade)

const Sobrenome ="Cardoso";
console.log(Sobrenome)

let aula;
console.log(aula)

let valor =null;
console.log(valor)

let exemplo1={};

let exemplo2=[];

//TIPOS DE VARIAVES
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4= "Aula";
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["malu, biel"];
console.log(typeof exemplo6)

//CONVERSÕES

//float => inteiro

let numFloat =123.456;
console.log(parseInt(numFloat))

//string => float
let numString ="547.987"
console.log(parseFloat(numString))

//float => string
let numFloat1 =554.665;
console.log(numFloat1.toString())

let numInt=100;
console.log(numInt.toString())

//METODOS - PARTE-1

//LENGHT- VERIFICA O TAMANHO DA STRING

let frase = "O mundo da Tecnologia";
console.log(frase.length)

//indexOf - retorna um trecho de um texto

let texto = "Programação Sustentável";
console.log(texto.indexOf("ç"))

//slice - retorna parte de um texto apontando o inicio e o final

let info="Processamento de ponta";
console.log(info.slice(0,15))

// OPERADORES ARITMÉTICOS

const num1 =10;
const num2 =20;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)


// OPERADORES LÓGICOS

const num3 =20;
const num4 =30;

console.log(num3 < num4);
console.log(num3 < num4 && num4 < 50);
console.log(num3 > num4 || num4 > num3)
console.log(num4 === num3 || num4 <= num3)



//OPERADORES DE COMPARAÇÃO

const num5 =25;
const num6 =35;

console.log(num5 == num6);//compara
console.log(num5 === num6);//compara e verifica o tipo de variavel
console.log(num5!= num6);//diferente
