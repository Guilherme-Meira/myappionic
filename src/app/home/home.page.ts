import { Component } from '@angular/core';
import { Artigo } from '../model/artigo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  
    artigos: Artigo[] = [
      { id: 1, titulo:'Como tirar fotos com Ionic de maneira simples', autor:'FELIPE FRANCO', data:'20/02/2018', imgUrl:'http://www.fabricadecodigo.com/wp-content/uploads/ionic-camera-350x230.png', texto:'<p>Nessa aula eu vou te mostrar como tirar fotos com o Ionic de maneira simples.</p>'},
      { id: 2, titulo:'4 exemplos de utilização do Google Maps/Geolocalização com Ionic', autor:'FELIPE FRANCO', data:'30/01/2018', imgUrl:'http://www.fabricadecodigo.com/wp-content/uploads/google-maps-e-geolocalizacao-com-ionic-350x230.png', texto:'<p>Nessa aula eu ou te mostrar 4 exemplos de utilização do Google Maps/Geolocalização com o Ionic.<br>Você vai aprender:</p>'},
      { id: 3, titulo:'Como criar um CRUD com Ionic e Firebase – Em alguns simples passos', autor:'FELIPE FRANCO', data:'30/01/2018', imgUrl:'http://www.fabricadecodigo.com/wp-content/uploads/crud-firebase-ionic-350x230.png', texto:'<p>Nessa vídeo aula eu mostro como criar um CRUD (CRUD significa, em inglês, Create, Read, Update e Delete e em português é Incluir, Alterar, Excluir e Consultar) com Ionic e Firebase Realtime Database&nbsp;<strong>usando a nova versão do AngularFire2 (5.0.0).&nbsp;</strong></p>'},
      { id: 4, titulo:'Consumindo API REST com Ionic – O guia absolutamente completo', autor:'FELIPE FRANCO', data:'30/01/2018', imgUrl:'http://www.fabricadecodigo.com/wp-content/uploads/http-rest-api-ionic-350x230.png', texto:'<p>Nessa vídeo aula eu vou mostrar como fazer requisições HTTP a uma API REST.<br> Esse exemplo é valido tanto para aplicações feitas com Angular e Ionic.<br> E também como paginar os resultados utilizando o&nbsp;InfiniteScroll.</p>'},
    ];
  

}
