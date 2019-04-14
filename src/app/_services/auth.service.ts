import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthService {
    baseURL = 'http://localhost:5000/api/auth/';
    userToken: any;

constructor(private http: HttpClient) { }

    login(model: any) {

        const  httpOptions = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        };
        return this.http.post<any>(this.baseURL + 'login', model, httpOptions)
        .pipe(map(user => {
                if (user && user.tokenString) {
                    localStorage.setItem('token', JSON.stringify(user.tokenString));
                }
            })
        );
    }
}
