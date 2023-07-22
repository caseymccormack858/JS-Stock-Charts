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
  


    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()