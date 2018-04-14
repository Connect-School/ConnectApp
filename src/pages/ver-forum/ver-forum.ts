import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CriarMensagemForumPage } from '../criar-mensagem-forum/criar-mensagem-forum';

@IonicPage()
@Component({
  selector: 'page-ver-forum',
  templateUrl: 'ver-forum.html',
})
export class VerForumPage {

  selectedItem: any;

  forumMessages: Array<{id: any,username: string, text: string, createdDate: string }>

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.selectedItem = navParams.get('item');
  	this.getMessages(this.selectedItem);
  }

  getMessages(selectedItem) {
  	//TODO: Usar o selectedItem para pegar as mensagens do forum por id do user e do forum
  	this.forumMessages = [
  		{id: 0, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 1, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 2, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 3, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 4, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 5, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'},
  		{id: 6, username: 'Pai 1', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa.', createdDate: '10/04/2018'}
  	]	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerForumPage');
  }

  addForumMessage() {
  	const modal =this.modalCtrl.create(CriarMensagemForumPage);
  	modal.present();
  }

}
