FROM node:24-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev \
    && npm cache clean --force

COPY app.js ./

USER node

EXPOSE 3000

CMD ["node", "app.js"]
