import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPage } from '../pages/login/login';
import { CadastrarUsuarioPage } from '../pages/cadastrar-usuario/cadastrar-usuario';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { CriarMensagemPage } from '../pages/criar-mensagem/criar-mensagem';
import { ForumPage } from '../pages/forum/forum';
import { CriarForumPage } from '../pages/criar-forum/criar-forum';
import { VerForumPage } from '../pages/ver-forum/ver-forum';
import { CriarMensagemForumPage } from '../pages/criar-mensagem-forum/criar-mensagem-forum';
import { BullyingPage } from '../pages/bullying/bullying';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarUsuarioPage,
    MensagemPage,
    CriarMensagemPage,
    ForumPage,
    CriarForumPage,
    VerForumPage,
    CriarMensagemForumPage,
    BullyingPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarUsuarioPage,
    MensagemPage,
    CriarMensagemPage,
    ForumPage,
    CriarForumPage,
    VerForumPage,
    CriarMensagemForumPage,
    BullyingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
