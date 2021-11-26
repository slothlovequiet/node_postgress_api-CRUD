CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE jwtdb;

CREATE TABLE users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nickname TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (nickname,email,password) VALUES ('Carl','carl@mail.ru','123456');


--psql -U postgres
--\c jwtdb
--\dt
--heroku pg:psql