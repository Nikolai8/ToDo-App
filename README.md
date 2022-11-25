# ToDo-App description
## React Frontend


## Spring Boot Backend
### How to start the application
- Start MySQL DB:
1. open docker (desktop)
2. open a terminal and go into the backend folder
3. execute ,,docker compose up” 

- Start the Server:
1. open the project in Maven
2. start the server with ,,mvn spring-boot:run”
3. go to http://localhost:8080/
4. use the password “123456” to sign in or find it in the js

You can now use the SWAGGER UI to CRUD Todo Items into the DB
		
    // http://localhost:8080/swagger-ui/index.html
	// http://localhost:8080/v3/api-docs/

	// https://spring.io/guides/gs/accessing-data-mysql/

### Unimportant line
> docker run --name todoDB -e MYSQL_ROOT_PASSWORD=******** -d -e MYSQL_DATABASE=todo -p 3307:3306 mysql:8.0.31