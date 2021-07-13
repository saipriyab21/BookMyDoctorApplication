import { Component, OnInit } from '@angular/core';
import{Login} from '../model/login'
import { Router } from '@angular/router';
import { Validators,FormGroup,FormControl,FormBuilder} from "@angular/forms";
declare var toastr: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId ='';
  password ='';
  login :Login = new Login();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  submitted = false;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: new FormControl(this.emailId, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern(this.emailPattern)
      ]),

      password: new FormControl(this.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
   
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;}
    if(this.login.emailId =="admin@gmail.com"&& this.login.password == 'Admin@123'){
      toastr.success("SuccessFully loggedIn");
      this.router.navigate(['adminhome']);
    }
    if(this.login.emailId =="saipriya@gmail.com"&& this.login.password == 'S@ipriya23'){
      toastr.success("SuccessFully loggedIn");
      this.router.navigate(['/doctorhome']);
    }
  };


  

    
  }


