CREATE USER 'kev01'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'kev01'@'localhost' with GRANT OPTION;






drop database if exists bamazon;

create database bamazon; 

use bamazon; 

create table products
(
id integer(10) auto_increment not null,
product_name  varchar(20) not null, 
department_name varchar(20) not null,
price integer(10) not null,
stock_quantity integer(20),
primary key (id)
);
insert into products( id, product_name, department_name, price, stock_quantity)
values (.01, "Lego", "toys", 25, 2);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.02, "Eloquent Javascript", "tech",10, 5);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.03, "Macbook Pro", "electronics", 1200, 1);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.04, "Bananas", "produce", 2,  100);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.05, "Playstation 4", "electronics", 300, 12);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.01, "Lego", "toys", 25, 2);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.02, "Eloquent Javascript", "tech",10, 5);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.03, "Macbook Pro", "electronics", 1200, 1);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.04, "Bananas", "produce", 2,  100);

insert into products( id, product_name, department_name, price, stock_quantity)
values (.05, "Playstation 4", "electronics", 300, 12);