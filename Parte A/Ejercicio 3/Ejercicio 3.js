var lista = ['a','b','c','1','x','9','d','4'];
for (var item in lista) {
    if (isNaN(lista[item])) {
        console.log(lista[item]);
    }
}