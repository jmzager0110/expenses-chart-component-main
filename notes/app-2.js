async function fetchData() {
    let response = await fetch('/data.json');
    console.log(response);
    let data = await response.json();
    console.log(data);
    let chart = document.getElementById("chart");

    // get higest value
    let highest = 0;
    let highest_day;
    for (var i=0; i<data.length; i++){
        if (data[i].amount > highest){
            highest = data[i].amount;
            highest_day = data[i].day;
        }
    }   

    // set height for all days
    for (var i=0; i<data.length; i++){
        let height = (data[i].amount/highest)*75 + '%';
        console.log(height);
        document.getElementsByClassName('amount')[i].style.height = height;
        document.getElementsByClassName('day')[i].innerHTML = data[i].day;
    }

    // highlight highest bar
    const days = document.getElementsByClassName('day');
    for (var i=0; i<days.length; i++){
        if (days[i].innerHTML == highest_day){
            days[i].previousElementSibling.style.background = 'hsl(186, 34%, 60%)';
        }
    }

    // populate amount in bar chart
    const amounts = document.getElementsByClassName('amount');
    for (var i=0; i<amounts.length; i++){
        amounts[i].innerHTML = "$" + data[i].amount;
    }
}
fetchData();


// event handler each time a bar is hovered over
const bars = document.getElementsByClassName('amount');
for (var i=0; i<bars.length; i++){
    bars[i].addEventListener('mouseover', function(){
        this.previousElementSibling.style.display = "flex";
    })
    bars[i].addEventListener('mouseout', function(){
        this.previousElementSibling.style.display = "none";
    })
}