import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the SequrityQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sequrity-questions',
  templateUrl: 'sequrity-questions.html',

})
export class SequrityQuestionsPage {
  qForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private frmBldr: FormBuilder) {

    this.qForm = frmBldr.group({
      Option1: ['', Validators.required],
      Option2: ['', Validators.required],
      Option3: ['', Validators.required]
    });
  }

  onSubmit(value : any): void{
  //  debugger;
    if (this.qForm.valid) {
      alert(value.Option1);
      alert('success');

    }
    else {
      alert(value.Option1);
      if(value.Option1=='null'){
        alert('select a question1');
      }else
      alert('select a question');
      //this.checkValidation = true;
    }
  }

// question1Select(){
//       alert(value.Option1);
// }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SequrityQuestionsPage');
  }

}
