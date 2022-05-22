import heapq
from sys import stdin

n = int(stdin.readline())
# print(f'n: {n}')
arr = list(map(int,stdin.readline().split()))
# print(f'arr: {arr}')
heap, answer = [], 0

for _ in range(n):
  num = arr[_]
  # print(f'num: {num}')
  heapq.heappush(heap, num)
  # print(f'heap: {heap}')
  # print(len(heap))

# if len(heap) == n:
while len(heap) != 1:
  a = heapq.heappop(heap)
  b = heapq.heappop(heap)
  # print(f'a, b: {a, b}')
  heapq.heappush(heap, a + b)
  # print(f'heap: {heap}')
  answer += a * b
print(answer)