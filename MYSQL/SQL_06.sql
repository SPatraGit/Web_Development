CREATE DATABASE library;
USE library;

CREATE TABLE books(
id INT PRIMARY KEY,
name VARCHAR(50),
author_name VARCHAR(50),
page INT NOT NULL,
price INT NOT NULL
);

INSERT INTO books(id, name, author_name, page, price)
VALUES
(101, "Bixbag", "LLR", 200, 350),
(102, "Aleone", "WER", 300, 450),
(103, "Spetion", "GWANO", 500, 700);

ALTER TABLE books
ADD COLUMN publisher_name VARCHAR(100);

ALTER TABLE books
DROP COLUMN publisher_name;

SELECT * FROM books;