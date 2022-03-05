
CREATE TABLE users(
id int(11) NOT NULL AUTO_INCREMENT,
first_name varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
screen_name varchar(255) NOT NULL,
dob date NOT NULL,
PRIMARY KEY(id));

CREATE TABLE avatars(
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
user_id int,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id));

CREATE TABLE orders(
id int(11) NOT NULL AUTO_INCREMENT,
order_date date NOT NULL,
total DECIMAL(13,2) NOT NULL,
status varchar(255) NOT NULL,
user_id int,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id));

CREATE TABLE cosmetics(
id int(11) NOT NULL AUTO_INCREMENT,
description varchar(255) NOT NULL,
type varchar(255),
price DECIMAL(13,2) NOT NULL,
PRIMARY KEY(id));

CREATE TABLE orders_cosmetics(
order_id int,
asset_id int,
PRIMARY KEY(order_id, asset_id),
FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE,
FOREIGN KEY(asset_id) REFERENCES cosmetics(id)) ON DELETE CASCADE;

CREATE TABLE users_cosmetics(
user_id int,
asset_id int,
PRIMARY KEY(user_id, asset_id),
FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
FOREIGN KEY(asset_id) REFERENCES cosmetics(id)) ON DELETE CASCADE;

INSERT INTO `users` VALUES (1,'Jon','Ramm','jonargee','1986-03-19'),(2,'Jim','Jenkins','jenk19','1992-02-11'),(3,'Bill','Fredrickson','billyfred','1978-10-13'),(4,'Mary','Williams','willmar','0200-03-01'),(5,'Celete','Marwin','celly','1984-06-22');
INSERT INTO `avatars` VALUES (1,'Sebille',1),(2,'King Kong',2),(3,'Sparkle Pony',2),(4,'Large Firey Dragon',3),(5,'T-Rex',4);
INSERT INTO `cosmetics` VALUES (1,'Viking Horns','Head Gear',2.99),(2,'Cumberbund','Torso Gear',2.99),(3,'High Heels','Feet Gear',2.99),(4,'Ski Mask','Head Gear',0.99),(5,'Puffy Jacket','Torso Gear',4.99),(6,'Snow Boots','Feet Gear',6.99);
INSERT INTO `orders` VALUES (1,'2022-02-21',9.99,'Paid',1),(2,'2022-02-21',11.99,'Pending',2),(3,'2022-01-12',2.99,'Paid',1);
INSERT INTO `orders_cosmetics` VALUES (1,1),(3,1),(3,2),(3,3),(1,4),(3,4),(2,5),(2,6);
INSERT INTO `users_cosmetics` VALUES (1,1),(2,1),(1,2),(3,2),(3,3),(1,5),(3,5),(2,6);
