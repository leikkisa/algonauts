n = input()
numbers = [int(x) for x in input().split(' ')]

ouput_list = [0] * 100
for x in numbers:
    output_list[x] += 1

output = ' '.join(map(str, output_list))
print (output)
