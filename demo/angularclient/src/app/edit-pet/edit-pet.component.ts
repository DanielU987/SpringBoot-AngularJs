import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route, ParamMap } from '@angular/router';
import { PetService } from '../service/pet-service.service';
import { Pet } from '../pet/pet';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  pet!: Pet;
  petId!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PetService: PetService) {

  }

  ngOnInit() {
    this.pet = new Pet();
    this.petId = this.route.snapshot.params['id'];
    this.PetService.getPet(this.petId).subscribe(data => {
      console.log(data)
      this.pet = data;
    }, error => console.log(error));
  }

  updatePet() {
    this.PetService.updatePet(this.petId, this.pet)
      .subscribe(data => {
        console.log(data);
        this.pet = new Pet();
        this.gotoPetList();
      }, error => console.log(error));
  }

  gotoPetList() {
    this.router.navigate(['/pets']);
  }


  onSubmit() {
    this.updatePet();
  }

}