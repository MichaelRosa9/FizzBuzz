//array vuoto
var arrayN = [];

// ciclo numeri fino a 100
for(var i = 0; i<=100; i++){
  var nNumbers = [i];
  //if modulo 3
  if(nNumbers%3 == 0){
    nNumbers ="Fizz";
  }
  //if modulo 5
  if(nNumbers%5 == 0){    
    nNumbers = "Buzz"
  }
  arrayN.push(nNumbers)  
}
console.log(arrayN)