create database judo;
use judo;
create table ceinture (
id_ceinture int primary key not null auto_increment,
couleur_ceinture varchar(50) not null
);

create table judoka (
id_judoka int primary key not null auto_increment,
nom_judoka varchar(50) not null,
prenom_judoka varchar(50) not null,
age_judoka int not null,
sexe_judoka varchar(50),
id_ceinture int
);

create table competition (
id_competition int primary key not null auto_increment,
nom_competition varchar(50) not null,
date_debut_competition date not null,
date_fin_competition date not null
);

create table participer (
id_judoka int not null,
id_competition int not null,
primary key (id_judoka, id_competition)
);

alter table judoka
add constraint fk_id_ceinture foreign key (id_ceinture) references ceinture(id_ceinture);

alter table participer
add constraint fk_id_judoka foreign key (id_judoka) references judoka(id_judoka),
add constraint fk_id_competition foreign key (id_competition) references competition(id_competition);

insert into ceinture (couleur_ceinture)
values("blanche"), ("jaune"), ("orange"), ("verte"), ("bleue"), ("marron"), ("noire");

insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_ceinture)
values("Lachance", "Dominique", 16, "F", 2);
insert into judoka (nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_ceinture)
values("Porter", "Gilbert", 18, "H", 3),
("Lemaître", "Anne", 15, "F", 4),
("Robert", "Juliette", 12 , "F", 1),
("Montminy", "Pierre", 17, "H", 5),
("Charrette", "Pascal", 21, "H", 6),
("Guay", "Émilie", 19, "F", 6),
("Maheu", "Louise", 14, "F", 4),
("Poulin", "Raymond", 26, "H", 7),
("Dupret", "Alain", 20, "H", 6);

insert into competition (nom_competition, date_debut_competition, date_fin_competition)
values ("judo31", "2021-02-06", "2021-02-07"),
("judo11", "2021-02-27", "2021-02-28"),
("judo81", "2021-03-20", "2021-03-24"),
("judo82", "2021-04-17", "2021-04-18");

insert into participer (id_competition, id_judoka)
values (1,1),(1,3),(1,4),(2,2),(2,5),(2,6),(2,9),(3,10),(3,9),(4,1),(4,3),(4,8),(4,4);