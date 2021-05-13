import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';
import { IUsuario } from '../../models/IUsuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private perfilServices: PerfilService) {}

  atualizarPerfil: IUsuario = {
    id: 5,
    nome: '',
    email: '',
    usuario: '',
    cpf: '',
  };
  
  ngOnInit(): void {
    this.BuscarUsuarioId(1)
  }

  BuscarUsuarioId(id: number): void {
    this.perfilServices.get(id).subscribe(
      (data) => {
        this.atualizarPerfil = data
        console.log(data)
      },
      (error) => console.log(error)
    )
  }

  AtualizarUsuario(): void {
    const data = {
      nome: this.atualizarPerfil.nome,
      email: this.atualizarPerfil.email,
      usuario: this.atualizarPerfil.usuario,
      cpf: this.atualizarPerfil.cpf,
    }

    this.perfilServices.update(this.atualizarPerfil.id, data).subscribe(
      () => this.ngOnInit(),
      (error) => console.log(error)
    )
  }

  visualizarInformacao(): void {
  }

}
