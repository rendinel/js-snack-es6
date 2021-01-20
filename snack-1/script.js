
const bici = [
  {
    "nome": "Bianchi",
    "peso":1
  },
  {
    "nome": "Shimano",
    "peso":2
  },
  {
    "nome": "Atala",
    "peso":3
  }
]

let biciLeggera = bici[0];

for (let i = 0; i < bici.lenght; i++) {
  if(bikes[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

console.log(biciLeggera);

const {nome,peso} = biciLeggera;

document.getElementById('container').innerHTML = `<ul> <li>Nome: ${nome} </li> <li> Peso: ${peso} </li> </ul>`
