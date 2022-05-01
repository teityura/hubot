# hubot

## git clone

```
mkdir -p ~/git
cd ~/git/
git clone https://github.com/teityura/hubot.git
cd hubot/
```

## start container

```
docker-compose up -d
```

## スクリプトを追加には

1. `app/scripts/` 以下にスクリプトを追加する

2. `app/scripts/controller.js` の orderList に  
    `スクリプトへのパス` と `使い方` を記載する

```
# hello.sh を追加する場合
cat << 'EOF' > app/scripts/shell/hello.sh
#!/bin/bash
echo "hello from $0"
exit 0
EOF
chmod +x app/scripts/shell/hello.sh

# hello.py を追加する場合
cat << 'EOF' > app/scripts/python/hello.py
#!/usr/bin/python3
# coding=utf-8

import os
import sys

print("hello from ", os.path.relpath(__file__))
print(sys.version)
EOF
chmod +x app/scripts/python/hello.py
```

## スクリプトで使うパッケージを追加するには

```
# python の requests モジュールを追加する場合
echo 'requests==2.27.1' >> app/scripts/python/requirements.txt
```

