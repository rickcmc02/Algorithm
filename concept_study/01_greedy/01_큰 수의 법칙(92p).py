n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
first = data[-1]
second = data[-2]

result = 0

'''
# my solution

while m > 0:
    result += first * min(m, k)
    m -= min(m, k)
    if m:
        result += second
        m -= 1


# book solution1

while True:
    for i in range(k):
        if m == 0:
            break
        result += first
        m -= 1
    if m == 0:
        break
    result += second
    m -= 1
'''

# book solution2

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

result += (count) * first  # 가장 큰 수 더하기
result += (m - count) * second


print(result)
