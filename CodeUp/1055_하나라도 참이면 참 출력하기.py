'''
두 개의 참(1) 또는 거짓(0)이 입력될 때,
하나라도 참이면 참을 출력하는 프로그램을 작성해보자.
'''

a, b = map(int, input().split(' '))

if a or b:
    print(1)
else:
    print(0)
