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

### Eri mikropalveluarkkitehtuurityyppejä
Alla on muutamia eri malleja kuinka mikropalveluiden avulla mikropalvelusovelluksia voi muodostaa. Huomaathan että nämä ovat vain esimerkkejä, ja niitä voi yhdistellä oman mielensä mukaan. Allekirjoittaneen mielestä järkevin olisi **shared service** malli, jonka edessä olisi proxy/gateway jossa tapahtuu käyttäjien/API kutsujen autentikaatio sekä reititys.

#### Aggregator pattern

![Aggregator pattern](https://www.tutorialspoint.com/microservice_architecture/images/aggregator_pattern.jpg)

Asiakasohjelma pyytää dataa aggregatorilta, ja aggregator välittää  pyynnöt eteenpäin mikropalveluille. Vastaukset saatuaan aggregator yhdistää resursseja tarpeen mukaan ja lähettää lopputuloksen asiakasohjelmalle. 

#### Proxy pattern 
![Proxy pattern](https://www.tutorialspoint.com/microservice_architecture/images/proxy_pattern.jpg)

Proxy on variantti aggregator mallista. Proxyssä ei itsessään ole toimintalogiikkaa ja sen tehtävänä on lähettää ja vastaanottaa resursseja suoraan palveluille. Tätä mallia on käytetty materiaalien demossa.  

#### Chained pattern 
![Chained pattern](https://www.tutorialspoint.com/microservice_architecture/images/chained_pattern.jpg)

Asiakasohjelma on suoraan yhteydessä yhteen palveluun, ja palvelut ketjuttavat pyyntönsä palauttaen aina edeltävän palvelun vastauksen. Tästä ketjusta muodostuu lopullinen vastaus. 

Eräänä huonona puolena on se, että yksittäinen palvelu voi lukita koko suorituksen lisäten koko sovelluksen viivettä.


#### Shared resource pattern
![Shared resource pattern](https://www.tutorialspoint.com/microservice_architecture/images/shared_resource_pattern.jpg)

Usein käytetty malli jossa kutsut voidaan tehdä suoraan palvelulle, ja jokin palveluista voi olla proxy tai aggregator jonka kautta se kommunikoi useammalle eri palvelulle samaan aikaan.  

### Milloin mikropalveluita kannattaa käyttää
* Laajat sovellukset jotka vaativat nopean julkaisusyklin
* Monimutkaiset ja skaalautumista vaativat sovellukset 
* Organisaatio joka koostuu pienistä kehittäjätiimeistä 

## Mitä tässä **EI** käsitelty
Mikropalveluarkkitehtuuri on laaja ja syvä suo jossa on paljon opittavaa. Kaikkia asioita ei kerkeä muutamassa tunnisa käymään, joten tässä pieni lista asioita mitä kannattaa lähteä tutkimaan jos mikropalvelut kiinnostavat. 

* Dynamic service discovery
* Data Synchronization
* Data Staleness
* Monitoring
* Logging 
* Message queues
  

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


## Mitä tässä **EI** käsitelty
* Orkestraattori
* Ja jotain muuta.


# Tehtävä
Pyöräyttäkää demon kanssa Dockerissa toimiva mikropalvelu, jolla käyttäjä voi kirjoittaa kommentteja joko käyttäjän tai blogikirjoituksen alle. (Tälle UI valmiina) Sen pitäisi tarjota molemmille vähintään CREATE ja READ reitit, ja toimia täysin itsenäisesti. 

Esimerkin frontendiin on toteutettu blogikirjoitusten reititys seuraavasti. 

* Blogin kommentointi
    * GET `/api/blog/comment`
    * POST `/api/blog/:id/comment`
  
Käytä haluamaasi ohjelmointikieltä ja tietokantapalvelua. 