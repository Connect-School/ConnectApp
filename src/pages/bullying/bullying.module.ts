import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BullyingPage } from './bullying';

@NgModule({
  declarations: [
    BullyingPage,
  ],
  imports: [
    IonicPageModule.forChild(BullyingPage),
  ],
})
export class BullyingPageModule {}
