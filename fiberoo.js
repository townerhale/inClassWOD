
function fib()
{
  let sum = 0;
  let list = [];
  let firstNum = 0;
  let secondNum = 1;
  let n = 10, first = 0, second = 1, next;
  list[0] = first;
  list[1] = second;
  for (let i = 2; i < 100; i++)
  {

   list[i] = first + second;
   first = second;
   second = list[i];

  }
  return list;

}

function numsToStrings(numbers)
{
  var b = numbers.map(String);
  return b;
}

function numEvenNums(list)
{
    countEvens = 0;
    for (let i = 0; i < 100; i++)
    {
       if (list[i] % 2 === 0)
       {
           countEvens++;
       }
    }
    return countEvens;
}
//console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
