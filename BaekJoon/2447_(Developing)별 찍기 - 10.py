'''
재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.

크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

***
* *
***
N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

[ 입력 ]
첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

[ 출력 ]
첫째 줄부터 N번째 줄까지 별을 출력한다.
'''

# 다른 방식으로 효율성 개선 필요

# tiral 1 - 빈칸 뚫기로 풀기

n = int(input())
base_list = []

base_list = [["*" for _ in range(n)] for _ in range(n)]

while n // 3:
    n /= 3
    for i, line in enumerate(base_list):
        if (i // n) % 3 == 1:
            for j in range(len(line)):
                if (j // n) % 3 == 1 and line[j]:
                    line[j] = " "

for col in base_list:
    for x in col:
        print(x, end='')
    print("")

'''
n = int(input())
base_list = []

base_list = [[1 for _ in range(n)] for _ in range(n)]

while n // 3:
    n /= 3
    for i, line in enumerate(base_list):
        if (i // n) % 3 == 1:
            for j in range(len(line)):
                if (j // n) % 3 == 1 and line[j]:
                    line[j] = 0

for col in base_list:
    for x in col:
        if x:
            print("*", end='')
        else:
            print(" ", end='')
    print("")
'''
'''
0~8 9~17 18~26

[[1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 0, 1, 1, 0, 1, 1, 0, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 0, 1, 1, 0, 1, 1, 0, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 0, 1, 1, 0, 1, 1, 0, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1]]


star_list = ["***", "* *", "***"]
i = 3

while i <= n:
    temp = star_list
    for j in range(i*3):
        if j < i:
            star_list[j] = temp[j] + temp[j] + temp[j]
        else:
            s = temp[j % i]
            if j < i*2:
                for k in range(i):
                    s += " "
            else:
                s += temp[j % i]
                s += temp[j % i]
                star_list.append(s)
    i *= 3

print(star_list)
'''

'''
# 1st trial 갯수 문제 해결 + 중간 빈 공간 어떻게 나타낼지 고민

import copy

n = int(input())

base_form = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
ans_form = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

for _ in range(n):
    # print(ans_form)
    temp = copy.deepcopy(ans_form)
    # print(temp)
    for i in ans_form:
        for j in base_form:
            for k in range(3):
                # print(i[k])
                i[k] = temp[k] * j[k]
                # print(j[k])

print(ans_form)
'''

'''
3
*************************** 1
* ** ** ** ** ** ** ** ** * 2
*************************** 3
***   ******   ******   *** 4
* *   * ** *   * ** *   * * 5
***   ******   ******   *** 6
*************************** 7
* ** ** ** ** ** ** ** ** * 8
*************************** 9
*********         ********* 10
* ** ** *         * ** ** * 11
*********         ********* 12
***   ***         ***   *** 13
* *   * *         * *   * * 14
***   ***         ***   *** 15
*********         ********* 16
* ** ** *         * ** ** * 17
*********         ********* 18
*************************** 19
* ** ** ** ** ** ** ** ** * 20
*************************** 21
***   ******   ******   *** 22
* *   * ** *   * ** *   * * 23
***   ******   ******   *** 24
*************************** 25
* ** ** ** ** ** ** ** ** * 26
*************************** 27
'''
