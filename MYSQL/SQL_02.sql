CREATE DATABASE apnacollege;
USE apnacollege;
CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(100)
);

INSERT INTO student(rollno, name, marks, grade, city)
VALUES
(101, "Ayan", 467, "A", "Midnapur"),
(102, "Spandan", 432, "A", "Joynagar"),
(103, "Mrinmay Karmakar", 378, "B", "Murshidabad"),
(104, "Akash Maity", 512, "E", "Alipur"),
(105, "Snehasis Patra", 610, "O", "Kolkata"),
(106, "Rasmick Palit", 290, "D", "Hawrah"),
(107, "Samiran Bask", 366, "E", "Bihar"),
(108, "Tuli Bakshi", 480, "A", "Darjeeling"),
(109, "Asmita", 548, "O", "Hooghly"),
(110, "Rani Mukherjee", 425, "A", "Maldha");


SELECT name, grade FROM student;
SELECT DISTINCT grade FROM student;

SELECT * FROM student WHERE marks>400;
SELECT rollno FROM student WHERE rollno<105;

SELECT * 
FROM student 
WHERE marks + 100 < 500;

SELECT * 
FROM student 
WHERE marks>400 AND rollno<105;

SELECT * 
FROM student 
WHERE grade = "E";

SELECT * FROM student;