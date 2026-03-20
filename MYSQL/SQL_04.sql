CREATE DATABASE fitcollege;
USE fitcollege;

CREATE TABLE department(
id INT PRIMARY KEY,
name VARCHAR(50),
studentno INT NOT NULL,
teacherno INT NOT NULL
);
INSERT INTO department(id, name, studentno, teacherno)
VALUES
(101, "CSE", 60, 10),
(102, "IOT", 36, 6),
(103, "AIML", 45, 6),
(104, "ECE", 25, 3),
(105, "CE", 32, 4),
(106, "ME", 48, 5),
(107, "EE", 50, 6),
(108, "DS", 55, 7),
(109, "IT", 60, 8),
(110, "CS", 40, 5);

SET SQL_SAFE_UPDATES = 0;

UPDATE department
SET teacherno = 8
WHERE id >105;

UPDATE department
SET studentno = studentno + 5;

DELETE FROM department
WHERE studentno < 40;

SELECT * FROM department;
SHOW TABLES;