import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarMensagemPage } from './criar-mensagem';

@NgModule({
  declarations: [
    CriarMensagemPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarMensagemPage),
  ],
})
export class CriarMensagemPageModule {}
