import * as plotly from "node_modules/plotly.js-dist/plotly.js";
/*Resovle new error with this, Uncaught SyntaxError: Cannot use import statement outside a module (at app-og.js:1:1)*/

/*window.addEventListener("load", function(){
    fetch("./data.json").then(function(response){
        response.json().then( function (json) {
            var chart = document.getElementById("chart");
            var numbers = json;

            
            for (number of numbers) {
                chart.innerHTML += `
                  <p class="day">${number.day}</p>
                  <p class="amount">$${number.amount}</p>

            ` 
            }
            var day = document.getElementsByClassName("day");
            var amount = document.getElementsByClassName("amount");

        });
    })
})*/

var url = "./data.json";

plotly.d3.json(url, (err, raw) => {
  
  var chart = document.getElementById("chart");
  var x = raw.features.map(f => f.geometry.coordinates[0]);
  var y = raw.features.map(f => f.geometry.coordinates[1]);
  var data = [
    {type: "bar",
     x: x,
     y: y,
     hovertext: "x"}
  ];
  var layout = {
    width: 800,
    height: 1000,
    font: {color: 'rgb(147, 134, 123)', family: '"DM Sans", sans-serif', size: 10 },
    bargap: 0.1,
    autocolorscale: true,
    colorscale: {sequential: [[0-1, rgb(236, 119, 95)], [5, rgb(118, 181, 188)]]},
    hovermode: "closest",
    hoverlabel: {bgcolor: "rgb(254, 166, 133)"}

  };
  var config = {
    responsive: true
  };
  Plotly.nrePlot('chart', data, layout, config);
})



/* Plotly function:
var Plotly = require('plotly.js-dist')
var trace1 = {
  x: numbers.day,
  y: numbers.amount,
  type: 'bar',
  //text: ,
  marker: {
    color: 'rgb(142,124,195)'
  }
};

var data = [trace1];

var layout = {
  title: 'Number of Graphs Made this Week',
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('chart', data, layout);*/

/* Attempt at iterating to create the bars with different colors
let highest = 0;
let highest_day;
let days = document.getElementsByClassName('day');
let amounts = document.getElementsByClassName('amount');
for (let i=0; i<numbers.length; i++){
  if (numbers[i].amount > highest){
    highest = numbers[i].amount;
    highest_day = numbers[i].day;
    let height = (numbers[i].amount/highest)*75 + '%';
    document.getElementsByClassName('amount')[i].getElementsByClassName.height = height;
    if (days[i].innerHTML == highest_day){
      days[i].previousElementSibling.style.background = 'hsl(186, 34%, 60%)';
      
    }
  }
}*/