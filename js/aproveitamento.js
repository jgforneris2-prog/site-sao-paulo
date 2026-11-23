document.getElementById('form-calc').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const v = parseInt(document.getElementById('v').value, 10) || 0;
  const e = parseInt(document.getElementById('e').value, 10) || 0;
  const d = parseInt(document.getElementById('d').value, 10) || 0;
  const saida = document.getElementById('saida-calc');
  const jogos = v + e + d;
  if (v < 0 || e < 0 || d < 0 || jogos === 0) {
    saida.innerHTML = '<span class="erro">Informe ao menos um jogo, com valores positivos.</span>';
    return;
  }
  const pontos = v * 3 + e;
  const aprov = (pontos / (jogos * 3)) * 100;
  saida.innerHTML = '<strong>' + jogos + '</strong> jogos · <strong>' + pontos + '</strong> pontos · aproveitamento de <strong>' +
    aprov.toFixed(1).replace('.', ',') + '%</strong>';
});
