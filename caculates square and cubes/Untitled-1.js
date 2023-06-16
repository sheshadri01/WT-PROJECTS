// Create an HTML table
var table = document.createElement("table");

// Add a header row
var headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>Number</th><th>Square</th><th>Cube</th>";
table.appendChild(headerRow);

// Add rows for each number from 0 to 10
for (var i = 0; i <= 10; i++) {
  // Calculate the square and cube of the number
  var square = i * i;
  var cube = i * i * i;

  // Create a row for the number, square, and cube
  var row = document.createElement("tr");
  row.innerHTML = "<td>" + i + "</td><td>" + square + "</td><td>" + cube + "</td>";
  table.appendChild(row);
}

// Append the table to the document
document.body.appendChild(table);
