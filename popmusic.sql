drop database if exists bamazon;

create database bamazon; 

use bamazon; 

create table products
(
id integer(5) auto_increment not null,
product_name  varchar(20) not null, 
department_name varchar(20) not null,
price integer(10) not null,
stock_quantity integer(20),
primary key (id)
);