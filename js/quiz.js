const perguntas = [
  { q: 'Em que ano o São Paulo foi campeão mundial pela primeira vez?', o: ['1977', '1992', '2005'], c: 1 },
  { q: 'Qual é o estádio do clube?', o: ['Morumbis', 'Pacaembu', 'Vila Belmiro'], c: 0 },
  { q: 'Quem treinava o time bicampeão mundial em 1992 e 1993?', o: ['Telê Santana', 'Muricy Ramalho', 'Tite'], c: 0 },
  { q: 'Quantos Brasileiros seguidos o clube venceu entre 2006 e 2008?', o: ['Dois', 'Três', 'Quatro'], c: 1 },
  { q: 'Quais são as cores do clube?', o: ['Vermelho, branco e preto', 'Verde e branco', 'Azul e grená'], c: 0 }
];
let indice = 0, pontos = 0;
const elP = document.getElementById('pergunta');
const elO = document.getElementById('opcoes');
const elF = document.getElementById('feedback');
const elPl = document.getElementById('placar');
function mostrar() {
  if (indice >= perguntas.length) {
    elP.textContent = 'Fim! Você acertou ' + pontos + ' de ' + perguntas.length + '.';
    elO.innerHTML = '<button type="button" id="refazer">Jogar de novo</button>';
    document.getElementById('refazer').addEventListener('click', () => { indice = 0; pontos = 0; mostrar(); });
    elF.textContent = ''; elPl.textContent = ''; return;
  }
  const p = perguntas[indice];
  elP.textContent = (indice + 1) + '. ' + p.q;
  elO.innerHTML = ''; elF.textContent = '';
  elPl.textContent = 'Pontos: ' + pontos;
  p.o.forEach((texto, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = texto;
    b.addEventListener('click', () => responder(i));
    elO.appendChild(b);
  });
}
function responder(i) {
  const certo = perguntas[indice].c;
  if (i === certo) { pontos++; elF.textContent = 'Acertou!'; elF.style.color = 'green'; }
  else { elF.textContent = 'Errou. Resposta: ' + perguntas[indice].o[certo]; elF.style.color = '#b00020'; }
  elO.querySelectorAll('button').forEach((b) => (b.disabled = true));
  setTimeout(() => { indice++; mostrar(); }, 1400);
}
mostrar();
