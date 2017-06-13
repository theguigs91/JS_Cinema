USE js_cinema;

INSERT INTO role (name) VALUES ('visitor');
INSERT INTO role (name) VALUES ('admin');

INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('root', 'root@epita.fr', '63a9f0ea7bb98050796b649e85481845', 'Root', 'Root', '2017-05-01', 'Femme', 2);
INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('san_p', 'san_p@epita.fr', '63a9f0ea7bb98050796b649e85481845', 'San', 'Prescillia', '1996-01-19', 'Femme', 2);
INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('guigui', 'audine_g@epita.fr', '63a9f0ea7bb98050796b649e85481845', 'Audinet', 'Guillaume', '2017-05-01', 'Homme', 2);
INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('luu_k', 'luu_k@epita.fr', '5f4dcc3b5aa765d61d8327deb882cf99', 'Luu', 'Kelly', '1995-10-17', 'Femme', 2);
INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('ly_h', 'ly_h@epitech.eu', '5f4dcc3b5aa765d61d8327deb882cf99', 'Ly', 'Henri', '1992-03-18', 'Homme', 1);
INSERT INTO user (login, email, password, lastname, firstname, birthdate, gender, role_id) VALUES ('tran_m', 'tran_m@mail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'Tran', 'Marie', '1995-01-11', 'Femme', 1);

INSERT INTO room (numero, places_max)  VALUES (1, 380);
INSERT INTO room (numero, places_max)  VALUES (2, 368);
INSERT INTO room (numero, places_max)  VALUES (3, 341);
INSERT INTO room (numero, places_max)  VALUES (4, 295);
INSERT INTO room (numero, places_max)  VALUES (5, 275);
INSERT INTO room (numero, places_max)  VALUES (6, 178);

INSERT INTO movie (name, realisator, time, date, genre, description) VALUES ('Je danserai si je veux', 'Maysaloun Hamoud', '01:42:00', '2016-12-28', 'Drame', 'Layla, Salma et Nour, 3 jeunes femmes palestiniennes, partagent un appartement à Tel Aviv, loin du carcan de leurs villes d\'origine et à l\'abri des regards réprobateurs.');
INSERT INTO movie (name, realisator, time, date, genre, description) VALUES ('Alien: Covenant', 'Ridley Scott', '02:02:00', '2017-05-04', 'Science fiction', 'Les membres d’équipage du vaisseau Covenant, à destination d’une planète située au fin fond de notre galaxie, découvrent ce qu’ils pensent être un paradis encore intouché.');
INSERT INTO movie (name, realisator, time, date, genre, description) VALUES ('Problemos', 'Eric Judor', '01:25:00', '2017-10-10', 'Comédie', 'Jeanne et Victor sont deux jeunes Parisiens de retour de vacances. En chemin, ils font une halte pour saluer leur ami Jean-Paul, sur la prairie où sa communauté a élu résidence.');
INSERT INTO movie (name, realisator, time, date, genre, description) VALUES ('MOI, MOCHE ET MÉCHANT 3', 'Kyle Balda', '01:25:00', '2017-07-05', 'Animation', 'Dans ce troisième volet, Balthazar Bratt, un ancien enfant star reste obnubilé par le rôle qu''il a interprété dans les années 80. Il va devenir l''ennemi juré de Gru.');
INSERT INTO movie (name, realisator, time, date, genre, description) VALUES ('Your name', 'Makoto Shinkai', '01:46:00', '2016-12-28', 'Animation', 'Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d’imaginer pouvoir vivre l’aventure urbaine dans la peau de… Taki, un jeune lycéen vivant à Tokyo, occupé entre son petit boulot dans un restaurant italien et ses nombreux amis. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon au point qu’elle croit vivre la réalité... Tout bascule lorsqu’elle réalise que Taki rêve également d’une vie dans les montagnes, entouré d’une famille traditionnelle… dans la peau d’une jeune fille ! Une étrange relation s’installe entre leurs deux corps qu’ils accaparent mutuellement. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?');

INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (1, 2, 380, '2017-06-13', '10:00:00', '11:42:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (1, 2, 380, '2017-06-13', '12:00:00', '13:42:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (1, 2, 380, '2017-06-13', '14:00:00', '15:42:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (1, 3, 380, '2017-06-13', '16:00:00', '17:42:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-14', '10:00:00', '11:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-14', '11:35:00', '13:00:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-14', '14:00:00', '15:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 5, 295, '2017-06-14', '16:00:00', '17:46:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-15', '10:00:00', '11:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-15', '11:35:00', '13:00:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-15', '14:00:00', '15:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 5, 295, '2017-06-15', '16:00:00', '17:46:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-16', '10:00:00', '11:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-16', '11:35:00', '13:00:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 4, 295, '2017-06-16', '14:00:00', '15:25:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time_start, time_end) VALUES (2, 5, 295, '2017-06-16', '16:00:00', '17:46:00');