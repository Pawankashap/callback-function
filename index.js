function iInvokeThings (thing) {
    console.log(thing())
    return thing();
  }

function iReturnThings (thing) {
    console.log(thing)
    return thing;
  }
  
  iInvokeThings(function () { return 4 + 5; });
  iReturnThings(function () { return 4 + 5; });


  function main (cb) {
    console.log(cb());
  }
  
  main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
  // LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!

  
  
  
  function greet (name, cb) {
    console.log(name + '  '+ cb)
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  // => "Hello there, Ada Lovelace"
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
  // => 336

  const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);