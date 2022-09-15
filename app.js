const data = fetch('https://raw.githubusercontent.com/jmzager0110/expenses-chart-component-main/master/data.json').then(response => response.json()).then(data => {
  console.log(data);
  return data;
})
.catch(error => console.log(error));

let chart = document.getElementById('chart');
data.then(data => {
  data.forEach(item => {
    let chartChart = document.createElement('div');
    chart.classList.add('chartChart');
    const height = item.amount / 7;
    let value = "";
    if (item.day == "wed") {
      value=`<div class="chart-value active" style="--height:${height}em"></div>`;
    } else {
      value=`<div class="chart-value" style="--height:${height}em"></div>`;
    }
    chartChart.innerHTML = `
    <div class="chart-wrap">
    ${value}
    </div>
    <div class="bar-title">${item.day}</div>
    `;
    chart.appendChild(chartChart);
  });
});