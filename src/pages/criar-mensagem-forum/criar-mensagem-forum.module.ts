import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarMensagemForumPage } from './criar-mensagem-forum';

@NgModule({
  declarations: [
    CriarMensagemForumPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarMensagemForumPage),
  ],
})
export class CriarMensagemForumPageModule {}
