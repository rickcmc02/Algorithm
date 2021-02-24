'''
정수 1개가 입력되었을 때, 음(minus)/양(plus)과 짝(even)/홀(odd)을 출력해보자.
'''

n = int(input())

if n > 0:
    print("plus")
    if n % 2:
        print("odd")
    else:
        print("even")
else:
    print("minus")
    if n % 2:
        print("odd")
    else:
        print("even")
