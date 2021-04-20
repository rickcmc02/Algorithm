'''
https://www.hackerrank.com/challenges/birthday-cake-candles
'''

n = int(input())
candles = list(map(int, input().split()))
candles.sort(reverse=True)
ans = 1

for i in range(n-1):
    if not candles[i] == candles[i+1]:
        break
    ans += 1

print(ans)
