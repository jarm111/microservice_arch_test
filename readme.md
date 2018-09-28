# Sample app showing how microservice architecture works. 

At the moment its just a prototype combining a gateway (gatewayservice) and a user service (userservice) for registering and authenticating users with JWT for the hypothetical app to come. 

## Requirements
NodeJS, MySQL/MariaDB and MongoDB (I'm using mlab free tier for this)

## Setup
1. Clone the repository 
2. install NodeJS and database software of your choosing. 
3. Throw the SQL script to your database from the relevant microservice. 
4. Create .env file
* It looks like this
    * DB_USER=
    * DB_PASSWORD=
    * DB_DATABASE=
    * DB_HOST_DEV=
    * DB_DIALECT=mysql
    * PORT=
    * JWT_SECRET=
    * URL= (for mongodb @blogservice)
* or for mongodb 
5. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
6. Run the services with Node 
7. Be happy 


 
