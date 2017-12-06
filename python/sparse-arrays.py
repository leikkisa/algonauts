import collections

values = collections.defaultdict(int)

for str in range(int(input())):
    values[input()] += 1

for str in range(int(input())):
    print(values[input()])
