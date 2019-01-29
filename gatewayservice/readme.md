# Sample app showing how microservice architecture works

## Gatewayservice

At the moment its just a prototype combining a gateway (gatewayservice), user service (userservice) and blog service (blogservice) for registering and authenticating users with JWT for the hypothetical "Yet Another Blog App" to come. 

## Requirements

NodeJS and MongoDB (I'm using mlab free tier for this)

## Setup

### Regular installation

1. Clone the repository
2. install NodeJS and database software of your choosing.  
3. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
4. Run the services with Node
5. Be happy

## Problems

Architecture doesnt handle authorization well at all.
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO

Use the same .env file for Dockerfile and docker-compose.yml