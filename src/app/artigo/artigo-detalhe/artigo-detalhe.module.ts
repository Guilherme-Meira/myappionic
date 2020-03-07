import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtigoDetalhePageRoutingModule } from './artigo-detalhe-routing.module';

import { ArtigoDetalhePage } from './artigo-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtigoDetalhePageRoutingModule
  ],
  declarations: [ArtigoDetalhePage]
})
export class ArtigoDetalhePageModule {}
