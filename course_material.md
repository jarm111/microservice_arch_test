# WebSK2: Electric Boogaloo

# Mikropalvelut ja Docker

# Mikropalvelut webapplikaatioissa
[Tunnilla näytetty presis](https://www.dropbox.com/s/36xa3yty4uiexq7/Dockermikropalvelut.pdf?dl=1)
## Service-oriented architecture  
SOA (Service-oriented architecture) eli palvelukeskeinen arkkitehtuuri on ohjelmistotekniikassa käytetty arkkitehtuuritason suunnittelutapa, jolla eri tietojärjestelmien toiminnot ja prosessit on suunniteltu toimimaan itsenäisinä, avoimina ja joustavina palveluina. Näitä palveluita tulisi pystyä aina käyttämään avoimien standardien rajapintojen kautta. 

Mikropalveluarkkitehtuurissa jokainen mikropalvelu onkin tavallaan palveluorientoituneen arkkitehtuurin palvelu. 

Lisää luettavaa aiheesta
* [Introduction to SOA](https://www.ibm.com/support/knowledgecenter/en/SSMQ79_9.5.1/com.ibm.egl.pg.doc/topics/pegl_serv_overview.html)
* [SOA vs. Microservices](https://dzone.com/articles/microservices-vs-soa-2)


## Mikropalvelut 
Mikropalveluarkkitehtuurissa verkkosovelluksen backend koostuu mahdollisimman pieniksi palasiksi paloitelluista palveluista joita on helppo kehittää ja käyttää toisista mikropalveluista riippumatta.  Kunkin palvelun tehtävän on suorittaa **yksinkertainen** ja **helposti määriteltävä** tehtävä. Yhtenä tälläisenä voisi olla esimerkiksi käyttäjän rekisteröimiseen ja käyttäjätietojen hakemiseen tehty palvelu. Jokainen palvelu pyörii omassa prosessissaan ja kommunikoi toisten mikropalvelujen kautta (yleensä) HTTP:n päälle rakennetun API:n kautta. Mikropalvelut voivat käyttää keskinäiseen viestintäänsä käytännössä mitä tahansa protokollaa. 

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
* Sovelluksessa on selkeitä yksittäisiä osia jotka vaativat spesifejä teknologiota joita ei muualla tarvita 

### Milloin mikropalveluita ei kannata käyttää
* Pieni kehitystiimi
* Jos sen käytölle ei ole mitään hyvää syytä
* Arkkitehtuuri on yksinkertainen
* Ei tarvetta polyglotismille
    

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

Kontin sisältö koostuu koko ajon aikaisesta ympäristöstä. Konttiin pakataan applikaatio, kaikki sen riippuvuudet, kirjastot, binäärit, sekä konfiguraatiotiedostot. 

#### Virtualisointi vs säiliöinti
![Säiliöinti vs virtualisointi](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-935x500.png)


## Konttien edut
Yleisesti ottaen kontit ovat kevyempiä suorittaa kuin kokonaiset virtuaalikoneet, koska konttien ei tarvitse suorittaa omaa käyttöjärjestelmää.

### Virtuaalikone vs. kontti: 
| Virtuaalikoneet | Kontit |
| --- | --- |
Raskaampi	| Kevyempi
Virtuaalikone suorittaa oman käyttöjärjestelmänsä| Kontit jakavat yhden käyttöjärjestelmän
Rautatason virtualisointi	|Käyttöjärjestelmätason virtualisointi
Käynnistysaika < 30s	| Käynnistysaika < 2s
Täysin eristetty, turvallisempi	| Prosessitason eristys, ei välttämättä niin turvallinen
Vie enemmän levytilaa (>500mb) | Vie vain vähän levytilaa (>10mb)

Täytyy myös ottaa huomioon että yleensä kontit ajetaan virtuaalikoneen päällä. 

## Dockerfile

Dockerfile on tiedosto joka ohjeistaa Dockerille kuinka docker image tulee rakentaa. 

[Demossa käytetty .dockerfile ohjeeksi](https://github.com/TemeASD/microservice_arch_test/blob/master/blogservice/Dockerfile)

[Virallinen dokumentaatio](https://docs.docker.com/engine/reference/builder/)

### docker build ja run 
Applikaation saa pyörimään Dockerin sisälle näillä komennoilla

#### Esimerkki
* `sudo docker build -t blogservice .`
    - `build` Buildaa imagen
    - `-t tägi` Tägää imagen valitsemallasi nimellä
    - `.` <- Relatiivinen kansio jossa dockerfile sijaitsee 
* `sudo docker run -p 888:888 blogservice`
    - `run` Ajaa valitun palvelun
    - `-p PORT:PORT` Reitittää dockerin portin ulospäin 
  
### .dockerignore
.dockerignore tiedosto on rakenteeltaan ja toiminnaltaan kuten .gitignore. Siihen sisällytetään tiedostot ja kansiorakenteet joita ei haluta docker imageen mukaan. 

[Virallinen dokumentaatio](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
## Docker Compose 
Docker Compose on työkalu jonka avulla ajetaan useita Docker kontteja sisältäviä sovelluksia. 

[Asennusohjeet] (https://github.com/docker/compose/releases)

[Virallinen dokumentaatio](https://docs.docker.com/compose/compose-file/)

## Mitä tässä **EI** käsitelty
* Orkestraattori (Kubernetes, Docker Swarm)
* Edistyneemmät toiminnot
    * Verkon jako, paikalliseen tiedostojärjestelmään tallentaminen, jne
* Varmasti paljon muuta mitä ei tule mieleen

# Tehtävä
Tee demon kanssa harmoniassa toimiva mikropalvelu, esimerkiksi sellainen jolla käyttäjä voi kirjoittaa kommentteja blogikirjoituksen alle (tälle **EI OLE** UI:ta). Mikropalvelun pitäisi tarjota vähintään CREATE ja READ reitit, tallentaa dataa tietokantaan ja toimia täysin itsenäisesti. Tärkeää ei ole mikropalvelun monimutkaisuus tai laajuus, vaan se että palvelu on järkevä ja suorittaa vain yhden tehtäväkokonaisuuden.
    
Käytä haluamaasi ohjelmointikieltä ja tietokantapalvelua. 

Saatuasi mikropalvelusi toimimaan 
A) Tee sille **Dockerfile** ja kommentoi se, sekä buildaa **docker image**.
B) Tämän jälkeen lisää se gatewayservicen `gateway.config.yml` tiedostoon niin, että voit hakea palvelun resursseja gatewayn kautta. 
C) Yhdistä kaikki palvelut yhdeksi läjäksi Docker Composen avulla
