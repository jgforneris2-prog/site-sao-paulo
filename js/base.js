const abas = {
  cotia: ['CT de Cotia', 'Centro de formação de atletas do clube, voltado às categorias de base.'],
  barra: ['CT da Barra Funda', 'Centro de treinamento usado pela equipe profissional, na zona oeste de São Paulo.'],
  cria: ['Craques da base', 'Passaram pelas categorias de base: Kaká, Lucas Moura, Casemiro e Rodrigo Caio.']
};
const painel = document.getElementById('painel');
const botoes = document.querySelectorAll('#abas button');
function abrir(chave) {
  painel.innerHTML = '<h3>' + abas[chave][0] + '</h3><p style="margin:0">' + abas[chave][1] + '</p>';
  botoes.forEach((b) => {
    const ativa = b.dataset.aba === chave;
    b.setAttribute('aria-selected', String(ativa));
    b.style.background = ativa ? '#0d0d0d' : '';
  });
}
botoes.forEach((b) => b.addEventListener('click', () => abrir(b.dataset.aba)));
abrir('cotia');
