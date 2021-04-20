'''
https://www.hackerrank.com/challenges/plus-minus
'''

n = int(input())
arr = list(map(int, input().split()))
p_n = 0
m_n = 0
z_n = 0

for a in arr:
    if a > 0:
        p_n += 1
    elif a < 0:
        m_n += 1
    else:
        z_n += 1

print(round(p_n / n, 6))
print(round(m_n / n, 6))
print(round(z_n / n, 6))
