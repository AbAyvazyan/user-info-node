FROM node:18.18.2-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
