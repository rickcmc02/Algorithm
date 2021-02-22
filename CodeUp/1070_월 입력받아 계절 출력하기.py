'''
월이 입력될 때 계절 이름이 출력되도록 해보자.

예
월 : 계절 이름
12, 1, 2 : winter
  3, 4, 5 : spring
  6, 7, 8 : summer
  9, 10, 11 : fall

'''

m = int(input())

if 3 <= m < 6:
    print("spring")
elif 6 <= m < 9:
    print("summer")
elif 9 <= m < 12:
    print("fall")
else:
    print("winter")
