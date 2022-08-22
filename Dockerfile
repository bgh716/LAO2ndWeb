FROM node
WORKDIR /app

COPY lao-react/package*.json ./
WORKDIR ./lao-react
RUN npm install
RUN npm run build

WORKDIR ../
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
