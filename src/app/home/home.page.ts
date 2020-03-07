import { ArtigoService } from './../artigo/artigo.service';
import { Component } from '@angular/core';
import { Artigo } from '../model/artigo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artigos: Artigo[]= [];

  constructor(privateserceArtigo: ArtigoService) {
    this.artigos = this.serviceArtigo.getAll();
  }

  
    
  

}
