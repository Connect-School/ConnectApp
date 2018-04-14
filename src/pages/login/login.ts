import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

// import { CadastrarUsuarioPage } from '../cadastrar-usuario/cadastrar-usuario';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

addUser() {
    console.log('Add user');
    // this.nav.push(CadastrarUsuarioPage);
  }

  login() {
    console.log('Login user');
    this.nav.setRoot(HomePage);
  }


}
