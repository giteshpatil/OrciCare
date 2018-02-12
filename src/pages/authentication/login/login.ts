import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SequrityQuestionsPage } from '../sequrity-questions/sequrity-questions';
//import { Validators } from '@angular/forms/src/validators';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { HomePage } from '../../home/home';
import { DemographicsPage } from '../../profile/demographics/add/demographics';
import { MyValidationProvider} from '../../../providers/my-validation/my-validation';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  checkValidation: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public myProv: MyValidationProvider) {

      this.myValidation();

  }

 public myValidation(){
   //debugger;
  //  this.myProv.myValidation(this.authForm);
    this.authForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(50)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(30)])]
    });
     /* this.authForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null,Validators.required]
    }); */
  }
  onSubmit(value: any): void {
    //alert();
    //debugger;
    this.myProv.myValidation(this.authForm);
    if (this.authForm.valid) {

      this.navCtrl.push(DemographicsPage);
    }
    else {
      this.checkValidation = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  openForgotPassword(event) {
    this.navCtrl.push(SequrityQuestionsPage);
  }

  open(){
    alert("Hi");
  }

}
