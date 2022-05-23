import Chart from 'chart.js/auto';

const donutChart = document.querySelector('.js-donut-chart__diagram');
const ctx = donutChart.getContext('2d');

const orangeGradient = ctx.createLinearGradient(0, 0, 122, 122);
orangeGradient.addColorStop(0, 'rgba(255, 227, 156, 1)');
orangeGradient.addColorStop(1, 'rgba(255, 186, 156, 1)');

const greenGradient = ctx.createLinearGradient(0, 0, 122, 122);
greenGradient.addColorStop(0, 'rgba(111, 207, 151, 1)');
greenGradient.addColorStop(1, 'rgba(102, 210, 234, 1)');

const purpleGradient = ctx.createLinearGradient(0, 0, 122, 122);
purpleGradient.addColorStop(0, 'rgba(188, 156, 255, 1)');
purpleGradient.addColorStop(1, 'rgba(139, 164, 249, 1)');

const blackGradient = ctx.createLinearGradient(0, 0, 120, 120);
blackGradient.addColorStop(0, 'rgba(144, 144, 144, 1)');
blackGradient.addColorStop(1, 'rgba(61, 73, 117, 1)');

const dataPoints = [260, 260, 520, 0];

const dataChart = {
  labels: [
    'Удовлетворит.',
    'Хорошо',
    'Великолепно',
    'Разочарован',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: dataPoints,
    backgroundColor: [
      purpleGradient,
      greenGradient,
      orangeGradient,
      blackGradient,
    ],
  }],
};

const counter = {
  id: 'counter',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { width } } = chart;
    ctx.save();
    ctx.font = `${options.fontWeight} ${options.fontSizeValue}px ${options.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillStyle = options.fontColor;
    ctx.fillText(`${dataPoints[0]}`, width / 2, 58)
  },
  afterDraw(chart, args, options) {
    const { ctx, chartArea: { width } } = chart;
    ctx.save();
    ctx.font = `${options.fontWeight} ${options.fontSizeText}px ${options.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillStyle = options.fontColor;
    ctx.fillText('ГОЛОСОВ', width / 2, 78)
  }
}

const config = {
  type: 'doughnut',
  data: dataChart,
  options: {
    cutout: 54,
    radius: 62,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      counter: {
        fontColor: '#bc9cff',
        fontWeight: 'bold',
        fontSizeValue: '24',
        fontFamily: 'montserrat, arial, sans-serif',
        fontSizeText: '12',
      },
    }  
  }, 
  plugins: [counter]
}

const donutCharts = document.querySelectorAll('.js-donut-chart__diagram');

donutCharts.forEach((donutChart) => new Chart(donutChart, config));