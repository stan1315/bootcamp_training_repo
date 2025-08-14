var height = 5; 
var row = height;

while (row > 0) {
  
    var stars = "*".repeat(row);
    var spaces = " ".repeat(height - row);
    console.log(spaces + stars);

    row--;
}

