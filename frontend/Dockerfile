FROM node:14-alpine

WORKDIR /frontend

COPY . ./
COPY package.json ./
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]