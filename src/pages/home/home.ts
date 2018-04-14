import { Component } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';
import { VerForumPage } from '../ver-forum/ver-forum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	alerts : Array<{id: any, title: string, text: string}>;
	user: any;
	foruns : Array<{id: any, title: string, description: string, amount: string, username: string, type: string, admin: string}>;

  constructor(public navCtrl: NavController, public nav: Nav, public navParams: NavParams) {
  	this.user = 'Usuario'; //navParams.getParams();
  	this.getMessages(this.user);
  	this.getForuns(this.user);
  }

  getForuns(user) {
  	this.foruns = [
  		{id: 0, title: 'Fórum da Escola', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '3', username: 'Pai 1', type: 'Sujestão', admin: 'Admin 1'},
  		{id: 1, title: 'Fórum do Pai', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '5', username: 'Pai 1', type: 'Sujestão', admin: 'Admin 1'},
  		{id: 2, title: 'Fórum do Professor', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '8', username: 'Pai 1', type: 'Reclamação', admin: 'Admin 1'},
  		{id: 3, title: 'Fórum do Aluno', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '21', username: 'Pai 1', type: 'Solicitação', admin: 'Admin 1'},
  		{id: 4, title: 'Fórum do Aluno', description: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus.', amount: '10', username: 'Pai 1', type: 'Reclamação', admin: 'Admin 1'}
  	]
  }

  getMessages(user) {
  	this.alerts = [
  	  {id: 0,  title: 'Mensagem da Escola', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa. Pellentesque lobortis hendrerit nisi mollis aliquam. In ac quam vitae lorem interdum convallis sed ac dui. Cras maximus elementum nunc, molestie placerat ante condimentum eu. In nec lectus urna. Vivamus et lectus ut sem lobortis molestie in sit amet ex.'},
      {id: 2,  title: 'Mensagem do Pai', text: 'Morbi sollicitudin accumsan purus, a eleifend elit vestibulum vel. Nulla facilisi. Nulla vitae eros leo. Sed tincidunt eleifend urna, in rutrum mi placerat ut. Cras elementum dui justo, nec placerat ipsum sollicitudin vitae. Quisque sodales convallis auctor. Proin eu lorem non risus vestibulum dictum sit amet non tellus. Vivamus leo lacus, bibendum quis mattis quis, efficitur id risus. Aliquam luctus nisl enim, id sodales mi lacinia mollis. Suspendisse convallis sem quis nibh suscipit tempor. Nunc porta erat a mattis dignissim. Fusce fermentum tellus lorem, ac tempus sem tempus a. Nunc pharetra tempus lectus eget commodo.'},
      {id: 3,  title: 'Mensagem do Professor', text: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus. Suspendisse venenatis libero eu sapien viverra, in mattis diam euismod.' }
  	]
  }

  itemTapped(event, forum) {
    console.log('forum clicado', forum);
    this.navCtrl.push(VerForumPage, {
      item: forum
    });
  }

}
