import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  constructor(private fb:FormBuilder,private service:CommonService) { 

    this.loginform = this.fb.group({
      username: [''],
      password: ['']
    })

  }

  ngOnInit(): void {
      
  }

  onsubmit(){
    if(this.loginform.valid){

      const username=this.loginform.value.username;
      const password=this.loginform.value.password;
      const payload={username,password};

      this.service.login(payload).subscribe({
        next: (res) => {
console.log(res);
          
          this.service.setToken(res.token);
          const token1=this.service.getToken();
         console.log(token1);


        },
        error: (err) => {

        }
      })
      
    }

  }

}
