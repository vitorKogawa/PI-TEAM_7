import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from "./views/pagamento/pagamento.component"
import { JogoCrudComponent } from "./views/jogo-crud/jogo-crud.component"
import { JogoCreateComponent } from './components/jogo/jogo-create/jogo-create.component';


const routes: Routes = [
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jogos',
    component: JogoCrudComponent
  },
  {
    path: 'jogos/create',
    component: JogoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
