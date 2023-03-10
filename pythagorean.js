let a;
let b;
let formula;
let c;

document.getElementById('cal').onclick = function(){
  a = document.getElementById('A').value;

  b = document.getElementById('B').value;
    
  a = Number(a);
  b = Number(b);
  formula = Math.pow(a, 2) + Math.pow(b, 2)
  c = Math.sqrt(formula);
  document.getElementById('C').innerHTML = c
}