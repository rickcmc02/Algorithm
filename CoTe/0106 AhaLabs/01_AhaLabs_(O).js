function solution(movie) {
  let movieWatchDict = {};
  let movieList = [];
  let answer = [];

  // 영화key - 횟수value dict 생성
  movie.sort().forEach((mov) => {
    if (mov in movieWatchDict) movieWatchDict[mov] += 1;
    else movieWatchDict[mov] = 1;
  });

  // [[영화, 횟수]] 생성
  Object.keys(movieWatchDict).forEach((movie) => {
    movieList.push([movie, movieWatchDict[movie]]);
  });

  // 횟수로 정렬
  movieList.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (b[1] > a[1]) return 1;
    else return 0;
  });

  movieList.forEach((movieWatch) => {
    answer.push(movieWatch[0]);
  });

  return answer;
}
