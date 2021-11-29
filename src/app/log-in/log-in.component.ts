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

  constructor(private fb:FormBuilder) {this.createForm(); }
  createForm(){
    this.loginForm =this.fb.group({
      username:['',Validators.required ],
      email:['',[Validators.required,Validators.email] ],
      password:['',Validators.required ],
    });
  }

  ngOnInit(): void {
  }

}
