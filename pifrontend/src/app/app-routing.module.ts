import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselTesteComponent } from './views/carrousel-teste/carrousel-teste.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'carousel',
    component: CarrouselTesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
