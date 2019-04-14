FROM node:10-alpine

# Make container root
USER root
RUN mkdir /app

# Install node dependencies
COPY package.json /app/package.json
RUN cd /app; yarn

# Copy project to container
COPY . /app
WORKDIR /app

# Install dumb-init
RUN apk add dumb-init

# Build app
RUN yarn build

USER node
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "start"]
