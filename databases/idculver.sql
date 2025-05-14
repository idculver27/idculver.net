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
  `set_id` int(11) NOT NULL DEFAULT 0,
  `set_name` varchar(50) NOT NULL,
  `release_year` year(4) NOT NULL,
  `source_id` int(11) NOT NULL,
  `piece_count` int(11) DEFAULT NULL,
  `msrp` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`set_id`),
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
  `set_id` int(11) NOT NULL,
  `bl_id` varchar(10) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`set_id`,`bl_id`),
  KEY `bl_id` (`bl_id`),
  CONSTRAINT `battle_pack_has_minifig_ibfk_1` FOREIGN KEY (`set_id`) REFERENCES `battle_pack` (`set_id`),
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

-- Dump completed on 2025-05-13 21:00:21
