# WebSK2: Electric Boogaloo

# Mikropalvelut ja Docker

# Mikropalvelut 

Mikropalveluarkkitehtuurissa backend koostuu mahdollisimman pieniksi palasiksi tehdyistä palveluista joita on helppo kehittää ja käyttää toisista mikropalveluista riippumatta.  Kunkin palvelun tehtävän on suorittaa **yksinkertainen** ja **helposti määriteltävä** tehtävä. Yhtenä tälläisenä voisi olla esimerkiksi käyttäjän rekisteröimiseen ja käyttäjätietojen hakemiseen tehty palvelu. 

## Mik
## Monolotiitti- ja mikroarkkitehtuurin erot

## Demo

## Tehtävä


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

## Dockerfile

## Tehtävä

