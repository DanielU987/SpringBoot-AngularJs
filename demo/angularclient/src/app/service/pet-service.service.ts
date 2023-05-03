import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../pet/pet';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {

  private petsUrl: string;

  constructor(private http: HttpClient) {
    this.petsUrl = 'http://localhost:8080/pets';
  }

  public findAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  public save(pet: Pet) {
    console.log(pet)
    return this.http.post<Pet>(this.petsUrl, pet);
  }
}