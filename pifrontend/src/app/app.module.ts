import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { JogoCrudComponent } from './views/jogo-crud/jogo-crud.component';
import { JogoCreateComponent } from './components/jogo/jogo-create/jogo-create.component';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselTesteComponent } from './views/carrousel-teste/carrousel-teste.component';
import { JogoReadComponent } from './components/jogo/jogo-read/jogo-read.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { CarouselCardsComponent } from './components/template/carousel-cards/carousel-cards.component';
import { BarrapesquisaComponent } from './components/template/barrapesquisa/barrapesquisa.component';
import { JogoUpdateComponent } from './components/jogo/jogo-update/jogo-update.component';
import { JogoDeleteComponent } from './components/jogo/jogo-delete/jogo-delete.component';
import { CardSliderComponent } from './views/home/components/card-slider/card-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { FeaturedGameComponent } from './views/home/components/featured-game/featured-game.component';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilComponent } from './views/perfil/perfil.component';

import { AuthGuardService } from './guards/auth/auth-guard.service'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginService } from './views/login/login.service';
import { Error404Component } from './views/error/error404/error404/error404.component';
import { WelcomeComponent } from './views/welcome/welcome/welcome.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { CardComponent } from './views/perfil/components/card/card.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { LoginAdmComponent } from './views/login-adm/login-adm.component';

registerLocaleData (localePt);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PagamentoComponent,
    JogoCrudComponent,
    JogoCreateComponent,
    CarrouselTesteComponent,
    JogoReadComponent,
    CarouselCardsComponent,
    BarrapesquisaComponent,
    CadastrarUsuarioComponent,
    CardSliderComponent,
    FeaturedGameComponent,
    JogoUpdateComponent,
    JogoDeleteComponent,
    PerfilComponent,
    CardComponent,
    Error404Component,
    WelcomeComponent,
    PedidosComponent,
    AdministradorComponent,
    LoginAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    LoginService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }