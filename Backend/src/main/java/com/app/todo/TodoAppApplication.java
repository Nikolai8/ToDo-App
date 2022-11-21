package com.app.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoAppApplication {

	// http://localhost:8080/swagger-ui/index.html
	// http://localhost:8080/v3/api-docs/

	// https://spring.io/guides/gs/accessing-data-mysql/

	public static void main(String[] args) {
		SpringApplication.run(TodoAppApplication.class, args);
	}
}
