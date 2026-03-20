CREATE DATABASE spring_jdbc_db;

USE spring_jdbc_db;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100)
);

SELECT * FROM user;