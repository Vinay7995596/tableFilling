document.getElementById('add-row').addEventListener('click', function() {
    var table = document.getElementById('data-table');
    var tbody = table.querySelector('tbody');
    
    // Create a new row
    var newRow = document.createElement('tr');
    
    // Create cells for the new row
    var descriptionCell = document.createElement('td');
    var unitCell = document.createElement('td');
    var rateCell = document.createElement('td');
    var amountCell = document.createElement('td');
    
    // Create input fields for each cell
    var descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description[]';
    
    var unitInput = document.createElement('input');
    unitInput.type = 'number';
    unitInput.name = 'unit[]';
    
    var rateInput = document.createElement('input');
    rateInput.type = 'number';
    rateInput.name = 'rate[]';
    
    var amountInput = document.createElement('input');
    amountInput.type = 'number';
    amountInput.name = 'amount[]';
    
    // Append input fields to their respective cells
    descriptionCell.appendChild(descriptionInput);
    unitCell.appendChild(unitInput);
    rateCell.appendChild(rateInput);
    amountCell.appendChild(amountInput);
    
    // Append cells to the new row
    newRow.appendChild(descriptionCell);
    newRow.appendChild(unitCell);
    newRow.appendChild(rateCell);
    newRow.appendChild(amountCell);
    
    // Append the new row to the table body
    tbody.appendChild(newRow);
  });

function Data(description, unit, rate, amount) {
    this.description = description;
    this.unit = unit;
    this.rate = rate;
    this.amount = amount;
  }


  function Data(description, unit, rate, amount) {
    this.description = description;
    this.unit = unit;
    this.rate = rate;
    this.amount = amount;
  }
  
  document.getElementById('save-data').addEventListener('click', function() {
    var table = document.getElementById('data-table');
    var rows = table.querySelectorAll('tbody tr');
    
    var dataArr = [];
    
    rows.forEach(function(row) {
      var cells = row.querySelectorAll('td');
      
      var description = cells[0].querySelector('input').value;
      var unit = cells[1].querySelector('input').value;
      var rate = cells[2].querySelector('input').value;
      var amount = cells[3].querySelector('input').value;
      
      var data = new Data(description, unit, rate, amount);
      
      dataArr.push(data);
    });
    
    // Store the data in local storage as a JSON string
    localStorage.setItem('data', JSON.stringify(dataArr));
  });
