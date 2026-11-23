// JS global (todas as páginas): menu, tema claro/escuro e ano do rodapé
document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu');
  btnMenu.addEventListener('click', () => {
    const aberto = menu.hidden;
    menu.hidden = !aberto;
    btnMenu.setAttribute('aria-expanded', String(aberto));
  });

  const btnTema = document.getElementById('btn-tema');
  const aplicar = (escuro) => {
    document.body.classList.toggle('escuro', escuro);
    btnTema.textContent = escuro ? 'Tema claro' : 'Tema escuro';
  };
  let salvo = false;
  try { salvo = localStorage.getItem('tema') === 'escuro'; } catch (e) {}
  aplicar(salvo);
  btnTema.addEventListener('click', () => {
    const escuro = !document.body.classList.contains('escuro');
    aplicar(escuro);
    try { localStorage.setItem('tema', escuro ? 'escuro' : 'claro'); } catch (e) {}
  });

  document.getElementById('ano').textContent = new Date().getFullYear();
});
