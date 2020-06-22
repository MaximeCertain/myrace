-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 22 juin 2020 à 17:21
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
(2, 1, 8, 1, 'ouizzzzz', '2020-06-22 15:06:34', '2020-06-22 15:06:34'),
(3, 1, 8, 1, 'ok bobobb', '2020-06-22 15:11:13', '2020-06-22 15:11:13'),
(4, 1, 8, 1, 'ok bobobb', '2020-06-22 15:15:49', '2020-06-22 15:15:49'),
(5, 1, 8, 1, 'ok bobobb', '2020-06-22 15:15:57', '2020-06-22 15:15:57');

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
  `description` varchar(255) DEFAULT NULL,
  `UserId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Races`
--

INSERT INTO `Races` (`id`, `name`, `start`, `finish`, `kilometers`, `elevation`, `max_participants`, `description`, `UserId`, `createdAt`, `updatedAt`) VALUES
(1, '10k cyranoss', '11 rue du foulee', '12 rue du goulee', 12, 152, 12, 'petite course amateur', 6, '2020-06-22 12:18:33', '2020-06-22 12:30:27');

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
(1, 'ROLE_USER', 'ROLE_USER', '2020-06-22 11:03:36', '2020-06-22 11:03:36');

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
(4, NULL, NULL, 8, 1, '2020-06-22 14:15:04', '2020-06-22 14:15:04'),
(5, NULL, NULL, 7, 1, '2020-06-22 14:21:17', '2020-06-22 14:21:17'),
(13, NULL, NULL, 6, 1, '2020-06-22 14:31:39', '2020-06-22 14:31:39');

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
  `age` int NOT NULL,
  `TypeUserId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `firstname`, `lastname`, `email`, `password`, `picture`, `description`, `age`, `TypeUserId`, `createdAt`, `updatedAt`) VALUES
(6, 'vincenzo', 'vincenzo', 'vincenzo2@astana.it', '19', NULL, 'vuelta giro tour', 36, 1, '2020-06-22 12:10:04', '2020-06-22 12:59:48'),
(7, 'vincenzo', 'vincenzo', 'bardet@astana.it', '19', NULL, 'vuelta giro tour', 36, 1, '2020-06-22 13:04:30', '2020-06-22 13:05:06'),
(8, 'vincenzo', 'vincenzo', 'bardet2@astana.it', '$2a$10$dyEhzF0P7VLUKZGGeQ3TX.jwyZN2/YzUut7SCiJCTBbry3g0YlP0K', NULL, 'vuelta giro tour', 36, 1, '2020-06-22 14:13:02', '2020-06-22 14:15:04');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Races`
--
ALTER TABLE `Races`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `TypeMessages`
--
ALTER TABLE `TypeMessages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `TypeUsers`
--
ALTER TABLE `TypeUsers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `UserRaces`
--
ALTER TABLE `UserRaces`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
