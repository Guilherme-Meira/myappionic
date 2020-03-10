import { ArtigoService } from './../artigo/artigo.service';
import { Component } from '@angular/core';
import { Artigo } from '../model/artigo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{ 

  artigos: Artigo[]= [];

  constructor(private serviceArtigo: ArtigoService,
      public router: Router) {
        this.artigos = this.serviceArtigo.getAll();
      }

  abrirArtigo(artigo: Artigo){
    this.router.navigate(['/artigo-detalhe', artigo.id]);
    }
    
  

}
