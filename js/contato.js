document.getElementById('form-contato').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const retorno = document.getElementById('retorno');
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (nome.length < 2) { retorno.textContent = 'Informe seu nome.'; retorno.className = 'erro'; return; }
  if (!emailOk) { retorno.textContent = 'Informe um e-mail válido.'; retorno.className = 'erro'; return; }
  if (msg.length < 10) { retorno.textContent = 'Escreva uma mensagem com ao menos 10 caracteres.'; retorno.className = 'erro'; return; }
  retorno.className = '';
  retorno.style.color = 'green';
  retorno.textContent = 'Tudo certo, ' + nome + '! (Este site é um exercício e não envia mensagens.)';
  e.target.reset();
});
