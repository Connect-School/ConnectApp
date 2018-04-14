import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-criar-mensagem-forum',
  templateUrl: 'criar-mensagem-forum.html',
})
export class CriarMensagemForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarMensagemForumPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create() {
    const toast = this.toastCtrl.create({
      message: 'Mensagem Enviada',
      duration: 1000
    });
    toast.present();
    setTimeout(()=> this.dismiss(), 1000)
  }

}
