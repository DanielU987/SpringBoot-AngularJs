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

  pet: Pet;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private PetService: PetService) {
    this.pet = new Pet();
  }

  onSubmit() {
    this.PetService.save(this.pet).subscribe(result => this.gotoPetList());
  }

  gotoPetList() {
    this.router.navigate(['/pets']);
  }
}