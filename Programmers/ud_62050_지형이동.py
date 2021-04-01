'''
문제 설명
N x N 크기인 정사각 격자 형태의 지형이 있습니다. 각 격자 칸은 1 x 1 크기이며, 숫자가 하나씩 적혀있습니다. 격자 칸에 적힌 숫자는 그 칸의 높이를 나타냅니다.

이 지형의 아무 칸에서나 출발해 모든 칸을 방문하는 탐험을 떠나려 합니다. 칸을 이동할 때는 상, 하, 좌, 우로 한 칸씩 이동할 수 있는데, 현재 칸과 이동하려는 칸의 높이 차가 height 이하여야 합니다. 높이 차가 height 보다 많이 나는 경우에는 사다리를 설치해서 이동할 수 있습니다. 이때, 사다리를 설치하는데 두 격자 칸의 높이차만큼 비용이 듭니다. 따라서, 최대한 적은 비용이 들도록 사다리를 설치해서 모든 칸으로 이동 가능하도록 해야 합니다. 설치할 수 있는 사다리 개수에 제한은 없으며, 설치한 사다리는 철거하지 않습니다.

각 격자칸의 높이가 담긴 2차원 배열 land와 이동 가능한 최대 높이차 height가 매개변수로 주어질 때, 모든 칸을 방문하기 위해 필요한 사다리 설치 비용의 최솟값을 return 하도록 solution 함수를 완성해주세요.

제한사항
land는 N x N크기인 2차원 배열입니다.
land의 최소 크기는 4 x 4, 최대 크기는 300 x 300입니다.
land의 원소는 각 격자 칸의 높이를 나타냅니다.
격자 칸의 높이는 1 이상 10,000 이하인 자연수입니다.
height는 1 이상 10,000 이하인 자연수입니다.
입출력 예
land	height	result
[[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]]	3	15
[[10, 11, 10, 11], [2, 21, 20, 10], [1, 20, 21, 11], [2, 1, 2, 1]]	1	18

'''
'''
dy = [0, -1, 0, 1]
dx = [-1, 0, 1, 0]


def dfs(y, x, cnt, land, height, N, land_copy, land_diff, min_num):
    land_copy[y][x] = cnt

    # 매겨진 cnt의 최저값 순서대로 배치하기 위한 최저값 구하기
    if land[y][x] < min_num[cnt-1]:
        min_num[cnt-1] = land[y][x]

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if ny >= 0 and ny < N and nx >= 0 and nx < N and not land_copy[ny][nx]:
            diff = abs(land[y][x] - land[ny][nx])
            if diff <= height:
                dfs(ny, nx, cnt, land, height, N, land_copy, land_diff, min_num)
            else:
                if land_diff[y][x] > diff:
                    land_diff[y][x] = diff


def solution(land, height):
    N = len(land)
    land_copy = [[0] * N for _ in range(N)]
    land_diff = [[10001] * N for _ in range(N)]
    cnt = 0
    min_num = []
    order_list = []

    for i in range(N):
        for j in range(N):
            if not land_copy[i][j]:
                cnt += 1
                min_num.append(10001)
                dfs(i, j, cnt, land, height, N, land_copy, land_diff, min_num)

    sort_min = sorted(min_num)
    for sm in sort_min:
        order_list.append(min_num.index(sm))

    return min_num, order_list, land_diff

'''

dy = [0, -1, 0, 1]
dx = [-1, 0, 1, 0]


def dfs(y, x, cnt, land, height, N, land_copy, min_num):
    land_copy[y][x] = cnt

    # 매겨진 cnt의 최저값 순서대로 배치하기 위한 최저값 구하기
    if land[y][x] < min_num[cnt-1]:
        min_num[cnt-1] = land[y][x]

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if ny >= 0 and ny < N and nx >= 0 and nx < N and not land_copy[ny][nx]:
            if abs(land[y][x] - land[ny][nx]) <= height:
                dfs(ny, nx, cnt, land, height, N, land_copy, min_num)


def solution(land, height):
    N = len(land)
    land_copy = [[0] * N for _ in range(N)]
    cnt = 0
    min_num = []
    order_list = []
    diff_list = []
    answer = 0

    for i in range(N):
        for j in range(N):
            if not land_copy[i][j]:
                cnt += 1
                min_num.append(10001)
                dfs(i, j, cnt, land, height, N, land_copy, min_num)

    sort_min = sorted(min_num)
    for sm in sort_min:
        order_list.append(min_num.index(sm))

    for c in range(len(order_list) - 1):
        diff_list.append(10001)
        for y in range(N):
            for x in range(N):
                for d in range(4):
                    ny = y + dy[d]
                    nx = x + dx[d]
                    if ny >= 0 and ny < N and nx >= 0 and nx < N:
                        if land_copy[y][x] == order_list[c] + 1 and land_copy[ny][nx] == order_list[c+1] + 1:
                            diff = land[ny][nx] - land[y][x]
                            if diff_list[c] > diff:
                                diff_list[c] = diff

    return diff_list


# print(solution([[1, 4, 8, 10], [5, 5, 5, 5], [
#       10, 10, 10, 10], [10, 10, 10, 20]], 3))
print(solution([[10, 11, 10, 11], [2, 21, 20, 10],
      [1, 20, 21, 11], [2, 1, 2, 1]], 1))
