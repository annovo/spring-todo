package com.annovo.todo.repository;

import com.annovo.todo.data.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoRepository extends MongoRepository<ToDo, String> {
}
