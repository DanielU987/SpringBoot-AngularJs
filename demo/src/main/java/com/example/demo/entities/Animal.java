package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Pets")
public class Animal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String code;
    private String type;
    private String color;
    private String country;
    
    public Animal() {

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

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    @Column(name = "type", nullable = false)
    public String getType() {
        return type;
    }
    @Column(name = "code", nullable = false)
    public String getCode() {
        return code;
    }
    @Column(name = "color", nullable = false)
    public String getColor() {
        return color;
    }
    @Column(name = "country", nullable = false)
    public String getCountry() {
        return country;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setType(String type) {
        this.type = type;
    }

    public void setCode(String code) {
        this.code = code;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setCountry(String country) {
        this.country = country;
    }


    
    @Override
    public String toString() {
        return "Animal{" + "id=" + id + ", name=" + name + ", code=" + code +"," + "color=" + color +", country=" + country +'}';
    }
}
