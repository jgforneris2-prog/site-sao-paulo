const fatos = [
  'Rogério Ceni marcou mais de 100 gols como goleiro com a camisa do São Paulo.',
  'O Morumbis foi inaugurado em 2 de outubro de 1960.',
  'O clube é tricampeão da Copa Libertadores: 1992, 1993 e 2005.',
  'Entre 2006 e 2008, o São Paulo venceu três Brasileiros seguidos.',
  'As cores do clube são vermelho, branco e preto.',
  'Em 2005, o Tricolor venceu o Liverpool na final do Mundial de Clubes.',
  'Em 1993, o time venceu o Milan por 3 a 2 na final do Mundial, em Tóquio.'
];
const area = document.getElementById('fato');
const info = document.getElementById('contador-fatos');
let ultimo = -1, vistos = 0;
document.getElementById('btn-sortear').addEventListener('click', () => {
  let i;
  do { i = Math.floor(Math.random() * fatos.length); } while (i === ultimo);
  ultimo = i; vistos++;
  area.textContent = fatos[i];
  info.textContent = 'Curiosidades sorteadas: ' + vistos;
});
