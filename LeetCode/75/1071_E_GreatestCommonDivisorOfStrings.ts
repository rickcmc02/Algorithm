/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

// answser 2

function gcdOfStrings(str1: string, str2: string): string {
    const [len1, len2] = [str1.length, str2.length];

    if (len1 === len2) { // 길이가 같다면 완전히 동일한 문자열의 구성이어야 문자 최대공약수를 구할 수 있음
        if (str1 === str2) return str1;
        else return "";
    }

    const shorter = len1 < len2 ? len1 : len2;
    const longer = len1 > len2 ? len1 : len2;

    // 길이 최대공약수 사용 (최대공약수 공식 외워둬)
    const gcd = (a, b): number => b === 0 ? a : gcd(b, a % b);
    const gcdLen = gcd(longer, shorter);
    const cds = str1.slice(0, gcdLen); // str1 에서 최대공약수만큼 잘라내면 cds (common divisor of strings) 라고 가정 - 아닐 경우에도 slicer로 활용하여 검증하므로 괜찮음
    const [splited1, splited2] = [str1.split(cds), str2.split(cds)];

    if (splited1.every(splt => splt === "") && splited2.every(splt => splt === "")) return cds;
    else return "";
};

// answer 1
/*
function gcdOfStrings(str1: string, str2: string): string {
  const [len1, len2] = [str1.length, str2.length];
  if (len1 === len2) {
    if (str1 === str2) return str1;
    else return "";
  }

  let shorterLen = len1 < len2 ? len1 : len2;
  const CDList: number[] = []; // common divisor

  for (let i = shorterLen; i > 0; i--) {
    if (len1 % i === 0 && len2 % i === 0) CDList.push(i);
  }

  for (let i = 0; i < CDList.length; i++) {
    const cd = CDList[i];
    const cds = str1.slice(0, cd); // 예비 최대공약문자열
    const split1 = str1.split(cds);
    const split2 = str2.split(cds);
    // 나머지 문자열이 없을 경우 반환
    if (
      split1.every((str1) => str1 === "") &&
      split2.every((str2) => str2 === "")
    )
      return cds;
  }

  return "";
}
*/