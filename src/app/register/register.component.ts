import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {RegisterService} from '../register.service'
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user  = new User();
   message :string ="";
   isRegistered :boolean =false;
   element:any;
   
  constructor(private registerService: RegisterService) { }

  @Output() messageEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  onClick(){
    this.element = document.getElementById('messageDiv');
    this.registerService.addUser(this.user).subscribe(
     data =>{
       console.log(data);
       if(data=="saved"){
        this.element.className= 'registered';
         console.log("entered")
        this.message="Registered successfully";
        this.isRegistered = true;
       }else{
        
        this.element.className= 'notRegistered';
         this.isRegistered = false;
        this.message ="User name alredy exist";
       }
     }
    );
  }

  /* loginPage(){
    console.log("called");
    this.messageEvent.emit(true);
  } */

}
