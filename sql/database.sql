DROP DATABASE IF EXISTS books_express;
CREATE DATABASE books_express CHARSET utf8mb4;
USE books_express;

CREATE TABLE books (
    id_book INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    image VARCHAR(200),
    description TEXT
    
);

INSERT INTO books(title, author, image, description) VALUES('"El gran cambiazo"',"Roald Dahl","https://miencuentroconlaliteratura.files.wordpress.com/2019/07/elgrancambiazo.jpg?w=398&h=600","Humor erotico");