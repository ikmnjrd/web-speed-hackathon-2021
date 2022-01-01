# 環境構築
## 問題
ローカルマシンにyarnを入れてなかった

## Dockerを頼ろう
ローカルマシンで
```bash
$ docker pull node:16.13
$ docker build . -t ike/web-speed-hackathon-2021-mini:1.0

$ docker run -it -p 8080:3000 --rm -v $(pwd):/usr/src/myapp ike/web-speed-hackathon-2021-mini:1.0 bash
```
ここからDocker内
```bash
$ yarn install
```


## 本番環境(heroku)
https://ike-web-speed-hackathon-2021.herokuapp.com/