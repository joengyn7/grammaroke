CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   email VARCHAR unique,
   name VARCHAR
);