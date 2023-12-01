FROM node:14-alpine

WORKDIR /frontend

COPY . ./
COPY package.json ./
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]