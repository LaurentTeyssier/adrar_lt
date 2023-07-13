create database social_media;
use social_media;
create table utilisateur (
id_utilisateur int primary key not null auto_increment,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null unique,
password_utilisateur varchar(100) not null,
statut_utilisateur tinyint(1)
);

create table article (
id_article int primary key not null auto_increment,
nom_article varchar(50) not null unique,
contenu_article text,
date_article datetime,
statut_article tinyint(1)
);

create table commentaire (
id_commentaire int primary key not null auto_increment,
contenu_commentaire varchar(250),
date_commentaire datetime
);

create table categorie (
id_categorie int primary key not null auto_increment,
nom_categorie varchar(50)
);

create table groupe(
id_groupe int primary key not null auto_increment,
nom_groupe varchar(50)
);

create table message (
id_message int primary key not null auto_increment,
contenu_message text,
date_message datetime,
statut_message tinyint(1)
);

create table role(
id_role int primary key not null auto_increment,
nom_role varchar(50)
);

create table etre_abonne (
id_abonne int,
id_follower int
);

create table laisser (
id_utilisateur int,
id_article int,
id_commentaire int,
primary key (id_utilisateur, id_article, id_commentaire)
);

create table avoir (
id_article int,
 id_categorie int,
 primary key (id_article, id_categorie)
 );
 
 create table appartenir (
 id_utilisateur int,
 id_groupe int,
 primary key (id_utilisateur, id_groupe)
 );
 
 create table echanger(
 id_utilisateur int,
 id_utilisateur_1 int,
 id_message int
 );
 
 create table media (
 id_media int primary key not null auto_increment,
 url_media varchar(100),
 nom_media varchar(50)
 );
 
 create table illustrer (
 id_media int,
 id_article int
 );

alter table utilisateur
add id_role int,
add constraint fk_utilisateur_role foreign key(id_role) references role(id_role);

alter table article
add id_utilisateur int,
add constraint fk_article_utilisateur foreign key(id_utilisateur)references utilisateur(id_utilisateur);

alter table message
add id_utilisateur int,
add constraint fk_message_emetteur foreign key (id_utilisateur) references utilisateur(id_utilisateur),
add id_utilisateur_1 int,
add constraint fk_message_destinataire foreign key (id_utilisateur) references utilisateur (id_utilisateur);

alter table appartenir
add constraint fk_appartenir_utilisateur foreign key(id_utilisateur)references utilisateur(id_utilisateur),
add constraint fk_appartenir_groupe foreign key(id_groupe)references groupe(id_groupe);

alter table avoir 
add constraint fk_avoir_article foreign key(id_article)references article(id_article),
add constraint fk_avoir_categorie foreign key(id_categorie) references categorie(id_categorie);

alter table laisser
add constraint fk_laisser_utilisateur foreign key(id_utilisateur) references utilisateur(id_utilisateur),
add constraint fk_laisser_article foreign key(id_article) references article(id_article),
add constraint fk_laisser_commentaire foreign key (id_commentaire)references commentaire(id_commentaire);

alter table echanger
change id_utilisateur id_emetteur int;

alter table echanger change id_utilisateur_1 id_destinataire int;

alter table echanger
add constraint fk_echanger_emetteur foreign key(id_emetteur) references utilisateur(id_utilisateur),
add constraint fk_echanger_destinataire foreign key(id_destinataire)references utilisateur(id_utilisateur);

drop table laisser;

alter table commentaire
add id_article int,
add id_utilisateur int,
add constraint fk_commentaire_utilisateur foreign key(id_utilisateur)references utilisateur(id_utilisateur),
add constraint fk_commentaire_article foreign key(id_article) references article(id_article);

alter table illustrer
add constraint fk_illustrer_article foreign key(id_article)references article(id_article),
add constraint fk_illustrer_media foreign key(id_media)references media (id_media);

alter table message 
drop foreign key fk_message_emetteur,
drop foreign key fk_message_destinataire;

alter table message
drop column id_utilisateur,
drop column id_utilisateur_1;