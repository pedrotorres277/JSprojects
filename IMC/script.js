const nome = document.getElementById("name");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (nome.value === "" || peso.value === "" || altura.value === "") {
        return alert("Digite todos os campos...");
    }

    let alturaIMC = parseFloat(altura.value) * parseFloat(altura.value);
    let pesoIMC = parseInt(peso.value);

    function calcIMC() {
        let resultado = pesoIMC / alturaIMC;
        return resultado.toFixed(1);
    }

    let resultado = calcIMC();
    console.log(resultado);

    // Calcular IMC

    if (resultado < 18.5) {
        result.innerHTML = `${nome.value}, seu IMC é de ${resultado} e você está abaixo do peso!`;
    } else if (resultado < 25) {
        result.innerHTML = `${nome.value}, seu IMC é de ${resultado} e seu peso é adequado!`;
    } else if (resultado < 30) {
        result.innerHTML = `${nome.value}, seu IMC é de ${resultado} e você está com sobrepeso!`;
    } else {
        result.innerHTML = `${nome.value}, seu IMC é de ${resultado} e você está com obesidade!`;
    }

    // Limpa os campos
    
    nome.value = "";
    peso.value = "";
    altura.value = "";
});
