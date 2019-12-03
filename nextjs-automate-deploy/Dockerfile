FROM node:12 as base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm run build

EXPOSE 8081
CMD [ "npm", "start" ]