CREATE DATABASE test;

create database test;
create database tests;
CREATE DATABASE testingulu;
drop database test;
drop database tests;
use testingulu;
create user 'kevinSER'@'localhost'identified by 'mdpkevser00.';
create user 'leyladedijon'@'localhost'identified by 'vivelamoutarde21';
grant create on testingulu to 'leyladedijon'@'localhost';
grant all privileges on *.* to 'kevinSER'@'localhost';
flush privileges;
SHOW GRANTS FOR 'kevinSER'@'localhost';
CREATE TABLE snickers (
ID int,
FirstName varchar(50)
);
CREATE TABLE users (
ID INT PRIMARY KEY NOT NULL auto_increment,
NAME VARCHAR(100),
EMAIL VARCHAR(255) NOT NULL,
BIRTHDATE date
);
INSERT INTO users (NAME, EMAIL, BIRTHDATE)
VALUES ('kevin', 'kevin@gmail.test', '1991-12-18');
INSERT INTO users (NAME, EMAIL, BIRTHDATE)
VALUES ('leyla', 'leyla@gmail.test', '1991-12-18');
create index testindex on users(NAME);
alter table users drop index testindex;
create index users_index_birthdate on users(birthdate);


create table employes(
id int not null,
nom varchar(50) not null,
email varchar(255) not null unique,
age int not null check(age>=18),
salaire decimal(18,2) default 3000.00,
Primary key (id)
);
create table conges (
id int primary key not null auto_increment,
date_debut date not null,
date_fin date not null,
id_employe int,
constraint fk_id_employe foreign key (id_employe) references employes(id)
);

create database shop_db;
create user'admin'@'localhost'identified by 'admin00!';
create user 'developer'@'localhost' identified by 'developer00!';
grant all privileges on shop_db.* to 'admin'@'localhost';
grant create,alter,drop,index,update on shop_db.* to 'developer'@'localhost';

create table Customer (
id int primary key not null auto_increment,
username varchar(16) not null unique,
email varchar (255) not null unique,
password varchar(32) not null,
create_time timestamp
);

create table Adress (
id int primary key not null auto_increment,
road_number int not null,
road_name varchar(100) not null,
zip_code char(5) not null,
city_name varchar(100) not null,
country_name varchar(100) not null
);

create table `Order` (
id int primary key not null auto_increment,
ref varchar(45) not null unique,
`date` date not null,
shipping_cost decimal (6,2) default 0.00,
total_amount decimal(6,2) default 0.00
);

create table Product(
ref char(20) primary key,
name varchar(100) not null,
price decimal(6,2) not null,
description longtext,
stock int default 0
);

create table Order_Product(
ref_product char(20),
constraint fk_ref_product foreign key(ref_product) references Product(ref),
id_order int,
constraint fk_id_order foreign key(id_order) references `Order`(id),
quantity int default 0
);

alter table Adress
drop column zip_code;
alter table Adress
drop column city_name;

create table City(
city_name varchar(50) not null primary key
);
alter table City
add column zip_code char(5);

create table Country (
zip_code char(5) not null primary key
);

truncate table Country;
alter table Country 
add column country_name varchar(50);


alter table Adress
add column zip_code char(5),
constraint fk_zip_code foreign key(zip_code) references Country(zip_code);


alter table Adress
add column city_name varchar(50),
constraint fk_city_name foreign key (city_name) references C
/*create table Category(
name varchar(16),
description longtext*/
