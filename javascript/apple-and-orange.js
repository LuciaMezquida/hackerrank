'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesDown = apples.map(apple => apple + a);
  const orangesDown = oranges.map(orange => orange + b);
  
  const applesInTheHouse = applesDown.filter(apple => apple >= s && apple <= t)
  const orangesInTheHouse = orangesDown.filter(orange => orange >= s && orange <= t)
  
  console.log(applesInTheHouse.length)
  console.log(orangesInTheHouse.length)
  
}

