FROM node:10-alpine

USER root
RUN mkdir /app
COPY . /app
RUN cd app && npm i -SP

USER node
WORKDIR /app
EXPOSE 8080
CMD ["npm", "start"]
