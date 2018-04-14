import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CriarMensagemPage } from '../criar-mensagem/criar-mensagem';

@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {

  messages: Array<{title: string, text: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.messages = [
      { title: 'Messagem Do Professor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, purus id accumsan egestas, mauris ante ultricies neque, vel tempus risus nibh ac risus. Integer ut nisl ante. Suspendisse potenti. Sed non tellus at enim rhoncus facilisis congue consequat sapien. Pellentesque tempus orci eu diam congue, in consequat sem accumsan. Praesent venenatis lectus at eros pretium, vitae ornare tellus iaculis. Mauris purus lectus, rutrum ut urna eu, consequat volutpat erat. Pellentesque hendrerit eros metus, sed aliquet odio finibus et. Integer vitae malesuada dolor. Etiam ac porta mauris, in ultricies ligula. Duis nunc arcu, placerat eu eros eget, commodo rhoncus urna. Nam tristique metus sit amet urna ullamcorper, id finibus nulla congue.' },
      { title: 'Mensagem da Escola', text: 'Ut vestibulum placerat magna quis porta. Nullam a porta sem, a varius massa. Pellentesque lobortis hendrerit nisi mollis aliquam. In ac quam vitae lorem interdum convallis sed ac dui. Cras maximus elementum nunc, molestie placerat ante condimentum eu. In nec lectus urna. Vivamus et lectus ut sem lobortis molestie in sit amet ex.'},
      { title: 'Mensagem do Pai', text: 'Morbi sollicitudin accumsan purus, a eleifend elit vestibulum vel. Nulla facilisi. Nulla vitae eros leo. Sed tincidunt eleifend urna, in rutrum mi placerat ut. Cras elementum dui justo, nec placerat ipsum sollicitudin vitae. Quisque sodales convallis auctor. Proin eu lorem non risus vestibulum dictum sit amet non tellus. Vivamus leo lacus, bibendum quis mattis quis, efficitur id risus. Aliquam luctus nisl enim, id sodales mi lacinia mollis. Suspendisse convallis sem quis nibh suscipit tempor. Nunc porta erat a mattis dignissim. Fusce fermentum tellus lorem, ac tempus sem tempus a. Nunc pharetra tempus lectus eget commodo.'},
      { title: 'Mensagem do Professor', text: 'Cras porta bibendum mattis. Sed tincidunt diam eget est ornare, sit amet interdum nibh ornare. Morbi vel vestibulum justo. Fusce sed mauris sit amet est convallis luctus. Suspendisse quis sem dictum, eleifend nulla vel, sodales mi. Praesent luctus nibh urna, non varius nisi lacinia et. Duis rutrum bibendum nunc tempor cursus. Vestibulum massa elit, molestie nec mollis quis, tincidunt id purus. Suspendisse venenatis libero eu sapien viverra, in mattis diam euismod.' }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
  }

  addMessage() {
  	console.log('criarMensagem');
  	const modal = this.modalCtrl.create(CriarMensagemPage);
  	modal.present();
  }

}
