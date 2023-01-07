function solution(p, n) {
  let answer = "";

  const ampmList = p.split(" ");
  const ampm = ampmList[0];
  const time = ampmList[1];
  const hmsList = time.split(":");

  let strHour = hmsList[0];
  let strMin = hmsList[1];
  let strSec = hmsList[2];

  let hour = parseInt(strHour);
  if (ampm === "PM") hour += 12;
  let min = parseInt(strMin);
  let sec = parseInt(strSec);

  // 1번 풀이

  let totalSec = hour * 60 * 60 + min * 60 + sec + n;
  sec = totalSec % 60;
  totalSec -= sec;
  let totalMin = totalSec / 60;
  min = totalMin % 60;
  totalMin -= min;
  let totalHour = totalMin / 60;
  hour = totalHour % 24;

  strSec = String(sec);
  strMin = String(min);
  strHour = String(hour);

  // 2번 풀이

  // sec += n;
  // const secToMin = parseInt(sec / 60);
  // sec %= 60;
  // strSec = String(sec);

  // min += secToMin;
  // const minToHour = parseInt(min / 60);
  // min %= 60;
  // strMin = String(min);

  // hour += minToHour;
  // hour %= 24;
  // strHour = String(hour);

  if (strSec.length < 2) strSec = "0" + strSec;
  if (strMin.length < 2) strMin = "0" + strMin;
  if (strHour.length < 2) strHour = "0" + strHour;

  answer = strHour + ":" + strMin + ":" + strSec;

  return answer;
}
