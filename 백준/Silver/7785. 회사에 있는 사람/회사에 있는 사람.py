from sys import stdin

n = int(stdin.readline())
log = {}

for _ in range(n):
  name, state = stdin.readline().split()
  """
  if name in log and state != log[name]:
    log[name] = state
  else:
    log[name] = state
  """
  log[name] = state


answer = sorted({name for name in log.keys() if log[name] == 'enter'}, reverse = True)

for item in answer:
  print(item)