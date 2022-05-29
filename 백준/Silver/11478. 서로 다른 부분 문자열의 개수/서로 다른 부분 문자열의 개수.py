s = input()
table = {}
for length in range(1, len(s) + 1):
  start = 0
  end = length - 1
  for _ in s:
    table[s[start:end]] = s.index(_)
    if start < len(s) or end < len(s):
      start += 1
      end += 1
    else:
      break
  
print(len(table.keys()))  
