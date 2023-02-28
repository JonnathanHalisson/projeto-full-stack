const nota = [7.5, 0, 8.9];
var total = 0;

for (i in nota) {
  total = total + nota[i];
  console.log(parseInt(i) + 1 + "º " + "Nota: " + nota[i]);
}

if (total / nota.length > 7) {
  console.log("Aprovado com média: " + (total / nota.length).toFixed(1));
} else {
  console.log("Reprovado com média: " + (total / nota.length).toFixed(1));
}
