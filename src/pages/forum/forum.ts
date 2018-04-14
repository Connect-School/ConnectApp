import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ModalController } from 'ionic-angular';

import { VerForumPage } from '../ver-forum/ver-forum';
import { CriarForumPage } from '../criar-forum/criar-forum';

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

	foruns: Array<{title: string, description: string, amount: string, type: string, createdBy: string, admin: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public modalCtrl: ModalController) {
  	this.foruns = [
  		{title: 'Fórum da Escola', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '3', type: 'Sujestão'},
  		{title: 'Fórum do Pai', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '5', type: 'Sujestão'},
  		{title: 'Fórum do Professor', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '8', type: 'Reclamação'},
  		{title: 'Fórum do Aluno', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '21', type: 'Solicitação'},
  		{title: 'Fórum do Aluno', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '10', type: 'Reclamação'}
  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  itemTapped(event, forum) {
    console.log('forum clicado', forum);
    this.navCtrl.push(VerForumPage, {
      item: forum
    });
  }

  addForum() {
  	const modal =this.modalCtrl.create(CriarForumPage);
  	modal.present();
  }
}
