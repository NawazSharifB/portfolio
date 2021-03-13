import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  uploadImage(image: FormData): Observable<any> {
    console.log('upload image from service');
    return this.http.post(`${environment.url}/upload-image`, image);
  }

  addProject(project: any): Observable<any> {
    return this.http.post(`${environment.url}/add-project`, project);
  }
}
