CREATE DATABASE college;

USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO student VALUES(1, "SNEHASIS", 27);
INSERT INTO student VALUES(2, "BUBAI", 10);

SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS company;
USE company;
CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT UNSIGNED
);

INSERT INTO employee(id, name, salary)
VALUES
(1, "Arpan", 20000),
(2, "Spandan", 50000),
(3, "Kali", 40000);

SELECT * FROM employee;
SHOW TABLES;