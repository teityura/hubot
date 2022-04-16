#!/usr/bin/python3
# coding=utf-8

import requests
import sys

ENDPOINT = 'https://api.coin.z.com/public'
PATH = '/v1/ticker'


def main():
    # 全銘柄分の最新レートを取得する
    response = requests.get(ENDPOINT + PATH)
    data = response.json()["data"]
    symbols = ["BTC", "ETH"]

    # 引数から銘柄を取得する
    if len(sys.argv) > 1:
        symbols = []
        for i in range(1, len(sys.argv)):
            symbols.append(sys.argv[i])

    # レートを表示する
    print("```")
    for ticker in data:
        if ticker["symbol"] in symbols:
            print("{}: {}".format(ticker["symbol"], ticker["bid"]))
    print("```")


if __name__ == '__main__':
    main()

