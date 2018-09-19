FROM node:10.10.0-alpine
WORKDIR /usr/app
COPY . .
ENV HTTP_PORT 8080
RUN npm install --production
EXPOSE ${HTTP_PORT}
CMD ["node", "server.js"]
