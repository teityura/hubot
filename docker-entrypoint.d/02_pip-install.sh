#!/bin/bash

set -ex

ps p $$
pwd
id

# pip install requirements.txt
pip install -r /home/hubot/app/scripts/python/requirements.txt

exit 0
