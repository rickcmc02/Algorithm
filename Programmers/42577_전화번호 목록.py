'''
문제 설명
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

제한 사항
phone_book의 길이는 1 이상 1,000,000 이하입니다.
각 전화번호의 길이는 1 이상 20 이하입니다.
같은 전화번호가 중복해서 들어있지 않습니다.
입출력 예제
phone_book	return
["119", "97674223", "1195524421"]	false
["123","456","789"]	true
["12","123","1235","567","88"]	false
입출력 예 설명
입출력 예 #1
앞에서 설명한 예와 같습니다.

입출력 예 #2
한 번호가 다른 번호의 접두사인 경우가 없으므로, 답은 true입니다.

입출력 예 #3
첫 번째 전화번호, “12”가 두 번째 전화번호 “123”의 접두사입니다. 따라서 답은 false입니다.
'''

# Trial 2 - sort 기능을 사용하면 내용 뿐만 아니라 자연스럽게 길이도 sorting이 된다.


def solution(phone_book):
    if len(phone_book) == 1:
        return False

    # 앞 숫자 낮은 순서대로 정렬
    phone_book.sort()

    for pb_i in range(len(phone_book) - 1):
        prev = phone_book[pb_i]
        post = phone_book[pb_i + 1]
        len_prev = len(prev)
        len_post = len(post)

        if len_prev > len_post:
            continue

        if prev == post[:len_prev]:
            return False

    return True


'''
# Trial 1 - 시간초과(테스트 케이스 통과, 효율성 테스트 (2/4) 실패)


def solution(phone_book):
    if len(phone_book) == 1:
        return False

    # 짧은 번호가 리스트 앞으로 오도록 sort
    phone_book.sort(key=len)

    # 각 번호 뒤집어 담기
    for i, phone in enumerate(phone_book):
        phone_book[i] = phone[::-1]

    # 번호 int로 바꾸기
    int_PB = list(map(int, phone_book))

    # 앞 번호에서 뒷 번호 뺀 후 빈 공간 (갯수만큼 0) 나오면 번호 있는 것
    for j, phone in enumerate(int_PB):
        div10 = 10 ** len(phone_book[j])
        for k in range(j + 1, len(int_PB)):
            temp = int_PB[k] - phone
            if temp % div10 == 0:
                return False

    return True
'''

print(solution(["12", "123", "1235", "13", "567", "88"]))
