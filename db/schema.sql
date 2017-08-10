### Schema

CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burgers (
	id int auto_increment primary key
	,burger_name varchar(60)
	, devoured boolean
	, date timestamp
	);