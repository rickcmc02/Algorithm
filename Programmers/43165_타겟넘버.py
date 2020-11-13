'''
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.
'''

def plus_minus(num_l, sum_n, tgt):
    sum_list = [sum_n]
    diff = sum_n - tgt
    
    while num_l[-1] * 2 > diff :
        num_l.pop()

    for i in range(len(num_l)) :
        temp_l = [0]
        for j in range(len(sum_list)) :
            temp_l.append(sum_list[j] - 2*num_l[i])
            temp_l.append(sum_list[j])
        sum_list = temp_l
    return sum_list.count(tgt)

def solution(numbers_list, target):
    numbers_list.sort()
    
    sum_numbers = sum(numbers_list)
    if sum_numbers < target :
        return 0
    elif sum_numbers == target :
        return 1
    else :
        return plus_minus(numbers_list, sum_numbers, target)

# print(solution([1, 1, 1, 1, 1], 3))