FROM node:17.8.0-bullseye

RUN set -x && apt-get update \
  && apt-get install -y python3-pip vim sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g yo generator-hubot

# Make hubot user
RUN groupadd -r hubot && \
  useradd -g hubot hubot -m && \
  echo "hubot ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
  echo 'hubot:hubot' | chpasswd

# Make app directory owned by hubot
WORKDIR /home/hubot/app
RUN chown -R hubot:hubot /home/hubot/app/

# Init hubot by hubot user
USER hubot
RUN yo hubot --owner "hubot" --name "Larry" --description "Larry Bot" --adapter slack

# Execution docker-entrypoint.sh by hubot user
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

# Start hubot by hubot user
CMD ["/bin/bash", "-c", "cd /home/hubot/app/ && bin/hubot --adapter slack"]
