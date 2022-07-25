console.log("hello world");

// *************************Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// *****************************Codigo del triangolugo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y la base " +
// //     baseTriangulo +
//     "cm"
// );
// console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base) {
    lado1 = Number(lado1);
    lado2 = Number(lado2);
    base = Number(base);
    return lado1 + lado2 + base;
} 

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(altura,base) {
    altura = Number(altura);
    base = Number(base);
    return (base*altura )/2;
} 
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// ******************************Codigo del Circulo
console.group("Circulos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo*2;
// const PI = 3.1415;
// const PI2 = Math.PI;

// console.log("El radio del circulo es: " + radioCirculo + "cm");
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log ("el perimetro del circulo con PI1 es: " + perimetroCirculo + "cm");
// const perimetroCirculo2 = diametroCirculo * PI2;
// console.log ("el perimetro del circulo con PI2 es: " + perimetroCirculo2 + "cm");

// const areaCirculo = (radioCirculo*radioCirculo)*PI;
// console.log ("el area del circulo con PI1 es: " + areaCirculo + "cm^2");
// const areaCirculo2 = (radioCirculo*radioCirculo)*PI2;
// console.log ("el area del circulo con PI2 es: " + areaCirculo2 + "cm^2");

console.groupEnd();



//funcion para hacer funcionar el HTML
//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//triagulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("lado1");
    const value1 = input.value;

    const input2 = document.getElementById("lado2");
    const value2 = input2.value;

    const input3 = document.getElementById("base");
    const value3= input3.value;

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("altura");
    const value1 = input.value;

    const input2 = document.getElementById("base");
    const value2 = input2.value;

    const area = areaTriangulo(value1,value2);
    alert(area);
}

//circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

