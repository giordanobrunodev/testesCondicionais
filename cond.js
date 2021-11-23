let velocityNave = 0;

let nomePiloto = prompt("Qual é o seu nome?");
let qualVelocity = prompt("Qual velocidade gostaria de acelerar a nave?");
confirm("Indo para velocidade " + qualVelocity + "km/s");

if(qualVelocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
  } else if(qualVelocity < 40) {
    alert("Vc está devagar, podemos aumentar mais")
  } else if (qualVelocity >= 40 && qualVelocity < 80) {
    alert("Parece uma boa velocidade para manter")
  } else if (qualVelocity >= 80 && qualVelocity < 100) {
    alert("Velocidade alta. Considere diminuir")
  } else if (qualVelocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado")
  }
alert("Nome do Piloto: " + nomePiloto + "\nVelocidade atual: " + qualVelocity + "km/s")
