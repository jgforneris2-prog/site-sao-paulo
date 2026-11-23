const classicos = {
  majestoso: ['Majestoso', 'São Paulo x Corinthians, um dos confrontos de maior audiência do futebol paulista.'],
  sansao: ['San-São', 'São Paulo x Santos, duelo entre dois clubes campeões mundiais.'],
  choque: ['Choque-Rei', 'São Paulo x Palmeiras, partida marcada por decisões nacionais e paulistas.']
};
const sel = document.getElementById('rival');
const area = document.getElementById('info-classico');
function mostrar() {
  const c = classicos[sel.value];
  area.innerHTML = '<h3>' + c[0] + '</h3><p style="margin:0">' + c[1] + '</p>';
}
sel.addEventListener('change', mostrar);
mostrar();
