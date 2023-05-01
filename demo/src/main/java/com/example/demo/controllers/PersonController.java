package com.example.demo.controllers;

import com.example.demo.entities.Person;
import com.example.demo.repositories.PersonRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

    private final PersonRepository userRepository;

    public PersonController(PersonRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<Person> getUsers() {
        return (List<Person>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody Person user) {
        userRepository.save(user);
    }
}
