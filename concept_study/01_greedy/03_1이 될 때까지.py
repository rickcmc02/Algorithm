n, k = map(int, input().split())

count = 0
while n > 1:
    count += 1
    if n % k:
        n -= 1
    else:
        n /= k

print(count)
