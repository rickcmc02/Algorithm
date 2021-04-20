'''
https://www.hackerrank.com/challenges/diagonal-difference
'''

n = int(input())
squ_mat = [list(map(int, input().split())) for _ in range(n)]
sum_pd = 0
sum_sd = 0

for i, s_m in enumerate(squ_mat):
    sum_pd += s_m[i]
    sum_sd += s_m[-i-1]

print(abs(sum_pd - sum_sd))
