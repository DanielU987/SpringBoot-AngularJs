package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Animal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String name;
    private final String code;
    private final String type;
    private final String color;
    private final String country;
    
    public Animal() {
        this.name = "";
        this.code = "";
        this.type = "";
        this.color = "";
        this.country = "";
    }
    
    public Animal(String name ,String code,String type,String color,String country) {
        this.name = name;
        this.code = code;
        this.type = type;
        this.color = color;
        this.country = country;
    }

    public long getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    public String getType() {
        return type;
    }


    public String getCode() {
        return code;
    }
    public String getColor() {
        return color;
    }
    public String getCountry() {
        return country;
    }


    
    @Override
    public String toString() {
        return "Animal{" + "id=" + id + ", name=" + name + ", code=" + code +"," + "color=" + color +", country=" + country +'}';
    }
}
