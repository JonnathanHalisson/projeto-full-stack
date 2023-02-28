const nota = [7.5, 10, 8.9];
var total = 0;

for (i in nota) {
  total = total + nota[i];
  console.log(parseInt(i) + 1 + "º " + "Nota: " + nota[i]);
}

console.log("Media das notas: " + (total / nota.length).toFixed(1));
