import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }
  getAllEnseignants() {
    return this.http.get(`${this.baseUrl}/Enseignant`);
  }
  addEnseignant(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/save`,data);
  }

  updateEnseignant(id:any, editedEnseignant:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`, editedEnseignant);
  }

  getEnseignantById(enseignantId:any){
    return this.http.get<any>(`${this.baseUrl}/EnseignantById/${enseignantId}`);
    }
  deleteEnseignant(id:number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
