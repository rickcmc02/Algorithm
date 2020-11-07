'''
BOJ 알고리즘 캠프에는 총 N명이 참가하고 있다. 사람들은 0번부터 N-1번으로 번호가 매겨져 있고, 일부 사람들은 친구이다.
오늘은 다음과 같은 친구 관계를 가진 사람 A, B, C, D, E가 존재하는지 구해보려고 한다.

A는 B와 친구다.
B는 C와 친구다.
C는 D와 친구다.
D는 E와 친구다.
위와 같은 친구 관계가 존재하는지 안하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 사람의 수 N (5 ≤ N ≤ 2000)과 친구 관계의 수 M (1 ≤ M ≤ 2000)이 주어진다.
둘째 줄부터 M개의 줄에는 정수 a와 b가 주어지며, a와 b가 친구라는 뜻이다. (0 ≤ a, b ≤ N-1, a ≠ b) 같은 친구 관계가 두 번 이상 주어지는 경우는 없다.

출력
문제의 조건에 맞는 A, B, C, D, E가 존재하면 1을 없으면 0을 출력한다.
'''
# 줄줄이 이어지는 다섯명의 친구가 있는 경우

# bfs
# 두 친구 번호 중 작은 번호가 앞으로 가게 친구관계를 정렬해 놓고, 줄줄이 4관계 이상 진행이 가능한지 알아보기 or 친구관계 리스트가 len 5 이상
# 이어가고자 하는 친구 리스트 자체를 deque로 만들어야 하나


from collections import deque

n, m = map(int, input().split(' '))
rel_list = [list(input()).sort() for _ in range(m)]

for rel_i in rel_list :
    rel_i[0], rel_i[1] = rel_i[1], rel_i[0]
    rel_list.append(rel_i)

rel_list.sort()
rel_dic = {}
rel_dic[rel_list[0][0]] = [rel_list[0][1]]
n_rel = 0
ans = 0
chk = 0

for i in range(1, len(rel_list)) :
    if rel_list[i-1][0] != rel_list[i][0] :
        rel_dic[rel_list[i][0]] = []

for rel_i in rel_list :
    rel_dic[rel_i[0]].append(rel_i[1])

for k in rel_dic.keys() :
    for v in rel_dic[k] :
        n_rel = 0
        dfs(k, v)

def dfs(key, value):
    global chk
    global n_rel
    if chk :
        return
    n_rel += 1
    if n_rel == 4 :
        chk = 1
        return
    for v in rel_dic[value] :
        dfs(value, v)

print(chk)