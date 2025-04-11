-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.7.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for idculver
CREATE DATABASE IF NOT EXISTS `idculver` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `idculver`;

-- Dumping structure for table idculver.bp_battle_pack
CREATE TABLE IF NOT EXISTS `bp_battle_pack` (
  `set_id` int(11) NOT NULL DEFAULT 0,
  `set_name` varchar(50) NOT NULL,
  `release_year` year(4) NOT NULL,
  `source_id` int(11) NOT NULL,
  `piece_count` int(11) DEFAULT NULL,
  `msrp` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`set_id`),
  KEY `source_id` (`source_id`),
  CONSTRAINT `bp_battle_pack_ibfk_1` FOREIGN KEY (`source_id`) REFERENCES `bp_source` (`source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table idculver.bp_battle_pack: ~43 rows (approximately)
INSERT INTO `bp_battle_pack` (`set_id`, `set_name`, `release_year`, `source_id`, `piece_count`, `msrp`) VALUES
	(7654, 'Droids Battle Pack', '2007', 3, 102, 9.99),
	(7655, 'Clone Troopers Battle Pack', '2007', 3, 58, 9.99),
	(7667, 'Imperial Dropship', '2008', 10, 81, 9.99),
	(7668, 'Rebel Scout Speeder', '2008', 4, 82, 9.99),
	(7913, 'Clone Trooper Battle Pack', '2011', 11, 85, 12.99),
	(7914, 'Mandalorian Battle Pack', '2011', 11, 68, 12.99),
	(8014, 'Clone Walker Battle Pack', '2009', 11, 72, 11.99),
	(8015, 'Assassin Droids Battle Pack', '2009', 11, 94, 11.99),
	(8083, 'Rebel Trooper Battle Pack', '2010', 5, 79, 11.99),
	(8084, 'Snowtrooper Battle Pack', '2010', 5, 74, 11.99),
	(9488, 'Elite Clone Trooper & Commando Droid Battle Pack', '2012', 11, 98, 12.99),
	(9489, 'Endor Rebel Trooper & Imperial Trooper Battle Pack', '2012', 6, 77, 12.99),
	(75000, 'Clone Troopers vs. Droidekas', '2013', 2, 124, 12.99),
	(75001, 'Republic Troopers vs. Sith Troopers', '2013', 12, 63, 12.99),
	(75034, 'Death Star Troopers', '2014', 6, 102, 12.99),
	(75035, 'Kashyyyk Troopers', '2014', 3, 99, 12.99),
	(75036, 'Utapau Troopers', '2014', 3, 83, 12.99),
	(75037, 'Battle on Saleucami', '2014', 3, 183, 14.99),
	(75078, 'Imperial Trooper Transport', '2015', 13, 141, 12.99),
	(75079, 'Shadow Troopers', '2015', 14, 95, 12.99),
	(75088, 'Senate Commando Troops', '2015', 11, 106, 12.99),
	(75089, 'Geonosis Troopers', '2015', 10, 105, 12.99),
	(75131, 'Resistance Trooper Battle Pack', '2016', 7, 112, 12.99),
	(75132, 'First Order Battle Pack', '2016', 7, 88, 12.99),
	(75133, 'Rebel Alliance Battle Pack', '2016', 15, 101, 12.99),
	(75134, 'Galactic Empire Battle Pack', '2016', 15, 109, 12.99),
	(75164, 'Rebel Trooper Battle Pack', '2017', 16, 120, 14.99),
	(75165, 'Imperial Trooper Battle Pack', '2017', 16, 112, 14.99),
	(75166, 'First Order Transport Speeder Battle Pack', '2017', 7, 117, 14.99),
	(75167, 'Bounty Hunter Speeder Bike Battle Pack', '2017', 5, 125, 14.99),
	(75197, 'First Order Specialists Battle Pack', '2018', 8, 108, 14.99),
	(75198, 'Tatooine Battle Pack', '2018', 4, 97, 14.99),
	(75206, 'Jedi and Clone Troopers Battle Pack', '2018', 2, 102, 14.99),
	(75207, 'Imperial Patrol Battle Pack', '2018', 17, 99, 14.99),
	(75225, 'Elite Praetorian Guard Battle Pack', '2019', 8, 109, 14.99),
	(75226, 'Inferno Squad Battle Pack', '2019', 15, 118, 14.99),
	(75262, 'Imperial Dropship – 20th Anniversary Edition', '2019', 10, 125, 19.99),
	(75266, 'Sith Troopers Battle Pack', '2020', 9, 105, 14.99),
	(75267, 'Mandalorian Battle Pack', '2020', 18, 102, 14.99),
	(75280, '501st Legion Clone Troopers', '2020', 11, 285, 29.99),
	(75320, 'Snowtrooper Battle Pack', '2022', 5, 105, 19.99),
	(75345, '501st Clone Troopers Battle Pack', '2023', 11, 119, 19.99),
	(75359, '332nd Ahsoka\'s Clone Trooper Battle Pack', '2023', 11, 108, 19.99),
	(75372, 'Clone Trooper & Battle Droid Battle Pack', '2024', 11, 215, 29.99),
	(75373, 'Ambush on Mandalore Battle Pack', '2024', 18, 109, 19.99);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
