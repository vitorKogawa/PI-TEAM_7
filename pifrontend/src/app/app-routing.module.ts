import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselTesteComponent } from './views/carrousel-teste/carrousel-teste.component';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from "./views/pagamento/pagamento.component"
import { JogoCrudComponent } from "./views/jogo-crud/jogo-crud.component"
import { JogoCreateComponent } from './components/jogo/jogo-create/jogo-create.component';
import { JogoUpdateComponent } from './components/jogo/jogo-update/jogo-update.component';
import { JogoDeleteComponent } from './components/jogo/jogo-delete/jogo-delete.component';


const routes: Routes = [
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jogos',
    component: JogoCrudComponent
  },
  {
    path: 'jogos/create',
    component: JogoCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'carousel',
    component: CarrouselTesteComponent
  },
  {
    path: 'jogos/update/:id',
    component: JogoUpdateComponent
  },
  {
    path: 'jogos/delete/:id',
    component: JogoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
