
-- SELECT QUERIES --

--Select all rows and columns from Users
SELECT * FROM USERS;

--Select and display all rows and columns from Avatars with User last name in place of user id
SELECT a.id, u.last_name, a.name 
FROM avatars a JOIN users u ON a.id = u.id;

--Select and display all rows and columns from Cosmetics
SELECT * FROM cosmetics;

--Select and display all rows and columns from Orders, replacing user_id with User's last name
SELECT o.id, u.last_name, order_date, total, status 
FROM orders o JOIN users u ON u.id = o.id;

--INSERT QUERIES--

--USERS--

-- add a new USER
INSERT INTO users (first_name, last_name, screen_name, dob)
VALUES (:first_name, :last_name, :screen_name, :dob);

-- Get all User information in alphabetical order by first name
SELECT id, first_name, last_name, screen_name, dob FROM users
ORDER BY first_name ASC;

-- Delete a USER
DELETE FROM users WHERE id = :selected_user_id; -- corresponding table data, not sure how to do this



--AVATARS--

-- add a new AVATAR
INSERT INTO avatars (name, user_id)
VALUES (:avatar_name, :user_name);

-- Get list of user_id and avatar names in ascending order of user_id
SELECT user_id, name FROM avatars
ORDER BY user_id ASC;

-- Delete an AVATAR
DELETE FROM avatars WHERE id = :selected_avatar_id; -- corresponding table data, not sure how to do this




--COSMETICS--

-- add a new COSMETIC
INSERT INTO cosmetics (description, type, price)
VALUES (:description, :type, :price);

-- Get description, type, price of all cosmetics by highest price to lowest
SELECT description, type, price FROM cosmetics
ORDER BY price DESC;

-- Delete a COSMETIC
DELETE FROM cosmetics WHERE id = :selected_cosmetic_id; -- corresponding table data




--ORDERS--

-- add a new ORDER
INSERT INTO orders (order_date, total, status, user_id)
VALUES (:order_date, :total, :status, :user);

-- Get Name, Order Date, Description, price, total, and status of ALL ORDERS, sorted by order date
SELECT order_date, first_name, last_name, description, price, total, status FROM users
INNER JOIN orders on users.id = user_id 
INNER JOIN orders_cosmetics on orders.id = order_id
INNER JOIN cosmetics ON cosmetics.id = asset_id;
ORDER BY order_date DESC;

-- Delete an ORDER
DELETE FROM orders WHERE id = :selected_order_id; -- corresponding table data




--ORDERS_COSMETICS--

-- add a new ORDERS_COSMETICS
INSERT INTO orders_cosmetics(order_id, asset_id)
VALUES (:order, :cosmetic);

-- 




-- USERS_COSMETICS--

--add a new USERS_COSMETICS
INSERT INTO users_cosmetics(user_id, asset_id)
VALUES (:user, :cosmetic);

--
