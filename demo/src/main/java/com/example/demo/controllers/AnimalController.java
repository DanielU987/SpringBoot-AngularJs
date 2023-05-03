package com.example.demo.controllers;

import com.example.demo.entities.Animal;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositories.AnimalRepository;


import java.util.List;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class AnimalController {

    
    @Autowired
    private AnimalRepository petRepository;

    @GetMapping("/pets")
    public List<Animal> getAllEmployees() {
        return (List<Animal>) petRepository.findAll();
    }

    @GetMapping("/pets/{id}")
    public ResponseEntity<Animal> getEmployeeById(@PathVariable(value = "id") Long petId)
            throws ResourceNotFoundException {
        Animal pet = petRepository.findById(petId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + petId));
        return ResponseEntity.ok().body(pet);
    }

    @PostMapping("/pets")
    public Animal createEmployee(@Valid @RequestBody Animal pet) {
        return petRepository.save(pet);
    }

    @PutMapping("/pets/{id}")
    public ResponseEntity<Animal> updateEmployee(@PathVariable(value = "id") Long petId,
            @Valid @RequestBody Animal petDetails) throws ResourceNotFoundException {
        Animal pet = petRepository.findById(petId)
                .orElseThrow(() -> new ResourceNotFoundException("Animal not found for this id :: " + petId));

        pet.setName(petDetails.getName());
        pet.setType(petDetails.getType());
        pet.setCode(petDetails.getCode());
        pet.setColor(petDetails.getColor());
        pet.setCountry(petDetails.getCountry());
        final Animal updatedPet = petRepository.save(pet);
        return ResponseEntity.ok(updatedPet);
    }

}
