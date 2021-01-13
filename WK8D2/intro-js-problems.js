function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x)
  }
  console.log(x)
}


// x on line 5 is 'in block'
// x on line 7 is 'in block'
// var is function scoped so the var x on 4 overwrites line 2

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping2()
// x on line 19 is 'in block'
// x on line 21 is 'out of block'

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    // var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3()
//x on 32 is 'in block'
// x on 34 is out of block

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// x on 45 'out'
// x on 47 'in'
// mysteryScoping4()

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// error line 60, cannot redeclare let with same name 
// mysteryScoping5()

madLib = (one, two, three) => `We shall ${one} the ${two} ${three}`


function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) > -1
}

function fizzBuzz(arr) {
  let filteredArr = [];
  arr.forEach((n) => {     
    if (n % 3 === 0 || n % 5 === 0) {
        filteredArr.push(n)
    }
  })

  return filteredArr;
}

function isPrime(num) {

  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(4))

function sumOfNPrimes(n) {
  count = 0
  num = 2
  sum = 0
  while (count < n) {
    if (isPrime(num)) {
      count += 1;
      sum += num;
      num += 1;
    } else {
      num +=1
    }
  }
  return sum;
}

console.log(sumOfNPrimes(5))