import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/*
  Generated class for the MyValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyValidationProvider {
   myPattern:'[a-zA-Z]*';
  constructor(public http: HttpClient,
    public formBuilder: FormBuilder) {
    console.log('Hello MyValidationProvider Provider');

  }
public myValidation(authForm: FormGroup){
//  debugger;
  authForm = this.formBuilder.group({
    userName: ['', Validators.compose([Validators.required, Validators.pattern(this.myPattern), Validators.minLength(5), Validators.maxLength(50)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(30)])]
  });
}
}
