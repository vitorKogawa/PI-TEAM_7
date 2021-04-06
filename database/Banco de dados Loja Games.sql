create database projetogrupo7;

use projetogrupo7;

create table IF NOT EXISTS tb_jogo(
   ID_jogo int primary key auto_increment,
   Nome varchar (30) NOT NULL,
   Preco decimal NOT NULL,
   Quantidade int NOT NULL,
   Descricao varchar (60) NOT NULL,
   Espaco_arm decimal NOT NULL
);

alter table tb_jogo add column cod_genero int not null;

create table if not exists tb_celular(
	COD_Usuario int not null,
    Numero int not null
);

create table if not exists tb_genero(
	ID_Genero int primary key auto_increment,
    Descricao varchar(20) not null
);

CREATE TABLE IF NOT EXISTS tb_endereco(
	ID_Endereco int primary key auto_increment,
	COD_usuario int NOT NULL,
	Logradouro varchar (30) NOT NULL,
	Numero int NOT NULL,
	Bairro varchar (30) NOT NULL,
	Cep int NOT NULL,
	Estado varchar (30) NOT NULL,
	Cidade varchar (30) NOT NULL
);

create table IF NOT EXISTS tb_tipo_pagamento(
	ID_Tipo_Pagamento int primary key auto_increment,
    Descricao varchar(30) not null
);

create table IF NOT EXISTS tb_pagamento(
	ID_Pagamento int primary key auto_increment,
    Data_Pagameto date not null,
    Hora_Pagameto time not null,
    Cod_Usuario	int not null,
    Cod_Tipo_Pagamento	int not null
);

Create table IF NOT EXISTS tb_usuario(
    ID_usuario int primary Key auto_increment,
    Usuario varchar (30) NOT NULL,
    Senha Varchar (30) NOT NULL,
	Ativo Boolean NOT NULL,
	Status_adm Boolean NOT NULL,
	Nome Varchar (30) NOT NULL,
	Cpf int (30) NOT NULL,
	Email Varchar (30) NOT NULL
);

alter table tb_jogo add foreign key (cod_genero) references tb_genero (ID_Genero);

alter table tb_pagamento add foreign key (Cod_Usuario) references tb_usuario (ID_usuario);

alter table tb_endereco add foreign key (COD_usuario) references tb_usuario (ID_usuario);

alter table tb_celular add foreign key (COD_usuario) references tb_usuario (ID_usuario);

alter table tb_pagamento add foreign key (Cod_Tipo_Pagamento) references tb_tipo_pagamento (ID_Tipo_Pagamento);













