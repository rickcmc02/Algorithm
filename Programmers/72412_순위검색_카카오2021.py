
def solution(info, query):
    answer = []
    len_info = len(info)
    len_query = len(query)

    info_array = [[] for _ in range(len_info)]
    query_array = [[] for _ in range(len_query)]

    for i, i_str in enumerate(info):
        info_array[i] = i_str.split()
    for q, q_str in enumerate(query):
        query_array[q] = q_str.split(" and ")

    for i_idx, info_arr in enumerate(info_array):
        info_array[i_idx][4] = int(info_arr[4])
    for q_idx, que_arr in enumerate(query_array):
        temp = []
        temp = que_arr[3].split()
        que_arr = que_arr[0:3]
        que_arr.append(temp[0])
        que_arr.append(int(temp[1]))
        query_array[q_idx] = que_arr

    info_array.sort(key=lambda x: -x[4])

    for idx, info_arr in enumerate(info_array):
        for i, info_str in enumerate(info_arr):
            if i == 0:
                if info_str == "cpp":
                    info_array[idx][i] = 1
                elif info_str == "java":
                    info_array[idx][i] = 2
                elif info_str == "python":
                    info_array[idx][i] = 3
            elif i == 1:
                if info_str == "backend":
                    info_array[idx][i] = 1
                elif info_str == "frontend":
                    info_array[idx][i] = 2
            elif i == 2:
                if info_str == "junior":
                    info_array[idx][i] = 1
                elif info_str == "senior":
                    info_array[idx][i] = 2
            elif i == 3:
                if info_str == "chicken":
                    info_array[idx][i] = 1
                elif info_str == "pizza":
                    info_array[idx][i] = 2

    for idx, query_arr in enumerate(query_array):
        for i, query_str in enumerate(query_arr):
            if i == 0:
                if query_str == "cpp":
                    query_array[idx][i] = 1
                elif query_str == "java":
                    query_array[idx][i] = 2
                elif query_str == "python":
                    query_array[idx][i] = 3
                else:
                    query_array[idx][i] = 0
            elif i == 1:
                if query_str == "backend":
                    query_array[idx][i] = 1
                elif query_str == "frontend":
                    query_array[idx][i] = 2
                else:
                    query_array[idx][i] = 0
            elif i == 2:
                if query_str == "junior":
                    query_array[idx][i] = 1
                elif query_str == "senior":
                    query_array[idx][i] = 2
                else:
                    query_array[idx][i] = 0
            elif i == 3:
                if query_str == "chicken":
                    query_array[idx][i] = 1
                elif query_str == "pizza":
                    query_array[idx][i] = 2
                else:
                    query_array[idx][i] = 0

    for query_arr in query_array:
        temp_pass = 0
        for info_arr in info_array:
            temp_p = 0
            if info_arr[4] >= query_arr[4]:
                for n in range(4):
                    if query_arr[n]:
                        if query_arr[n] == info_arr[n]:
                            temp_p += 1
                        else:
                            break
                    else:
                        temp_p += 1
                if temp_p == 4:
                    temp_pass += 1
            else:
                break
        answer.append(temp_pass)

    return answer
