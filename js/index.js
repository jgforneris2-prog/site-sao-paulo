const fundacao = new Date(1930, 0, 25);
const hoje = new Date();
let anos = hoje.getFullYear() - 1930;
if (hoje < new Date(hoje.getFullYear(), 0, 25)) anos -= 1;
const dias = Math.floor((hoje - fundacao) / 86400000);
const saida = document.getElementById('idade');
const botao = document.getElementById('btn-unidade');
let mostrandoAnos = true;
function atualizar() {
  saida.textContent = mostrandoAnos ? anos + ' anos' : dias.toLocaleString('pt-BR') + ' dias';
  botao.textContent = mostrandoAnos ? 'Ver em dias' : 'Ver em anos';
}
botao.addEventListener('click', () => { mostrandoAnos = !mostrandoAnos; atualizar(); });
atualizar();
