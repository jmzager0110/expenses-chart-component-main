fetch("./data.json").then(function(response){
  response.json().then( function (json) {
      let container = document.getElementById("chart");
      let numbers = json;
  })
})

//TODO: 
//1. add function to create bars (with clickable area), 
//2. & apply different style to highest
//3. Then another function for active state, 
//4. meaning on click is the only time the amounts are displayed
//   or is it hover?

      function createChart(numbers) {

        let amount = document.getElementsByClassName("amount");
            let max;
            max = numbers[0].amount;
            for (i=0; i < numbers.length; i++) {
              if (numbers[i].amount > max) {
                max = data[i].amount;
              }
              amount[i].style.visibility = "hidden";
            }
            let maxHeight = max + 10;

            for (let i=0; i < numbers.length; i++){
              container[i].style.height = `${numbers[i].amount / maxHeight * 115}px`;
              numbers[i].amount == max ?
              container[i].style.backgroundColor = "hsl(186, 34%, 60%)" :
              container[i].style.backgroundColor = "hsl(10, 79%, 65%)"
              container[i].addEventListener("mouseover", function(){
                amount[i].textContent = "$" + data[i].amount
                amount[i].style.visibility = "visible"
              })
              container.addEventListener("mouseleave", function(){
                amount[i].style.visibility = "hidden"
              })
            }




      }
