import sys
sys.setrecursionlimit(10**6)

V, E, R = map(int, sys.stdin.readline().split())
node_dic = [[] for vertical in range(V+1)]
result = [0]*(V+1)

for _ in range(E):
  node, next = map(int, sys.stdin.readline().split())
  node_dic[node].append(next)
  node_dic[next].append(node)

for i in range(V+1):
  node_dic[i].sort()

cnt = 1
def dfs(idx, node_dic, result):
  global cnt
  result[idx] = cnt
  for i in node_dic[idx]:
    if result[i] == 0:
      cnt += 1
      dfs(i, node_dic, result)
  
dfs(R, node_dic, result)

print(*result[1:])
