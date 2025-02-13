FROM node:18.2.0

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 23450

EXPOSE 23450

CMD ["npm", "run", "start"]