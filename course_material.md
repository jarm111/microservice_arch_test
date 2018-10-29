# WebSK2: Electric Boogaloo

# Mikropalvelut ja Docker

# Mikropalvelut ja palvelukeskeinen arkkitehtuuri webapplikaatioissa

## Service-oriented architecture  
SOA (Service-oriented architecture) eli palvelukeskeinen arkkitehtuuri on ohjelmistotekniikassa käytetty arkkitehtuuritason suunnittelutapa, jolla eri tietojärjestelmien toiminnot ja prosessit on suunniteltu toimimaan itsenäisinä, avoimina ja joustavina palveluina. Näitä palveluita tulisi pystyä aina käyttämään avoimien standardien rajapintojen kautta. 

Mikropalveluarkkitehtuurissa jokainen mikropalvelu onkin tavallaan osa SOAa, ja yksittäinen mikropalvelu toimii kuten yksittäinen palvelu SOAssa.

Lisää luettavaa aiheesta
* [Introduction to SOA](https://www.ibm.com/support/knowledgecenter/en/SSMQ79_9.5.1/com.ibm.egl.pg.doc/topics/pegl_serv_overview.html)
* [SOA vs. Microservices](https://dzone.com/articles/microservices-vs-soa-2)


## Mikropalvelut 
Mikropalveluarkkitehtuurissa verkkosovelluksen backend koostuu mahdollisimman pieniksi palasiksi paloitelluista palveluista joita on helppo kehittää ja käyttää toisista mikropalveluista riippumatta.  Kunkin palvelun tehtävän on suorittaa **yksinkertainen** ja **helposti määriteltävä** tehtävä. Yhtenä tälläisenä voisi olla esimerkiksi käyttäjän rekisteröimiseen ja käyttäjätietojen hakemiseen tehty palvelu. 

Mitä mikropalveluita kehittäessä tulee ottaa huomioon 

* Toimii itsenäisesti
  - Jokainen palvelu pitää pystyä julkaisemaan yksinään
* Löyhästi kytketty / korkea koheesio
  - Jokaisen palvelun pitäisi suorittaa vain yksi tehtävä 
* Voi sisältää muita alapuolella olevia palveluita
* Automatisointi 
  - Testausautomaatio ja devops julkaisun nopeuttamiseksi

## Monolotiitti- ja mikroarkkitehtuurin erot

## Mitä tässä **EI** käsitelty

Mikropalveluarkkitehtuuri on laaja ja syvä suo jossa on paljon opittavaa. Kaikkia asioita ei kerkeä muutamassa tunnisa käymään, joten tässä pieni lista asioita mitä kannattaa lähteä tutkimaan jos mikropalvelut kiinnostavat. 

* Dynamic service discovery
* Data Synchronization
* Data Staleness
* Monitoring
* Logging 

## Demo


# Docker

Docker on ohjelmisto jonka avulla voit virtualisoida ohjelmia käyttöjärjestelmätasolla. Dockerin avulla voit ajaa eri sovelluksia "konteissa", jotka toimivat käyttöjärjestelmän "user spacessa". Konteissa toimivat ohjelmat eivät näe muita ohjelmia ja näkevät pelkästään kullekkin kontille määritellyt resurssit. Kontteja käytetään usein mikropalveluiden yhteydessä

#### Virtualisointi vs säiliöinti
![Säiliöinti vs virtualisointi](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-935x500.png)


## Konttien edut

Yleisesti ottaen kontit ovat kevyempiä suorittaa kuin kokonaiset virtuaalikoneet, koska konttien ei tarvitse suorittaa omaa käyttöjärjestelmää. Konttien luominen on myös no
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

## Tehtävä

Pyöräyttäkää demon kanssa Dockerissa toimiva mikropalvelu, jolla käyttäjä voi kirjoittaa kommentteja joko käyttäjän tai blogikirjoituksen alle. Sen pitäisi tarjota molemmille vähintään CREATE ja READ reitit, ja toimia täysin itsenäisesti. 

Käytä haluamaasi ohjelmointikieltä ja tietokantapalvelua. 