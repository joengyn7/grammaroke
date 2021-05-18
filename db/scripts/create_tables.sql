DROP TABLE songs;
DROP TABLE users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   email VARCHAR unique,
   name VARCHAR
);

CREATE TABLE songs (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users,
	art_id VARCHAR,
   title VARCHAR,
	lyrics TEXT
);