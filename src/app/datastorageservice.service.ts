import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorageserviceService {
  private getUsers= 'http://localhost:8080/api/users';
  private createUserUrl = 'http://localhost:8080/api/users/login';
  private  userRegUrl = 'http://localhost:8080/api/users/register';
  user: any;

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.userRegUrl}`, user);
  }
  userLogin(user: any): Observable<any> {
    return this.http.post<any>(`${this.createUserUrl}`, user);
  }
  getUser(user: any): Observable<any> {
    return this.http.get<any>(`${this.getUsers}`, user);
  }
}
