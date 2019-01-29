# Sample app showing how microservice architecture works

## blogservice

CRUD app for posting and reading blogs

## Requirements

NodeJS and MongoDB (Docker-CE)

## Setup

### Regular installation

1. Clone the repository 
2. install NodeJS and database software of your choosing.  
3. Create .env file
<<<<<<< HEAD
   * It looks like this
      * PORT=port of your choosing*
      * URL=for mongodb
=======
    * PORT=
        * Port which the the application will bind itself to
    * URL=
        * URL to mongodb instance
>>>>>>> 248f60d5cf698a6835b5c556b0d5545dc400ae01
4. Open up a Powershell/CMD/Bash/Whatever and do `npm install`
5. Run the services with Node
6. Be happy

### Docker image

4. Check that the .env values are the same as in Dockerfile
5. Open up a Powershell/CMD/Bash/Whatever and do `docker build -t "your tag here" .`
6. Run the image with a command `docker run -p PORT:PORT "your tag here"`
   * POST must match the port of the .env file
7. Be happy

## API documentation
<<<<<<< HEAD

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
    * `post`
    * `userID`
    * `user` displayname (nickname, full name or something like that)
  * Posts a blog
=======
* *< implies url like for example `localhost:1234`
* Example: `localhost:1234/api/blog`
* API returns JSON data
    * `_id` mongodb default id 
    * `created_at` datetime
    * `title` String
    * `post` String
    * `userID` String
    * `user` String
* GET `*/api/blog`
    * Get all blogs
    * Returns array of blog objects
* GET `*/api/blog/:id`
    * Get a blog by `_id`
    * Returns single blog object
* POST `*/api/blog` 
    * expects json body 
        * `title`    
        * `post`,
        * `userID`
        * `user` displayname (nickname, full name or something like that)
    * Posts a blog

>>>>>>> 248f60d5cf698a6835b5c556b0d5545dc400ae01

## Problems

Architecture doesnt handle authorization well at all. 
Doesnt do any check on backend and just trusts the client to be authorized to do anything.

## TODO

Use the same .env file for the app, Dockerfile and docker-compose.yml