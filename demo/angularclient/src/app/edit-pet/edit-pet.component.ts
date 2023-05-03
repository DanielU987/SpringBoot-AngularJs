import { Component } from '@angular/core';
import { ActivatedRoute, Router, Route, ParamMap } from '@angular/router';
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
  petId = 0;
  ngOnInit() {
    
    this.PetService.findAll().subscribe(data => {
      console.log(data)
      this.pets = data;
      
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      
      this.petId = parseInt(paramMap.get('id')!)-1
      console.log(this.petId)
    })
  }
  
}