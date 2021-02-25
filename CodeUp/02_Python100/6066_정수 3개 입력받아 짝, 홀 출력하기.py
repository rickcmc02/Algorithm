'''
3개의 정수(a, b, c)가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.
'''

num_list = list(map(int, input().split()))

for num in num_list:
    if num % 2 == 0:
        print("even")
    else:
        print("odd")
