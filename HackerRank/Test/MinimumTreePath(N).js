function minimumTreePath(n, edges, visitNodes) {
  // Write your code here

  let pastLoc = 0;
  let curLoc = 1;
  let cnt = 1;
  let answerLen = 0;
  let adjDict = {};

  for (let i = 0; i < edges.length; i++) {
    let [n1, n2] = edges[i];
    n1 = n1.toString();
    n2 = n2.toString();
    if (adjDict[n1]) adjDict[n1].push(n2);
    else adjDict[n1] = [n2];
    if (adjDict[n2]) adjDict[n2].push(n1);
    else adjDict[n2] = [n1];
  }

  let queue = [];
  let nodeDepthDict = {};
  Object.keys(adjDict).forEach((adjKey) => {
    if (adjDict[adjKey].length === 1) {
      queue.push([adjKey, 0]);
      nodeDepthDict[adjKey] = 0;
    }
  });

  while (queue.length) {
    let [nod, dep] = queue.shift();
    let qValArr = adjDict[nod];
    for (let j = 0; j < qValArr.length; j++) {
      let qVal = qValArr[j];
      // 이미 있는 값보다 높은 depth가 넘어올때만 넣어주기
      if (nodeDepthDict[qVal]) {
        if (nodeDepthDict[qVal] < dep + 1) nodeDepthDict[qVal] = dep + 1;
        else continue;
      } else {
        nodeDepthDict[qVal] = dep + 1;
      }
      // "1"이 아닐 때에만 넣어주기
      if (qVal !== "1") queue.push([qVal, dep + 1]);
    }
  }
}
