/*
4) Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
random de la clase Math.
*/

for (var i = 0; i < 50; i++) {
    console.log(Math.floor(Math.random()*6) + 1);
}