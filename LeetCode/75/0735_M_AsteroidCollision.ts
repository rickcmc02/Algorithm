/*

We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0


*/

function asteroidCollision(asteroids: number[]): number[] {
  const remainAst: number[] = [];

  asteroids.forEach((ast) => {
      let lastAst = remainAst.at(-1);
      if (!lastAst || ast > 0 || lastAst < 0) { // 마지막 ast 없거나(빈 array)
          remainAst.push(ast);
          return;
      }

      let isColliding = true;
      while (isColliding) {            
          if (lastAst && lastAst > 0) {
              if (ast + lastAst > 0) {
                  isColliding = false;
              } else if (ast + lastAst < 0) {
                  remainAst.pop();
                  lastAst = remainAst.at(-1);
              } else { // 같은 값이어서 동시 소멸
                  remainAst.pop();
                  lastAst = remainAst.at(-1);
                  isColliding = false;
              }
          } else { // 마지막 ast 없거나 음수면 충돌 일어나지 않음
              remainAst.push(ast);
              isColliding = false;
          }

      }
  })
  
  return remainAst;
};