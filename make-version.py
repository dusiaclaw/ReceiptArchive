#!/usr/bin/env python3
"""Write version.json from APP_VERSION and CHANGELOG in index.html. Run before each release."""
import re,json
s=open('index.html',encoding='utf-8').read()
v=re.search(r"const APP_VERSION='([^']+)'",s).group(1)
cl=json.loads(re.search(r"const CHANGELOG=(\[.*?\]);\n",s,re.S).group(1))
json.dump({"version":v,"notes":cl[:5]},open('version.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print('version.json ->',v)
