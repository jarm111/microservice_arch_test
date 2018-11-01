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