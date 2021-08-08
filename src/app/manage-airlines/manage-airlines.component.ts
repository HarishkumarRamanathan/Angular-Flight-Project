import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManageAirlinesService } from './manage-airlines.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {

  myForm:FormGroup;

  constructor(private manageAirlineService:ManageAirlinesService) {
    this.myForm = new FormGroup({
      flightNumber: new FormControl("", [
      ]),
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
    var data = {flightNumber:this.myForm.controls.flightNumber.value,name:this.myForm.controls.airlinesName.value, price:this.myForm.controls.price.value}
    this.manageAirlineService.addAirlines(data).subscribe((respone)=>{console.log(respone)});
    this.myForm.reset()
}

  ngOnInit(): void {
  }

}
