FROM node:10-alpine

# Copy into container
USER root
RUN mkdir /app
COPY . /app
WORKDIR /app

# Install dumb-init
RUN apk add dumb-init

# Install node dependencies and build.
RUN yarn
RUN yarn build

USER node
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "start"]
