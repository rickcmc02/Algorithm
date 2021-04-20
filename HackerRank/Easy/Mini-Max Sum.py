'''
https://www.hackerrank.com/challenges/mini-max-sum
'''

arr = list(map(int, input().split()))
arr.sort()
print(sum(arr) - arr[-1], sum(arr) - arr[0])
