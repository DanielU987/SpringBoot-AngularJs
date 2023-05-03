import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../service/pet-service.service';
import { Pet } from '../pet/pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {

  pet: Pet = new Pet;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private PetService: PetService) {
    
  }
  newPet(): void {
    this.pet = new Pet();
  }

  save() {
    this.PetService
    .createPet(this.pet).subscribe(data => {
      console.log(data)
      this.pet = new Pet();
      this.gotoPetList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.save();    
  }

  gotoPetList() {
    this.router.navigate(['/pets']);
  }
}