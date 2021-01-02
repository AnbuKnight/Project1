import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private isloggedIn = false;
  private role: string;
  private id: number;
  private permissionsForRole = [];
  private permissionLoaded = false;
  @Output() IsUserLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  logOutUser() {
    this.isloggedIn = false;
    this.id = 0;
    this.role = '';
    this.permissionLoaded = false;
    this.permissionsForRole = [];
  }
  getfromJSON(username: string, password: string): Observable<any> {
    return this.getJSON().pipe(map(users => {
      let i = 0;
      while (i < users.length && !this.isloggedIn) {
        if (username === users[i].name && password === users[i].password) {
          this.isloggedIn = true;
          this.id = users[i].id;
          this.role = users[i].role;
          this.IsUserLoggedIn.emit(true);
        } else {
          this.isloggedIn = false;
          this.id = 0;
          this.role = '';
        }
        i++;
      }
      // this.isloggedIn = false;
      return [this.id, this.role];
    }));
  }
  public getJSON(): Observable<any> {
    let exception: any;
    const apiUrl = './assets/users.json';
    return this.http.get(apiUrl)
      .pipe(map((res: any) => res as USERS1[]));

  }
  getpersmissionfromJSON(role: string): Observable<any> {
    return this.getPermissionJSON().pipe(map(users => {
      let i = 0;
      while (i < users.length && this.permissionLoaded === false) {
        if (role === users[i].role) {
          this.permissionsForRole = users[i].permission;
          this.permissionLoaded = true;
        } else {
          this.permissionsForRole = [];
          this.permissionLoaded = false;
        }
        i++;
      }
      return this.permissionsForRole;
    }));
  }
  public getPermissionJSON(): Observable<any> {
    const apiUrl = './assets/permissions.json';
    return this.http.get(apiUrl)
      .pipe(map((res: any) => res as rolesAndPermission[]));
  }

  getEmitter() { 
    return this.IsUserLoggedIn; 
  }
}
export interface USERS1 {
  id: number;
  name: string;
  password: string;
  role: string;
}
// tslint:disable-next-line:class-name
export interface rolesAndPermission {
  role: string;
  permissions: Array<string>;
}
