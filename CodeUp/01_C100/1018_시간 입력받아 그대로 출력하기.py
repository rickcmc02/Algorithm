'''
어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
'''

h, m = input().split(':')
print("%s:%s" % (h, m))

# %d - treated as an integer, and presented as a decimal number
# %s - treated as and presented as a string