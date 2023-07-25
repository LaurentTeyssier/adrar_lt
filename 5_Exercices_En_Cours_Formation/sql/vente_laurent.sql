create database vente;

create table product(
id_product int primary key not null auto_increment,
name_product varchar(50) not null,
descriptionç_product text,
price_product real not null,
id_category int
);

create table category(
id_category int primary key not null auto_increment,
name_category varchar(50)
);

create table seller(
id_seller int primary key not null auto_increment,
name_seller varchar(50),
first_name_seller varchar(50)
);

create table receipt(
id_receipt int primary key not null auto_increment,
date_receipt date not null,
id_seller int
);

create table `add`(
id_product int,
id_receipt int,
quantity_add int
);

alter table product
add constraint fk_id_category foreign key (id_category) references category(id_category);

alter table `add`
add primary key (id_product, id_receipt);

alter table `add`
add constraint fk_id_product foreign key (id_product) references product(id_product),
add constraint fk_id_receipt foreign key (id_receipt) references receipt(id_receipt);

alter table receipt
add constraint fk_id_seller foreign key (id_seller) references seller(id_seller);