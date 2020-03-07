import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigoDetalhePage } from './artigo-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ArtigoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtigoDetalhePageRoutingModule {}
