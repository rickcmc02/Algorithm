'''
다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
'''


num = input()
for i, n in enumerate(num) :
    print(i, n)
    
    print("[%d]" % n*(10**(4-i)))