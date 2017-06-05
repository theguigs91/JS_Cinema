USE js_cinema;

INSERT INTO user (login, password) VALUES ('root', 'root');
INSERT INTO user (login, password) VALUES ('presci', 'root');
INSERT INTO user (login, password) VALUES ('guigui', 'root');
INSERT INTO user (login, password) VALUES ('kelly', 'root');

INSERT INTO room (numero, places_max)  VALUES (1, 380);
INSERT INTO room (numero, places_max)  VALUES (2, 368);
INSERT INTO room (numero, places_max)  VALUES (3, 341);
INSERT INTO room (numero, places_max)  VALUES (4, 295);
INSERT INTO room (numero, places_max)  VALUES (5, 275);
INSERT INTO room (numero, places_max)  VALUES (6, 178);

INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Je danserai si je veux', 'Maysaloun Hamoud', '01:42:00', 'Drame', 'Layla, Salma et Nour, 3 jeunes femmes palestiniennes, partagent un appartement à Tel Aviv, loin du carcan de leurs villes d\'origine et à l\'abri des regards réprobateurs.');
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Alien: Covenant', 'Ridley Scott', '02:02:00', 'Science fiction', 'Les membres d’équipage du vaisseau Covenant, à destination d’une planète située au fin fond de notre galaxie, découvrent ce qu’ils pensent être un paradis encore intouché.');
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Problemos', 'Eric Judor', '01:25:00', 'Comédie', 'Jeanne et Victor sont deux jeunes Parisiens de retour de vacances. En chemin, ils font une halte pour saluer leur ami Jean-Paul, sur la prairie où sa communauté a élu résidence.');


INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (1, 2, 380, '2017-05-16 19:50:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (1, 2, 380, '2017-05-16 21:10:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (1, 2, 380, '2017-05-16 22:30:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (2, 3, 368, '2017-05-16 18:00:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (2, 3, 368, '2017-05-16 20:00:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (2, 3, 368, '2017-05-16 22:00:00');




