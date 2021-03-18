input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

answer = 8

if row < 3:
    answer -= 2
    if row == 1:
        answer -= 1
elif row > 6:
    answer -= 2
    if row == 8:
        answer -= 1

if column < 3:
    answer -= 2
    if column == 1:
        answer -= 1
elif column > 6:
    answer -= 2
    if column == 8:
        answer -= 1

print(answer)

'''
# Book solution

steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

result = 0
for step in steps:
    next_row = row + step[0]
    next_column = column + step[1]
    if next_row >= 1 and next_row <=8 and next_column >= 1 and next_column <= 8:
        result += 1

print(result)
'''