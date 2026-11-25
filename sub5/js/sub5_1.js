const data = {
        labels:  [
        '09/09', '09/10', '09/11', '09/14','09/15', '09/16', '09/17', '09/18','09/21', '09/22','09/23'],
  
  datasets: [{
    label: '종가',
    data: [9820, 9850, 10020, 10070, 9970, 9200, 9400, 9420, 9350, 9270,9250],
    fill: false, //true=차트아래채워짐
    borderColor: '#3471b6',
    tension: 0
  }]
};
            
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                color: '#2d2d2d',
                font:{
                    size:11
                }
                },
            },
            y: {
                //beginAtZero: true,
                ticks: {
                color: '#2d2d2d',
                font:{
                size:11
                }
            } 
            }
        }
    }
};

      const myChart = new Chart(
            document.getElementById('myChart'),
            config
      );