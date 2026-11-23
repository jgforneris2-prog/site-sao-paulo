const eventos = [
  { ano: 1930, t: 'Fundação', d: 'O clube é fundado oficialmente em 25 de janeiro de 1930.' },
  { ano: 1935, t: 'Refundação', d: 'Em 16 de dezembro nasce o São Paulo Futebol Clube que conhecemos hoje.' },
  { ano: 1960, t: 'Morumbis', d: 'O estádio é inaugurado em 2 de outubro de 1960.' },
  { ano: 1977, t: 'Primeiro Brasileiro', d: 'O Tricolor conquista seu primeiro título do Campeonato Brasileiro.' },
  { ano: 1992, t: 'Libertadores e Mundial', d: 'O time de Telê Santana vence a Libertadores e o Mundial Interclubes.' },
  { ano: 1993, t: 'Bi mundial', d: 'Nova Libertadores e novo Mundial, com vitória sobre o Milan.' },
  { ano: 2005, t: 'Tri da Libertadores', d: 'Terceira Libertadores e título mundial sobre o Liverpool.' },
  { ano: 2008, t: 'Tri brasileiro', d: 'Fecha o tricampeonato brasileiro consecutivo (2006, 2007 e 2008).' },
  { ano: 2023, t: 'Copa do Brasil', d: 'O clube conquista pela primeira vez a Copa do Brasil.' }
];
const caixa = document.getElementById('anos');
const area = document.getElementById('evento');
function mostrar(i) {
  const e = eventos[i];
  area.innerHTML = '<h3>' + e.ano + ' - ' + e.t + '</h3><p style="margin:0">' + e.d + '</p>';
  caixa.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-pressed', String(i === j)));
}
eventos.forEach((e, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = e.ano; b.setAttribute('aria-pressed', 'false');
  b.addEventListener('click', () => mostrar(i));
  caixa.appendChild(b);
});
mostrar(0);
