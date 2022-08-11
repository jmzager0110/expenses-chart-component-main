async function fetchData() {
    let respone = await fetchData('/data.json');
    console.log(respone);
    let data = await respone.json();
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
                document.getElementsByClassName('data')[i].style.height = height;
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

        
        }
fetchData();

//hover handler
let bars = document.getElementsByClassName('data');
for (let i=0; i<bars.length; i++) {
    bars[i].addEventListener('mouseover', function(){
        this.previousElementSibling.style.display = "flex";
    })
}
