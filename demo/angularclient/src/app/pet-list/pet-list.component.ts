import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet';
import { PetService } from '../service/pet-service.service';
import {Location} from '@angular/common'; 
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private PetService: PetService) {
  }
  

  ngOnInit() {
    this.PetService.findAll().subscribe(data => {
      
      this.pets = data;
      console.log(data)
    });
  }
}
