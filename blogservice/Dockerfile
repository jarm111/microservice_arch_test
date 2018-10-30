#Node image jota käytetään pohjana buildaukseen
FROM node:8.9-alpine
#kansio jota käytetään docker imagen buildaukseen
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#kopioidaan 
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#Viimeisin NPM 
RUN npm i npm@latest -g
#Asennetaan paketit package.jsonista
RUN npm install
#COPY . .
#Avataan portti 888 ulkomaailmaan
EXPOSE 888
#Komento joka ajetaan kun docker image suoritetaan
CMD npm start