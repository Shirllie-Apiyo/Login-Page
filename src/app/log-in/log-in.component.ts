import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email, ]);
  username = new FormControl('', [Validators.required,  ]);
  password = new FormControl('', [Validators.required,  ]);
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessage1() {
    if (this.username.hasError('required')) {
      return 'You must enter your username';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }
  getErrorMessage2() {
    if (this.username.hasError('required')) {
      return 'Enter a valid Password';
    }

    return this.username.hasError('username') ? 'Password must contain, letters numbers and symbols' : '';
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
