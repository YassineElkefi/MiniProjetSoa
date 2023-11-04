import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadreAdminService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }
  getAllCadres() {
    return this.http.get(`${this.baseUrl}/cadres`);
  }
  addCadre(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/ajoutcadre`,data);
  }

  updateCadre(id:any, editedEnseignant:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/updatecadreadmin/${id}`, editedEnseignant);
  }

  getCadreById(enseignantId:any){
    return this.http.get<any>(`${this.baseUrl}/cadre/${enseignantId}`);
    }
  deleteCadre(id:number){
    return this.http.delete(`${this.baseUrl}/deletecadre/${id}`);
  }
}
