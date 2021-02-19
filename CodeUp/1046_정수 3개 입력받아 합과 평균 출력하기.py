'''
정수 3개를 입력받아 합과 평균을 출력해보자.
단, -2147483648 ~ +2147483647
'''

s = sum(list(map(int, input().split(' '))))
print(s)
print("%.1f" % (s / 3))
