/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.5.28-MariaDB, for debian-linux-gnueabihf (armv8l)
--
-- Host: localhost    Database: idculver
-- ------------------------------------------------------
-- Server version	10.5.28-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `idculver`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `idculver` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `idculver`;

--
-- Table structure for table `battle_pack`
--

DROP TABLE IF EXISTS `battle_pack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `battle_pack` (
  `set_number` int(11) NOT NULL DEFAULT 0,
  `set_name` varchar(50) NOT NULL,
  `release_year` year(4) NOT NULL,
  `source_id` int(11) NOT NULL,
  `piece_count` int(11) DEFAULT NULL,
  `msrp` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`set_number`),
  KEY `source_id` (`source_id`),
  CONSTRAINT `battle_pack_ibfk_1` FOREIGN KEY (`source_id`) REFERENCES `source` (`source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battle_pack`
--

LOCK TABLES `battle_pack` WRITE;
/*!40000 ALTER TABLE `battle_pack` DISABLE KEYS */;
INSERT INTO `battle_pack` VALUES (7654,'Droids Battle Pack',2007,3,102,9.99);
INSERT INTO `battle_pack` VALUES (7655,'Clone Troopers Battle Pack',2007,3,58,9.99);
INSERT INTO `battle_pack` VALUES (7667,'Imperial Dropship',2008,10,81,9.99);
INSERT INTO `battle_pack` VALUES (7668,'Rebel Scout Speeder',2008,4,82,9.99);
INSERT INTO `battle_pack` VALUES (7913,'Clone Trooper Battle Pack',2011,11,85,12.99);
INSERT INTO `battle_pack` VALUES (7914,'Mandalorian Battle Pack',2011,11,68,12.99);
INSERT INTO `battle_pack` VALUES (8014,'Clone Walker Battle Pack',2009,11,72,11.99);
INSERT INTO `battle_pack` VALUES (8015,'Assassin Droids Battle Pack',2009,11,94,11.99);
INSERT INTO `battle_pack` VALUES (8083,'Rebel Trooper Battle Pack',2010,5,79,11.99);
INSERT INTO `battle_pack` VALUES (8084,'Snowtrooper Battle Pack',2010,5,74,11.99);
INSERT INTO `battle_pack` VALUES (9488,'Elite Clone Trooper & Commando Droid Battle Pack',2012,11,98,12.99);
INSERT INTO `battle_pack` VALUES (9489,'Endor Rebel Trooper & Imperial Trooper Battle Pack',2012,6,77,12.99);
INSERT INTO `battle_pack` VALUES (75000,'Clone Troopers vs. Droidekas',2013,2,124,12.99);
INSERT INTO `battle_pack` VALUES (75001,'Republic Troopers vs. Sith Troopers',2013,12,63,12.99);
INSERT INTO `battle_pack` VALUES (75034,'Death Star Troopers',2014,6,102,12.99);
INSERT INTO `battle_pack` VALUES (75035,'Kashyyyk Troopers',2014,3,99,12.99);
INSERT INTO `battle_pack` VALUES (75036,'Utapau Troopers',2014,3,83,12.99);
INSERT INTO `battle_pack` VALUES (75037,'Battle on Saleucami',2014,3,183,14.99);
INSERT INTO `battle_pack` VALUES (75078,'Imperial Trooper Transport',2015,13,141,12.99);
INSERT INTO `battle_pack` VALUES (75079,'Shadow Troopers',2015,14,95,12.99);
INSERT INTO `battle_pack` VALUES (75088,'Senate Commando Troops',2015,11,106,12.99);
INSERT INTO `battle_pack` VALUES (75089,'Geonosis Troopers',2015,10,105,12.99);
INSERT INTO `battle_pack` VALUES (75131,'Resistance Trooper Battle Pack',2016,7,112,12.99);
INSERT INTO `battle_pack` VALUES (75132,'First Order Battle Pack',2016,7,88,12.99);
INSERT INTO `battle_pack` VALUES (75133,'Rebel Alliance Battle Pack',2016,15,101,12.99);
INSERT INTO `battle_pack` VALUES (75134,'Galactic Empire Battle Pack',2016,15,109,12.99);
INSERT INTO `battle_pack` VALUES (75164,'Rebel Trooper Battle Pack',2017,16,120,14.99);
INSERT INTO `battle_pack` VALUES (75165,'Imperial Trooper Battle Pack',2017,16,112,14.99);
INSERT INTO `battle_pack` VALUES (75166,'First Order Transport Speeder Battle Pack',2017,7,117,14.99);
INSERT INTO `battle_pack` VALUES (75167,'Bounty Hunter Speeder Bike Battle Pack',2017,5,125,14.99);
INSERT INTO `battle_pack` VALUES (75197,'First Order Specialists Battle Pack',2018,8,108,14.99);
INSERT INTO `battle_pack` VALUES (75198,'Tatooine Battle Pack',2018,4,97,14.99);
INSERT INTO `battle_pack` VALUES (75206,'Jedi and Clone Troopers Battle Pack',2018,2,102,14.99);
INSERT INTO `battle_pack` VALUES (75207,'Imperial Patrol Battle Pack',2018,17,99,14.99);
INSERT INTO `battle_pack` VALUES (75225,'Elite Praetorian Guard Battle Pack',2019,8,109,14.99);
INSERT INTO `battle_pack` VALUES (75226,'Inferno Squad Battle Pack',2019,15,118,14.99);
INSERT INTO `battle_pack` VALUES (75262,'Imperial Dropship – 20th Anniversary Edition',2019,10,125,19.99);
INSERT INTO `battle_pack` VALUES (75266,'Sith Troopers Battle Pack',2020,9,105,14.99);
INSERT INTO `battle_pack` VALUES (75267,'Mandalorian Battle Pack',2020,18,102,14.99);
INSERT INTO `battle_pack` VALUES (75280,'501st Legion Clone Troopers',2020,11,285,29.99);
INSERT INTO `battle_pack` VALUES (75320,'Snowtrooper Battle Pack',2022,5,105,19.99);
INSERT INTO `battle_pack` VALUES (75345,'501st Clone Troopers Battle Pack',2023,11,119,19.99);
INSERT INTO `battle_pack` VALUES (75359,'332nd Ahsoka\'s Clone Trooper Battle Pack',2023,11,108,19.99);
INSERT INTO `battle_pack` VALUES (75372,'Clone Trooper & Battle Droid Battle Pack',2024,11,215,29.99);
INSERT INTO `battle_pack` VALUES (75373,'Ambush on Mandalore Battle Pack',2024,18,109,19.99);
INSERT INTO `battle_pack` VALUES (75412,'Death Trooper & Night Trooper Battle Pack',2025,19,119,19.99);
/*!40000 ALTER TABLE `battle_pack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `battle_pack_has_minifig`
--

DROP TABLE IF EXISTS `battle_pack_has_minifig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `battle_pack_has_minifig` (
  `set_number` int(11) NOT NULL,
  `bl_id` varchar(10) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`set_number`,`bl_id`),
  KEY `bl_id` (`bl_id`),
  CONSTRAINT `battle_pack_has_minifig_ibfk_1` FOREIGN KEY (`set_number`) REFERENCES `battle_pack` (`set_number`),
  CONSTRAINT `battle_pack_has_minifig_ibfk_2` FOREIGN KEY (`bl_id`) REFERENCES `minifig` (`bl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battle_pack_has_minifig`
--

LOCK TABLES `battle_pack_has_minifig` WRITE;
/*!40000 ALTER TABLE `battle_pack_has_minifig` DISABLE KEYS */;
INSERT INTO `battle_pack_has_minifig` VALUES (7654,'sw0001b',4);
INSERT INTO `battle_pack_has_minifig` VALUES (7654,'sw0092',3);
INSERT INTO `battle_pack_has_minifig` VALUES (7655,'sw0091',1);
INSERT INTO `battle_pack_has_minifig` VALUES (7655,'sw0126',2);
INSERT INTO `battle_pack_has_minifig` VALUES (7655,'sw0128a',1);
INSERT INTO `battle_pack_has_minifig` VALUES (7667,'sw0166a',1);
INSERT INTO `battle_pack_has_minifig` VALUES (7667,'sw0188',3);
INSERT INTO `battle_pack_has_minifig` VALUES (7668,'sw0187',4);
INSERT INTO `battle_pack_has_minifig` VALUES (7913,'sw0297',1);
INSERT INTO `battle_pack_has_minifig` VALUES (7913,'sw0298',1);
INSERT INTO `battle_pack_has_minifig` VALUES (7913,'sw0299',2);
INSERT INTO `battle_pack_has_minifig` VALUES (7914,'sw0296',4);
INSERT INTO `battle_pack_has_minifig` VALUES (8014,'sw0201',2);
INSERT INTO `battle_pack_has_minifig` VALUES (8014,'sw0221',1);
INSERT INTO `battle_pack_has_minifig` VALUES (8014,'sw0223',1);
INSERT INTO `battle_pack_has_minifig` VALUES (8015,'sw0222',2);
INSERT INTO `battle_pack_has_minifig` VALUES (8015,'sw0229',3);
INSERT INTO `battle_pack_has_minifig` VALUES (8083,'sw0258',1);
INSERT INTO `battle_pack_has_minifig` VALUES (8083,'sw0259',2);
INSERT INTO `battle_pack_has_minifig` VALUES (8083,'sw0260',1);
INSERT INTO `battle_pack_has_minifig` VALUES (8084,'sw0115',2);
INSERT INTO `battle_pack_has_minifig` VALUES (8084,'sw0261',1);
INSERT INTO `battle_pack_has_minifig` VALUES (8084,'sw0262',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9488,'sw0359',2);
INSERT INTO `battle_pack_has_minifig` VALUES (9488,'sw0377',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9488,'sw0378',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9489,'sw0005b',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9489,'sw0366',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9489,'sw0367',1);
INSERT INTO `battle_pack_has_minifig` VALUES (9489,'sw0368',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75000,'sw0438',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75000,'sw0441',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75000,'sw0442',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75001,'sw0436',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75001,'sw0440',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75001,'sw0443',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75001,'sw0444',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75034,'sw0520',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75034,'sw0521',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75034,'sw0529',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75035,'sw0518',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75035,'sw0519',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75036,'sw0522',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75036,'sw0523',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75037,'sw0001b',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75037,'sw0001c',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75037,'sw0092',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75037,'sw0524',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75078,'sw0578',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75078,'sw0617',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75079,'sw0603',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75079,'sw0604',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75088,'sw0613',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75088,'sw0614',3);
INSERT INTO `battle_pack_has_minifig` VALUES (75089,'sw0605',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75089,'sw0606',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75131,'sw0696',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75131,'sw0697',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75131,'sw0698',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75131,'sw0699',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75132,'sw0667',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75132,'sw0671',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75132,'sw0694',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75132,'sw0695',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75133,'sw0687',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75133,'sw0688',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75133,'sw0689',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75133,'sw0690',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75134,'sw0691',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75134,'sw0692',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75134,'sw0693',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75164,'sw0803',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75164,'sw0804',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75164,'sw0805',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75164,'sw0806',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75165,'sw0585',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75165,'sw0807',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75166,'sw0666',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75166,'sw0667',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75166,'sw0832',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75167,'sw0751',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75167,'sw0828',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75167,'sw0830',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75167,'sw0831a',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75197,'sw0671',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75197,'sw0871',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75197,'sw0886',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75198,'sw0620',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75198,'sw0895',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75198,'sw0896',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75198,'sw0897',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75206,'sw0909',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75206,'sw0910',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75206,'sw0911',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75207,'sw0912',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75207,'sw0913',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75207,'sw0914',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75225,'sw0905',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75225,'sw0989',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75225,'sw0990',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75225,'sw0998',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75226,'sw0986',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75226,'sw0987',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75226,'sw0988',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75226,'sw1000',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75262,'sw0997b',3);
INSERT INTO `battle_pack_has_minifig` VALUES (75262,'sw1031',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75262,'sw1032',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75266,'sw1065',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75266,'sw1075',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75266,'sw1076',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75267,'sw1077',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75267,'sw1078',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75267,'sw1079',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75267,'sw1080',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75280,'sw0001c',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75280,'sw1093',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75280,'sw1094',3);
INSERT INTO `battle_pack_has_minifig` VALUES (75320,'sw1178',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75320,'sw1179',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75320,'sw1181',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75320,'sw1182',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75345,'sw1246',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75345,'sw1247',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75345,'sw1248',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75359,'sw1276',2);
INSERT INTO `battle_pack_has_minifig` VALUES (75359,'sw1277',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75359,'sw1278',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75372,'sw0001d',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75372,'sw1305',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75372,'sw1319',3);
INSERT INTO `battle_pack_has_minifig` VALUES (75372,'sw1320',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75372,'sw1321',3);
INSERT INTO `battle_pack_has_minifig` VALUES (75373,'sw1344',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75373,'sw1345',1);
INSERT INTO `battle_pack_has_minifig` VALUES (75373,'sw1346',2);
/*!40000 ALTER TABLE `battle_pack_has_minifig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `game_id` int(11) NOT NULL,
  `game_title` varchar(50) NOT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (0,'UNDERTALE');
INSERT INTO `game` VALUES (1,'DELTARUNE Chapter 1');
INSERT INTO `game` VALUES (2,'DELTARUNE Chapter 2');
INSERT INTO `game` VALUES (3,'DELTARUNE Chapter 3');
INSERT INTO `game` VALUES (4,'DELTARUNE Chapter 4');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leitmotif`
--

DROP TABLE IF EXISTS `leitmotif`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `leitmotif` (
  `leitmotif_id` int(11) NOT NULL AUTO_INCREMENT,
  `leitmotif_name` varchar(50) NOT NULL,
  PRIMARY KEY (`leitmotif_id`)
) ENGINE=InnoDB AUTO_INCREMENT=405 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leitmotif`
--

LOCK TABLES `leitmotif` WRITE;
/*!40000 ALTER TABLE `leitmotif` DISABLE KEYS */;
INSERT INTO `leitmotif` VALUES (1,'Once Upon a Time');
INSERT INTO `leitmotif` VALUES (2,'Flowey');
INSERT INTO `leitmotif` VALUES (3,'Ruins');
INSERT INTO `leitmotif` VALUES (4,'Uwa!!');
INSERT INTO `leitmotif` VALUES (5,'Enemy Approaching');
INSERT INTO `leitmotif` VALUES (6,'Ghost Fight');
INSERT INTO `leitmotif` VALUES (7,'Determination');
INSERT INTO `leitmotif` VALUES (8,'Home');
INSERT INTO `leitmotif` VALUES (9,'Heartache');
INSERT INTO `leitmotif` VALUES (10,'Sans');
INSERT INTO `leitmotif` VALUES (11,'Papyrus');
INSERT INTO `leitmotif` VALUES (12,'Snowdin');
INSERT INTO `leitmotif` VALUES (13,'Undyne');
INSERT INTO `leitmotif` VALUES (14,'Another Medium');
INSERT INTO `leitmotif` VALUES (15,'Asriel');
INSERT INTO `leitmotif` VALUES (16,'Alphys');
INSERT INTO `leitmotif` VALUES (17,'Dummy Coda');
INSERT INTO `leitmotif` VALUES (18,'Spooktune');
INSERT INTO `leitmotif` VALUES (19,'It\'s Showtime!');
INSERT INTO `leitmotif` VALUES (20,'Metal Crusher');
INSERT INTO `leitmotif` VALUES (21,'Oh! One True Love');
INSERT INTO `leitmotif` VALUES (22,'It\'s Raining Somewhere Else');
INSERT INTO `leitmotif` VALUES (23,'Your Best Nightmare');
INSERT INTO `leitmotif` VALUES (24,'Battle Against a True Hero');
INSERT INTO `leitmotif` VALUES (101,'Don\'t Forget');
INSERT INTO `leitmotif` VALUES (102,'Hometown');
INSERT INTO `leitmotif` VALUES (103,'Susie');
INSERT INTO `leitmotif` VALUES (104,'Roaring Knight');
INSERT INTO `leitmotif` VALUES (105,'The Legend');
INSERT INTO `leitmotif` VALUES (106,'Lancer');
INSERT INTO `leitmotif` VALUES (107,'Rude Buster');
INSERT INTO `leitmotif` VALUES (108,'Field of Hopes and Dreams');
INSERT INTO `leitmotif` VALUES (109,'Quiet Autumn');
INSERT INTO `leitmotif` VALUES (110,'Card Castle');
INSERT INTO `leitmotif` VALUES (111,'Rouxls Kaard');
INSERT INTO `leitmotif` VALUES (112,'Hip Shop');
INSERT INTO `leitmotif` VALUES (113,'Darkness Falls');
INSERT INTO `leitmotif` VALUES (114,'The World Revolving (Freedom)');
INSERT INTO `leitmotif` VALUES (115,'THE HOLY');
INSERT INTO `leitmotif` VALUES (201,'Noelle');
INSERT INTO `leitmotif` VALUES (202,'Queen');
INSERT INTO `leitmotif` VALUES (203,'A CYBER\'S WORLD?');
INSERT INTO `leitmotif` VALUES (204,'Sweet Cap\'n Cakes');
INSERT INTO `leitmotif` VALUES (205,'Berdly');
INSERT INTO `leitmotif` VALUES (206,'HEY EVERY !');
INSERT INTO `leitmotif` VALUES (207,'Spamton');
INSERT INTO `leitmotif` VALUES (301,'Tenna');
INSERT INTO `leitmotif` VALUES (401,'Dark Sanctuary');
INSERT INTO `leitmotif` VALUES (402,'Gerson Boom');
INSERT INTO `leitmotif` VALUES (403,'The Second Sanctuary');
/*!40000 ALTER TABLE `leitmotif` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leitmotif_in_song`
--

DROP TABLE IF EXISTS `leitmotif_in_song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `leitmotif_in_song` (
  `leitmotif_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `track_number` int(11) NOT NULL,
  PRIMARY KEY (`leitmotif_id`,`game_id`,`track_number`),
  KEY `game_id` (`game_id`,`track_number`),
  CONSTRAINT `leitmotif_in_song_ibfk_1` FOREIGN KEY (`leitmotif_id`) REFERENCES `leitmotif` (`leitmotif_id`),
  CONSTRAINT `leitmotif_in_song_ibfk_2` FOREIGN KEY (`game_id`, `track_number`) REFERENCES `song` (`game_id`, `track_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leitmotif_in_song`
--

LOCK TABLES `leitmotif_in_song` WRITE;
/*!40000 ALTER TABLE `leitmotif_in_song` DISABLE KEYS */;
INSERT INTO `leitmotif_in_song` VALUES (1,0,1);
INSERT INTO `leitmotif_in_song` VALUES (1,0,2);
INSERT INTO `leitmotif_in_song` VALUES (1,0,12);
INSERT INTO `leitmotif_in_song` VALUES (1,0,13);
INSERT INTO `leitmotif_in_song` VALUES (1,0,54);
INSERT INTO `leitmotif_in_song` VALUES (1,0,55);
INSERT INTO `leitmotif_in_song` VALUES (1,0,71);
INSERT INTO `leitmotif_in_song` VALUES (1,0,73);
INSERT INTO `leitmotif_in_song` VALUES (1,0,85);
INSERT INTO `leitmotif_in_song` VALUES (1,0,87);
INSERT INTO `leitmotif_in_song` VALUES (1,0,89);
INSERT INTO `leitmotif_in_song` VALUES (1,0,91);
INSERT INTO `leitmotif_in_song` VALUES (1,0,93);
INSERT INTO `leitmotif_in_song` VALUES (1,0,94);
INSERT INTO `leitmotif_in_song` VALUES (1,0,95);
INSERT INTO `leitmotif_in_song` VALUES (1,0,96);
INSERT INTO `leitmotif_in_song` VALUES (1,0,101);
INSERT INTO `leitmotif_in_song` VALUES (1,1,2);
INSERT INTO `leitmotif_in_song` VALUES (1,1,38);
INSERT INTO `leitmotif_in_song` VALUES (1,1,40);
INSERT INTO `leitmotif_in_song` VALUES (2,0,3);
INSERT INTO `leitmotif_in_song` VALUES (2,0,79);
INSERT INTO `leitmotif_in_song` VALUES (2,0,80);
INSERT INTO `leitmotif_in_song` VALUES (2,0,87);
INSERT INTO `leitmotif_in_song` VALUES (2,0,89);
INSERT INTO `leitmotif_in_song` VALUES (2,0,96);
INSERT INTO `leitmotif_in_song` VALUES (3,0,5);
INSERT INTO `leitmotif_in_song` VALUES (3,0,31);
INSERT INTO `leitmotif_in_song` VALUES (3,0,33);
INSERT INTO `leitmotif_in_song` VALUES (3,0,45);
INSERT INTO `leitmotif_in_song` VALUES (3,0,46);
INSERT INTO `leitmotif_in_song` VALUES (3,0,81);
INSERT INTO `leitmotif_in_song` VALUES (3,0,86);
INSERT INTO `leitmotif_in_song` VALUES (3,0,94);
INSERT INTO `leitmotif_in_song` VALUES (3,0,95);
INSERT INTO `leitmotif_in_song` VALUES (3,0,97);
INSERT INTO `leitmotif_in_song` VALUES (3,0,98);
INSERT INTO `leitmotif_in_song` VALUES (3,4,51);
INSERT INTO `leitmotif_in_song` VALUES (3,4,52);
INSERT INTO `leitmotif_in_song` VALUES (3,4,58);
INSERT INTO `leitmotif_in_song` VALUES (3,4,69);
INSERT INTO `leitmotif_in_song` VALUES (4,0,6);
INSERT INTO `leitmotif_in_song` VALUES (4,0,18);
INSERT INTO `leitmotif_in_song` VALUES (4,0,52);
INSERT INTO `leitmotif_in_song` VALUES (4,3,22);
INSERT INTO `leitmotif_in_song` VALUES (5,0,7);
INSERT INTO `leitmotif_in_song` VALUES (5,0,9);
INSERT INTO `leitmotif_in_song` VALUES (5,0,14);
INSERT INTO `leitmotif_in_song` VALUES (5,0,21);
INSERT INTO `leitmotif_in_song` VALUES (5,0,43);
INSERT INTO `leitmotif_in_song` VALUES (5,0,44);
INSERT INTO `leitmotif_in_song` VALUES (5,0,95);
INSERT INTO `leitmotif_in_song` VALUES (6,0,10);
INSERT INTO `leitmotif_in_song` VALUES (6,0,36);
INSERT INTO `leitmotif_in_song` VALUES (6,0,37);
INSERT INTO `leitmotif_in_song` VALUES (6,0,59);
INSERT INTO `leitmotif_in_song` VALUES (6,2,43);
INSERT INTO `leitmotif_in_song` VALUES (6,4,71);
INSERT INTO `leitmotif_in_song` VALUES (7,0,11);
INSERT INTO `leitmotif_in_song` VALUES (7,0,77);
INSERT INTO `leitmotif_in_song` VALUES (7,1,10);
INSERT INTO `leitmotif_in_song` VALUES (7,1,15);
INSERT INTO `leitmotif_in_song` VALUES (7,3,15);
INSERT INTO `leitmotif_in_song` VALUES (8,0,12);
INSERT INTO `leitmotif_in_song` VALUES (8,0,13);
INSERT INTO `leitmotif_in_song` VALUES (8,1,38);
INSERT INTO `leitmotif_in_song` VALUES (9,0,14);
INSERT INTO `leitmotif_in_song` VALUES (9,0,77);
INSERT INTO `leitmotif_in_song` VALUES (10,0,15);
INSERT INTO `leitmotif_in_song` VALUES (10,0,63);
INSERT INTO `leitmotif_in_song` VALUES (10,0,72);
INSERT INTO `leitmotif_in_song` VALUES (10,0,95);
INSERT INTO `leitmotif_in_song` VALUES (11,0,16);
INSERT INTO `leitmotif_in_song` VALUES (11,0,24);
INSERT INTO `leitmotif_in_song` VALUES (11,0,72);
INSERT INTO `leitmotif_in_song` VALUES (11,0,95);
INSERT INTO `leitmotif_in_song` VALUES (12,0,17);
INSERT INTO `leitmotif_in_song` VALUES (12,0,22);
INSERT INTO `leitmotif_in_song` VALUES (12,0,23);
INSERT INTO `leitmotif_in_song` VALUES (12,0,25);
INSERT INTO `leitmotif_in_song` VALUES (12,0,27);
INSERT INTO `leitmotif_in_song` VALUES (12,0,56);
INSERT INTO `leitmotif_in_song` VALUES (12,0,87);
INSERT INTO `leitmotif_in_song` VALUES (12,0,92);
INSERT INTO `leitmotif_in_song` VALUES (12,0,95);
INSERT INTO `leitmotif_in_song` VALUES (12,1,3);
INSERT INTO `leitmotif_in_song` VALUES (12,1,37);
INSERT INTO `leitmotif_in_song` VALUES (12,4,41);
INSERT INTO `leitmotif_in_song` VALUES (13,0,26);
INSERT INTO `leitmotif_in_song` VALUES (13,0,30);
INSERT INTO `leitmotif_in_song` VALUES (13,0,32);
INSERT INTO `leitmotif_in_song` VALUES (13,0,45);
INSERT INTO `leitmotif_in_song` VALUES (13,0,46);
INSERT INTO `leitmotif_in_song` VALUES (13,0,77);
INSERT INTO `leitmotif_in_song` VALUES (13,0,95);
INSERT INTO `leitmotif_in_song` VALUES (13,4,51);
INSERT INTO `leitmotif_in_song` VALUES (13,4,52);
INSERT INTO `leitmotif_in_song` VALUES (13,4,56);
INSERT INTO `leitmotif_in_song` VALUES (13,4,58);
INSERT INTO `leitmotif_in_song` VALUES (13,4,69);
INSERT INTO `leitmotif_in_song` VALUES (14,0,31);
INSERT INTO `leitmotif_in_song` VALUES (14,0,51);
INSERT INTO `leitmotif_in_song` VALUES (14,0,65);
INSERT INTO `leitmotif_in_song` VALUES (14,0,68);
INSERT INTO `leitmotif_in_song` VALUES (14,0,95);
INSERT INTO `leitmotif_in_song` VALUES (15,0,34);
INSERT INTO `leitmotif_in_song` VALUES (15,0,71);
INSERT INTO `leitmotif_in_song` VALUES (15,0,73);
INSERT INTO `leitmotif_in_song` VALUES (15,0,80);
INSERT INTO `leitmotif_in_song` VALUES (15,0,90);
INSERT INTO `leitmotif_in_song` VALUES (16,0,35);
INSERT INTO `leitmotif_in_song` VALUES (16,0,48);
INSERT INTO `leitmotif_in_song` VALUES (16,0,82);
INSERT INTO `leitmotif_in_song` VALUES (16,0,83);
INSERT INTO `leitmotif_in_song` VALUES (17,0,36);
INSERT INTO `leitmotif_in_song` VALUES (17,2,39);
INSERT INTO `leitmotif_in_song` VALUES (18,0,38);
INSERT INTO `leitmotif_in_song` VALUES (18,0,39);
INSERT INTO `leitmotif_in_song` VALUES (18,4,53);
INSERT INTO `leitmotif_in_song` VALUES (19,0,49);
INSERT INTO `leitmotif_in_song` VALUES (19,0,50);
INSERT INTO `leitmotif_in_song` VALUES (19,0,57);
INSERT INTO `leitmotif_in_song` VALUES (19,0,58);
INSERT INTO `leitmotif_in_song` VALUES (19,0,68);
INSERT INTO `leitmotif_in_song` VALUES (20,0,50);
INSERT INTO `leitmotif_in_song` VALUES (20,0,66);
INSERT INTO `leitmotif_in_song` VALUES (20,0,68);
INSERT INTO `leitmotif_in_song` VALUES (21,0,61);
INSERT INTO `leitmotif_in_song` VALUES (21,0,62);
INSERT INTO `leitmotif_in_song` VALUES (21,0,69);
INSERT INTO `leitmotif_in_song` VALUES (22,0,63);
INSERT INTO `leitmotif_in_song` VALUES (22,4,70);
INSERT INTO `leitmotif_in_song` VALUES (23,0,78);
INSERT INTO `leitmotif_in_song` VALUES (23,0,79);
INSERT INTO `leitmotif_in_song` VALUES (23,0,88);
INSERT INTO `leitmotif_in_song` VALUES (23,1,23);
INSERT INTO `leitmotif_in_song` VALUES (23,1,24);
INSERT INTO `leitmotif_in_song` VALUES (23,1,36);
INSERT INTO `leitmotif_in_song` VALUES (24,0,98);
INSERT INTO `leitmotif_in_song` VALUES (24,0,99);
INSERT INTO `leitmotif_in_song` VALUES (24,2,39);
INSERT INTO `leitmotif_in_song` VALUES (101,1,2);
INSERT INTO `leitmotif_in_song` VALUES (101,1,3);
INSERT INTO `leitmotif_in_song` VALUES (101,1,13);
INSERT INTO `leitmotif_in_song` VALUES (101,1,19);
INSERT INTO `leitmotif_in_song` VALUES (101,1,33);
INSERT INTO `leitmotif_in_song` VALUES (101,1,34);
INSERT INTO `leitmotif_in_song` VALUES (101,1,36);
INSERT INTO `leitmotif_in_song` VALUES (101,1,37);
INSERT INTO `leitmotif_in_song` VALUES (101,1,38);
INSERT INTO `leitmotif_in_song` VALUES (101,1,39);
INSERT INTO `leitmotif_in_song` VALUES (101,2,1);
INSERT INTO `leitmotif_in_song` VALUES (101,2,36);
INSERT INTO `leitmotif_in_song` VALUES (101,2,45);
INSERT INTO `leitmotif_in_song` VALUES (101,3,20);
INSERT INTO `leitmotif_in_song` VALUES (101,4,40);
INSERT INTO `leitmotif_in_song` VALUES (101,4,41);
INSERT INTO `leitmotif_in_song` VALUES (101,4,43);
INSERT INTO `leitmotif_in_song` VALUES (101,4,49);
INSERT INTO `leitmotif_in_song` VALUES (101,4,50);
INSERT INTO `leitmotif_in_song` VALUES (101,4,57);
INSERT INTO `leitmotif_in_song` VALUES (101,4,64);
INSERT INTO `leitmotif_in_song` VALUES (101,4,66);
INSERT INTO `leitmotif_in_song` VALUES (101,4,68);
INSERT INTO `leitmotif_in_song` VALUES (101,4,74);
INSERT INTO `leitmotif_in_song` VALUES (102,1,3);
INSERT INTO `leitmotif_in_song` VALUES (102,1,37);
INSERT INTO `leitmotif_in_song` VALUES (102,4,41);
INSERT INTO `leitmotif_in_song` VALUES (103,1,4);
INSERT INTO `leitmotif_in_song` VALUES (103,1,24);
INSERT INTO `leitmotif_in_song` VALUES (104,1,5);
INSERT INTO `leitmotif_in_song` VALUES (104,1,7);
INSERT INTO `leitmotif_in_song` VALUES (104,3,30);
INSERT INTO `leitmotif_in_song` VALUES (105,1,8);
INSERT INTO `leitmotif_in_song` VALUES (105,1,11);
INSERT INTO `leitmotif_in_song` VALUES (105,1,30);
INSERT INTO `leitmotif_in_song` VALUES (105,2,3);
INSERT INTO `leitmotif_in_song` VALUES (105,4,39);
INSERT INTO `leitmotif_in_song` VALUES (105,4,43);
INSERT INTO `leitmotif_in_song` VALUES (105,4,49);
INSERT INTO `leitmotif_in_song` VALUES (105,4,60);
INSERT INTO `leitmotif_in_song` VALUES (105,4,63);
INSERT INTO `leitmotif_in_song` VALUES (105,4,73);
INSERT INTO `leitmotif_in_song` VALUES (106,1,9);
INSERT INTO `leitmotif_in_song` VALUES (106,1,16);
INSERT INTO `leitmotif_in_song` VALUES (106,1,20);
INSERT INTO `leitmotif_in_song` VALUES (106,1,21);
INSERT INTO `leitmotif_in_song` VALUES (106,1,25);
INSERT INTO `leitmotif_in_song` VALUES (106,1,30);
INSERT INTO `leitmotif_in_song` VALUES (106,2,28);
INSERT INTO `leitmotif_in_song` VALUES (106,2,29);
INSERT INTO `leitmotif_in_song` VALUES (106,3,9);
INSERT INTO `leitmotif_in_song` VALUES (107,1,10);
INSERT INTO `leitmotif_in_song` VALUES (107,1,15);
INSERT INTO `leitmotif_in_song` VALUES (107,3,11);
INSERT INTO `leitmotif_in_song` VALUES (107,3,15);
INSERT INTO `leitmotif_in_song` VALUES (108,1,13);
INSERT INTO `leitmotif_in_song` VALUES (108,1,19);
INSERT INTO `leitmotif_in_song` VALUES (109,1,18);
INSERT INTO `leitmotif_in_song` VALUES (109,1,19);
INSERT INTO `leitmotif_in_song` VALUES (110,1,22);
INSERT INTO `leitmotif_in_song` VALUES (110,1,25);
INSERT INTO `leitmotif_in_song` VALUES (110,1,30);
INSERT INTO `leitmotif_in_song` VALUES (111,1,26);
INSERT INTO `leitmotif_in_song` VALUES (111,2,29);
INSERT INTO `leitmotif_in_song` VALUES (112,1,28);
INSERT INTO `leitmotif_in_song` VALUES (112,3,14);
INSERT INTO `leitmotif_in_song` VALUES (112,3,26);
INSERT INTO `leitmotif_in_song` VALUES (112,3,32);
INSERT INTO `leitmotif_in_song` VALUES (113,1,31);
INSERT INTO `leitmotif_in_song` VALUES (113,2,16);
INSERT INTO `leitmotif_in_song` VALUES (114,1,32);
INSERT INTO `leitmotif_in_song` VALUES (114,1,33);
INSERT INTO `leitmotif_in_song` VALUES (114,2,39);
INSERT INTO `leitmotif_in_song` VALUES (114,2,41);
INSERT INTO `leitmotif_in_song` VALUES (114,4,58);
INSERT INTO `leitmotif_in_song` VALUES (114,4,77);
INSERT INTO `leitmotif_in_song` VALUES (115,1,35);
INSERT INTO `leitmotif_in_song` VALUES (115,3,32);
INSERT INTO `leitmotif_in_song` VALUES (201,2,2);
INSERT INTO `leitmotif_in_song` VALUES (201,2,30);
INSERT INTO `leitmotif_in_song` VALUES (201,2,31);
INSERT INTO `leitmotif_in_song` VALUES (201,3,20);
INSERT INTO `leitmotif_in_song` VALUES (201,4,42);
INSERT INTO `leitmotif_in_song` VALUES (201,4,45);
INSERT INTO `leitmotif_in_song` VALUES (201,4,46);
INSERT INTO `leitmotif_in_song` VALUES (202,2,5);
INSERT INTO `leitmotif_in_song` VALUES (202,2,7);
INSERT INTO `leitmotif_in_song` VALUES (202,2,15);
INSERT INTO `leitmotif_in_song` VALUES (202,2,20);
INSERT INTO `leitmotif_in_song` VALUES (202,2,24);
INSERT INTO `leitmotif_in_song` VALUES (202,2,26);
INSERT INTO `leitmotif_in_song` VALUES (202,2,32);
INSERT INTO `leitmotif_in_song` VALUES (202,2,33);
INSERT INTO `leitmotif_in_song` VALUES (202,2,35);
INSERT INTO `leitmotif_in_song` VALUES (202,4,44);
INSERT INTO `leitmotif_in_song` VALUES (203,2,6);
INSERT INTO `leitmotif_in_song` VALUES (203,2,17);
INSERT INTO `leitmotif_in_song` VALUES (204,2,6);
INSERT INTO `leitmotif_in_song` VALUES (204,2,8);
INSERT INTO `leitmotif_in_song` VALUES (204,2,11);
INSERT INTO `leitmotif_in_song` VALUES (204,2,12);
INSERT INTO `leitmotif_in_song` VALUES (204,2,13);
INSERT INTO `leitmotif_in_song` VALUES (204,2,17);
INSERT INTO `leitmotif_in_song` VALUES (204,2,18);
INSERT INTO `leitmotif_in_song` VALUES (204,2,19);
INSERT INTO `leitmotif_in_song` VALUES (205,2,14);
INSERT INTO `leitmotif_in_song` VALUES (205,2,15);
INSERT INTO `leitmotif_in_song` VALUES (205,2,25);
INSERT INTO `leitmotif_in_song` VALUES (205,2,32);
INSERT INTO `leitmotif_in_song` VALUES (205,2,35);
INSERT INTO `leitmotif_in_song` VALUES (205,4,44);
INSERT INTO `leitmotif_in_song` VALUES (206,2,21);
INSERT INTO `leitmotif_in_song` VALUES (206,2,40);
INSERT INTO `leitmotif_in_song` VALUES (206,3,2);
INSERT INTO `leitmotif_in_song` VALUES (206,3,26);
INSERT INTO `leitmotif_in_song` VALUES (206,3,27);
INSERT INTO `leitmotif_in_song` VALUES (206,3,28);
INSERT INTO `leitmotif_in_song` VALUES (206,3,32);
INSERT INTO `leitmotif_in_song` VALUES (206,4,76);
INSERT INTO `leitmotif_in_song` VALUES (207,2,22);
INSERT INTO `leitmotif_in_song` VALUES (207,2,23);
INSERT INTO `leitmotif_in_song` VALUES (207,2,38);
INSERT INTO `leitmotif_in_song` VALUES (207,2,39);
INSERT INTO `leitmotif_in_song` VALUES (207,3,27);
INSERT INTO `leitmotif_in_song` VALUES (207,4,76);
INSERT INTO `leitmotif_in_song` VALUES (207,4,77);
INSERT INTO `leitmotif_in_song` VALUES (301,3,2);
INSERT INTO `leitmotif_in_song` VALUES (301,3,3);
INSERT INTO `leitmotif_in_song` VALUES (301,3,4);
INSERT INTO `leitmotif_in_song` VALUES (301,3,5);
INSERT INTO `leitmotif_in_song` VALUES (301,3,6);
INSERT INTO `leitmotif_in_song` VALUES (301,3,7);
INSERT INTO `leitmotif_in_song` VALUES (301,3,8);
INSERT INTO `leitmotif_in_song` VALUES (301,3,12);
INSERT INTO `leitmotif_in_song` VALUES (301,3,13);
INSERT INTO `leitmotif_in_song` VALUES (301,3,16);
INSERT INTO `leitmotif_in_song` VALUES (301,3,23);
INSERT INTO `leitmotif_in_song` VALUES (301,3,24);
INSERT INTO `leitmotif_in_song` VALUES (301,3,25);
INSERT INTO `leitmotif_in_song` VALUES (301,3,26);
INSERT INTO `leitmotif_in_song` VALUES (301,3,27);
INSERT INTO `leitmotif_in_song` VALUES (301,3,33);
INSERT INTO `leitmotif_in_song` VALUES (301,4,76);
INSERT INTO `leitmotif_in_song` VALUES (401,4,49);
INSERT INTO `leitmotif_in_song` VALUES (401,4,50);
INSERT INTO `leitmotif_in_song` VALUES (401,4,55);
INSERT INTO `leitmotif_in_song` VALUES (401,4,66);
INSERT INTO `leitmotif_in_song` VALUES (401,4,67);
INSERT INTO `leitmotif_in_song` VALUES (401,4,68);
INSERT INTO `leitmotif_in_song` VALUES (401,4,72);
INSERT INTO `leitmotif_in_song` VALUES (402,4,51);
INSERT INTO `leitmotif_in_song` VALUES (402,4,56);
INSERT INTO `leitmotif_in_song` VALUES (402,4,58);
INSERT INTO `leitmotif_in_song` VALUES (402,4,69);
INSERT INTO `leitmotif_in_song` VALUES (403,4,60);
INSERT INTO `leitmotif_in_song` VALUES (403,4,63);
/*!40000 ALTER TABLE `leitmotif_in_song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `minifig`
--

DROP TABLE IF EXISTS `minifig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `minifig` (
  `bl_id` varchar(10) NOT NULL,
  `minifig_name` varchar(50) NOT NULL,
  `specification` varchar(60) DEFAULT NULL,
  `is_unique` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`bl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `minifig`
--

LOCK TABLES `minifig` WRITE;
/*!40000 ALTER TABLE `minifig` DISABLE KEYS */;
INSERT INTO `minifig` VALUES ('sw0001b','Battle Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0001c','Battle Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0001d','Battle Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0005b','Scout Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0091','Clone Shock Trooper','Coruscant Guard',1);
INSERT INTO `minifig` VALUES ('sw0092','Super Battle Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0115','Snowtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0126','Clone Trooper','Phase II',0);
INSERT INTO `minifig` VALUES ('sw0128a','Clone Trooper','327th Star Corps',1);
INSERT INTO `minifig` VALUES ('sw0166a','Shadow Trooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0187','Rebel Trooper','Fleet Trooper',0);
INSERT INTO `minifig` VALUES ('sw0188','Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0201','Clone Trooper','Phase I',0);
INSERT INTO `minifig` VALUES ('sw0221','Clone Gunner',NULL,0);
INSERT INTO `minifig` VALUES ('sw0222','Elite Assassin Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0223','Clone Commander',NULL,1);
INSERT INTO `minifig` VALUES ('sw0229','Assassin Droid',NULL,1);
INSERT INTO `minifig` VALUES ('sw0258','Hoth Officer',NULL,1);
INSERT INTO `minifig` VALUES ('sw0259','Hoth Rebel Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0260','Zev Senesca',NULL,0);
INSERT INTO `minifig` VALUES ('sw0261','Imperial Officer','Battle Armor',1);
INSERT INTO `minifig` VALUES ('sw0262','AT-AT Driver',NULL,0);
INSERT INTO `minifig` VALUES ('sw0296','Mandalorian Death Watch Warrior',NULL,0);
INSERT INTO `minifig` VALUES ('sw0297','ARF Trooper','91st Mobile Reconnaissance Corps, Lightning Squadron',1);
INSERT INTO `minifig` VALUES ('sw0298','Clone Trooper','Horn Company',1);
INSERT INTO `minifig` VALUES ('sw0299','Bomb Squad Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0359','Commando Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw0366','Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0367','Endor Rebel Trooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0368','Endor Rebel Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0377','ARC Trooper Hammer','Rancor Battalion',1);
INSERT INTO `minifig` VALUES ('sw0378','ARF Trooper','Rancor Battalion',1);
INSERT INTO `minifig` VALUES ('sw0436','Sith Trooper','Red Armor',1);
INSERT INTO `minifig` VALUES ('sw0438','Clone Sergeant',NULL,1);
INSERT INTO `minifig` VALUES ('sw0440','Republic Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0441','Droideka',NULL,1);
INSERT INTO `minifig` VALUES ('sw0442','Clone Trooper','Phase I',0);
INSERT INTO `minifig` VALUES ('sw0443','Sith Trooper','Black Armor',0);
INSERT INTO `minifig` VALUES ('sw0444','Republic Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0518','Clone Scout Trooper','41st Elite Corps, Kashyyyk Camo',0);
INSERT INTO `minifig` VALUES ('sw0519','Clone Trooper','41st Elite Corps, Kashyyyk Camo',0);
INSERT INTO `minifig` VALUES ('sw0520','Imperial Gunner',NULL,1);
INSERT INTO `minifig` VALUES ('sw0521','Royal Guard',NULL,0);
INSERT INTO `minifig` VALUES ('sw0522','Clone Trooper','212th Attack Battalion',1);
INSERT INTO `minifig` VALUES ('sw0523','Airborne Trooper','212th Attack Battalion',1);
INSERT INTO `minifig` VALUES ('sw0524','BARC Trooper','91st Mobile Reconnaissance Corps',1);
INSERT INTO `minifig` VALUES ('sw0529','Imperial Gunner',NULL,0);
INSERT INTO `minifig` VALUES ('sw0578','Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0585','Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0603','Shadow Stormtrooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0604','Shadow Guard',NULL,1);
INSERT INTO `minifig` VALUES ('sw0605','Airborne Trooper','Geonosis Camo',1);
INSERT INTO `minifig` VALUES ('sw0606','Clone Trooper','Geonosis Camo',1);
INSERT INTO `minifig` VALUES ('sw0613','Senate Commando Captain',NULL,1);
INSERT INTO `minifig` VALUES ('sw0614','Senate Commando',NULL,1);
INSERT INTO `minifig` VALUES ('sw0617','Stormtrooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0620','Tusken Raider',NULL,0);
INSERT INTO `minifig` VALUES ('sw0666','First Order Flametrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0667','First Order Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0671','First Order Fleet Engineer',NULL,0);
INSERT INTO `minifig` VALUES ('sw0687','Rodian Alliance Fighter',NULL,1);
INSERT INTO `minifig` VALUES ('sw0688','Rebel Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0689','Duros Alliance Fighter',NULL,1);
INSERT INTO `minifig` VALUES ('sw0690','Rebel Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0691','Jump Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0692','Imperial Shock Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0693','Imperial Crewman',NULL,1);
INSERT INTO `minifig` VALUES ('sw0694','First Order Crewman',NULL,1);
INSERT INTO `minifig` VALUES ('sw0695','First Order Heavy Assault Stormtrooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0696','Resistance Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0697','Resistance Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0698','Resistance Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0699','Resistance Officer',NULL,1);
INSERT INTO `minifig` VALUES ('sw0751','Dengar',NULL,0);
INSERT INTO `minifig` VALUES ('sw0803','Private Kappehl','Rebel Trooper',1);
INSERT INTO `minifig` VALUES ('sw0804','Corporal Rostok','Rebel Trooper',1);
INSERT INTO `minifig` VALUES ('sw0805','Private Calfor','Rebel Trooper',1);
INSERT INTO `minifig` VALUES ('sw0806','Corporal Tonc','Rebel Trooper',1);
INSERT INTO `minifig` VALUES ('sw0807','Death Trooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0828','Bossk',NULL,1);
INSERT INTO `minifig` VALUES ('sw0830','4-LOM',NULL,0);
INSERT INTO `minifig` VALUES ('sw0831a','IG-88',NULL,0);
INSERT INTO `minifig` VALUES ('sw0832','Colonel Datoo','First Order Officer',1);
INSERT INTO `minifig` VALUES ('sw0871','First Order Shuttle Pilot',NULL,0);
INSERT INTO `minifig` VALUES ('sw0886','First Order Stormtrooper Executioner',NULL,1);
INSERT INTO `minifig` VALUES ('sw0895','R3-T2',NULL,1);
INSERT INTO `minifig` VALUES ('sw0896','Jawa',NULL,0);
INSERT INTO `minifig` VALUES ('sw0897','Jawa',NULL,0);
INSERT INTO `minifig` VALUES ('sw0905','First Order Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0909','Barriss Offee',NULL,1);
INSERT INTO `minifig` VALUES ('sw0910','Clone Trooper','Phase I',1);
INSERT INTO `minifig` VALUES ('sw0911','Ki-Adi-Mundi',NULL,1);
INSERT INTO `minifig` VALUES ('sw0912','Corporal Latt','Imperial Emigration Officer',1);
INSERT INTO `minifig` VALUES ('sw0913','Imperial Recruitment Officer',NULL,1);
INSERT INTO `minifig` VALUES ('sw0914','Imperial Patrol Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw0986','Inferno Squad Agent',NULL,1);
INSERT INTO `minifig` VALUES ('sw0987','Inferno Squad Agent',NULL,1);
INSERT INTO `minifig` VALUES ('sw0988','Inferno Squad Agent',NULL,1);
INSERT INTO `minifig` VALUES ('sw0989','Elite Praetorian Guard',NULL,1);
INSERT INTO `minifig` VALUES ('sw0990','Elite Praetorian Guard',NULL,0);
INSERT INTO `minifig` VALUES ('sw0997b','Stormtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw0998','Praetorian Training Droid',NULL,1);
INSERT INTO `minifig` VALUES ('sw1000','Iden Versio','Inferno Squad Commander',1);
INSERT INTO `minifig` VALUES ('sw1031','Shadow Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw1032','Han Solo','20th Anniversary',1);
INSERT INTO `minifig` VALUES ('sw1065','Sith Trooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw1075','Sith Jet Trooper',NULL,1);
INSERT INTO `minifig` VALUES ('sw1076','Sith Fleet Officer',NULL,1);
INSERT INTO `minifig` VALUES ('sw1077','Mandalorian Tribe Warrior',NULL,1);
INSERT INTO `minifig` VALUES ('sw1078','Mandalorian Tribe Warrior',NULL,0);
INSERT INTO `minifig` VALUES ('sw1079','Mandalorian Tribe Warrior',NULL,1);
INSERT INTO `minifig` VALUES ('sw1080','Mandalorian Tribe Warrior',NULL,1);
INSERT INTO `minifig` VALUES ('sw1093','Clone Jet Trooper','501st Legion',1);
INSERT INTO `minifig` VALUES ('sw1094','Clone Trooper','501st Legion',0);
INSERT INTO `minifig` VALUES ('sw1178','Snowtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw1179','Snowtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw1181','Snowtrooper',NULL,0);
INSERT INTO `minifig` VALUES ('sw1182','Scout Trooper','Hoth',1);
INSERT INTO `minifig` VALUES ('sw1246','Clone Officer','501st Legion',1);
INSERT INTO `minifig` VALUES ('sw1247','Clone Heavy Trooper','501st Legion',1);
INSERT INTO `minifig` VALUES ('sw1248','Clone Specialist','501st Legion',1);
INSERT INTO `minifig` VALUES ('sw1276','Clone Trooper','501st Legion, 332nd Company',1);
INSERT INTO `minifig` VALUES ('sw1277','Captain Vaughn','501st Legion, 332nd Company',1);
INSERT INTO `minifig` VALUES ('sw1278','Clone Trooper','501st Legion, 332nd Company',1);
INSERT INTO `minifig` VALUES ('sw1305','Clone Shock Trooper','Coruscant Guard',1);
INSERT INTO `minifig` VALUES ('sw1319','Clone Trooper','Phase II',1);
INSERT INTO `minifig` VALUES ('sw1320','Battle Droid',NULL,1);
INSERT INTO `minifig` VALUES ('sw1321','Super Battle Droid',NULL,0);
INSERT INTO `minifig` VALUES ('sw1344','Mandalorian Nite Owl',NULL,1);
INSERT INTO `minifig` VALUES ('sw1345','Mandalorian Warrior',NULL,1);
INSERT INTO `minifig` VALUES ('sw1346','Imperial Commando',NULL,1);
/*!40000 ALTER TABLE `minifig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `game_id` int(11) NOT NULL,
  `track_number` int(11) NOT NULL,
  `track_title` varchar(100) NOT NULL,
  PRIMARY KEY (`game_id`,`track_number`),
  CONSTRAINT `song_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (0,1,'Once Upon a Time');
INSERT INTO `song` VALUES (0,2,'Start Menu');
INSERT INTO `song` VALUES (0,3,'Your Best Friend');
INSERT INTO `song` VALUES (0,4,'Fallen Down');
INSERT INTO `song` VALUES (0,5,'Ruins');
INSERT INTO `song` VALUES (0,6,'Uwa!! So Temperate♫');
INSERT INTO `song` VALUES (0,7,'Anticipation');
INSERT INTO `song` VALUES (0,8,'Unnecessary Tension');
INSERT INTO `song` VALUES (0,9,'Enemy Approaching');
INSERT INTO `song` VALUES (0,10,'Ghost Fight');
INSERT INTO `song` VALUES (0,11,'Determination');
INSERT INTO `song` VALUES (0,12,'Home');
INSERT INTO `song` VALUES (0,13,'Home (Music Box)');
INSERT INTO `song` VALUES (0,14,'Heartache');
INSERT INTO `song` VALUES (0,15,'sans.');
INSERT INTO `song` VALUES (0,16,'Nyeh Heh Heh!');
INSERT INTO `song` VALUES (0,17,'Snowy');
INSERT INTO `song` VALUES (0,18,'Uwa!! So Holiday♫');
INSERT INTO `song` VALUES (0,19,'Dogbass');
INSERT INTO `song` VALUES (0,20,'Mysterious Place');
INSERT INTO `song` VALUES (0,21,'Dogsong');
INSERT INTO `song` VALUES (0,22,'Snowdin Town');
INSERT INTO `song` VALUES (0,23,'Shop');
INSERT INTO `song` VALUES (0,24,'Bonetrousle');
INSERT INTO `song` VALUES (0,25,'Dating Start!');
INSERT INTO `song` VALUES (0,26,'Dating Tense!');
INSERT INTO `song` VALUES (0,27,'Dating Fight!');
INSERT INTO `song` VALUES (0,28,'Premonition');
INSERT INTO `song` VALUES (0,29,'Danger Mystery');
INSERT INTO `song` VALUES (0,30,'Undyne');
INSERT INTO `song` VALUES (0,31,'Waterfall');
INSERT INTO `song` VALUES (0,32,'Run!');
INSERT INTO `song` VALUES (0,33,'Quiet Water');
INSERT INTO `song` VALUES (0,34,'Memory');
INSERT INTO `song` VALUES (0,35,'Bird That Carries You Over A Disproportionately Small Gap');
INSERT INTO `song` VALUES (0,36,'Dummy!');
INSERT INTO `song` VALUES (0,37,'Pathetic House');
INSERT INTO `song` VALUES (0,38,'Spooktune');
INSERT INTO `song` VALUES (0,39,'Spookwave');
INSERT INTO `song` VALUES (0,40,'Ghouliday');
INSERT INTO `song` VALUES (0,41,'Chill');
INSERT INTO `song` VALUES (0,42,'Thundersnail');
INSERT INTO `song` VALUES (0,43,'Temmie Village');
INSERT INTO `song` VALUES (0,44,'Tem Shop');
INSERT INTO `song` VALUES (0,45,'NGAHHH!!');
INSERT INTO `song` VALUES (0,46,'Spear of Justice');
INSERT INTO `song` VALUES (0,47,'Ooo');
INSERT INTO `song` VALUES (0,48,'Alphys');
INSERT INTO `song` VALUES (0,49,'It\'s Showtime!');
INSERT INTO `song` VALUES (0,50,'Metal Crusher');
INSERT INTO `song` VALUES (0,51,'Another Medium');
INSERT INTO `song` VALUES (0,52,'Uwa!! So HEATS!!♫');
INSERT INTO `song` VALUES (0,53,'Stronger Monsters');
INSERT INTO `song` VALUES (0,54,'Hotel');
INSERT INTO `song` VALUES (0,55,'Can You Really Call This A Hotel, I Didn\'t Receive A Mint On My Pillow Or Anything');
INSERT INTO `song` VALUES (0,56,'Confession');
INSERT INTO `song` VALUES (0,57,'Live Report');
INSERT INTO `song` VALUES (0,58,'Death Report');
INSERT INTO `song` VALUES (0,59,'Spider Dance');
INSERT INTO `song` VALUES (0,60,'Wrong Enemy !?');
INSERT INTO `song` VALUES (0,61,'Oh! One True Love');
INSERT INTO `song` VALUES (0,62,'Oh! Dungeon');
INSERT INTO `song` VALUES (0,63,'It\'s Raining Somewhere Else');
INSERT INTO `song` VALUES (0,64,'CORE Approach');
INSERT INTO `song` VALUES (0,65,'CORE');
INSERT INTO `song` VALUES (0,66,'Last Episode!');
INSERT INTO `song` VALUES (0,67,'Oh My...');
INSERT INTO `song` VALUES (0,68,'Death by Glamour');
INSERT INTO `song` VALUES (0,69,'For the Fans');
INSERT INTO `song` VALUES (0,70,'Long Elevator');
INSERT INTO `song` VALUES (0,71,'Undertale');
INSERT INTO `song` VALUES (0,72,'Song That Might Play When You Fight Sans');
INSERT INTO `song` VALUES (0,73,'The Choice');
INSERT INTO `song` VALUES (0,74,'Small Shock');
INSERT INTO `song` VALUES (0,75,'Barrier');
INSERT INTO `song` VALUES (0,76,'Bergentrückung');
INSERT INTO `song` VALUES (0,77,'ASGORE');
INSERT INTO `song` VALUES (0,78,'You Idiot');
INSERT INTO `song` VALUES (0,79,'Your Best Nightmare');
INSERT INTO `song` VALUES (0,80,'Finale');
INSERT INTO `song` VALUES (0,81,'An Ending');
INSERT INTO `song` VALUES (0,82,'She\'s Playing Piano');
INSERT INTO `song` VALUES (0,83,'Here We Are');
INSERT INTO `song` VALUES (0,84,'Amalgam');
INSERT INTO `song` VALUES (0,85,'Fallen Down (Reprise)');
INSERT INTO `song` VALUES (0,86,'Don\'t Give Up');
INSERT INTO `song` VALUES (0,87,'Hopes and Dreams');
INSERT INTO `song` VALUES (0,88,'Burn in Despair!');
INSERT INTO `song` VALUES (0,89,'SAVE the World');
INSERT INTO `song` VALUES (0,90,'His Theme');
INSERT INTO `song` VALUES (0,91,'Final Power');
INSERT INTO `song` VALUES (0,92,'Reunited');
INSERT INTO `song` VALUES (0,93,'Menu (Full)');
INSERT INTO `song` VALUES (0,94,'Respite');
INSERT INTO `song` VALUES (0,95,'Bring It In, Guys!');
INSERT INTO `song` VALUES (0,96,'Last Goodbye');
INSERT INTO `song` VALUES (0,97,'But the Earth Refused to Die');
INSERT INTO `song` VALUES (0,98,'Battle Against a True Hero');
INSERT INTO `song` VALUES (0,99,'Power of \"NEO\"');
INSERT INTO `song` VALUES (0,100,'MEGALOVANIA');
INSERT INTO `song` VALUES (0,101,'Good Night');
INSERT INTO `song` VALUES (1,1,'ANOTHER HIM');
INSERT INTO `song` VALUES (1,2,'Beginning');
INSERT INTO `song` VALUES (1,3,'School');
INSERT INTO `song` VALUES (1,4,'Susie');
INSERT INTO `song` VALUES (1,5,'The Door');
INSERT INTO `song` VALUES (1,6,'Cliffs');
INSERT INTO `song` VALUES (1,7,'The Chase');
INSERT INTO `song` VALUES (1,8,'The Legend');
INSERT INTO `song` VALUES (1,9,'Lancer');
INSERT INTO `song` VALUES (1,10,'Rude Buster');
INSERT INTO `song` VALUES (1,11,'Empty Town');
INSERT INTO `song` VALUES (1,12,'Weird Birds');
INSERT INTO `song` VALUES (1,13,'Field of Hopes and Dreams');
INSERT INTO `song` VALUES (1,14,'Fanfare (from \"Rose of Winter\")');
INSERT INTO `song` VALUES (1,15,'Lantern');
INSERT INTO `song` VALUES (1,16,'I\'m Very Bad');
INSERT INTO `song` VALUES (1,17,'Checker Dance');
INSERT INTO `song` VALUES (1,18,'Quiet Autumn');
INSERT INTO `song` VALUES (1,19,'Scarlet Forest');
INSERT INTO `song` VALUES (1,20,'Thrash Machine');
INSERT INTO `song` VALUES (1,21,'Vs. Lancer');
INSERT INTO `song` VALUES (1,22,'Basement');
INSERT INTO `song` VALUES (1,23,'Imminent Death');
INSERT INTO `song` VALUES (1,24,'Vs. Susie');
INSERT INTO `song` VALUES (1,25,'Card Castle');
INSERT INTO `song` VALUES (1,26,'Rouxls Kaard');
INSERT INTO `song` VALUES (1,27,'April 2012');
INSERT INTO `song` VALUES (1,28,'Hip Shop');
INSERT INTO `song` VALUES (1,29,'Gallery');
INSERT INTO `song` VALUES (1,30,'Chaos King');
INSERT INTO `song` VALUES (1,31,'Darkness Falls');
INSERT INTO `song` VALUES (1,32,'The Circus');
INSERT INTO `song` VALUES (1,33,'THE WORLD REVOLVING');
INSERT INTO `song` VALUES (1,34,'Friendship');
INSERT INTO `song` VALUES (1,35,'THE HOLY');
INSERT INTO `song` VALUES (1,36,'Your Power');
INSERT INTO `song` VALUES (1,37,'A Town Called Hometown');
INSERT INTO `song` VALUES (1,38,'You Can Always Come Home');
INSERT INTO `song` VALUES (1,39,'Don\'t Forget');
INSERT INTO `song` VALUES (1,40,'Before the Story');
INSERT INTO `song` VALUES (2,1,'Faint Glow');
INSERT INTO `song` VALUES (2,2,'Girl Next Door');
INSERT INTO `song` VALUES (2,3,'My Castle Town');
INSERT INTO `song` VALUES (2,4,'Ohhhhohohoho!');
INSERT INTO `song` VALUES (2,5,'Queen');
INSERT INTO `song` VALUES (2,6,'A CYBER\'S WORLD?');
INSERT INTO `song` VALUES (2,7,'A Simple Diversion');
INSERT INTO `song` VALUES (2,8,'Almost To The Guys!');
INSERT INTO `song` VALUES (2,9,'Cool Beat');
INSERT INTO `song` VALUES (2,10,'When I Get Mad I Dance Like This');
INSERT INTO `song` VALUES (2,11,'Cyber Battle (Solo)');
INSERT INTO `song` VALUES (2,12,'When I Get Happy I Dance Like This');
INSERT INTO `song` VALUES (2,13,'Sound Studio');
INSERT INTO `song` VALUES (2,14,'Berdly');
INSERT INTO `song` VALUES (2,15,'Smart Race');
INSERT INTO `song` VALUES (2,16,'Faint Courage (Game Over)');
INSERT INTO `song` VALUES (2,17,'WELCOME TO THE CITY');
INSERT INTO `song` VALUES (2,18,'Mini Studio');
INSERT INTO `song` VALUES (2,19,'Holiday Studio');
INSERT INTO `song` VALUES (2,20,'Cool Mixtape');
INSERT INTO `song` VALUES (2,21,'HEY EVERY !');
INSERT INTO `song` VALUES (2,22,'Spamton');
INSERT INTO `song` VALUES (2,23,'NOW\'S YOUR CHANCE TO BE A');
INSERT INTO `song` VALUES (2,24,'Elegant Entrance');
INSERT INTO `song` VALUES (2,25,'Bluebird of Misfortune');
INSERT INTO `song` VALUES (2,26,'Pandora Palace');
INSERT INTO `song` VALUES (2,27,'KEYGEN');
INSERT INTO `song` VALUES (2,28,'Acid Tunnel of Love');
INSERT INTO `song` VALUES (2,29,'It\'s Pronounced \"Rules\"');
INSERT INTO `song` VALUES (2,30,'Lost Girl');
INSERT INTO `song` VALUES (2,31,'Ferris Wheel');
INSERT INTO `song` VALUES (2,32,'Attack of the Killer Queen');
INSERT INTO `song` VALUES (2,33,'Giga Size');
INSERT INTO `song` VALUES (2,34,'Powers Combined');
INSERT INTO `song` VALUES (2,35,'Knock You Down !!');
INSERT INTO `song` VALUES (2,36,'The Dark Truth');
INSERT INTO `song` VALUES (2,37,'Digital Roots');
INSERT INTO `song` VALUES (2,38,'Deal Gone Wrong');
INSERT INTO `song` VALUES (2,39,'BIG SHOT');
INSERT INTO `song` VALUES (2,40,'A Real Boy!');
INSERT INTO `song` VALUES (2,41,'Dialtone');
INSERT INTO `song` VALUES (2,42,'sans.');
INSERT INTO `song` VALUES (2,43,'Chill Jailbreak Alarm To Study And Relax To');
INSERT INTO `song` VALUES (2,44,'You Can Always Come Home');
INSERT INTO `song` VALUES (2,45,'Until Next Time');
INSERT INTO `song` VALUES (2,46,'Before The Story');
INSERT INTO `song` VALUES (3,1,'Flashback (Excerpt)');
INSERT INTO `song` VALUES (3,2,'Feature Presentation');
INSERT INTO `song` VALUES (3,3,'And Now For Today\'s Sponsors…!');
INSERT INTO `song` VALUES (3,4,'MIKE, the BOARD, please!');
INSERT INTO `song` VALUES (3,5,'Sandy Board');
INSERT INTO `song` VALUES (3,6,'Adventure Board');
INSERT INTO `song` VALUES (3,7,'Query?');
INSERT INTO `song` VALUES (3,8,'Quiz!');
INSERT INTO `song` VALUES (3,9,'Dig! Dig! To The Center of the Earth!');
INSERT INTO `song` VALUES (3,10,'Pushing Buddies');
INSERT INTO `song` VALUES (3,11,'Ruder Buster');
INSERT INTO `song` VALUES (3,12,'Physical Challenge');
INSERT INTO `song` VALUES (3,13,'Board Clear!');
INSERT INTO `song` VALUES (3,14,'Welcome to the Green Room');
INSERT INTO `song` VALUES (3,15,'Vapor Buster');
INSERT INTO `song` VALUES (3,16,'Paradise, Paradise');
INSERT INTO `song` VALUES (3,17,'Raft Ride');
INSERT INTO `song` VALUES (3,18,'SOUTH OF THE BORDER!!');
INSERT INTO `song` VALUES (3,19,'Sound Check');
INSERT INTO `song` VALUES (3,20,'Raise Up Your Bat');
INSERT INTO `song` VALUES (3,21,'KING OF ROLYPOLY');
INSERT INTO `song` VALUES (3,22,'Glowing Snow');
INSERT INTO `song` VALUES (3,23,'Big City Board');
INSERT INTO `song` VALUES (3,24,'Doom Board');
INSERT INTO `song` VALUES (3,25,'Metaphysical Challenge');
INSERT INTO `song` VALUES (3,26,'TV WORLD');
INSERT INTO `song` VALUES (3,27,'It\'s TV Time!');
INSERT INTO `song` VALUES (3,28,'Hall of Fame');
INSERT INTO `song` VALUES (3,29,'Breath');
INSERT INTO `song` VALUES (3,30,'Black Knife');
INSERT INTO `song` VALUES (3,31,'Crickets');
INSERT INTO `song` VALUES (3,32,'Dump');
INSERT INTO `song` VALUES (3,33,'SWORD');
INSERT INTO `song` VALUES (3,34,'NORTHERNLIGHT');
INSERT INTO `song` VALUES (3,35,'GLACEIR');
INSERT INTO `song` VALUES (3,36,'BIT ROOTS');
INSERT INTO `song` VALUES (3,37,'ERAM');
INSERT INTO `song` VALUES (3,38,'BURNING EYES');
INSERT INTO `song` VALUES (4,39,'Old wooden rafters');
INSERT INTO `song` VALUES (4,40,'Hymn');
INSERT INTO `song` VALUES (4,41,'Another day in hometown');
INSERT INTO `song` VALUES (4,42,'Friends');
INSERT INTO `song` VALUES (4,43,'Castle Funk');
INSERT INTO `song` VALUES (4,44,'Knock You Down!! - Rhythm Ver.');
INSERT INTO `song` VALUES (4,45,'Gingerbread House');
INSERT INTO `song` VALUES (4,46,'The distance between two');
INSERT INTO `song` VALUES (4,47,'C');
INSERT INTO `song` VALUES (4,48,'ATRIUM');
INSERT INTO `song` VALUES (4,49,'Dark Sanctuary');
INSERT INTO `song` VALUES (4,50,'From Now On (Battle 2)');
INSERT INTO `song` VALUES (4,51,'Gyaa Ha ha!');
INSERT INTO `song` VALUES (4,52,'Fireplace');
INSERT INTO `song` VALUES (4,53,'A DARK ZONE');
INSERT INTO `song` VALUES (4,54,'Mysterious Ringing');
INSERT INTO `song` VALUES (4,55,'Ever Higher');
INSERT INTO `song` VALUES (4,56,'Wise words');
INSERT INTO `song` VALUES (4,57,'Piano that may not be played that well');
INSERT INTO `song` VALUES (4,58,'Hammer of Justice');
INSERT INTO `song` VALUES (4,59,'12am');
INSERT INTO `song` VALUES (4,60,'The Second Sanctuary');
INSERT INTO `song` VALUES (4,61,'Ripple');
INSERT INTO `song` VALUES (4,62,'13am');
INSERT INTO `song` VALUES (4,63,'The Third Sanctuary');
INSERT INTO `song` VALUES (4,64,'Dark Place');
INSERT INTO `song` VALUES (4,65,'Heavy Footsteps');
INSERT INTO `song` VALUES (4,66,'Crumbling Tower');
INSERT INTO `song` VALUES (4,67,'SPAWN');
INSERT INTO `song` VALUES (4,68,'GUARDIAN');
INSERT INTO `song` VALUES (4,69,'Need a hand!?');
INSERT INTO `song` VALUES (4,70,'The place where it rained');
INSERT INTO `song` VALUES (4,71,'The Ol\' Jitterbug');
INSERT INTO `song` VALUES (4,72,'Neverending Night');
INSERT INTO `song` VALUES (4,73,'The LEGEND...?');
INSERT INTO `song` VALUES (4,74,'With Hope Crossed On Our Hearts');
INSERT INTO `song` VALUES (4,75,'Volume Adjustment');
INSERT INTO `song` VALUES (4,76,'Catswing');
INSERT INTO `song` VALUES (4,77,'Air Waves');
INSERT INTO `song` VALUES (4,78,'Concert for you');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `source`
--

DROP TABLE IF EXISTS `source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `source` (
  `source_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `short_title` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `source`
--

LOCK TABLES `source` WRITE;
/*!40000 ALTER TABLE `source` DISABLE KEYS */;
INSERT INTO `source` VALUES (1,'Star Wars: Episode I -  The Phantom Menace','I');
INSERT INTO `source` VALUES (2,'Star Wars: Episode II - Attack of the Clones','II');
INSERT INTO `source` VALUES (3,'Star Wars: Episode III - Revenge of the Sith','III');
INSERT INTO `source` VALUES (4,'Star Wars: Episode IV - A New Hope','IV');
INSERT INTO `source` VALUES (5,'Star Wars: Episode V - The Empire Strikes Back','V');
INSERT INTO `source` VALUES (6,'Star Wars: Episode VI - Return of the Jedi','VI');
INSERT INTO `source` VALUES (7,'Star Wars: Episode VII - The Force Awakens','VII');
INSERT INTO `source` VALUES (8,'Star Wars: Episode VIII - The Last Jedi','VIII');
INSERT INTO `source` VALUES (9,'Star Wars: Episode IX - The Rise of Skywalker','IX');
INSERT INTO `source` VALUES (10,'Star Wars Legends','Legends');
INSERT INTO `source` VALUES (11,'Star Wars: The Clone Wars','TCW');
INSERT INTO `source` VALUES (12,'Star Wars: The Old Republic','SWTOR');
INSERT INTO `source` VALUES (13,'Star Wars: Rebels','Rebels');
INSERT INTO `source` VALUES (14,'Star Wars: The Force Unleashed','SWTFU');
INSERT INTO `source` VALUES (15,'Star Wars: Battlefront','SWBF');
INSERT INTO `source` VALUES (16,'Rogue One: A Star Wars Story','R1');
INSERT INTO `source` VALUES (17,'Solo: A Star Wars Story','Solo');
INSERT INTO `source` VALUES (18,'Star Wars: The Mandalorian','Mando');
INSERT INTO `source` VALUES (19,'Star Wars: Ahsoka','Ahsoka');
/*!40000 ALTER TABLE `source` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-21 21:53:47
