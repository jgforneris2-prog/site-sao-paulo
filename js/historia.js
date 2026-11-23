const texto = document.getElementById('wiki-texto');
const link = document.getElementById('wiki-link');
async function carregar() {
  texto.textContent = 'Carregando...';
  try {
    const r = await fetch('https://pt.wikipedia.org/api/rest_v1/page/summary/S%C3%A3o_Paulo_Futebol_Clube');
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    texto.textContent = d.extract;
    link.href = d.content_urls.desktop.page;
    link.hidden = false;
  } catch (erro) {
    texto.textContent = 'Não foi possível carregar o texto agora. Tente novamente.';
    texto.classList.add('erro');
  }
}
document.getElementById('btn-recarregar').addEventListener('click', () => { texto.classList.remove('erro'); carregar(); });
carregar();
