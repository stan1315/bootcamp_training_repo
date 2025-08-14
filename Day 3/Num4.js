function calculatePerimeter(a, b, c) {
    const perimeter = a + b + c;
    
    return perimeter;
}

const side1 = 5;
const side2 = 8;
const side3 = 10;

const perimeter = calculatePerimeter(side1, side2, side3);
console.log("The perimeter of a triangle is:", perimeter);