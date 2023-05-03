import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../service/pet-service.service';
import { Pet } from '../pet/pet';
@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent {

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
  pets: Pet[] = [];
  ngOnInit() {
    this.PetService.findAll().subscribe(data => {
      this.pets = data;
    });
  }
}
