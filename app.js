window.addEventListener("load", function(){
    fetch("./data.json").then(function(response){
        response.json().then( function (json) {
            let container = document.getElementById("chart");
            let numbers = json;
            
            for (number of numbers) {
                container.innerHTML += `
                  <p class="amount">${number.amount}</p>
                  <p class="day">${number.day}</p>
            ` 
          };
            
        })

    })


})
