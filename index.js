// Code your solutions in this file
function writeCards(Jina, events) {
    const arrayFun = [];
  
    for (let n = 0; n < Jina.length; n++) {
      const info =
        `Thank you, ${Jina[n]}, for the wonderful ${events} gift!`;
      arrayFun.push(info);
    }return arrayFun;
  }
  
  function countDown(x) {
    do {
      console.log(x);
      x--;
    } 
    while (x >= 0);
  }