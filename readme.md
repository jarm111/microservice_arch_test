# Sample app showing how microservice architecture works. 

At the moment its just a prototype combining a gateway (gatewayservice), user service (userservice) and blog service (blogservice) for registering and authenticating users with JWT for the hypothetical "Yet Another Blog App" to come. 
## Further documentation
`readme.md` files are now inside the respective folders. 

## Problems
Architecture doesnt handle authorization well at all. Doesnt do any check on backend and just trusts the client to be authorized to do anything.

Also there are no checks or methods in place to update the data in blogservice if something is changed in userservice or vice versa. 

## Presentation about the materials 
https://www.dropbox.com/s/36xa3yty4uiexq7/Dockermikropalvelut.pdf?dl=1 