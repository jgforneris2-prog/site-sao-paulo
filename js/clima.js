const codigos = {0:'Céu limpo',1:'Quase limpo',2:'Parcialmente nublado',3:'Nublado',45:'Neblina',48:'Neblina',
  51:'Garoa',53:'Garoa',55:'Garoa forte',61:'Chuva fraca',63:'Chuva',65:'Chuva forte',80:'Pancadas de chuva',
  81:'Pancadas de chuva',82:'Pancadas fortes',95:'Trovoada',96:'Trovoada com granizo',99:'Trovoada com granizo'};
const url = 'https://api.open-meteo.com/v1/forecast?latitude=-23.60&longitude=-46.72' +
  '&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=America%2FSao_Paulo&forecast_days=4';
const agora = document.getElementById('clima-agora');
const dias = document.getElementById('clima-dias');
async function carregar() {
  agora.innerHTML = '<p>Carregando...</p>'; dias.innerHTML = '';
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    const c = d.current_weather;
    agora.innerHTML = '<div class="card"><h3>Agora</h3><p class="numero" style="font-size:3.5rem">' + Math.round(c.temperature) +
      '°C</p><p>' + (codigos[c.weathercode] || 'Condição variável') + ' · vento ' + Math.round(c.windspeed) + ' km/h</p></div>';
    d.daily.time.forEach((dia, i) => {
      const data = new Date(dia + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit' });
      dias.innerHTML += '<div class="card card--preto"><h3>' + data + '</h3><p>Máx. ' + Math.round(d.daily.temperature_2m_max[i]) +
        '°C · Mín. ' + Math.round(d.daily.temperature_2m_min[i]) + '°C</p><p>Chance de chuva: ' + d.daily.precipitation_probability_max[i] + '%</p></div>';
    });
  } catch (erro) {
    agora.innerHTML = '<p class="erro">Não foi possível carregar a previsão agora.</p>';
  }
}
document.getElementById('btn-clima').addEventListener('click', carregar);
carregar();
