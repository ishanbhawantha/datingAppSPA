import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    baseURL = 'http://localhost:5000/api/auth';
    userToken: any;

constructor(private http: HttpClient) { }

    login(model: any) {

        const  httpOptions = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        };
        return this.http.post(this.baseURL + 'login', model, httpOptions).subscribe(
            data => {
                const user = data;
                if ( user) {
                    localStorage.setItem('token', user.tokenString);
                    this.userToken = user.tokenString;
                }
            }
        );
    }
}
