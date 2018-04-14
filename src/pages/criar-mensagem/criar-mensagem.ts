import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-criar-mensagem',
  templateUrl: 'criar-mensagem.html',
})
export class CriarMensagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarMensagemPage');
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
