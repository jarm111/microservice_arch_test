# Sample app showing how microservice architecture works. 
## blogservice
CRUD app for posting and reading blogs

## Requirements
NodeJS and MongoDB (Docker-CE)

## Setup
### Regular installation
1. Clone the repository 
2. install NodeJS and database software of your choosing.  
3. Create .env file
* It looks like this
    * PORT=
        * Port which the the application will bind itself to
    * URL=
        * URL to mongodb instance
1. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
2. Run the services with Node 
3. Be happy 

### Docker image
4. Check that the .env values are the same as in Dockerfile
5. Open up a Powershell/CMD/Bash/Whatever and do `docker build -t "your tag here" .`
6. `docker run -p PORT:PORT "your tag here"`
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