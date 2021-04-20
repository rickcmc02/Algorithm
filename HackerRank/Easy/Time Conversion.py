'''
https://www.hackerrank.com/challenges/time-conversion
'''

s = input()

if s[0:2] == "12":
    if s[-2] == "A":
        s = "00" + s[2:]
else:
    if s[-2] == "P":
        s = str(int(s[0:2]) + 12) + s[2:]

print(s[0:-2])
