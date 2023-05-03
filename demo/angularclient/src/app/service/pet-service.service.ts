import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../pet/pet';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {
   i = 0;
  private petsUrl: string;
  pets: Pet[] = [];
  constructor(private http: HttpClient) {
    this.petsUrl = 'http://localhost:8080/pets';
  }

  public getPetsList(): Observable<any> {
    return this.http.get(`${this.petsUrl}`);
  }

  public createPet(employee: Object): Observable<Object> {
    return this.http.post(`${this.petsUrl}`, employee);
  }


  public getPet(id: number): Observable<any> {
    
    return this.http.get(`${this.petsUrl}/${id}`);
  }
  
  public updatePet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.petsUrl}/${id}`, value);
  }
}