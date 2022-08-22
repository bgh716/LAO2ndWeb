FROM node
WORKDIR /app
WORKDIR ./lao-react

COPY lao-react/package*.json ./
RUN npm install
RUN npm run build

WORKDIR ../
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
