import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model)
    .subscribe(data => {

      console.log('Loged in successfully');
    }, error => {

      console.log('Login error');
    });
  }

}
