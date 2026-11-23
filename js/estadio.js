const form = document.getElementById('form-cep');
const saida = document.getElementById('saida-cep');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length !== 8) {
    saida.innerHTML = '<span class="erro">Digite um CEP com 8 números.</span>';
    return;
  }
  saida.textContent = 'Consultando...';
  try {
    const r = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
    const d = await r.json();
    if (d.erro) { saida.innerHTML = '<span class="erro">CEP não encontrado.</span>'; return; }
    saida.innerHTML = '<strong>' + (d.logradouro || '(sem logradouro)') + '</strong><br>' +
      d.bairro + ' - ' + d.localidade + '/' + d.uf;
  } catch (erro) {
    saida.innerHTML = '<span class="erro">Falha na consulta. Verifique sua conexão.</span>';
  }
});
