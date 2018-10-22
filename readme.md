# Sample app showing how microservice architecture works. 

At the moment its just a prototype combining a gateway (gatewayservice), user service (userservice) and blog service (blogservice) for registering and authenticating users with JWT for the hypothetical "Yet Another Blog App" to come. 

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


## Problems
Architecture doesnt handle authorization well at all. Doesnt do any check on backend and just trusts the client to be authorized to do anything.

Also there are no checks or methods in place to update the data in blogservice if something is changed in userservice or vice versa. 

