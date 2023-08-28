FROM node:latest
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
ENV DATABASE_HOST=postgres
ENV DATABASE_PORT=5432
ENV DATABASE_USERNAME=postgres
ENV DATABASE_PASSWORD=mysecretpassword
ENV DATABASE_NAME=postgres
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "start:prod"]