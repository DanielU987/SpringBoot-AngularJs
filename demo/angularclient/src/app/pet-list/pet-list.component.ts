import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet';
import { PetService } from '../service/pet-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets!: Observable<Pet[]>;

  constructor(private PetService: PetService,private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pets = this.PetService.getPetsList();
  }


  updatePet(id: number){
    this.router.navigate(['edit', id]);
  }
}
