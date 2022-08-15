async function fetchData(){
    let response = await fetch('data.json');
    console.log(response);
    let data = await response.json();
    console.log(data);

        //get highest value from https://github.com/JonKohJJ/Expenses-Chart-Component/blob/main/app.js
        let highest = 0;
        let day;    
        for (var i=0; i<data.length; i++) {
            if(data[i].amount > highest) {
            highest = data[i].amount;
            day = data[i].day;
            }
        }

        //set height for all days in chart
        for (let i=0; i<data.length; i++) {
            let height = (data[i].amount/highest)*75 + '%';
            document.getElementsByClassName('data') [i].style.height = height;
            document.getElementsByClassName('day') [i].innerHTML = data[i].day;
        }

        //highlight highest bar <- find out how to create a variable for the color to apply to the style sheet
        let days = document.getElementsByClassName('day');
        for (let i=0; i<day.length; i++) {
            if (days[i].innerHTML == highest){
                days[i].previousElementSibling.stlye.background = 'hsl(186, 34%, 60%)';
            }
        }

        //populate amount in bar chart
        let amounts = document.getElementsByClassName('amount');
        for (let i=0; i<amounts.length; i++) {
            amounts[i].innerHTML = "$" + data[i].amount;
        }
        
        //hover handler
        let bars = document.getElementsByClassName('data');
        for (let i=0; i<bars.length; i++) {
            bars[i].addEventListener('mouseover', function(){
                this.previousElementSibling.style.display = "flex";
            })
        }
        function mathStuff(){
            let total = data.amount()
        }
    
        
        for (data of data){
            container.innerHTML += ` <table class="data">
            <thead>          
            <tr>
              <th scope="col" class="day">${data.day}</th>
            </tr>
            <tbody class="container">
            <tr>
              <td>
                  <div class="amount">${data.amount}</div>
                </span>
              </td>
            </tr>
            </table>
        `;
        }    
        container.innerHTML += `<legend> Total this month $478.33 +2.4% from last month</legend>
        ` 
      } fetchData();

      //hover handler
      let bars = document.getElementsByClassName('data');
      for (let i=0; i<bars.length; i++) {
          bars[i].addEventListener('mouseover', function(){
              this.previousElementSibling.style.display = "flex";
          })
      }
