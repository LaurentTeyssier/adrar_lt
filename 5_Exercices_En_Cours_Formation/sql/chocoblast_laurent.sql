create database chocoblast_db;
use chocoblast_db;
create table utilisateur(
id_utilisateur int primary key not null auto_increment,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
email_utilisateur varchar(100) not null unique,
password_utilisateur varchar(100) not null,
image_utilisateur varchar(50),
statut_utilisateur tinyint(1) not null,
id_roles int
);

create table roles(
id_roles int primary key not null auto_increment,
nom_role varchar(50) not null
);

create table commentaire(
id_commentaire int primary key not null auto_increment,
note_commentaire int not null,
contenu_commentaire text not null,
date_creation_commentaire datetime not null,
statut_commentaire tinyint(1) not null,
id_chocoblast int,
id_utilisateur int
);

create table chocoblast(
id_chocoblast int primary key not null auto_increment,
slogan_chocoblast text not null,
date_creation_chocoblast datetime not null,
statut_chocoblast tinyint(1) not null,
id_cible int,
id_auteur int
);

alter table commentaire
change column id_utilisateur id_auteur int;

alter table utilisateur
add constraint fk_id_roles foreign key(id_roles) references roles(id_roles);

alter table commentaire
add constraint fk_id_auteur foreign key(id_auteur) references utilisateur(id_utilisateur);

alter table commentaire
add constraint fk_id_chocoblast foreign key(id_chocoblast) references chocoblast(id_chocoblast);

alter table chocoblast
add constraint fk_choco_auteur foreign key(id_auteur) references utilisateur(id_utilisateur);

alter table chocoblast
add constraint fk_choco_cible foreign key(id_cible) references utilisateur(id_utilisateur);

