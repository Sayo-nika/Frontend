FROM node:10-alpine

# Copy into container
USER root
RUN mkdir /app
COPY . /app
WORKDIR /app

# Install dumb-init
RUN wget -O /usr/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64
RUN chmod +x /usr/bin/dumb-init

# Install node dependencies and build.
RUN yarn
RUN yarn build

USER node
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["yarn", "start"]
