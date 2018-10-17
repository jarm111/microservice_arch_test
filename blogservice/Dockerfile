#Base image jota käytetään pohjana
FROM node:8.9-alpine
#kansio jota käytetään docker imagen buildaukseen
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#kopioidaan 
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#Viimeisin NPM 
RUN npm i npm@latest -g
RUN npm install
COPY . .
EXPOSE 888
CMD npm start