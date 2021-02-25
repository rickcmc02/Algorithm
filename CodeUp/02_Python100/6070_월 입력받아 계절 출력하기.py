'''
월이 입력될 때 계절 이름이 출력되도록 해보자.

월 : 계절 이름
12, 1, 2 : winter
  3, 4, 5 : spring
  6, 7, 8 : summer
  9, 10, 11 : fall
'''

n = int(input())

if 6 > n >= 3:
    print("spring")
elif 9 > n >= 6:
    print("summer")
elif 12 > n >= 9:
    print("fall")
else:
    print("winter")
