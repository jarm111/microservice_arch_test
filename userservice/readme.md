# Sample app showing how microservice architecture works

## userservice

CRUD app for  creating and authenticating users

## Requirements

NodeJS and MariaDB (Docker-CE, Docker-Compose)

## Setup

### Regular installation

1. Clone the repository
2. install NodeJS and database software of your choosing (MariaDB/MySQL).  
3. Create .env file
   * DB_USER=
      * Database user
   * DB_PASSWORD=
      * Database password
   * DB_DATABASE=
      * Database name
   * DB_HOST=
      * Database host
      * If using docker, set this to `mariadb`
   * DB_DIALECT=mysql
   * PORT=
     * Port which the the application will bind itself to
   * JWT_SECRET=
     * String for JWT creation
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

* *< implies url like for example `localhost:1234`
* Example: `localhost:1234/api/auth/register`
* Returns JSON data object: `user` like this
  * `customer_id` user id
  * `firstName` datetime
  * `lastName` String
  * `email` String
* POST `*/api/auth/register`
  * Expects json body
    * `firstName`
    * `lastName`
    * `email`
    * `password`
  * Registers user
  * Returns jwtToken and `user`
* POST `*/api/auth/login`
  * Expects json body
    * `email`
    * `password`
  * Returns jwtToken and `user`
* GET `*/api/user/:id`
  * Get a user by `customer_id`
  * Returns single user object
* PATCH `*/api/user/:id`
  * Expects json body with data you want updated
    * `firstName`
    * `lastName`
    * `email`
    * `password`
    * Returns new `user`
* DELETE `*/api/user/:id`  
  * Deletes users by `customer_id`

## Problems

Architecture doesnt handle authorization well at all.
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO

Use the same .env file for the app, Dockerfile and docker-compose.yml