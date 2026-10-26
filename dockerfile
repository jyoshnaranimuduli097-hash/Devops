FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY . ./
ENV PORT=3000
ENV MONGO_URI=mongodb://localhost:27017/devops
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev 
COPY --from=builder /app/dist ./dist
ENV PORT=3000
ENV MONGO_URI=mongodb://localhost:27017/devops
EXPOSE 3000
CMD [ "node","dist/main.js" ]