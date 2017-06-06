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
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('MOI, MOCHE ET MÉCHANT 3', 'Kyle Balda', '01:25:00', 'Animation', 'Dans ce troisième volet, Balthazar Bratt, un ancien enfant star reste obnubilé par le rôle qu''il a interprété dans les années 80. Il va devenir l''ennemi juré de Gru.');
INSERT INTO movie (name, realisator, time, genre, description) VALUES ('Your name', 'Makoto Shinkai', '01:46:00', 'Animation', 'Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d’imaginer pouvoir vivre l’aventure urbaine dans la peau de… Taki, un jeune lycéen vivant à Tokyo, occupé entre son petit boulot dans un restaurant italien et ses nombreux amis. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon au point qu’elle croit vivre la réalité... Tout bascule lorsqu’elle réalise que Taki rêve également d’une vie dans les montagnes, entouré d’une famille traditionnelle… dans la peau d’une jeune fille ! Une étrange relation s’installe entre leurs deux corps qu’ils accaparent mutuellement. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?');

INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (1, 2, 380, '2017-05-16', '19:50:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (1, 2, 380, '2017-05-16', '21:10:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (1, 2, 380, '2017-05-16', '22:30:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (2, 3, 368, '2017-05-16', '18:00:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (2, 3, 368, '2017-05-16', '20:00:00');
INSERT INTO seance (room_id, movie_id, places_available, date, time) VALUES (2, 3, 368, '2017-05-16', '22:00:00');