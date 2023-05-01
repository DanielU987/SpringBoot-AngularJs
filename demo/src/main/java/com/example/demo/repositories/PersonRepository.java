package com.example.demo.repositories;

import com.example.demo.entities.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long>{}
