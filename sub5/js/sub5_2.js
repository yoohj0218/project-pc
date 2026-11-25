//손익계산서 그래프1
const data1 = {
        labels:  ['2023','2024','2025'],
        datasets: [{
          label: '매출액',
          data: [200229, 221094, 234681],
          barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgba(0, 38, 80, 1)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config1 = {
        type: 'bar',
        data: data1,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };
      const myChart1 = new Chart(
            document.getElementById('myChart1'),
            config1
      );
// 손익계산서 그래프2
const data2 = {
        labels:  ['2023','2024 ','2025'],
        datasets: [{
          label: '영업이익',
          data: [-47392, -20455, 14255],
          barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgb(255, 99, 132)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config2 = {
        type: 'bar',
        data: data2,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };


      const myChart2 = new Chart(
            document.getElementById('myChart2'),
            config2
      ); 
//손익계산서 그래프3    
const data3 = {
        labels:  ['2023','2024 ','2025'],
        datasets: [{
          label: '당기순이익',
          data: [-57273,-15373,8389],
          barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgb(255, 99, 132)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config3 = {
        type: 'bar',
        data: data3,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };
            const myChart3 = new Chart(
            document.getElementById('myChart3'),
            config3
      );   

// 재무상태표 그래프
const data4 = {
        labels:  ['2023','2024','2025'],
        datasets: [{
          label: '자산총계',
          data: [350084, 342093, 352466],
           barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgba(0, 38, 80, 1)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config4 = {
        type: 'bar',
        data: data4,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };
      const myChart4 = new Chart(
            document.getElementById('myChart4'),
            config4
      );

const data5 = {
        labels:  ['2023','2024','2025'],
        datasets: [{
          label: '부채총계',
          data: [79302, 84003, 81738],
           barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgba(0, 38, 80, 1)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config5 = {
        type: 'bar',
        data: data5,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };
      const myChart5 = new Chart(
            document.getElementById('myChart5'),
            config5
      );

const data6 = {
        labels:  ['2023','2024','2025'],
        datasets: [{
          label: '자본총계',
          data: [270782, 258090, 270728],
           barThickness: 60,
          backgroundColor: [
            'rgba(172, 172, 172, 0.6)',
            'rgba(172, 172, 172, 0.6)',
            'rgba(0, 86, 184, 0.9)',
          ],
          // borderColor: [
          //   'rgba(0, 38, 80, 1)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          // ],
          // borderWidth: 3
        }]
      };
            
      const config6 = {
        type: 'bar',
        data: data6,
        options: {responsive: true,
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
                          size:18
                        }
                      },
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                      color: '#2d2d2d',
                      font:{
                        size:15
                      }
                    } 
                    }
                },
              }
            };
      const myChart6 = new Chart(
            document.getElementById('myChart6'),
            config6
      );