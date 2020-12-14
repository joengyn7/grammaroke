CREATE TABLE songs (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users,
	title VARCHAR,
	lyrics TEXT
);