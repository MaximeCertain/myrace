-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 08 juil. 2020 à 21:17
-- Version du serveur :  8.0.20-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `myrace`
--

-- --------------------------------------------------------

--
-- Structure de la table `Messages`
--

CREATE TABLE `Messages` (
  `id` int NOT NULL,
  `RaceId` int NOT NULL,
  `UserId` int NOT NULL,
  `TypeMessageId` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Messages`
--

INSERT INTO `Messages` (`id`, `RaceId`, `UserId`, `TypeMessageId`, `description`, `createdAt`, `updatedAt`) VALUES
(116, 20, 6, 2, 'J\'ai pas été top ce jour là 🤔🤔', '2020-07-08 19:10:10', '2020-07-08 19:10:10'),
(117, 1, 7, 1, 'Course annulée ??? Pas cool 😭', '2020-07-08 19:11:39', '2020-07-08 19:11:39');

-- --------------------------------------------------------

--
-- Structure de la table `Races`
--

CREATE TABLE `Races` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `start` varchar(255) DEFAULT NULL,
  `finish` varchar(255) DEFAULT NULL,
  `kilometers` float DEFAULT NULL,
  `elevation` float DEFAULT NULL,
  `max_participants` int DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `UserId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `validatedAdmin` tinyint(1) DEFAULT '0',
  `reasonAdmin` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Races`
--

INSERT INTO `Races` (`id`, `name`, `start`, `finish`, `kilometers`, `elevation`, `max_participants`, `description`, `UserId`, `createdAt`, `updatedAt`, `date`, `validatedAdmin`, `reasonAdmin`) VALUES
(1, 'Hitema - Paris Nord', 'rue bouelvard gallieni', 'Garde de Paris Nord', 9.7, 152, 12, 'Parcours d\'Hitema à Patris Nord.\r\nChemin libre ... l\'objectif étant d\'arriver en premier ', 6, '2020-06-22 12:18:33', '2020-07-08 18:49:48', '2020-08-10 08:29:17', 1, 'Aspect sécurité non respecté (course en métropole sur parcours dangereux)'),
(2, 'Obstacles Races Cormeilles', 'Rue du stade de COrmeilles', 'Rue du stade de COrmeilles', 12, 152, 12, 'BOucle autour de cormeilles Le 19 juillet 1896, porte Maillot à Paris, Pierre Giffard donne le départ de cette épreuve olympique remise à l\'honneur grâce à l\'initiative du pédagogue Michel Bréal. Cette course fut courue quelques jours après celle des Jeux olympiques d\'Athènes. Le Britannique Len Hurst remporta l’épreuve en 2 h 31 min 30 s, devant 190 autres concurrents1.\r\n\r\nPendant de nombreuses années, deux grandes courses de fond se déroulaient à Paris : le Cross de L\'Humanité (1933-1968) dans le bois de Vincennes et le concurrent Cross du Figaro (1961-2000) dans le bois de Boulogne, épreuves de cross-country courues sur en général 10 000 mètres. Les vrais débuts du Marathon de Paris en tant qu\'organisation ont lieu le 18 septembre 1976. À cette époque, cette épreuve de course à pied de longue distance n\'est pas encore un sport très populaire et la course réunit seulement 126 athlètes. Les 42,195 km étaient effectués exclusivement dans le bois de Boulogne7. En 1979, le circuit passait par toutes les mairies d’arrondissement de Paris, pour finir sur le parvis de Notre-Dame. Le Marathon de Paris est organisé chaque année depuis cette date. En 1984, l\'épreuve passe la barre des 10 000 arrivants. Le Marathon de Paris continue ensuite de grossir régulièrement et réunit plus de 40 000 arrivants en 20158.\r\nIdentité visuelle\r\n\r\nL\'identité visuelle du Marathon de Paris est longtemps restée la même. Un logo reconnu par tous les coureurs avec son utilisation de la Tour Eiffel pour représenter la lettre A du mot Marathon et Paris.\r\n\r\nÀ partir de 2013, le Marathon de Paris devient officiellement Schneider Electric Marathon de Paris. Amaury Sport Organisation (ASO) et Schneider Electric ont signé un partenariat pour que la multinationale basée en France soit partenaire titre de la course9. ', 6, '2020-06-30 07:13:30', '2020-07-06 19:16:58', '2020-07-30 08:29:17', 0, NULL),
(19, 'Marathon forêt de compienge', 'Compiegne ', 'Chantilly', 42, 220, 7, 'circuit autour de la forêt de commpienge sur 42 km', 7, '2020-07-04 12:29:12', '2020-07-04 12:29:12', '2020-09-18 12:29:12', 0, NULL),
(20, 'Vernon - Cergy Pontoise', 'Vernon - 85 rue de Marzelles', 'Université cergy pontoise', 51.9, 526, 15, 'Course longeant la piste cyclable.', 7, '2020-07-04 12:33:29', '2020-07-04 12:33:29', '2020-07-04 12:33:29', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200621151041-create-type-user.js'),
('20200621151257-create-user.js'),
('20200622114611-create-race.js'),
('20200622121655-create-race.js'),
('20200622124303-create-user-races.js'),
('20200622143356-create-type-message.js'),
('20200622143552-create-message.js');

-- --------------------------------------------------------

--
-- Structure de la table `TypeMessages`
--

CREATE TABLE `TypeMessages` (
  `id` int NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `TypeMessages`
--

INSERT INTO `TypeMessages` (`id`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'pre_race', '2020-06-22 16:45:14', '2020-06-22 16:45:14'),
(2, 'post_race', '2020-06-22 16:45:20', '2020-06-22 16:45:20');

-- --------------------------------------------------------

--
-- Structure de la table `TypeUsers`
--

CREATE TABLE `TypeUsers` (
  `id` int NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `TypeUsers`
--

INSERT INTO `TypeUsers` (`id`, `label`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'Utilisateur', 'ROLE_USER', '2020-06-22 11:03:36', '2020-06-22 11:03:36'),
(2, 'Administrateur', 'ROLE_ADMIN', '2020-06-30 08:56:29', '2020-06-30 08:56:29');

-- --------------------------------------------------------

--
-- Structure de la table `UserRaces`
--

CREATE TABLE `UserRaces` (
  `id` int NOT NULL,
  `bibNumber` varchar(255) DEFAULT NULL,
  `time_achieved` float DEFAULT NULL,
  `UserId` int NOT NULL,
  `RaceId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `UserRaces`
--

INSERT INTO `UserRaces` (`id`, `bibNumber`, `time_achieved`, `UserId`, `RaceId`, `createdAt`, `updatedAt`) VALUES
(4, '145', 49.99, 8, 1, '2020-06-22 14:15:04', '2020-07-08 17:52:16'),
(5, '17', 15.36, 6, 2, '2020-06-22 14:21:17', '2020-06-22 14:21:17'),
(13, '14', 32.15, 6, 1, '2020-06-22 14:31:39', '2020-06-22 14:31:39'),
(18, '451', 265.13, 7, 20, '2020-07-04 16:53:15', '2020-07-08 17:50:29'),
(63, '456', 256.13, 6, 20, '2020-07-04 18:07:01', '2020-07-08 17:43:00'),
(64, '12', 45.32, 7, 1, '2020-07-05 07:03:39', '2020-07-05 07:03:39'),
(65, '75', 51, 7, 2, '2020-07-08 17:53:30', '2020-07-08 17:53:30'),
(66, '45', 56, 8, 20, '2020-07-08 17:54:04', '2020-07-08 17:54:04'),
(67, '51', 320.12, 12, 20, '2020-07-08 19:06:39', '2020-07-08 19:06:39'),
(68, NULL, NULL, 6, 19, '2020-07-08 19:13:02', '2020-07-08 19:13:02');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `TypeUserId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `firstname`, `lastname`, `email`, `password`, `picture`, `description`, `age`, `TypeUserId`, `createdAt`, `updatedAt`) VALUES
(6, 'Romain', 'Bardetto', 'romain@admin.fr', '$2a$10$d2CusLf5CcQYWZd93EyLC.bX7OgfmAZz3lj4lJk.4jW.rJgm.VXMu', NULL, 'vuelta giro tour', 26, 2, '2020-06-22 12:10:04', '2020-07-08 19:00:58'),
(7, 'Philippe', 'Sisteron', 'vincenzo@astana.it', '$2a$10$WeqvQZuBURGgXEajnG/t4Ouvt0SFmsmsVDRB/Krp.YaFqomvnLbiW', NULL, 'vuelta giro tour', 22, 1, '2020-06-22 13:04:30', '2020-07-08 19:01:11'),
(8, 'Jean', 'Utrillo', 'bardet@astana.it', '$2a$10$tALjdnTL7SMUmHpDmczKWeoeX.LPJjp7iNOa9nLFhvqCQ47n.yqgW', NULL, 'vuelta giro tour', 19, 1, '2020-06-22 14:13:02', '2020-07-08 18:53:03'),
(12, 'John', 'punk', 'J.punk@mail.fr', '$2a$10$Eyd/ntdzlP9FuXlnm.vY1O55zS5XVYShEIf2nYKe8k1He1JZ32xxu', NULL, NULL, NULL, 1, '2020-07-08 19:06:12', '2020-07-08 19:06:12');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `RaceId` (`RaceId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `TypeMessageId` (`TypeMessageId`);

--
-- Index pour la table `Races`
--
ALTER TABLE `Races`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `TypeMessages`
--
ALTER TABLE `TypeMessages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `TypeUsers`
--
ALTER TABLE `TypeUsers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `UserRaces`
--
ALTER TABLE `UserRaces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_race_participation` (`UserId`,`RaceId`),
  ADD KEY `RaceId` (`RaceId`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TypeUserId` (`TypeUserId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT pour la table `Races`
--
ALTER TABLE `Races`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `TypeMessages`
--
ALTER TABLE `TypeMessages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `TypeUsers`
--
ALTER TABLE `TypeUsers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `UserRaces`
--
ALTER TABLE `UserRaces`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `Messages_ibfk_1` FOREIGN KEY (`RaceId`) REFERENCES `Races` (`id`),
  ADD CONSTRAINT `Messages_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `Messages_ibfk_3` FOREIGN KEY (`TypeMessageId`) REFERENCES `TypeMessages` (`id`);

--
-- Contraintes pour la table `Races`
--
ALTER TABLE `Races`
  ADD CONSTRAINT `Races_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`);

--
-- Contraintes pour la table `UserRaces`
--
ALTER TABLE `UserRaces`
  ADD CONSTRAINT `UserRaces_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `UserRaces_ibfk_2` FOREIGN KEY (`RaceId`) REFERENCES `Races` (`id`);

--
-- Contraintes pour la table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`TypeUserId`) REFERENCES `TypeUsers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
