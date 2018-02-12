import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SequrityQuestionsPage } from './sequrity-questions';

@NgModule({
  declarations: [
    SequrityQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SequrityQuestionsPage),
  ],
})
export class SequrityQuestionsPageModule {}
