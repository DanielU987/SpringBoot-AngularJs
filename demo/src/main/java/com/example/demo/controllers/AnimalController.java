package com.example.demo.controllers;

import com.example.demo.entities.Animal;
import com.example.demo.repositories.AnimalRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    private final AnimalRepository petRepository;

    public AnimalController(AnimalRepository petRepository) {
        this.petRepository = petRepository;
    }

    @GetMapping("/pets")
    public List<Animal> getUsers() {
        return (List<Animal>) petRepository.findAll();
    }

    @PostMapping("/pets")
    void addUser(@RequestBody Animal pet) {
        petRepository.save(pet);
    }
}
