#!/bin/bash

set -ex

ps p $$
pwd
id

# copy scripts by hubot user
cp -r /home/hubot/app/tmp_scripts/. /home/hubot/app/scripts/
chown -R hubot:hubot /home/hubot/app/scripts/
ls -al /home/hubot/app/scripts/

exit 0
