CREATE database js_cinema;
USE js_cinema;

CREATE TABLE user
(
    id SERIAL PRIMARY KEY NOT NULL,
    login VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE room
(
    id SERIAL PRIMARY KEY NOT NULL,
    numero BIGINT NOT NULL,
    places_max BIGINT NOT NULL
);

CREATE TABLE movie
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    realisator VARCHAR(40) NOT NULL,
    time TIME NOT NULL,
    genre VARCHAR(50),
    description VARCHAR(200)
);

CREATE TABLE seance
(
    id SERIAL PRIMARY KEY NOT NULL,
    room_id BIGINT UNSIGNED NOT NULL,
    movie_id BIGINT UNSIGNED NOT NULL,
    places_available BIGINT NOT NULL,
    datetime DATETIME NOT NULL,
    CONSTRAINT fk_room_id FOREIGN KEY (room_id)
	REFERENCES room(id),
    CONSTRAINT fk_movie_id FOREIGN KEY (movie_id)
	REFERENCES movie(id)
);

CREATE TABLE reservation
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    seance_id BIGINT UNSIGNED NOT NULL,
    CONSTRAINT fk_user_idd FOREIGN KEY (user_id)
	REFERENCES user(id),
    CONSTRAINT fk_seance_id FOREIGN KEY (seance_id)
	REFERENCES seance(id)
);

