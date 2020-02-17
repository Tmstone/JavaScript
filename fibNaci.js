function fib() {
    // Some variables here
    let a = 1, b= 0;
    function nacci() {
      // do something to those variables here
      const temp = a;
      //for(let i = 0; i < num; i++) {}
        //temp = a + b;
        console.log(b)
        a = b;
        b = temp + a;
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
  