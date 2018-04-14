import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.html',
})
export class CadastrarUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarUsuarioPage');
  }

  cancel() {
  	this.nav.pop();
  }

  signIn() {
  	console.log('User added');

  	const toast = this.toastCtrl.create({
      message: 'Usuário Cadastrado',
      duration: 1500
    });
    toast.present();

    setTimeout(()=> this.nav.setRoot(LoginPage), 1500);
    

  }

}
