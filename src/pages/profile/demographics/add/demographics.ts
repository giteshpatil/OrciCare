import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TextValidations } from '../../../../validators/TextValidations';

@IonicPage()
@Component({
  selector: 'page-demographics',
  templateUrl: 'demographics.html',
})
export class DemographicsPage {
errorFirstName:string='';
DemographForm: FormGroup;
submitAttempt: boolean=false;
//firstNameError:any;
 // @ViewChild(LoginPage) login;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder:FormBuilder) {

this.DemographForm = formBuilder.group({
  firstName: ['',TextValidations.checkFirstName],
});

  }




  ionViewDidLoad() {

    console.log('ionViewDidLoad DemographicsPage');
    //this.login.open();
  }

  submit(){
    debugger;
    this.submitAttempt =true;
    if(this.DemographForm.valid){

  }else{
    console.log(this.DemographForm.controls.firstName.errors.errorString);
    this.errorFirstName=this.DemographForm.controls.firstName.errors.errorString;

  //    this.DemographForm.value.firstNameError='hi hello';
    }
  }

}
