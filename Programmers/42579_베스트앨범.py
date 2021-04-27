'''
문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
입출력 예
genres	plays	return
["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
입출력 예 설명
classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

고유 번호 3: 800회 재생
고유 번호 0: 500회 재생
고유 번호 2: 150회 재생
pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

고유 번호 4: 2,500회 재생
고유 번호 1: 600회 재생
따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.
'''


def solution(genres, plays):
    answer = []
    gnp_dic = {}
    len_arr = len(genres)

    # 장르 : 재생수 딕셔너리에 삽입하고, 재생수 기준으로 장르 key 정렬하기
    for i in range(len_arr):
        if genres[i] in gnp_dic:
            gnp_dic[genres[i]] += plays[i]
        else:
            gnp_dic[genres[i]] = plays[i]

    sgnp_dic = sorted(gnp_dic.items(), key=lambda x: x[1], reverse=True)

    for sd in sgnp_dic:   # 총 재생수가 많은 장르부터 반복문
        pri_idx = -1
        pri_sco = 0
        sec_idx = -1
        sec_sco = 0

        # 장르 내 최다 재생곡
        for g, genre in enumerate(genres):
            if sd[0] == genres[g]:
                if pri_sco < plays[g]:
                    pri_sco = plays[g]
                    pri_idx = g

        # 장르 내 차다 재생곡
        for g, genre in enumerate(genres):
            if sd[0] == genres[g]:
                if sec_sco < plays[g] and not pri_idx == g:
                    sec_sco = plays[g]
                    sec_idx = g

        if pri_idx >= 0:
            answer.append(pri_idx)
        if sec_idx >= 0:
            answer.append(sec_idx)

    return answer


'''
print(solution(["A", "A", "B", "A", "B", "B", "A", "A",
      "A", "A"], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
# [0, 1, 2, 4]
'''
print(solution(["classic", "pop", "classic", "classic", "jazz", "pop",
      "Rock", "jazz"], [500, 600, 150, 800, 1100, 2500, 100, 1000]))
# [5, 1, 4, 7, 3, 0, 6]
