import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide=true;
  responseMsg:string=''
  loginForm:FormGroup


  constructor(private fb:FormBuilder) {
    this.loginForm=fb.group
    (
      {

        email:fb.control('',[Validators.required,Validators.email]),
        password:fb.control('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ])

      }
    )
  }

  ngOnInit(): void {
  }

  login(){
    let loginInfo=
    {
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    };
    console.log(loginInfo)
  }


  getEmailErrors(){
    if(this.Email.hasError('required')) return 'E-mail is Required'
    if(this.Email.hasError('email')) return 'E-mail is Invalid'
    return ''
   }
   getPasswordErrors(){
    if(this.Password.hasError('required')) return 'Field is Required'
    if(this.Password.hasError('minlength')) return 'Minimum 6 Characters Are Allowed'
    if(this.Password.hasError('maxlength')) return 'Maximun 15 Characters Are Allowed'
    return ''
   }

   get Email() : FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get Password() : FormControl {
    return this.loginForm.get('password') as FormControl;
  }


}


