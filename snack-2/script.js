const teams = [
  {
  nome: 'Liverpool',
  puntiFatti: 0,
  falliSubiti: 0,
},
{
nome: 'Napoli',
puntiFatti: 0,
falliSubiti: 0,
},
{
nome: 'Ajax',
puntiFatti: 0,
falliSubiti: 0,
},
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

for (let i = 0; i < teams.length; i++) {
  let thisTeam = teams[i];
  thisTeam.falliSubiti = randomNumber(1, 10);
  thisTeam.puntiFatti = randomNumber(1, 10);
}

console.log('Array1 ', teams);

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
  let thisTeam = teams[i];

  const { nome, falliSubiti } = thisTeam;

  newTeams.push({
    nome,
    falliSubiti,
  });
}

console.log('Array2 ', newTeams);
