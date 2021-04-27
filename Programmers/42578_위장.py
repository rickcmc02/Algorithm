'''
문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
같은 이름을 가진 의상은 존재하지 않습니다.
clothes의 모든 원소는 문자열로 이루어져 있습니다.
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
스파이는 하루에 최소 한 개의 의상은 입습니다.
입출력 예
clothes	return
[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	5
[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]	3
입출력 예 설명
예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.

1. crow_mask
2. blue_sunglasses
3. smoky_makeup
'''

# answer2 - return값만 고려한 풀이


def solution(clothes):
    answer = 1
    multiply_num = 2      # 기본 경우의 수가 아무것도 입지 않았을 때, 해당 옷을 입었을 때 2가지이므로 기본값 2
    clothes = sorted(clothes, key=lambda x: x[1])     # 신체 부위 기준으로 리스트 정렬

    for i in range(len(clothes)-1):
        if clothes[i][1] == clothes[i+1][1]:
            multiply_num += 1     # 해당 신체부위 경우의 수(옷 종류) 1 증가
        else:
            answer *= multiply_num      # 이전 신체부위의 수 만큼 경우의 수 곱하기
            multiply_num = 2

    answer *= multiply_num
    answer -= 1       # 아무것도 입지 않는 경우의 수 제외

    return answer


'''
# answer1 - 확장성을 고려한 풀이(부위별 옷 sort)

def solution(clothes):
    answer = 1
    body_part = []
    cloth_part = []
    # 신체 부위 기준으로 리스트 정렬
    clothes = sorted(clothes, key=lambda x: x[1])

    for c, cloth in enumerate(clothes):
        # 빈 배열에 첫 신체부위와 첫 옷 추가
        if not c:
            body_part.append(clothes[0][1])
            cloth_part.append([clothes[0][0]])
            continue

        # 두번째부터 이전과 비교해서 같은 신체 부위면
        # 해당 신체부위와 같은 인덱스의 옷 리스트에 옷 추가
        if cloth[1] == body_part[-1]:
            cloth_part[-1].append(cloth[0])

        # 이전과 다른 신체 부위면 신체부위 추가, 옷 리스트 안에 새로운 리스트 추가
        else:
            body_part.append(cloth[1])
            cloth_part.append([cloth[0]])

    # 가능한 옷입기의 조합 수 - 아무것도 안입는 경우 1 차감
    for cp in cloth_part:
        answer *= (len(cp) + 1)
    answer -= 1

    return answer
'''

print(solution([["yellowhat", "headgear"], [
      "bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))
