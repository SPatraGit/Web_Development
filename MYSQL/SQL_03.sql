CREATE DATABASE fitcollege;
USE fitcollege;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT NOT NULL,
dept VARCHAR(50),
city VARCHAR(100)
);

INSERT INTO teacher(id, name, salary, dept, city)
VALUES
(101, "Ayan", 40000, "AIML", "Midnapur"),
(102, "Spandan", 50000, "AIML", "Joynagar"),
(103, "Mrinmay Karmakar", 60000, "IOT", "Murshidabad"),
(104, "Akash Maity", 40000, "ECE", "Alipur"),
(105, "Snehasis Patra", 50000, "IOT", "Kolkata"),
(106, "Rasmick Palit", 60000, "CSE", "Hawrah"),
(107, "Samiran Bask", 40000, "ECE", "Bihar"),
(108, "Tuli Bakshi", 50000, "CSE", "Darjeeling"),
(109, "Asmita", 60000, "CSE", "Hooghly"),
(110, "Rani Mukherjee", 40000, "AIML", "Maldha");

SELECT * 
FROM teacher 
WHERE salary > 50000
LIMIT 5;

SELECT * 
FROM teacher 
ORDER BY city ASC;

SELECT * 
FROM teacher 
ORDER BY salary DESC
LIMIT 5;

SELECT AVG(salary)
FROM teacher;


SELECT salary, count(name)
FROM teacher
GROUP BY salary;

SELECT salary, count(name)
FROM teacher
GROUP BY salary
HAVING max(salary)>40000;

SELECT salary
FROM teacher
WHERE id > 106
GROUP BY salary
HAVING max(salary)>40000
ORDER BY salary DESC;

SELECT * FROM teacher;