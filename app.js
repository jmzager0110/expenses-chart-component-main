function fetchData(){
let data = await fetch('./data.json');
let response = await response.json();

    for (data of datas) {
        container.innerHTML += ` <table class="data"><caption>Spending - Last 7 days</caption>
        <caption>  
          <div class="card-header">
          <p>My balance</p>
          <span>$921.48</span>
        </div></caption>
        <thead>          
            <tr>
            <th scope="column" class="day">${response.day}</th>
            </tr>
      </thead>
      <tbody class="table-body-container">
        <tr>
          <td>
              <div class="amount">${response.amount}</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="total">${response.total}</td>
        </tr>
      </tfoot>
    </table> ` 
  };
}