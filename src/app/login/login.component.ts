import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
console.log(this.user);
  }
  loadRegistration(){
    console.log('clicked');
  this.router.navigate(['/register']);
  }

}
