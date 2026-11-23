document.querySelectorAll('#lista-idolos .ver').forEach((botao) => {
  botao.addEventListener('click', () => {
    const texto = botao.closest('.card').querySelector('.mais');
    texto.hidden = !texto.hidden;
    botao.textContent = texto.hidden ? 'Ver mais' : 'Ver menos';
  });
});
