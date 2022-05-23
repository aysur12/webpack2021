import Chart from 'chart.js/auto';

const donutChart = document.querySelector('.js-donut-chart__diagram');
const ctx = donutChart.getContext('2d');

const orangeGradient = ctx.createLinearGradient(0, 0, 122, 122);
orangeGradient.addColorStop(0, 'rgba(255, 227, 156, 1)');
orangeGradient.addColorStop(1, 'rgba(255, 186, 156, 1)');

const greenGradient = ctx.createLinearGradient(0, 0, 122, 122);
greenGradient.addColorStop(0, 'rgba(111, 207, 151, 1)');
greenGradient.addColorStop(1, 'rgba(102, 210, 234, 1)');

const violetGradient = ctx.createLinearGradient(0, 0, 122, 122);
violetGradient.addColorStop(0, 'rgba(188, 156, 255, 1)');
violetGradient.addColorStop(1, 'rgba(139, 164, 249, 1)');

const blackGradient = ctx.createLinearGradient(0, 0, 120, 120);
blackGradient.addColorStop(0, 'rgba(144, 144, 144, 1)');
blackGradient.addColorStop(1, 'rgba(61, 73, 117, 1)');

const dataPoints = [65, 65, 130, 0];

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
      violetGradient,
      greenGradient,
      orangeGradient,
      blackGradient,
    ],
  }],
};

const dataChartValue = dataPoints.reduce((sum, elem) => sum + elem, 0);

const counter = {
  id: 'counter',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
    ctx.save();
    ctx.font = `${options.fontWeight} ${options.fontSizeValue}px ${options.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillStyle = options.fontColor;
    ctx.fillText(`${dataChartValue}`, width / 2, 58)
  },
  afterDraw(chart, args, options) {
    const { ctx, chartArea: { width, height } } = chart;
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