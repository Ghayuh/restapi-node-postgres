CREATE DATABASE firstapi;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    EMAIL TEXT
);

INSERT INTO users (name, email) VALUES
    ('joe', 'joe@ibm.com'),
    ('ghayuh', 'ghy@ibm.com');