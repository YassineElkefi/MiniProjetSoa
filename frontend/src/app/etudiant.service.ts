import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }

  getAllEtudiants() {
    return this.http.get(`${this.baseUrl}/etudiants`);
  }
  addEtudiant(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/ajoutetudiant`,data);
  }

  updateEtudiant(id:any, editedEtudiant:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/updateetudiant/${id}`, editedEtudiant);
  }

  getEtudiantById(etudiantId:any){
    return this.http.get<any>(`${this.baseUrl}/etudiant/${etudiantId}`);
    }
  deleteEtudiant(id:number){
    return this.http.delete(`${this.baseUrl}/deleteetudiant/${id}`);
  }
}
