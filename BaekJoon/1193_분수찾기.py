'''
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

[ 입력 ]
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

[ 출력 ]
첫째 줄에 분수를 출력한다.
'''

n = int(input())

i = 0
while n > 0:
    i += 1
    n -= i

if i % 2:
    print("%d/%d" % (1 - n, i + n))
else:
    print("%d/%d" % (i + n, 1 - n))


# above : trial 2 : i == 큰 순서, n + i == 작은 순서, i + 1 = sum

'''
# below : trial 1

list = []
last = 0
i = 0

while last < 10000000:
    i += 1
    last += i
    list.append(last)

for i, l in enumerate(list):
    if l >= n:
        seq = i + 1
        sub = l - n
        break

deno = seq - sub
numer = sub + 1
deno = str(deno)
numer = str(numer)

if seq % 2:
    print(numer + "/" + deno)
else:
    print(deno + "/" + numer)
'''
