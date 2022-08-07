import sys
import heapq
line = sys.stdin.readline
INF = int(1e9)

n, m, x = map(int, line().split())
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    s, e, t = map(int, line().split())
    graph[s].append([e, t])
    
def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance = [INF] * (n + 1)
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for node_index, node_cost in graph[now]:
            time = dist + node_cost
            if time < distance[node_index]:
                distance[node_index] = time
                heapq.heappush(q, (time, node_index))
    return distance

result = [[]]
time_list = []
for i in range(1, n + 1):
    result.append(dijkstra(i))
for i in range(1, n+1):
    time_list.append(result[i][x] + result[x][i])
print(max(time_list))
