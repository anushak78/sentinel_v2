import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpErrorMessage: string;

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  constructor(private http: HttpClient) {
  }

  public get currentUserValue(): User {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  login(username: string, password: string, role: Number) {
    console.log(username)
    return this.http.post('http://0.0.0.0:6543/core/login', {login: username, password: password, role: role})
      .toPromise().then((user => {
        console.log(user)
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      })).catch((error: HttpErrorResponse) => {
        console.log(error);
        this.errorHandler(error);
        return false;
      });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  errorHandler(error: HttpErrorResponse): boolean {
    if (error.status === 400) {
      this.httpErrorMessage = 'Server Error';
    } else if (error.status === 403) {
      this.httpErrorMessage = 'Forbidden!!';
    } else {
      this.httpErrorMessage = 'Server Error!!';
    }
    return false;
  }
}
