import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-insert',
  imports: [ReactiveFormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {

  CreateForm:FormGroup;

  constructor(private fb:FormBuilder,private service:CommonService){

    this.CreateForm=this.fb.group({
      LoginID:[''],
      Password:[''],
      Name:[''],
      Phone:[''],
      EmailID:[''],
      Role:['']
    })
  }

  ngOnInit(): void {
      
  }


  onSubmit():void{

    const LoginID=this.CreateForm.value.LoginID;
    const Password=this.CreateForm.value.Password;
    const Name=this.CreateForm.value.Name;
    const Phone=this.CreateForm.value.Phone;
    const EmailID=this.CreateForm.value.EmailID

    const Role=this.CreateForm.value.Role;

    const payload={LoginID,Password,Name,Phone,EmailID,Role}
this.service.insertuser(payload).subscribe({
  next: (res) =>{
    console.log("sucess");
  },
  error: (err) => {
    console.log("fail");

  }
})
    
  }

}
