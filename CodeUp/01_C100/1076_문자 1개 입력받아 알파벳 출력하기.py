'''
영문자(a ~ z) 1개가 입력되었을 때 그 문자까지의 알파벳을 순서대로 출력해보자.
'''

n = int(ord(input()))

num_a = ord("a")
while num_a <= n:
    print(chr(num_a))
    num_a += 1
