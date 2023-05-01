package com.example.demo;

import com.example.demo.entities.Person;
import com.example.demo.repositories.PersonRepository;
import java.util.stream.Stream;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.yaml.snakeyaml.util.ArrayUtils;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner init(PersonRepository userRepository) {
        return args -> {

            String array1[][] = { { "Mustikas", "202211151535", "Cat", "Black", "Estonia" },
                    { "Roy", "202211151536", "Dog", "Brown", "Latvia" },
                    { "Charles", "202211151536", "Horse", "White", "Norway" } };
            for (String[] array2 : array1) {
                Person user = new Person(array2[0], array2[1], array2[2], array2[3], array2[4]);
                userRepository.save(user);
            }

            userRepository.findAll().forEach(System.out::println);
        };
    }
}
//to start angular $ ng serve --open