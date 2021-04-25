create database projetogrupo7;

use projetogrupo7;

create database projetogrupo7;

use projetogrupo7;

create table IF NOT EXISTS tb_jogo(
   ID_jogo int primary key auto_increment,
   Nome varchar (30) NOT NULL,
   Preco decimal NOT NULL,
   Quantidade int NOT NULL,
   Descricao varchar (60) NOT NULL,
   Espaco_arm decimal NOT NULL,
   cod_genero int NOT NULL,
   cod_jogo int NOT NULL,
   status_jogo boolean NOT NULL
);

create table IF NOT EXISTS tb_tipo_pagamento(
	ID_Tipo_Pagamento int primary key auto_increment,
    Descricao varchar(30) not null
);

create table IF NOT EXISTS tb_pagamento(
	id_Pagamento int primary key auto_increment,
    data_Pagamento date not null,
    hora_Pagamento time not null,
    cod_usuario	int not null,
    cod_tipo_pagamento	int not null,
    cod_jogo int not null
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

alter table tb_pagamento add foreign key (Cod_Usuario) references tb_usuario (ID_usuario);

alter table tb_pagamento add foreign key (Cod_Tipo_Pagamento) references tb_tipo_pagamento (ID_Tipo_Pagamento);













