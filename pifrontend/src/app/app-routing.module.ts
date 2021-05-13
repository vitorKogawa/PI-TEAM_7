import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselTesteComponent } from './views/carrousel-teste/carrousel-teste.component';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from "./views/pagamento/pagamento.component"
import { JogoCrudComponent } from "./views/jogo-crud/jogo-crud.component"
import { JogoCreateComponent } from './components/jogo/jogo-create/jogo-create.component';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';


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
    path: 'cadastroUsuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
