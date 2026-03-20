CREATE DATABASE club;
USE club;

CREATE TABLE socialclub(
id_items INT PRIMARY KEY,
name_items VARCHAR(50),
member_no INT 
);

INSERT INTO socialclub(id_items, name_items, member_no)
VALUES
(001, "Music", 15),
(002, "Dance", 25),
(003, "Drawing", 20),
(004, "Theatre", 30),
(005, "Photography", 10);

UPDATE socialclub
SET id_items = 007
WHERE id_items = 004;

SELECT * FROM socialclub;

CREATE TABLE sportsclub(
id_sport INT PRIMARY KEY,
name_sport VARCHAR(50),
player_id INT,
FOREIGN KEY (player_id) REFERENCES socialclub(id_items)
ON UPDATE CASCADE
ON DELETE CASCADE
);

INSERT INTO sportsclub(id_sport, name_sport, player_id)
VALUES
(0001, "Cricket", 001),
(0002, "Football", 003),
(0003, "Volly", 001),
(0004, "Betminton", 002),
(0005, "Hocky", 004),
(0006, "Busket Ball", 005),
(0007, "Chess", 004);

SELECT * FROM sportsclub;