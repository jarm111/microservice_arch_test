# Sample app showing how microservice architecture works. 
## userservice
CRUD app for  creating and authenticating users

## Requirements
NodeJS and MariaDB (Docker-CE, Docker-Compose)

## Setup
### Regular installation
1. Clone the repository 
2. install NodeJS and database software of your choosing (MariaDB/MySQL).  
3. Create .env file
* It looks like this
  * DB_USER=root
  *  DB_PASSWORD=example
  * DB_DATABASE=userservice
  * DB_HOST=mariadb
  * DB_DIALECT=mysql
  * PORT=1234
  * JWT_SECRET=salaisuus'
4. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
5. Run SQL script from ./setup
6. Run the services with Node 
7. Be happy 

### Docker image
4. Check that the .env values are the same as in Dockerfile and docker-compose.yml
5. Open up a Powershell/CMD/Bash/Whatever and do `docker-compose up`
6. Go to the adminer webui and run the SQL scrip from ./setup
7. Be happy

## API documentation
* *< implies url like for example "localhost:1234"   
* Returns JSON data
    * `_id` mongodb default id 
    * `created_at` datetime
    * `title` String
    * `post` String
    * `userID` String
    * `user` String
* GET `*/api/blog`
    * Get all blogs
    * Returns array of blogs
* GET `*/api/blog/:id`
    * Get a blog by `_id`
    * Returns single blog
* POST `*/api/blog` 
    * expects json body 
        * `title`    
        * `post`,
        * `userID`
        * `user` displayname (nickname, full name or something like that)
    * Posts a blog


## Problems
Architecture doesnt handle authorization well at all. 
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO
Use the same .env file for the app, Dockerfile and docker-compose.yml