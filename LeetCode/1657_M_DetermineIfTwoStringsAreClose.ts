/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

const convertListToFreqData = (list) => {
  const freqData = {};

  list.forEach((char) => {
      const freq = freqData[char];
      if (freq) freqData[char]++;
      else freqData[char] = 1;
  })

  return freqData;
}

// Set, 배열은 객체 타입이므로 === 연산자로 비교하면 참조(Reference)를 비교하게 되어,
// 같은 요소를 포함하고 있어도 false가 나오기 때문에 stringify 또는 개별 요소 비교
const checkIdenticalList = (list1, list2) => {
  const [list1Len, list2Len] = [list1.length, list2.length];
  if (list1Len !== list2Len) return false;

  const [sortedList1, sortedList2] = [list1.sort(), list2.sort()]
  for (let i = 0; i < list1Len; i++) {
      const [l1, l2] = [sortedList1[i], sortedList2[i]];
      if (l1 !== l2) return false;
  }

  return true;
}

function closeStrings(word1: string, word2: string): boolean {
  const [wordList1, wordList2] = [word1.split(""), word2.split("")]; // 순서가 필요하지 않음
  const [wordFreqData1, wordFreqData2] = [convertListToFreqData(wordList1), convertListToFreqData(wordList2)];

  const [wordKeyList1, wordKeyList2] = [Object.keys(wordFreqData1), Object.keys(wordFreqData2)];
  if (!checkIdenticalList(wordKeyList1, wordKeyList2)) return false;
  
  // 빈도의 갯수가 정확히 일치하는지 검증
  const [wordFreqList1, wordFreqList2] = [Object.values(wordFreqData1), Object.values(wordFreqData2)];
  return checkIdenticalList(wordFreqList1, wordFreqList2);
};