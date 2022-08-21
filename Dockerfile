FROM node
COPY lao-react ./
WORKDIR /lao-react
RUN npm install
RUN npm run build

WORKDIR ../app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
