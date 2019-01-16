var myChart1 = document.getElementById('myChart')
var ctx = myChart1.getContext('2d');
var massPopChart=new Chart(ctx);
var chairnum = '';

function changeFunc() {
  var thedata = document.getElementById("thedata").value;
  //var chairidx = document.getElementById("chairlist").selectedIndex;
  //var chairnum = document.getElementsByTagName("option")[chairidx].value;

  var shake = new Array(24).fill(0);
  $.getJSON(chairnum, function (data) {
    for (i = 0; i < data.length; i++) {
      if (data[i].created_at[8] == thedata[3] && data[i].created_at[9] == thedata[4]) {
        var hour = data[i].created_at[11] + "" + data[i].created_at[12];
        if (hour[0] == '0') hour = hour[1];
        shake[hour] += 1;
        //console.log(shake);
      }
    }

    massPopChart.destroy();//update chart after destroy.

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'black';


    massPopChart = new Chart(ctx, {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22','23'],
        datasets: [{
          label: 'Population',
          data: [
            shake[0],
            shake[1],
            shake[2],
            shake[3],
            shake[4],
            shake[5],
            shake[6],
            shake[7],
            shake[8],
            shake[9],
            shake[10],
            shake[11],
            shake[12],
            shake[13],
            shake[14],
            shake[15],
            shake[16],
            shake[17],
            shake[18],
            shake[19],
            shake[20],
            shake[21],
            shake[22],
            shake[23]
          ],
          //backgroundColor:'green',
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 50, 70, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 50, 70, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 50, 70, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)'

          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'test',
          fontSize: 40
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: '#000'
          }
        },
        layout: {
          padding: {
            left: 100,
            right: 100,
            bottom: 0,
            top: 0
          }
        },
        tooltips: {
          enabled: true
        }
      }
    });


    
  });



}