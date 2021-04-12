//array vuoto
var arrayN = [];

// ciclo numeri fino a 100
for(var i = 1; i<=100; i++){
  var nNumbers = i;
  
  //if dicvisibili per 3 e 5
  if(nNumbers%3 == 0 && nNumbers%5 == 0){
    nNumbers ="FizzBuzz";
  }else if(nNumbers%3 == 0){    
    nNumbers = "Fizz"
  }else if(nNumbers%5 == 0){    
    nNumbers = "Buzz"
  }
  arrayN.push(nNumbers)  
}
console.log(arrayN)