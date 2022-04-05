FROM node:13-alpine

RUN mkdir -p /home/BACKEND

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]