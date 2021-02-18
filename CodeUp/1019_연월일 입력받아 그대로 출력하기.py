'''
년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.
'''

y, m, d = map(int, input().split('.'))
print("%04d.%02d.%02d" % (y, m, d))