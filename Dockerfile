FROM node:10

USER root
RUN mkdir /app
COPY . /app
RUN cd app && npm i -SP

USER node
WORKDIR /app
CMD ["npm", "start"]
