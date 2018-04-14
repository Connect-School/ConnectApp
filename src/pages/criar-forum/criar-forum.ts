import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-criar-forum',
  templateUrl: 'criar-forum.html',
})
export class CriarForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarForumPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create() {
  	const toast = this.toastCtrl.create({
      message: 'Fórum Criado',
      duration: 1000
    });
    toast.present();
  	setTimeout(()=>this.dismiss(), 1000	);
  }
}
