
function solution(participant, completion) {
  var pcp = participant.sort();
  var cmp = completion.sort();

  for (var i in cmp.length) {
    if (pcp[i] != cmp[i]) {
      return pcp[0]
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))