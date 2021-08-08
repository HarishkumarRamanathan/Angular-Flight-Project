import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})")
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ])
    })
  }
  getLogin(){
    console.log("in login method")
    console.log(this.myForm)
    console.log(this.myForm.value)

    // send this data to server - ajax
    // response, reset form

    //this.myForm.reset()

    if(this.myForm.value.email=='admin@gmail.com' && this.myForm.value.password=='password'){
         this.router.navigate(['admin'])
    }else{

    }
}

  ngOnInit(): void {
  }

}
