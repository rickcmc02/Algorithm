n = int(input())

num_list = [0] * 1000001
minus_list = [0] * 1000000
inp = 0
answer = ''

for _ in range(n) :
    inp = int(input())
    if inp < 0 :
        minus_list[inp] = 1
    else : 
        num_list[inp] = 1
    
for i in range(1000000) :
    if minus_list[i] == 1 :
        answer += str(-1000000 + i) + "\n"

for i in range(1000001) :
    if num_list[i] == 1 :
        answer += str(i) + "\n"

print(answer)