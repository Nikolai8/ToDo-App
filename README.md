# ToDo-App description
## React Frontend


## Spring Boot Backend

### How to start
1. open docker (desktop)
2. open a terminal in the backend

    - enter -> docker compose up
3. open a second terminal in the backend

    - enter -> mvn spring-boot:run

You can now use the SWAGGER UI to CRUD Todo Items into the DB
		
    // http://localhost:8080/swagger-ui/index.html
	// http://localhost:8080/v3/api-docs/

	// https://spring.io/guides/gs/accessing-data-mysql/

### Unimportant line
> docker run --name todoDB -e MYSQL_ROOT_PASSWORD=******** -d -e MYSQL_DATABASE=todo -p 3307:3306 mysql:8.0.31