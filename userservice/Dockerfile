#Node image jota käytetään pohjana buildaukseen
FROM node:8.9-alpine
#kansio jota käytetään docker imagen buildaukseen
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#kopioidaan tiedostot /usr/src/app kansioon
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#Viimeisin NPM 
RUN npm i npm@latest -g
#Asennetaan paketit package.jsonista ja globaali nodemon
RUN npm i nodemon@latest -g
RUN npm install
#Kopioidaan kaikki tiedostot projektikansiosta /usr/src/app kansioon
COPY . .
#Avataan portti ulkomaailmaan
EXPOSE 1234
#Komento joka ajetaan kun docker image suoritetaan
CMD nodemon index.js

