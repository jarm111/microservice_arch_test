# WebSK2: Electric Boogaloo

# Mikropalvelut ja Docker

# Mikropalvelut webapplikaatioissa

## Service-oriented architecture  
SOA (Service-oriented architecture) eli palvelukeskeinen arkkitehtuuri on ohjelmistotekniikassa käytetty arkkitehtuuritason suunnittelutapa, jolla eri tietojärjestelmien toiminnot ja prosessit on suunniteltu toimimaan itsenäisinä, avoimina ja joustavina palveluina. Näitä palveluita tulisi pystyä aina käyttämään avoimien standardien rajapintojen kautta. 

Mikropalveluarkkitehtuurissa jokainen mikropalvelu onkin tavallaan palveluorientoituneen arkkitehtuurin palvelu. 

Lisää luettavaa aiheesta
* [Introduction to SOA](https://www.ibm.com/support/knowledgecenter/en/SSMQ79_9.5.1/com.ibm.egl.pg.doc/topics/pegl_serv_overview.html)
* [SOA vs. Microservices](https://dzone.com/articles/microservices-vs-soa-2)


## Mikropalvelut 
Mikropalveluarkkitehtuurissa verkkosovelluksen backend koostuu mahdollisimman pieniksi palasiksi paloitelluista palveluista joita on helppo kehittää ja käyttää toisista mikropalveluista riippumatta.  Kunkin palvelun tehtävän on suorittaa **yksinkertainen** ja **helposti määriteltävä** tehtävä. Yhtenä tälläisenä voisi olla esimerkiksi käyttäjän rekisteröimiseen ja käyttäjätietojen hakemiseen tehty palvelu. Jokainen palvelu pyörii omassa prosessissaan ja kommunikoi toisten mikropalvelujen kautta (yleensä) HTTP:n päälle rakennetun API:n kautta. 

### Mitä mikropalveluita kehittäessä tulee ottaa huomioon 
* Täytyy toimia itsenäisesti
  - Jokainen palvelu pitää pystyä julkaisemaan yksinään
* Löyhästi kytketty / korkea koheesio
  - Jokaisen palvelun pitäisi suorittaa vain yksi tehtävä 
* Voi sisältää muita alapuolella olevia palveluita
    - Mikropalvelun tehtävä voi olla kahden tai useamman mikropalvelun yhdistäminen
* Automatisointi 
  - Testausautomaatio ja CI/CD putki julkaisun nopeuttamiseksi
* Palveluiden välinen viestintä
    - Kuinka palvelut viestivät keskenään

Mikropalveluiden yksittäinen suuri etu on se, jos yksi osa pitää päivittää tai korjata, ei se vaikuta muuhun järjestelmään. Tämä on hyvä varsinkin tärkeissä palveluissa joiden täytyy olla kokoajan saatavilla.

### Milloin mikropalveluita kannattaa käyttää
* Laajat applikaatiot jotka vaativat nopean julkaisusyklin
* Monimutkaiset ja skaalautumista vaativat applikaatiot 
* Organisaatio joka koostuu pienistä kehittäjätiimeistä 

## Mitä tässä **EI** käsitelty
Mikropalveluarkkitehtuuri on laaja ja syvä suo jossa on paljon opittavaa. Kaikkia asioita ei kerkeä muutamassa tunnisa käymään, joten tässä pieni lista asioita mitä kannattaa lähteä tutkimaan jos mikropalvelut kiinnostavat. 

* Dynamic service discovery
* Data Synchronization
* Data Staleness
* Monitoring
* Logging 
* Message queues
  
## Demo


# Docker
Docker on ohjelmisto jonka avulla voit virtualisoida ohjelmistoja käyttöjärjestelmätasolla. Dockerin avulla voit ajaa eri sovelluksia "konteissa", jotka toimivat käyttöjärjestelmän käyttäjäavaruudessa. Konteissa toimivat ohjelmat eivät näe muita ohjelmia ja näkevät pelkästään kullekkin kontille määritellyt resurssit. Kontteja käytetään usein mikropalveluiden yhteydessä.

#### Virtualisointi vs säiliöinti
![Säiliöinti vs virtualisointi](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-935x500.png)


## Konttien edut
Yleisesti ottaen kontit ovat kevyempiä suorittaa kuin kokonaiset virtuaalikoneet, koska konttien ei tarvitse suorittaa omaa käyttöjärjestelmää.

### Virtuaalikone vs. kontti: 
| Virtuaalikoneet | Kontit |
| --- | --- |
Raskaampi	| Kevyempi
Rajattu suorituskyky |	Natiivi suorituskyky
Virtuaalikone suorittaa oman käyttöjärjestelmänsä| Kontit jakavat yhden käyttöjärjestelmän
Rautatason virtualisointi	|Käyttöjärjestelmätason virtualisointi
Käynnistysaika < 30s	| Käynnistysaika < 2s
Täysin eristetty, turvallisempi	| Prosessitason eristys, ei välttämättä niin turvallinen

Täytyy myös ottaa huomioon että yleensä kontit ajetaan virtuaalikoneen päällä. 

## Dockerfile

Dockerfile on tiedosto joka ohjeistaa Dockerille kuinka docker image tulee rakentaa. 

[Demossa käytetty .dockerfile ohjeeksi](https://github.com/TemeASD/microservice_arch_test/blob/master/blogservice/Dockerfile)

### .dockerignore
.dockerignore tiedosto on rakenteeltaan ja toiminnaltaan kuten .gitignore. Siihen sisällytetään tiedostot ja kansiorakenteet joita ei haluta docker imageen mukaan. 

## Docker Compose 
Lorem ipsum jne jne jne 

## Mitä tässä **EI** käsitelty
* Orkestraattori
* Ja jotain muuta.


# Tehtävä
Tee demon kanssa harmoniassa toimiva mikropalvelu, jolla käyttäjä voi kirjoittaa kommentteja blogikirjoituksen alle (Tälle UI valmiina). Huomioi ratkaisuissasi että samaa mikropalvelua pitäisi voida käyttää myös esimerkiksi käyttäjän kommentoimiseen (tätä siis **ei** tarvitse implementoida).  Mikropalvelun pitäisi tarjota vähintään CREATE ja READ reitit, ja toimia täysin itsenäisesti. 

Esimerkin frontendiin on toteutettu blogikirjoitusten reititys seuraavasti. 

* Blogin kommentointi
    * GET `/api/blog/comment`
    * POST `/api/blog/:id/comment`
  
Käytä haluamaasi ohjelmointikieltä ja tietokantapalvelua.

Saatuasi mikropalvelusi toimimaan, tee sille Dockerfile tiedosto ja buildaa siitä docker image. 
Testaa toiminta. 
