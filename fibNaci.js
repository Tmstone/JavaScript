function fib() {
    // Some variables here
    let a = 1, b= 0, temp = 1;
    function nacci() {
      // do something to those variables here
      for(let i = 0; i < num; i++) {}
        temp = a + b;
        a = b;
        b = temp;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  