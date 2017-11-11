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
insert into products( id, product_name, department_name, price, stock_quantity)
values (1, "Lego", "toys", 25, 2);

insert into products( id, product_name, department_name, price, stock_quantity)
values (2, "Eloquent Javascript", "tech",10, 5);

insert into products( id, product_name, department_name, price, stock_quantity)
values (3, "Macbook Pro", "electronics", 1200, 1);

insert into products( id, product_name, department_name, price, stock_quantity)
values (4, "Bananas", "produce", 2,  100);

insert into products( id, product_name, department_name, price, stock_quantity)
values (5, "Playstation 4", "electronics", 300, 12);

insert into products( id, product_name, department_name, price, stock_quantity)
values (6, "Lego", "toys", 25, 2);

insert into products( id, product_name, department_name, price, stock_quantity)
values (7, "Eloquent Javascript", "tech",10, 5);

insert into products( id, product_name, department_name, price, stock_quantity)
values (8, "Macbook Pro", "electronics", 1200, 1);

insert into products( id, product_name, department_name, price, stock_quantity)
values (9, "Bananas", "produce", 2,  100);

insert into products( id, product_name, department_name, price, stock_quantity)
values (10, "Playstation 4", "electronics", 300, 12);
