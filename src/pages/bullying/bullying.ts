import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-bullying',
  templateUrl: 'bullying.html',
})
export class BullyingPage {

	bullyingDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BullyingPage');
  }

  create() {
  	const toast = this.toastCtrl.create({
      message: 'Denúncia Cadastrada',
      duration: 1000
    });
    toast.present();

    setTimeout(()=> this.nav.setRoot(HomePage), 1000);

  }

}
