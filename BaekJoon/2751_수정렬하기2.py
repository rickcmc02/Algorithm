from sys import stdin

n = int(input())
input_list = map(int, stdin.read().split())

num_list = [0] * 1000001
minus_list = [0] * 1000000
answer = ''

for input_i in input_list :
    if input_i < 0 :
        minus_list[input_i] = 1
    else : 
        num_list[input_i] = 1
    
for i in range(1000000) :
    if minus_list[i] == 1 :
        answer += str(-1000000 + i) + "\n"

for i in range(1000001) :
    if num_list[i] == 1 :
        answer += str(i) + "\n"

print(answer)