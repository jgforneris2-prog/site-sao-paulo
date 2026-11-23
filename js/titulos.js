const botoes = document.querySelectorAll('#filtros button');
const cards = document.querySelectorAll('#lista-titulos .card');
const contagem = document.getElementById('contagem');
function filtrar(cat) {
  let visiveis = 0;
  cards.forEach((c) => {
    const mostrar = cat === 'todos' || c.dataset.cat === cat;
    c.hidden = !mostrar;
    if (mostrar) visiveis++;
  });
  botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === cat)));
  contagem.textContent = visiveis + ' conquista(s) listada(s).';
}
botoes.forEach((b) => b.addEventListener('click', () => filtrar(b.dataset.filtro)));
filtrar('todos');
