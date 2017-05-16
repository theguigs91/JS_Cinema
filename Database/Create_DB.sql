CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    login VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
	zip_code VARCHAR(50) NOT NULL

);

CREATE TABLE cinemas
(
    id SERIAL PRIMARY KEY NOT NULL,
    code VARCHAR(5) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    zip_code VARCHAR(50) NOT NULL
    
);

CREATE TABLE rooms
(
    id SERIAL PRIMARY KEY NOT NULL,
    cinema_id BIGINT NOT NULL,
    numero BIGINT NOT NULL,
    places_max BIGINT NOT NULL
    
);

CREATE TABLE movies
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    realisator VARCHAR(40) NOT NULL
    
);

CREATE TABLE seances
(
    id SERIAL PRIMARY KEY NOT NULL,
    salle_id BIGINT NOT NULL,
    movie_id BIGINT NOT NULL,
    places_available BIGINT NOT NULL
    
);

CREATE TABLE reservation
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT NOT NULL,
    seance_id BIGINT NOT NULL    
);

