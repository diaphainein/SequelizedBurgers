CREATE database `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` INT(11) AUTO_INCREMENT PRIMARY KEY,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOL DEFAULT false,
	`date` TIMESTAMP NOT NULL
);