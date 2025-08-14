var height = 5; 

for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < height; j++) {

        if (j === i || j === height - i - 1) {
            row += "*";
        } else {
            row += " "; 
        }
    }
    console.log(row); 
}