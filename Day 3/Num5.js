
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
  let color = "th";
  if (i === 0) suffix = "st";
  else if (i === 1) color = "nd";
  else if (i === 2) color = "rd";

  console.log(`${i + 1}${color} choice is ${colors[i]}.`);
}
