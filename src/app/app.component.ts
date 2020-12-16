import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-block';
  message:boolean=false ;
  showRegisteration :boolean=true;

  receiveMessage($event: boolean) {
    console.log('event emmited');
    this.message = true;
    this.showRegisteration=false;
  }
}
