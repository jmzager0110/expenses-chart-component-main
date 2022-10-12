/* async function from https://github.com/JonKohJJ/expenses-chart-component/blob/main/app.js/*

/*Bar colors:
Highest amount hsl(186, 34%, 60%)
All other in hover state hsl(33, 100%, 98%
Reggie state hsl(10, 79%, 65%)
Font size 1.125rem
Font family 'DM Sans', sans-serif*/

async function fetchData() {
  let response = await fetch('./data.json');
  let data = await response.json();
  console.log(data);
    
  
  
  let highest = 0;
  let current_day;
  for (var i=0; i<data.length; i++){
  if (data[i].amount > highest) {
  highest = data[i].amount;
  current_day = data[i].day;
  }
  }
    for (let i=0; i<data.length; i++){
      let height = (data[i].amount/highest)*75 + '%';
      console.log(height);
      document.getElementsByClassName('data')[i].style.height = height;
      document.getElementsByClassName('day')[i].innerHTML = data[i].day;
    }
    
  const day = document.getElementsByClassName('day');
    for (let i=0; i<day.length; i++) { day[i].previousElementSibling.style.background = 'hsl(10, 79%, 65%)';}
    
  //highlight current day
  const cyan = "#76B5BC";
  const fadedCyan = "#B4E0E5";
  const weekday = (new Date().getDay() - 1 + 7) % 7;
  const today = document.querySelectorAll(".data")[weekday];
  today.style.backgroundColor = cyan;
  today.onmouseover = () => (today.style.backgroundColor = fadedCyan);
    today.onmouseout = () => (today.style.backgroundColor = cyan);
  
  
  const amounts = document.getElementsByClassName('amount');
    for (let i=0; i<amounts.length; i++){
      amounts[i].innerHTML = "$" + data[i].amount;
    }
  }
  fetchData();
  
  const bars = document.getElementsByClassName('data');
  for (var i=0; i<bars.length; i++){
      bars[i].addEventListener('mouseover', function(){
          this.previousElementSibling.style.display = "flex";
        this.previousElementSibling.style.background = 'hsl(33, 100%, 98%)';
      });
      bars[i].addEventListener('mouseout', function(){
          this.previousElementSibling.style.display = "none";
      });
  }
  