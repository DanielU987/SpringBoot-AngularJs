import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: 'pets', component: PetListComponent },
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'addpet', component: PetFormComponent },
  { path: 'editpet/:id', component: EditPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
