'''
정보 선생님은 오늘도 이상한 출석을 부른다.

영일이는 오늘도 다른 생각을 해보았다.
출석 번호를 다 부르지는 않은 것 같은데... 가장 빠른 번호가 뭐였지?

출석 번호를 n번 무작위로 불렀을 때, 가장 빠른 번호를 출력해 보자.
'''

n = int(input())
call_list = list(map(int, input().split()))

m = call_list[0]
for i in range(1, n):
    if call_list[i] < m:
        m = call_list[i]

print(m)
