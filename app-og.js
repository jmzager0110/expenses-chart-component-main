//import{Plotly} from 'https://cdn.plot.ly/plotly-2.14.0.min.js';

window.addEventListener("load", function(){
    fetch("./data.json").then(function(response){
        response.json().then( function (json) {
            let chart = document.getElementById("chart");
            let numbers = json;

            
            for (number of numbers) {
                chart.innerHTML += `
                  <p class="day">${number.day}</p>
                  <p class="amount">$${number.amount}</p>

            ` 
            }
            let day = document.getElementsByClassName("day");
            let amount = document.getElementsByClassName("amount");
            /*iterate through amounts then set amount[i].style.visibility = "hidden"
            then 
            amount.addEventListener("mouseover", function(){
              amount[i].style.visibility = "visible"
            })
            amount.addEventListener("mouseleave", function(){
              amount[i].style.visibility = "hidden"
            })*/
        });
    })
})

/* Plotly function:
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