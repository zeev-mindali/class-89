#Inheirt current image from alpine
FROM node:18-alpine3.16

#create an empty directory
WORKDIR /app

#copy local package*.json into /app:
COPY package*.json /app

#install npm dependencies:
RUN npm i

#copy project loca files into /app:
COPY . /app/

#execute npm start
ENTRYPOINT npm start
