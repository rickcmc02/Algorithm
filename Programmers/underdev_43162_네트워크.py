'''
네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 
예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 
컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 
따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 
네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
'''
# 아.. 해석을 잘못한듯? dfs말고 다른걸로 접근해야할 것 같다.

# dfs
dy = [1, 0]
dx = [0, 1]

def dfs(y, x, n, network):
    visited_list[y][x] = 1
    for i in range(2) :
        ny = y + dy[i]
        nx = x + dx[i]
        if ny in range(0,n) and nx in range(0,n) and network[ny][nx] and not visited_list[ny][nx] :
            dfs(ny, nx, n, network)

def solution(n, network):
    network_num = 0
    global visited_list
    visited_list = [[0] * n for _ in range(n)]
    for j in range(n) :
        for i in range(j, n) :
            if network[i][j] and not visited_list[i][j] :
                network_num += 1
                dfs(i, j, n, network)
    return network_num