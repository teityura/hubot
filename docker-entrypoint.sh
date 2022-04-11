#!/bin/bash

set -ex

ps p $$
pwd
id

cd / ; ls -al

ls -al ./docker-entrypoint.d/

find ./docker-entrypoint.d/ -type f | bash

exec "$@"

exit 0
