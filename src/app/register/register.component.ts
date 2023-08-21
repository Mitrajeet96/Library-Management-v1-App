import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User, UserType } from '../models/models';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide=true;
  responseMsg:string=''
  registerForm:FormGroup

  constructor(private fb:FormBuilder, private api:ApiService) {
    this.registerForm=fb.group(
      {
        firstName:fb.control('',[Validators.required]),
        lastName:fb.control('',[Validators.required]),
        email:fb.control('',[Validators.required,Validators.email]),
        password:fb.control('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ]),
        rpassword:fb.control(''),
        userType:fb.control('student')
      },
      {
        validators:[repeatPasswordValidator]
      }as AbstractControlOptions
      );
   }


   register(){
    let user:User = {
      id: 0,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      mobile: '',
      password: this.registerForm.get('password')?.value,
      blocked: false,
      active: false,
      createdOn: '',
      usertype: UserType.USER,
      fine: 0
    };
    console.log(user)
    this.api.createAccount(user).subscribe({
      next: (res: any) => {
        console.log(res);
        this.responseMsg = res.toString();
      },
      error: (err: any) => {
        console.log('Error: ');
        console.log(err);
      },
    });
   }

   getFirstNameErrors(){
    if(this.FirstName.hasError('required')) return 'First Name is Required'
    return ''
   }
   getLastNameErrors(){
    if(this.LastName.hasError('required')) return 'Last Name is Required'
    return ''
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

    get FirstName() : FormControl {
      return this.registerForm.get('firstName') as FormControl;
    }
    get LastName() : FormControl {
      return this.registerForm.get('lastName') as FormControl;
    }
    get Email() : FormControl {
      return this.registerForm.get('email') as FormControl;
    }
    get Password() : FormControl {
      return this.registerForm.get('password') as FormControl;
    }
    get RPassword() : FormControl {
      return this.registerForm.get('rpassword') as FormControl;
    }



  ngOnInit(): void {
  }

}

export const repeatPasswordValidator:ValidatorFn=(
  control : AbstractControl
 ): ValidationErrors | null =>{
  const pwd = control.get('password')?.value;
  const rpwd = control.get('rpassword')?.value;
  if (pwd==rpwd){
    control.get('rpassword')?.setErrors(null)
    return null;
  }else{
    control.get('rpassword')?.setErrors({rpassword:true})
    return {rpassword:true};
  }
 }
