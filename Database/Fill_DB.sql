INSERT INTO user (login, password, zip_code) VALUES ('root', 'root', '75001');
INSERT INTO user (login, password, zip_code) VALUES ('presci', 'root', '77340');
INSERT INTO user (login, password, zip_code) VALUES ('guigui', 'root', '94270');
INSERT INTO user (login, password, zip_code) VALUES ('kelly', 'root', '91000');


INSERT INTO cinema (name, zip_code, adress) VALUES ('CINÉMA APOLLO' , '77340', '62, av. de la Republique 77340 Pontault-Combault');
INSERT INTO cinema (name, zip_code, adress) VALUES ('PATHÉ THIAIS - BELLE EPINE' , '94320', 'Centre commercial Belle-Epine 94320 Thiais');
INSERT INTO cinema (name, zip_code, adress) VALUES ('MK2 BIBLIOTHÈQUE' , '75013', '128-162 avenue de France 75013 Paris 13e arrondissement');
INSERT INTO cinema (name, zip_code, adress) VALUES ('UGC CINÉ CITÉ LES HALLES' , '75001', '7, place de la Rotonde 75001 Paris 1er arrondissement');


INSERT INTO room (cinema_id, numero, places_max) VALUES (1, 1, 328);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (1, 2, 200);

INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 1, 380);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 2, 368);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 3, 341);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 4, 295);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 5, 275);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (2, 6, 178);

INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 1, 380);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 2, 368);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 3, 341);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 4, 295);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 5, 275);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (3, 6, 178);

INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 1, 380);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 2, 368);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 3, 341);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 4, 295);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 5, 275);
INSERT INTO room (cinema_id, numero, places_max)  VALUES (4, 6, 178);


INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Je danserai si je veux', 'Maysaloun Hamoud', '01:42:00', 'Drame', 'Layla, Salma et Nour, 3 jeunes femmes palestiniennes, partagent un appartement à Tel Aviv, loin du carcan de leurs villes d\'origine et à l\'abri des regards réprobateurs.');
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Alien: Covenant', 'Ridley Scott', '02:02:00', 'Science fiction', 'Les membres d’équipage du vaisseau Covenant, à destination d’une planète située au fin fond de notre galaxie, découvrent ce qu’ils pensent être un paradis encore intouché.');
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Problemos', 'Eric Judor', '01:25:00', 'Comédie', 'Jeanne et Victor sont deux jeunes Parisiens de retour de vacances. En chemin, ils font une halte pour saluer leur ami Jean-Paul, sur la prairie où sa communauté a élu résidence.');


INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (1, 1, 328, '2017-05-16 18:45:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (2, 2, 200, '2017-05-16 18:30:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (2, 2, 200, '2017-05-16 20:45:00');

INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (3, 2, 380, '2017-05-16 19:50:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (3, 2, 380, '2017-05-16 21:10:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (3, 2, 380, '2017-05-16 22:30:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (4, 3, 368, '2017-05-16 18:00:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (4, 3, 368, '2017-05-16 20:00:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (4, 3, 368, '2017-05-16 22:00:00');

INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (9, 2, 380, '2017-05-16 17:00:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (9, 2, 380, '2017-05-16 19:40:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (9, 2, 380, '2017-05-16 22:10:00');
INSERT INTO seance (room_id, movie_id, places_available, datetime) VALUES (10, 3, 368, '2017-05-16 19:00:00');





