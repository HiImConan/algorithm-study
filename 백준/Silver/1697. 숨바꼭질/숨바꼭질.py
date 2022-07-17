import sys
from collections import deque
input = sys.stdin.readline()

def bfs():
    q = deque()
    q.append(n)
    while q:
        x = q.popleft()
        if x == k:
            print(dist[x])
            break

        for idx in (x-1,x+1,x*2):
            if 0 <= idx <= MAX and not dist[idx]:
                dist[idx] = dist[x] + 1
                q.append(idx)

MAX = 100000
n,k = map(int,input.split())
dist = [0] * (MAX+1)

bfs()