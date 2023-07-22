async function main() {
    
const apiKey = '3b1200a17be148d189a78e2e7d48d8a1';
const symbols = ['GME', 'MSFT', 'DIS', 'BNTX'];
const apiUrl = `https://api.twelvedata.com/time_series?symbol=${symbols.join(',')}&interval=1day&apikey=${apiKey}`;

// Fetch data from the Twelvedata API
fetch(apiUrl)
  .then((response) => response.json())
  .then((result) => {
    const { GME, MSFT, DIS, BNTX } = result;

    const stocks = [GME, MSFT, DIS, BNTX];
    console.log(stocks);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  const { GME, MSFT, DIS, BNTX } = mockData;

  const stocks = [GME, MSFT, DIS, BNTX];
  
  
  const { GME, MSFT, DIS, BNTX } = mockData;
  const stocks = [GME, MSFT, DIS, BNTX];
  console.log(stocks);
  
  // Import Chart.js if using ES modules
// import Chart from 'chart.js';

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Your data and chart options
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Data',
      data: [10, 20, 30, 25, 40, 35, 50],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  // Your chart options here
};

// Create the chart
const myChart = new Chart(ctx, {
  type: 'bar', // Specify the chart type (e.g., bar, line, pie, etc.)
  data: data,
  options: options,
});

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        }]
    }
});
console.log(stocks[0].values)                                                  
stocks[0].values.map( value => value. _)

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map( stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor:  getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});





    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()