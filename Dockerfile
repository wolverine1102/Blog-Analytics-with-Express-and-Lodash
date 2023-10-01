FROM node:18.18.0-alpine
WORKDIR /home/blog-analytics
ADD . .
RUN npm install
EXPOSE 7050
CMD node index.js
