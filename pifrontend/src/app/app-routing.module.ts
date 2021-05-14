import { PedidosComponent } from './views/pedidos/pedidos.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselTesteComponent } from './views/carrousel-teste/carrousel-teste.component';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { JogoCrudComponent } from './views/jogo-crud/jogo-crud.component';
import { JogoCreateComponent } from './components/jogo/jogo-create/jogo-create.component';
import { JogoUpdateComponent } from './components/jogo/jogo-update/jogo-update.component';
import { JogoDeleteComponent } from './components/jogo/jogo-delete/jogo-delete.component';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { AuthGuardService } from './guards/auth/auth-guard.service';
import { Error404Component } from './views/error/error404/error404/error404.component';
import { WelcomeComponent } from './views/welcome/welcome/welcome.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { AllUsuariosComponent } from './views/usuarios/all-usuarios.component';
import { MeusJogosComponent } from './views/meus-jogos/meus-jogos.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pagamento',
    component: PagamentoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'jogos',
    component: JogoCrudComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'jogos/create',
    component: JogoCreateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'jogos/update/:id',
    component: JogoUpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'jogos/delete/:id',
    component: JogoDeleteComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cadastroUsuario',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: 'usuarios',
    component: AllUsuariosComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meus-jogos',
    component: MeusJogosComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
