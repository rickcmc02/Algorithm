'''
세 정수 a, b, c가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.
'''

eo_list = list(map(int, input().split(' ')))

for eo in eo_list:
    if eo % 2:
        print("odd")
    else:
        print("even")
