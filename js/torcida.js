const contador = document.getElementById('contador');
const msg = document.getElementById('mensagem-torcida');
let total = 0;
try { total = parseInt(localStorage.getItem('gritos') || '0', 10); } catch (e) {}
function mostrar() { contador.textContent = total.toLocaleString('pt-BR'); }
function salvar() { try { localStorage.setItem('gritos', String(total)); } catch (e) {} }
document.getElementById('btn-gritar').addEventListener('click', () => {
  total += 1; salvar(); mostrar();
  msg.textContent = total % 10 === 0 ? 'Dez gritos! O Morumbis é nosso!' : 'Salve o Tricolor!';
});
document.getElementById('btn-zerar').addEventListener('click', () => { total = 0; salvar(); mostrar(); msg.textContent = ''; });
mostrar();
