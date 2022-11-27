import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private utilService:UtilserviceService) { }
  id:any;
  name:any;
  mobile_no:any;
  email:any;
  regForm=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{3,10}'),Validators.minLength(3)]),
     password:new FormControl('',[Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')]),
      mobile_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{1,10}')]),
      email:new FormControl('',[Validators.required,Validators.pattern('^(.+)@(.+)$')]),

  });


  registerUser(){
    this.utilService.User(
      new User( 
    this.regForm.get("username")?.value,
    this.regForm.get("password")?.value,
    this.regForm.get("mobile_no")?.value,
    this.regForm.get("email")?.value
    )).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('completed')
    });
    
  }




 

}
