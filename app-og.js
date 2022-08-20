window.addEventListener("load", function(){
    fetch("./data.json").then(function(response){
        response.json().then( function (json) {
            let container = document.getElementById("chart");
            let numbers = json;

            
            for (number of numbers) {
                container.innerHTML += `
                  <p class="amount">$${number.amount}</p>
                  <p class="day">${number.day}</p>
            ` 
            }
        });
    })
})
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
}