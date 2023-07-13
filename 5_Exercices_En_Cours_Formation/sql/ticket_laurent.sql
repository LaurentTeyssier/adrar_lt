-- créer la base de données

create database ticket5;
use ticket5;

-- créer les tables

create table product(
id_product int primary key auto_increment not null,
name_product varchar(50) not null,
description_product text not null,
price_product float not null,
id_category int not null
)Engine=InnoDB;

create table category(
id_category int primary key auto_increment not null,
name_category varchar(50) not null
)Engine=InnoDB;

create table receipt(
id_receipt int primary key auto_increment not null,
date_receipt datetime not null,
id_seller int not null
)Engine=InnoDB;

create table seller(
id_seller int primary key auto_increment not null,
name_seller varchar(50) not null,
first_name_seller varchar(50) not null
)Engine=InnoDB;

create table to_add(
id_product int not null,
id_receipt int not null,
qtx_add int not null,
primary key(id_product, id_receipt)
)Engine=InnoDB;

-- Ajouter les contraintes Foreign key

alter table product
add constraint fk_completer_category
foreign key(id_category)
references category(id_category);

alter table receipt
add constraint fk_vendre_seller
foreign key(id_seller)
references seller(id_seller);

alter table to_add
add constraint fk_ajouter_produit
foreign key(id_product)
references product(id_product),
add constraint fk_ajouter_ticket
foreign key(id_receipt)
references receipt(id_receipt);
use ticket5;
-- Ajouter dans la table category
INSERT INTO category(name_category) VALUES('Alimentaire'),('Produit'),('Loisir');
-- Ajouter dans la table product
INSERT INTO product(name_product, description_product, price_product, id_category) VALUES
("tomate", "paquet de 3 kg de tomate", 4.20, 1),
("pain", "baguette de pain de 350 gr", 0.90, 1),
("lessive", "paquet de lessive de 1 kg", 14.30, 2),
("livre", "livre sur le cinéma", 29.99, 3);
-- Ajouter dans la table seller
INSERT INTO seller(name_seller, first_name_seller) VALUES
("Dupond", "Sophie"),
("Albert", "Marc");
-- Ajouter dans la table receipt
INSERT INTO receipt(date_receipt, id_seller) VALUES
("2023-02-03", 1),
("2023-05-06", 2),
("2023-07-14", 2);
-- Ajouter dans la table association to_add
INSERT INTO to_add(id_product, id_receipt, qtx_add) VALUES
(2,1,5),
(1,3,2),
(3,2,1),
(4,1,2);

-- Remplacer le nom de la catégorie alimentaire par alimentation,
UPDATE category SET name_category = "alimentation" WHERE name_category = "alimentaire";
-- Remplacer le nom de la catégorie qui à pour id_category  : 2 par autre.
UPDATE category SET name_category = "autre" WHERE id_category = 2;

-- Remplacer le prix du livre par 34.99,
UPDATE product SET price_product = 34.99 WHERE name_product = "livre";
-- Remplacer la description de la lessive par : "Lessive liquide 40 lavages",
UPDATE product SET description_product = "Lessive liquide 40 lavages" WHERE name_product = "lessive";
-- Augmenter le prix de tous les produits de 1 €.
UPDATE product SET price_product = price_product + 1;

-- Remplacer le nom et prénom du vendeur qui à pour id_seller : 1 par "Dupont, Anne",
UPDATE seller SET name_seller = "Dupont", first_name_seller = "Anne" WHERE id_seller = 1;
-- Remplacer le prénom de tous les vendeurs dont le nom est "Albert" par "Maxime".
UPDATE seller SET first_name_seller = "Maxime" WHERE name_seller = "Albert";

update to_add set qtx_add = qtx_add +2 where id_receipt = 1 and id_product = 2;

update to_add set id_product = 3 where id_receipt = 3 and id_product = 1;

update to_add set qtx_add = 5 where id_receipt = 3 and id_product = 3;

use ticket5;

select id_category as id, name_category as name from category where name_category not like "a%"receipt; 

select id_product id, name_product name, price_product price from product where price_product < 20;

select id_receipt receipt, date_receipt date, id_seller seller from receipt where date_receipt = "2023-02-03";

select first_name_seller firstname, name_seller name from seller;