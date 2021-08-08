import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.scss']
})
export class BookflightComponent implements OnInit {

  myForm:FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      airlinesName: new FormControl("", [
      ]),
      price: new FormControl("", [
      ])
    })
  }
  onSubmit(){
    console.log("in login method")
    console.log(this.myForm)
    console.log(this.myForm.value)

    // send this data to server - ajax
    // response, reset form

    this.myForm.reset()
}

  ngOnInit(): void {
  }

}
