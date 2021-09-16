

//let num = 1;

//const FizzBuzz = (num) => {
  //for(var i = 1; i <= num; i++){
    //console.log((i % 1 === 0 && i % 13 === 0) ?
      //            "fizzbuzz" : (i % 13 === 0 ?
        //            "buzz" : (i % 1 === 0 ?
          //            "fizz" : i)));
  //}
//}

for(var i = 1; i < 101; i++) {
   
 console.log(((f,b) => n => f(n)+b(n))(n => n%3 ? '' : 'fizz', n => n%5 ? '' : 'buzz')(i))}