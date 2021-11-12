alert("--- Bem-vindo(a) à calculadora de IMC ---");

let peso = prompt("Digite seu peso em Kg: ");
let altura = prompt("Digite sua altura: ");

function imc(a, b){
    
    return b / (a * a);
};

alert(`Seu índice de massa corporal é: ${imc(altura, peso).toFixed(3)}`);

const teste = imc(altura, peso);

if(teste < 17){

    alert("Você está muito abaixo do peso!!");

} else if(teste == 17 || teste <= 18.49){

    alert("Você está abaixo do peso");

} else if(teste == 18.5 || teste <= 24.99){

    alert("Você está em seu peso normal");

} else if(teste == 25 || teste <= 29.99){

    alert("Você está acima do peso");

} else if(teste == 30 || teste <= 34.99){

    alert("Você está com o nível 1 de obesidade!");

} else if(teste == 35 || teste <= 39.99){

    alert("Você está com o nível 2 de obesidade!! (Severa)");

} else{

    alert("Você está com o nível 3 de obesidade!!! (Mórbida)");

};