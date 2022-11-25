package com.app.todo;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

// http://localhost:8080/swagger-ui/index.html
// http://localhost:8080/v3/api-docs/

//CRUD Controller class
//Create Read Update Delete

/*
@RestController
@Controller
@RequestMapping("/todos")
public class ApiController {

    // internal list of todo items
    @Autowired
    private ArrayList<TodoItem> items = new ArrayList<TodoItem>();

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String createAndAddTodoItem (@RequestParam String name) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        TodoItem item = new TodoItem(name);
        items.add(item);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody List<TodoItem> getTodoItems() {
        // This returns a JSON or XML with the users
        return items;
    }*/
    
@RestController
@Controller
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/todos")
public class ApiController {

    // internal list of todo items
    @Autowired
    private TodoRepositiory todoRepo;

    /*@Operation(summary = "Creates a Todo Item with path variable name and default priority of 2")
    @ApiResponses(value = 
    {
        @ApiResponse(responseCode = "201", description = "Item has been created" , content = @Content)
    })
    @ResponseStatus(HttpStatus.CREATED)*/
    @PostMapping(path="/") // Map ONLY POST Requests
    public @ResponseBody String createAndAddTodoItem (@RequestParam String name) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        TodoItem item = new TodoItem();
        item.setTodo(name);
        todoRepo.save(item);
        return "Created and Saved a new item";
    }
/* 
    @PostMapping(path="/") 
    public @ResponseBody String createTodoItem (@RequestParam TodoItem item) {
        todoRepo.save(item);
        return "Saved a new item";
    }
*/
    @GetMapping(path="/")
    public @ResponseBody Iterable<TodoItem> getTodoItems() {
        // returns a JSON or XML with the users
        return todoRepo.findAll();
    }

    @GetMapping(path="/{name}")
    public @ResponseBody java.util.Optional<TodoItem> getTodoItemsById(@PathVariable String name) {

        return todoRepo.findById(name);
        //return todoRepo.findOne(id);
    }
 /* 
    @PutMapping(path="/{id}")
    public @ResponseBody String updateTodoItem (@RequestBody TodoItem item, @PathVariable int newPrio ){
        item.setPriority(newPrio);
        todoRepo.save(item);
        return "Item updated";
    }
    */
    @PutMapping(path="/")
    public @ResponseBody String updateTodoItem (@RequestBody TodoItem item){
        todoRepo.save(item);
        return "Item updated";
    }

   /*
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="/")
    public @ResponseBody String deleteTodoItem (@RequestParam String name){
        todoRepo.deleteById(name); //name = id
        return "Item deleted";
    }
*/
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="/{name}")
    public @ResponseBody String deleteTodoItemById (@PathVariable String name){
        todoRepo.deleteById(name);
        return "Item deleted";
    }
 
    //@ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path="/")
    public @ResponseBody String deleteTodoItemByName (@RequestParam String name){
        try{
            // create the mysql database connection
            String myDriver = "com.mysql.cj.jdbc.Driver";
            String myUrl = "jdbc:mysql://localhost:3307/todo";
            Class.forName(myDriver);
            Connection conn = DriverManager.getConnection(myUrl, "root", "todouser");

            // create the mysql delete statement.
            //String query = "DELETE FROM todo.todo_item WHERE todo = \"?\""; doesn't work tested by
            String query = "DELETE FROM todo.todo_item WHERE todo IN (\"" + name + "\");";  // Marc
            System.out.println(query);                                              // and Nikolai
            PreparedStatement preparedStmt = conn.prepareStatement(query);
            //preparedStmt.setString(1, name);
            
            // execute the preparedstatement
            preparedStmt.execute();

            conn.close();
        }catch (Exception e) {
            System.err.println("Got an exception! ");
            System.err.println(e.getMessage());
        }        
        
        //todoRepo.deleteById(name);
        return "Item deleted";
    }
}
