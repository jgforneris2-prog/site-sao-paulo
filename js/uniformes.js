const estilos = {
  classica: { nome: 'Clássica', corpo: '#ffffff', f1: '#D3101C', f2: '#0d0d0d' },
  vermelha: { nome: 'Vermelha', corpo: '#D3101C', f1: '#ffffff', f2: '#0d0d0d' },
  preta: { nome: 'Preta', corpo: '#0d0d0d', f1: '#D3101C', f2: '#ffffff' }
};
document.querySelectorAll('#estilos button').forEach((b) => {
  b.addEventListener('click', () => {
    const e = estilos[b.dataset.estilo];
    document.getElementById('corpo').setAttribute('fill', e.corpo);
    document.getElementById('faixa1').setAttribute('fill', e.f1);
    document.getElementById('faixa2').setAttribute('fill', e.f2);
    document.getElementById('nome-estilo').textContent = e.nome;
  });
});
