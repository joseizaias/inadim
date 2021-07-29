FROM node:14.17.3-buster

RUN mkdir -p /app/nodejs/src

WORKDIR /app/nodejs/src

COPY package.json .

COPY banco.nao.esta.criado.txt .

RUN npm install

COPY . .

EXPOSE 3033

CMD ["npm", "run", "dev"]
