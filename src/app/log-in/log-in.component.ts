import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!:FormGroup
  // email = new FormControl('', Validators.required );
  // username = new FormControl('', Validators.required );
  // password = new FormControl('', Validators.required );


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // getErrorMessage2() {
  //   if (this.username.hasError('required')) {
  //     return 'Enter a valid Password';
  //   }

  //   return this.username.hasError('username') ? 'Password must contain, letters numbers and symbols' : '';
  // }


  constructor(private fb:FormBuilder) {this.createForm(); }
  createForm(){
    this.loginForm =this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
