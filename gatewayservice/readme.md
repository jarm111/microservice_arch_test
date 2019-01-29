<<<<<<< HEAD
# Sample app showing how microservice architecture works

## Gatewayservice

At the moment its just a prototype combining a gateway (gatewayservice), user service (userservice) and blog service (blogservice) for registering and authenticating users with JWT for the hypothetical "Yet Another Blog App" to come. 

## Requirements

NodeJS and MongoDB (I'm using mlab free tier for this)

## Setup

### Regular installation

1. Clone the repository
2. install NodeJS and database software of your choosing.  
3. Create .env file
   * It looks like this
     * PORT=port of your choosing*
     * URL=for mongodb
4. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
5. Run the services with Node
6. Be happy

## Problems

Architecture doesnt handle authorization well at all.
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO

Use the same .env file for Dockerfile and docker-compose.yml
=======
# Sample app showing how microservice architecture works. 
## Gateway service
Gateway 

## Requirements
NodeJS

## Setup
### Regular installation
1. Clone the repository 
2. install NodeJS.  
3. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
4. Run the service with Node `nodemon index.js`
5. Be happy 

### Docker image, no clue yet, not implemeted

## Documentation

This service creates a gateway for a client to make HTTP requests to other microservices. Configs at `./config/gateway.config.yml` 

## Problems
Architecture doesnt handle authorization well at all. 
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO
Dockerize.s
>>>>>>> 248f60d5cf698a6835b5c556b0d5545dc400ae01
