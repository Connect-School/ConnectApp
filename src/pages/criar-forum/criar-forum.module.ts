import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarForumPage } from './criar-forum';

@NgModule({
  declarations: [
    CriarForumPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarForumPage),
  ],
})
export class CriarForumPageModule {}
