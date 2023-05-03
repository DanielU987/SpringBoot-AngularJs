import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetService } from './service/pet-service.service';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetFormComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }