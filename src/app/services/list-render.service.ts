import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root',
})
export class ListRenderService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getById(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  delete(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
}
