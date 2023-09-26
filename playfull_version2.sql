-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 28, 2023 at 06:21 PM
-- Server version: 10.5.15-MariaDB-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playfull_version2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admission_history`
--

CREATE TABLE `admission_history` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `broadcaster_id` int(11) DEFAULT NULL,
  `broadcast_id` int(11) DEFAULT NULL,
  `purchase_id` int(11) NOT NULL,
  `archive` int(1) NOT NULL,
  `video_name` varchar(255) DEFAULT NULL,
  `remain_uses` int(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `admission_history`
--

INSERT INTO `admission_history` (`id`, `user_id`, `broadcaster_id`, `broadcast_id`, `purchase_id`, `archive`, `video_name`, `remain_uses`, `created_at`) VALUES
(4, 'e4f4e498-7700-44ed-aec9-79e281690016', 1915, 0, 29, 1, 'New Westminster Salmonbellies vs Delta Islanders', 1, '2023-12-31 12:00:00'),
(5, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 30, 1, 'New Westminster Salmonbellies vs Delta Islanders', 1, '2023-06-06 23:17:34'),
(6, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 30, 1, 'New Westminster Salmonbellies vs Delta Islanders', 0, '2023-06-06 23:17:42'),
(7, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 32, 1, 'New Westminster Salmonbellies vs Delta Islanders', 0, '2023-06-24 12:08:04'),
(8, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 33, 1, 'Archive Test', 0, '2023-08-23 14:00:47'),
(9, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 34, 1, 'Archive Test', 0, '2023-08-23 14:33:12'),
(10, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 29, '2023-08-23 19:39:11'),
(11, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 28, '2023-08-23 19:39:28'),
(12, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 27, '2023-08-23 19:39:42'),
(13, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 26, '2023-08-23 19:40:00'),
(14, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 25, '2023-08-23 19:41:03'),
(15, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 24, '2023-08-23 19:44:29'),
(16, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 23, '2023-08-23 19:46:17'),
(17, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 22, '2023-08-23 19:46:21'),
(18, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 21, '2023-08-23 19:46:24'),
(19, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 20, '2023-08-23 19:46:28'),
(20, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 19, '2023-08-23 19:46:29'),
(21, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 18, '2023-08-23 19:46:30'),
(22, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 17, '2023-08-23 19:46:31'),
(23, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 16, '2023-08-23 19:47:02'),
(24, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 15, '2023-08-23 19:47:20'),
(25, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 35, 0, 'Nostrica 2023', 14, '2023-08-23 19:48:07'),
(26, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 37, 1, 'New Westminster Salmonbellies vs Delta Islanders', 1, '2023-08-26 16:22:39'),
(27, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 37, 1, 'New Westminster Salmonbellies vs Delta Islanders', 0, '2023-08-27 16:27:41'),
(28, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 45, 1, 'Archive Test', 1, '2023-08-28 08:12:04'),
(29, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 45, 1, 'Archive Test', 0, '2023-08-28 08:15:51'),
(30, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 46, 1, 'Archive Test', 1, '2023-08-28 08:19:01'),
(31, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 46, 1, 'Archive Test', 0, '2023-08-28 08:19:25'),
(32, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 47, 1, 'Archive Test', 1, '2023-08-28 08:21:26'),
(33, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 47, 1, 'Archive Test', 0, '2023-08-28 08:21:31');

-- --------------------------------------------------------

--
-- Table structure for table `broadcasters`
--

CREATE TABLE `broadcasters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publish_point` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `stream_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_live_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_archive_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timezone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `broadcasters`
--

INSERT INTO `broadcasters` (`id`, `logo_id`, `name`, `description`, `publish_point`, `status`, `stream_key`, `stream_id`, `package_live_ids`, `package_archive_ids`, `timezone`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, NULL, 'test', NULL, '/test', 1, NULL, NULL, NULL, NULL, 'test', '2022-11-09 23:40:37', '2022-11-09 23:40:37', NULL),
(3, NULL, 'testing 1 more', NULL, '/test', 1, NULL, NULL, NULL, NULL, 'teste', '2022-11-10 00:09:20', '2022-11-10 00:09:20', NULL),
(101, '/images/1679138499.png', 'PlayFullScreen', NULL, '/pfs', 1, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-18 18:21:39', NULL),
(102, NULL, 'Delta Ice Hawks', NULL, '/pijhl-icehawks', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(103, NULL, 'VI Raiders', NULL, '/bcfc-viraiders', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(127, NULL, 'Ridge Meadows Flames', NULL, '/pijhl-flames', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(132, NULL, 'Spokane Braves', NULL, '/kijhl-braves', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(133, NULL, 'Sicamous Eagles', NULL, '/kijhl-eagles', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(134, NULL, 'Revelstoke Grizzlies', NULL, '/kijhl-grizzlies', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(135, NULL, 'Princeton Posse', NULL, '/kijhl-posse', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(136, NULL, 'Penticton Lakers', NULL, '/kijhl-lakers', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(137, NULL, 'North Okanagan Knights', NULL, '/kijhl-knights', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(138, NULL, 'Nelson Leafs', NULL, '/kijhl-leafs', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(139, NULL, 'Kimberley Dynamiters', NULL, '/kijhl-dynamiters', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(140, NULL, 'Kamloops Storm', NULL, '/kijhl-storm', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(141, NULL, 'Grand Forks Border Bruins', NULL, '/kijhl-bruins', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(142, NULL, 'Golden Rockets', NULL, '/kijhl-rockets', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(143, NULL, 'Fernie Ghostriders', NULL, '/kijhl-ghostriders', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(144, NULL, 'Creston Valley Thunder Cats', NULL, '/kijhl-thundercats', 1, NULL, NULL, NULL, NULL, 'MST', NULL, NULL, NULL),
(145, NULL, 'Columbia Valley Rockies', NULL, '/kijhl-rockies', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(146, NULL, 'Chase Chiefs', NULL, '/kijhl-chiefs', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(147, NULL, 'Castlegar Rebels', NULL, '/kijhl-rebels', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(148, NULL, 'Beaver Valley Nitehawks', NULL, '/kijhl-nitehawks', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(149, NULL, 'KIJHL', NULL, '/kijhl', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(150, NULL, 'BC High School Football', NULL, '/bchsf', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(154, NULL, 'Richmond Sockeyes', NULL, '/pijhl-sockeyes', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(557, NULL, 'UBC Baseball Thunderbirds', NULL, '/ubc-baseball', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(627, NULL, 'BC Hockey', NULL, '/bchockey', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(658, NULL, 'Corporation of Delta', NULL, '/deltacorp', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(664, NULL, 'Cyclone Taylor Cup', NULL, '/pijhl-sockeyes', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(819, NULL, 'Keystone Cup', NULL, '/pfs-road2', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1013, NULL, 'Sportswave', NULL, '/sportswave', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1056, NULL, 'BC Lacrosse Association', NULL, '/bcla', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1092, NULL, 'Canadian Lacrosse Association', NULL, '/cla', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1503, NULL, 'Osoyoos Coyotes', NULL, '/kijhl-coyotes', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1504, NULL, 'Kelowna Chiefs', NULL, '/kijhl-chiefs', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1794, NULL, 'Faith Vancouver', NULL, '/faithvan', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1882, NULL, 'BCHockey Major Midget A League', NULL, '/bch-mmal', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1883, NULL, 'Western Canada Bantam Championship', NULL, '/wcbc-mb-2011', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1884, NULL, 'Kamloops International Bantam Ice Hockey Tournament', NULL, '/pfs-road1', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1885, NULL, 'Canadian Ball Hockey Association', NULL, '/cbha', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1886, NULL, 'Okanagan Sun', NULL, '/bcfc1', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1887, NULL, 'CLA - Minto Cup', NULL, '/pfs-road2', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1888, NULL, 'CLA - Founders Cup', NULL, '/pfs-road1', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1889, NULL, 'Grand Forks International Baseball Tournament', NULL, '/pfs-road1', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1890, NULL, 'Chase Heat', NULL, '/kijhl-heat', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1891, NULL, 'Summerland Steam', NULL, '/kijhl-steam', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1892, NULL, 'Cariboo Cougars', NULL, '/mml-cougars', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1895, NULL, 'BC Intercollegiate Hockey League', NULL, '/bcihl', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1897, NULL, 'Pacific International Junior Hockey League', NULL, '/pijhl-sockeyes', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1898, NULL, 'Greater Ontario Junior Hockey League', NULL, '/gojhl', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1899, NULL, 'Inetsports', NULL, '/inetsports', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1900, NULL, 'Marlo Motorsports', NULL, '/marlomotorsports', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1901, '/images/1683656881.png', 'SWAT', NULL, '/swat_sk', 1, NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-10 01:28:01', NULL),
(1902, '/images/1683659147.png', 'Western Lacrosse Association', NULL, '/wla', 1, NULL, NULL, '14,12,11', '17', 'PST', NULL, '2023-08-28 05:29:17', NULL),
(1903, NULL, 'Langley Blaze', NULL, '/langleyblaze', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1904, NULL, 'Saskatoon Hilltops', NULL, '/skhilltops', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1905, NULL, 'Mayville State University', NULL, '/mayville', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1906, NULL, 'CLA Presidents Cup', NULL, '/clapresident', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1907, NULL, 'City of Kamloops', NULL, '/cok', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1908, NULL, 'City of Langley', NULL, '/col', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1909, NULL, 'Langley Events Centre', NULL, '/lec', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1910, NULL, 'BC MML: Greater Vancouver Canadians', NULL, '/mml-canadians', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1911, NULL, 'Canadian Junior Football League', NULL, '/cjfl', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1912, NULL, 'Dickinson University', NULL, '/dickinson', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1913, NULL, 'Whistler', NULL, '/whistler', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1914, NULL, 'Big League Experience', NULL, '/ble-botw', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1915, '/images/1683657556.png', 'BC Junior A Lacrosse League', 'BCJALL', '/bcjall', 1, NULL, NULL, '15', '17', 'PST', NULL, '2023-08-29 05:23:00', NULL),
(1916, NULL, 'Vancouver Enterprise Forum', NULL, '/vef', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1917, NULL, 'Saskatoon Box Lacrosse', NULL, '', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1918, NULL, 'Prairie Gold Lacrosse League', NULL, '/swat_sk', 1, NULL, NULL, NULL, NULL, 'CST6CDT', NULL, NULL, NULL),
(1919, NULL, 'City of Merritt', NULL, '/live', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1920, NULL, 'Langley Rams', NULL, '/bcfc-rams', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1921, NULL, 'Jr. B Provincials', NULL, '/bcla-jrb', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1922, NULL, 'New - VI Raiders', NULL, '/bcfc-raiders', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1923, NULL, 'World Baseball Challenge', NULL, '/baseball-wbc', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1924, NULL, 'CLA - Minto Cup', NULL, '/pfs-road2', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1925, NULL, 'CLA - Founders Cup', NULL, '/cla-founders', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1926, NULL, 'CLA - Minto Cup CDN', NULL, '/pfs-road2', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1927, NULL, 'Dickinson State University', NULL, '/mayville', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1928, NULL, 'Mann Cup 2019', NULL, '/cla-manncup', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1930, NULL, 'BC Major Midget League', NULL, '/mml', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1931, NULL, 'Sportsone Internet Radio', NULL, '/sportsone', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1932, NULL, 'BC Hockey Events', NULL, '/bchockey', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1933, NULL, 'Victoria Harbourcats Baseball', NULL, '/baseball-vhc', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1934, NULL, 'Fastcreative', NULL, '/fastcreative', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1935, NULL, 'CLA Presidents Cup 2014', NULL, '/cla-pres2014', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1936, NULL, 'Regina Thunder', NULL, '/event_source', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1937, NULL, 'Surrey Minor Ball Hockey ', NULL, '/smbha', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1938, NULL, 'Westshore Rebels', NULL, '/bcfc-rebels', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1939, NULL, 'Okotoks Raiders', NULL, '/rmll-raiders', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(1940, NULL, 'Calgary Colts', NULL, '/pfc-colts', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(1941, NULL, 'PlayFullScreen Event', NULL, '/pfs_', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1943, NULL, 'Richmond International Bantam Midget Hockey Tournament', NULL, '/ribmht-', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1944, NULL, 'Pacific Junior Hockey League', NULL, '/pjhl', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1945, NULL, 'Kelowna International Elite Midget Tournament', NULL, '/kimmt-', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1946, NULL, 'Cyclone Taylor Cup 2017', NULL, '/ctc-2017-', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1947, NULL, 'Keystone Cup 2017', NULL, '/keystone-17', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1948, NULL, 'National Aboriginal Hockey Championship', NULL, '/nahc', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1949, NULL, 'Rocky Mountain Lacrosse League Jr A', NULL, '/rmlljra', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1950, NULL, 'Pat Quinn Classic', NULL, '/PQC', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1951, NULL, 'Nanaimo Sr B Timbermen', NULL, '/srb-tmen', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1952, NULL, 'BC Minor Midget A League', NULL, '/mml', 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(1953, '/images/1679516570.png', 'BC Hockey Broadcasts', 'BC Elite Hockey League', '/BCEHL', 1, NULL, NULL, NULL, NULL, 'PST', NULL, '2023-03-23 03:22:50', NULL),
(1954, NULL, 'NE Alberta Jr B Hockey League', NULL, '/neajbhl', 1, NULL, NULL, NULL, NULL, 'MST7MDT', NULL, NULL, NULL),
(1955, NULL, 'The Royal Westminster Regiment', NULL, '/trwr', 1, NULL, NULL, NULL, NULL, 'PST7PDT', NULL, NULL, NULL),
(1956, NULL, 'Fraser Valley Rush Classic', NULL, '/fvr-classic', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1957, NULL, 'PFS-Unlimited', NULL, '/', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1958, NULL, 'NSIHLA', NULL, '/', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1959, NULL, 'Truth Pump', NULL, '/', 1, NULL, NULL, NULL, NULL, 'PST8PDT', NULL, NULL, NULL),
(1960, '/images/1683656840.png', 'Winnipeg Blizzard', NULL, '/Winnepeg-Blizzard', 1, NULL, NULL, '7', '9', 'MDT8MST', NULL, '2023-05-10 02:03:40', NULL),
(1989, '/images/1679190648.png', 'Nostrica', 'nostrica', '/nostrica', 1, NULL, NULL, '7', '9', NULL, '2023-03-19 08:50:48', '2023-08-24 09:44:08', NULL),
(1990, '/images/1683929762.png', 'Fishes wish', 'Boat charters', '/fishes_wish', 1, NULL, NULL, NULL, NULL, 'PST8PDT', '2023-05-13 05:16:02', '2023-05-13 05:16:27', NULL),
(1991, NULL, 'Fish', 'no fi', 'Pos', 1, NULL, NULL, NULL, NULL, 'PST8PDT', '2023-05-14 19:46:30', '2023-05-14 19:46:30', NULL),
(1992, NULL, 'BCEHL', 'BC Elite Hockey League', '/bcehl', 1, NULL, NULL, '7', '9', 'PST8PDT', '2023-08-24 10:35:09', '2023-08-24 11:14:38', NULL),
(1993, NULL, 'Greybeard Media', 'Greybeard Media - Live Stream', '/greybeard', 1, NULL, NULL, NULL, NULL, 'PST8PDT', '2023-08-29 06:29:50', '2023-08-29 06:29:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `broadcaster_team`
--

CREATE TABLE `broadcaster_team` (
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `broadcaster_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `broadcaster_team`
--

INSERT INTO `broadcaster_team` (`team_id`, `broadcaster_id`, `created_at`, `updated_at`) VALUES
(4, 102, NULL, NULL),
(4, 3, NULL, NULL),
(4, 101, NULL, NULL),
(4, 139, NULL, NULL),
(4, 146, NULL, NULL),
(4, 3, NULL, NULL),
(4, 101, NULL, NULL),
(4, 1056, NULL, NULL),
(4, 2, NULL, NULL),
(16, 127, NULL, NULL),
(16, 1883, NULL, NULL),
(16, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `broadcasts`
--

CREATE TABLE `broadcasts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `broadcaster_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `player_msg` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_id` int(11) DEFAULT NULL,
  `away_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `logo_id` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `live` tinyint(1) NOT NULL DEFAULT 0,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `chat` tinyint(1) NOT NULL DEFAULT 0,
  `channel_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_key` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_id` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_id` int(11) DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT 0,
  `hidden` tinyint(1) NOT NULL DEFAULT 0,
  `cost` int(11) NOT NULL DEFAULT 0,
  `start_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiry_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nostrapubkey` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumb1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumb2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumb3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumb4` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `broadcasts`
--

INSERT INTO `broadcasts` (`id`, `broadcaster_id`, `name`, `description`, `player_msg`, `home_id`, `away_id`, `location_id`, `logo_id`, `redirect`, `live`, `public`, `chat`, `channel_name`, `stream_key`, `stream_url`, `stream_id`, `package_id`, `available`, `hidden`, `cost`, `start_date`, `expiry_date`, `nostrapubkey`, `thumb1`, `thumb2`, `thumb3`, `thumb4`, `created_at`, `updated_at`, `deleted_at`) VALUES
(27368, 1989, 'Nostrica 2023', 'Nostrica Day 1', NULL, 0, 0, 0, NULL, NULL, 1, 1, 1, 'Nostrica', 'live_3a4564f0ee8911edb4a2bd1ebb66c775?password=4903ba6e', 'rtmp://us-west.castr.io/static', '645a7933af3533b2f7901bf1', NULL, 1, 0, 1, '1683925200000', '1692730800000', 'npub1tlesdct6nkf2my2zxsfya0akn5xkalzufmwvwedvpgmw4d5zrvhshfscdf', '/images/1692845314_thumb1.png', NULL, NULL, NULL, '2023-05-09 23:47:49', '2023-08-24 09:48:35', NULL),
(27369, 1957, 'TEst stream', 'test descriptiuon', NULL, 11, 11, 28, '/images/1683927593_logo.png', NULL, 1, 1, 0, NULL, 'live_8691bbc0f10d11eda40c57488b07496a?password=fc26be61', 'rtmp://us-west.castr.io/static', '645eb227dbc0483df40ecdee', NULL, 1, 0, 1, '1683925200000', '1683943200000', NULL, '/images/1683933459_thumb1.png', NULL, NULL, NULL, '2023-05-13 04:39:55', '2023-05-13 06:17:39', NULL),
(27370, 1990, 'Pink salmon', 'broadcast test', NULL, 0, 0, 0, NULL, NULL, 1, 1, 1, 'Pink_salmon', 'live_a7855840f11311eda0ababa409262070?password=623b38f2', 'rtmp://us-west.castr.io/static', '645ebc6f818db63db6d3c7dd', NULL, 1, 0, 1, '1683925200000', '1683943200000', 'npub1m0u0q0jvhxshl06a74q2kfl4dfu34f4r0fwlt0ym0yg42rfzrrrqh84fn5', '/images/1683933428_thumb1.png', NULL, NULL, NULL, '2023-05-13 05:23:45', '2023-05-13 06:17:09', NULL),
(27371, 102, 'New Test', 'new test', 'welcome', 47, 48, 12, NULL, '/new_test', 0, 1, 0, 'new_test', 'live_d8c39220f11b11ed8ab8d1f972286efd?password=c84946dd', 'rtmp://us-west.castr.io/static', '645eca2ec616673e2a6e588e', NULL, 1, 0, 1, '1683925200000', '1683993600000', 'npub1m0u0q0jvhxshl06a74q2kfl4dfu34f4r0fwlt0ym0yg42rfzrrrqh84fn5', '/images/1683933980_thumb1.png', NULL, NULL, NULL, '2023-05-13 06:22:24', '2023-05-13 06:26:20', NULL),
(27372, 1915, 'Archive Test Payment', 'test archive purchase and playback', NULL, 34, 35, 0, '/images/1684479662_logo.png', NULL, 1, 1, 0, NULL, 'live_e9356bf0f61211edb3ee954478bd267d?password=1a75c1cb', 'rtmp://us-west.castr.io/static', '64671eac5c7d8f2add4d6224', NULL, 1, 0, 1, '1684436400000', '1693508400000', NULL, '/images/1693263102_thumb1.png', NULL, NULL, NULL, '2023-05-19 14:01:04', '2023-08-29 05:51:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bank1` double DEFAULT 0,
  `bank2` double DEFAULT 0,
  `lightning1` double DEFAULT 0,
  `lightning2` double DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fees`
--

INSERT INTO `fees` (`id`, `bank1`, `bank2`, `lightning1`, `lightning2`, `created_at`, `updated_at`) VALUES
(1, 0.3, 25, 0.25, 0.3, '2023-03-03 15:18:55', '2023-03-13 09:02:25');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `abbreviation`, `parent`, `created_at`, `updated_at`) VALUES
(11, 'Kootenay Conference', NULL, 1, '2022-11-11 15:58:44', '2022-11-14 06:22:34'),
(12, 'Okanagan/Shuswap Conference', NULL, 1, '2022-11-11 15:59:08', '2022-11-11 15:59:09'),
(13, 'Major Midget League', NULL, 2, '2022-11-11 16:08:26', '2022-11-11 16:08:27'),
(14, 'British Columbia Junior A Lacrosse', NULL, 3, '2022-11-11 16:13:35', '2022-11-11 16:13:35'),
(15, 'Western Lacrosse Association', NULL, 4, '2022-11-11 16:08:58', '2022-11-11 16:09:00'),
(16, 'Pacific Junior Hockey League', NULL, 5, '2022-11-11 16:09:09', '2022-11-11 16:09:10'),
(17, 'Female Midget AAA', NULL, 6, '2022-11-11 16:09:21', '2022-11-11 16:09:23'),
(18, 'SWAT', NULL, 7, '2022-11-11 16:09:32', '2022-11-11 16:09:34'),
(19, 'Minor Midget League', NULL, 8, '2022-11-11 16:09:42', '2022-11-11 16:09:43'),
(20, 'NEAJBHL', NULL, 9, '2022-11-11 16:09:42', '2022-11-11 16:09:43'),
(21, 'PFS Events', NULL, 10, '2022-11-11 16:13:32', '2022-11-11 16:13:32'),
(22, 'Eddie Mountain', NULL, 11, '2022-11-11 16:13:21', '2022-11-11 16:13:23'),
(23, 'Neil Murdoch', NULL, 11, '2022-11-11 16:13:22', '2022-11-11 16:13:24'),
(24, 'Doug Birks', NULL, 12, '2022-11-11 16:13:25', '2022-11-11 16:13:24'),
(25, 'Okanagan', NULL, 12, '2022-11-11 16:13:26', '2022-11-11 16:13:26'),
(26, 'Harold Brittain', NULL, 16, '2022-11-11 16:13:27', '2022-11-11 16:13:27'),
(27, 'Tom Shaw', NULL, 16, '2022-11-11 16:13:30', '2022-11-11 16:13:30'),
(28, 'SWAT Jr A', NULL, 18, '2022-11-11 16:13:28', '2022-11-11 16:13:29'),
(29, 'SWAT Jr B', NULL, 18, '2022-11-11 16:13:31', '2022-11-11 16:13:31'),
(32, 'test group', NULL, 30, '2022-11-14 06:15:52', '2022-11-14 06:15:52'),
(33, 'test section', NULL, 32, '2022-11-14 06:16:07', '2022-11-14 06:16:07'),
(34, 'BC Hockey League', 'BCEHL', NULL, '2022-11-16 04:04:05', '2022-11-17 06:57:24'),
(35, 'Frasier Valley Rush', 'FVR', 4, '2022-11-16 04:07:35', '2022-11-16 04:11:45'),
(36, 'U15', NULL, 35, '2022-11-16 04:31:58', '2022-11-16 04:31:58'),
(37, 'U17', NULL, 35, '2022-11-16 04:32:20', '2022-11-16 04:32:20'),
(38, 'U18', NULL, 35, '2022-11-16 04:32:35', '2022-11-16 04:32:35'),
(39, 'Valley NW Hawks', 'VNW', 4, '2022-11-16 04:39:11', '2022-11-16 04:39:11'),
(40, 'U18', NULL, 34, '2022-11-16 04:39:32', '2022-11-17 06:57:49'),
(41, 'U17', NULL, 34, '2022-11-16 04:39:54', '2022-11-17 06:57:41'),
(42, 'U15', NULL, 39, '2022-11-16 04:40:10', '2022-11-16 04:40:10'),
(43, 'U15', NULL, 34, '2022-11-17 06:57:34', '2022-11-17 06:57:34'),
(45, 'qewqe', 'qwe', 44, '2023-01-31 18:13:11', '2023-01-31 18:13:11'),
(46, 'U18F', NULL, 34, '2023-02-01 00:10:28', '2023-02-01 00:10:28'),
(47, 'Western Lacrosse Association', 'WLA', NULL, '2023-02-01 00:14:47', '2023-02-01 00:15:25'),
(48, 'Nostr', NULL, NULL, '2023-02-10 16:49:25', '2023-02-10 16:49:25');

-- --------------------------------------------------------

--
-- Table structure for table `group_team`
--

CREATE TABLE `group_team` (
  `group_id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `group_team`
--

INSERT INTO `group_team` (`group_id`, `team_id`, `created_at`, `updated_at`) VALUES
(11, 4, NULL, NULL),
(15, 36, NULL, NULL),
(35, 64, NULL, NULL),
(35, 64, NULL, NULL),
(39, 193, NULL, NULL),
(36, 64, NULL, NULL),
(36, 25, NULL, NULL),
(14, 2, NULL, NULL),
(11, 4, NULL, NULL),
(15, 35, NULL, NULL),
(15, 36, NULL, NULL),
(35, 64, NULL, NULL),
(39, 94, NULL, NULL),
(12, 3, NULL, NULL),
(13, 1, NULL, NULL),
(11, 4, NULL, NULL),
(12, 3, NULL, NULL),
(13, 5, NULL, NULL),
(13, 5, NULL, NULL),
(13, 1, NULL, NULL),
(14, 2, NULL, NULL),
(16, 2, NULL, NULL),
(13, 5, NULL, NULL),
(45, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `alternate_name` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `alternate_name`) VALUES
(1, 'Eddie Mnt Mem. Arena', 'Invermere - Eddie Mountain Memorial Arena'),
(2, 'Johnny Bucyk Arena', 'Creston - Johnny Bucyk Arena'),
(3, 'Fernie Memorial Arena', NULL),
(4, 'Golden Arena', NULL),
(5, 'Kimberley Civic Centre', NULL),
(6, 'Fruitval Beaver Valley Arena', 'Fruitvale - Beaver Valley Arena'),
(7, 'Castlegar & District Recreation Centre', 'Castlegar&DistrictRecreationCentre'),
(8, 'Grand Forks Arena', NULL),
(9, 'Nelson Community Comp', 'Nelson Community Complex'),
(10, 'Spokane - Eagles Ice Arena', 'Spokane-EaglesIceArena'),
(11, 'South Cariboo Rec Center', '100 Mile House - South Cariboo Rec Center'),
(12, 'Art Holding Memorial Arena', 'Chase - Art Holding Memorial Arena'),
(13, 'McArthur Park Arena', NULL),
(14, 'Revelstoke Forum', NULL),
(15, 'Sicamous & District Recreation Centre', NULL),
(16, 'Rutland Arena', 'Kelowna -  Rutland Arena'),
(17, 'Nor-Val Centre', 'Armstrong - Nor-Val Centre'),
(18, 'Osoyoos Sun Bowl Arena', 'Osoyoos - Sun BowlArena'),
(19, 'Princeton & District Arena', NULL),
(20, 'Summerland Arena', NULL),
(21, 'North Shore Winter Club', NULL),
(22, 'Kinsman #1', NULL),
(23, 'Langley Events Centre', NULL),
(24, 'Capital News Centre', NULL),
(25, 'Poirier Sports and Leisure Centre', NULL),
(26, 'Save on Foods Memorial Centre', NULL),
(27, 'Richmond Oval', 'Richmond Oval - North'),
(28, 'Abbotsford Recreation Centre', 'Abbotsford Centre'),
(29, 'Sandman Centre', NULL),
(30, 'Frank Crane Arena', NULL),
(31, 'Nelson and District Community', NULL),
(32, 'Pat Duke Memorial Arena', 'Lumby - Pat Duke Memorial Arena'),
(33, 'Kamloops Memorial Arena', 'Kamloops - Memorial Arena'),
(34, 'Nakusp Arena', NULL),
(35, 'Elkford Arena', NULL),
(36, 'Enderby Arena', NULL),
(37, 'Oliver Arena', NULL),
(38, 'Sparwood - Elk Valley Leisure Centre', NULL),
(39, 'MSA Arena', 'MSA Arena Abbotsford'),
(40, 'Planet Ice - Maple Ridge', 'Planet Ice Maple Ridge'),
(41, 'Langley Sportsplex', NULL),
(42, 'Sungod Arena', NULL),
(43, 'Burnaby Winter Club ', NULL),
(44, 'Surrey Sport and Leisure Center', NULL),
(45, 'Richmond Arena', NULL),
(46, 'Harry Jerome Rec Centre', NULL),
(47, 'Mission Leisure Centre', NULL),
(48, 'Port Moody Arena ', NULL),
(49, 'North Surrey Sport & Ice Complex', 'NorthSurreySport&IceComplex'),
(50, 'George Preston Recreation Centre ', NULL),
(51, 'Aldergrove Community Arena', NULL),
(52, 'Ladner Leisure Centre', NULL),
(53, 'B. Copeland', NULL),
(54, 'PI - Cam Neely', NULL),
(55, 'The Q Center', 'Bill Copeland Arena'),
(56, 'Queens Park', NULL),
(58, 'Grand Forks - Jack Goddard Memorial Arena', 'Queens Park Arena'),
(59, 'TBA', 'TBA'),
(60, 'Penticton - South Okanagan Events Center', 'South Okanagan Events Center'),
(61, 'Centre Ice', NULL),
(62, 'Kin Arena', 'Kin Arena - PG'),
(63, 'Cominco Arena', NULL),
(64, 'Burnaby Eight Rinks', NULL),
(65, 'Planet Ice', 'Planet Ice - Coquitlam'),
(66, 'Pearkes Arena', NULL),
(67, 'South Surrey Arena', NULL),
(68, 'Strathcona Gardens', NULL),
(69, 'Nanaimo Ice Centre', NULL),
(70, 'Priest Valley', ''),
(71, 'Nor Val Arena', ''),
(72, 'Prospera Place', ''),
(73, 'Rolling Mix Concrete Arena', 'Rolling Mix Concrete Arena (Coliseum)'),
(74, 'Shawnigan Lake Arena', ''),
(75, 'Twin Rinks', 'Chilliwack Twin Rinks'),
(76, 'Langley Events Centre - FieldHouse', NULL),
(77, 'Sports Centre', NULL),
(78, 'Port Coquitlam Rec Centre', 'Poco Rec Centre'),
(79, 'The Q Centre', NULL),
(80, 'Duncan Arena', NULL),
(81, 'Coquitlam Sports Centre', NULL),
(82, 'Planet Ice-Delta', 'Planet Ice Delta'),
(83, 'Kal Tire Place', NULL),
(84, 'Chase Art Holding Memorial Arena', NULL),
(85, 'Great Pacific Forum', NULL),
(86, 'Lake Cowichan Community Centre', NULL),
(87, 'CN Centre', NULL),
(88, 'UBC Thunderbird Winter Sports Centre', 'UBC Thunderbird Winter Sports Centre'),
(89, 'Planet Ice (Delta)', 'Planet Ice Delta'),
(90, 'Panorama Recreation Centre', 'Panorama Recreation Centre'),
(91, 'Ian Stewart Complex', 'Ian Stewart Complex'),
(92, 'Fort Forum Arena', 'Fort Forum Arena'),
(93, 'McArthur Island Sports Centre - Olympic', ''),
(94, 'McArthur Island Sports Centre - NHL', ''),
(95, 'Minoru Arena', ''),
(96, 'Kinsmen Arena', 'Kinsmen Arena Sask'),
(97, 'Richmond Ice Centre (Coliseum)', 'RichmondIceCentre(Coliseum)'),
(98, 'Aldergrove Credit Union Community Arena', 'AldergroveCreditUnionCommunityArena'),
(99, 'Centennial Arena', 'CentennialArena'),
(100, 'Richmond Ice Centre (Forum)', 'RichmondIceCentre(Forum)'),
(101, 'Fleetwood Arena', 'FleetwoodArena'),
(102, 'Vernon - Kal Tire Place', 'Vernon-KalTirePlace'),
(103, 'Kamloops - McArthur Park Arena', ''),
(104, 'Canal Flats Arena', ''),
(105, 'Cominco Arena, Trail BC', 'ComincoArena,TrailBC Cominco Arena, Trail BC'),
(106, 'Clancy Richard Arena, St Paul AB', 'Clancy Richard Arena');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_09_041246_create_broadcasters_table', 2),
(6, '2022_11_09_041746_create_packages_table', 3),
(7, '2022_11_10_163857_create_broadcasts_table', 4),
(8, '2022_11_10_170043_add_source_embed_to_broadcasts_table', 5),
(9, '2022_11_11_131813_create_groups_table', 6),
(10, '2022_11_11_202336_create_teams_table', 7),
(11, '2022_11_12_133114_create_group_team_table', 8),
(13, '2022_11_12_204253_create_broadcaster_team_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `tax` decimal(10,2) NOT NULL,
  `uses_left` int(11) NOT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `expiry_date` timestamp NULL DEFAULT NULL,
  `broadcast_id` int(11) DEFAULT NULL,
  `broadcaster_id` int(11) DEFAULT NULL,
  `live` tinyint(1) DEFAULT 1,
  `active` tinyint(1) DEFAULT 1,
  `team_restricted` tinyint(1) DEFAULT NULL,
  `unlimited_live` tinyint(1) DEFAULT NULL,
  `unlimited_archived` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `name`, `description`, `price`, `tax`, `uses_left`, `start_date`, `expiry_date`, `broadcast_id`, `broadcaster_id`, `live`, `active`, `team_restricted`, `unlimited_live`, `unlimited_archived`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 'PFS free', 'pfstest', 0.00, 0.00, -1, '2023-01-29 19:00:00', '2024-01-01 19:00:00', 0, 101, 1, 1, 0, 1, 1, '2023-01-29 21:30:25', '2023-01-29 21:30:25', NULL),
(5, 'PFS Archive', 'PFS archive test', 5.00, 0.10, 1, '2023-03-09 19:00:00', '2023-03-31 19:00:00', 0, 101, 0, 1, 0, 0, 0, '2023-03-10 04:46:44', '2023-03-10 04:46:44', NULL),
(6, 'BC Hockey Flex 10 - Live Broadcasts Only', 'This ticket has 10 uses to watch any BCEHL Broadcast. One viewer per ticket use.Safari not recommended', 87.95, 0.12, 10, '2022-07-01 19:00:00', '2023-03-31 19:00:00', 0, 1953, 1, 1, 0, 0, 0, '2023-03-23 03:05:32', '2023-03-23 03:05:32', NULL),
(7, 'BCEHL Single Game - Live Broadcast Only', 'Valid for one LIVE use during the 2022/23 BCEHL season. One viewer per ticket use.', 10.95, 0.12, 1, '2022-07-01 19:00:00', '2023-03-31 19:00:00', 0, 1953, 1, 1, 0, 0, 0, '2023-03-23 03:06:42', '2023-03-23 03:06:42', NULL),
(8, 'BC Hockey Flex 5 - Live Broadcasts Only', 'This ticket has 5 uses to watch any BCEHL Broadcasts. One viewer per ticket use', 43.95, 0.12, 5, '2022-07-01 19:00:00', '2023-03-31 19:00:00', 0, 1953, 1, 1, 0, 0, 0, '2023-03-23 03:08:04', '2023-03-23 03:16:35', NULL),
(9, 'BCEHL Single Game - Archive Only', 'Valid for use with one Archive view', 5.95, 0.12, 1, '2022-07-01 19:00:00', '2023-03-31 19:00:00', 0, 1953, 0, 1, 0, 0, 0, '2023-03-23 03:16:18', '2023-03-23 03:16:18', NULL),
(10, 'BCEHL Unlimited - Archive Only', 'Valid for the 2022-2023  Season', 29.99, 0.12, 0, '2022-07-01 19:00:00', '2023-03-31 19:00:00', 0, 1953, 0, 1, 0, 0, 1, '2023-03-23 03:19:38', '2023-03-23 03:19:38', NULL),
(11, 'WLA Flex 10 - Live Broadcasts Only', 'Valid for 10 LIVE uses during the 2022/23 season', 49.95, 0.12, 10, '2023-03-31 19:00:00', '2023-11-30 19:00:00', 0, 1902, 1, 1, 0, 0, 0, '2023-03-23 03:38:24', '2023-03-23 03:38:24', NULL),
(12, 'WLA Flex 5 - Live Broadcasts Only', 'Valid for 5 LIVE uses during the 2023 Season', 39.99, 0.12, 5, '2023-03-31 19:00:00', '2023-11-30 19:00:00', 0, 1902, 1, 1, 0, 0, 0, '2023-03-23 03:40:34', '2023-03-23 03:40:34', NULL),
(13, 'WLA Single Archive Broadcasts Only', 'Valid for 1 Archive use during the 2023 season', 5.99, 0.12, 1, '2023-03-31 19:00:00', '2023-11-30 19:00:00', 0, 1902, 0, 1, 0, 0, 0, '2023-03-23 03:42:34', '2023-03-23 03:44:41', NULL),
(14, 'WLA Single Live Broadcasts Only', 'Valid for 1 LIVE use during the 2023 season', 9.99, 0.12, 1, '2023-03-31 19:00:00', '2023-11-30 19:00:00', 0, 1902, 1, 1, 0, 0, 0, '2023-03-23 03:44:06', '2023-03-23 03:44:06', NULL),
(15, 'BCJALL Single Live Game', 'Single Live Game', 9.95, 1.20, 2, '2023-05-08 19:00:00', '2023-12-31 19:00:00', 0, 1915, 1, 1, 0, 0, 0, '2023-05-09 22:47:09', '2023-05-21 10:51:08', NULL),
(16, 'BCJALL Single Archive Game', 'Valid for Single Archive Game', 6.00, 0.72, 1, '2023-05-08 19:00:00', '2023-12-31 19:00:00', 0, 1915, 0, 1, 0, 0, 0, '2023-05-09 22:49:39', '2023-05-09 22:49:39', NULL),
(17, 'Dollar Pack', 'This is the description of the package not the game', 1.00, 0.05, 2, '2023-08-22 19:00:00', '2023-08-31 19:00:00', 27372, 1915, 1, 1, 0, 0, 0, '2023-08-24 09:32:58', '2023-08-29 06:02:53', NULL),
(18, 'Greybeard Live Event', 'Live stream of Greybeard Radio', 2.00, 0.10, 30, '2023-08-28 19:00:00', '2024-08-31 19:00:00', 0, 1993, 1, 1, 0, 0, 0, '2023-08-29 06:31:39', '2023-08-29 06:31:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `paid_invoices`
--

CREATE TABLE `paid_invoices` (
  `id` int(11) NOT NULL,
  `invoice_hash` varchar(200) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `paid` int(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paid_invoices`
--

INSERT INTO `paid_invoices` (`id`, `invoice_hash`, `user_id`, `paid`, `created_at`) VALUES
(1, '617650ca27bccbfe6439aab97e6aba5fa42a3a457410736e5465e64833aacb76', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1, '2023-06-24 08:46:18'),
(2, 'b37315ea3ebf65711f540ad01ddf0d5f9a73598ef44e79c4f8a6abb9897217d5', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 10:24:11'),
(3, '402d5f0a3eff24e6a5f40c834ecd8a2c8c28e236d9c6f0f20b03b765e8d37b58', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 12:08:10'),
(4, '605405e6ccc3e4b1bb49caa19ece51de5917e75bcbf3a75c91ed9b55322c34f6', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 12:08:27'),
(5, 'f973ee0d399824348c9dd9536a0c26aa568cd86e58114b3be0e03ca94ced57ec', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 12:38:16'),
(6, 'c2de20370653c2d448060be1cfcd2211e6fc62900076fb9a82ee988f87a3c67d', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 12:47:57'),
(7, 'bb1b7978bfa370d39fbf5398a29f7b84cfe03390de8cd5e70dc37d308dfe86f2', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 12:51:49'),
(8, '8a0a0442390095239663f6ad598cdb0ee9640da7c5a3b178d841f8a1320d0430', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:55:14'),
(9, '79a610e33565de099bda8f49954dd6dee33eb47b562e02c6800bd2958876904f', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:55:54'),
(10, 'c5f468d6c5e2f8fe9c400950c2f39cc3db1c57c943d0fb013312ef83fa1f4c44', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:56:06'),
(11, '978e09a482a39e05dd827fb00305687ab3be5ac6bed2b52badc9025bc8e693ef', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:56:21'),
(12, 'e7a27455db9414fceae3a983367bf45cf6bad9457970d9dcfb389adb4c487990', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:56:34'),
(13, '85075acd0789f0e9921e09d394fb17020ed260a8c8e343f3680d3185372339cb', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 15:56:58'),
(14, 'e8beff3f40a6dad2a63c22e4980c677db1332b02ca0229cef7cb98c91157070c', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 16:55:16'),
(15, 'cac42323720c6a0382588fd94b5435b040020e1f78e9f88d160261c15d620485', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 16:58:33'),
(16, '578655b79448ccea14f8d7e9a01433d289e9b1a5efb156ee7b5dfc76ce742ed5', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:05:54'),
(17, '276897338f3b309be32524b0a25b0cbf93c974f3f0fa1475bd0f5e6a1464386c', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:06:00'),
(18, '8bc68506197c252705799bbc76f4e30e74023220456ce78f2039917837f6a0e5', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:07:35'),
(19, '50a4d04aa3858d655abb84137fec38428496e9d22d52a4c713b0d790dd50f350', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:09:29'),
(20, 'defd9a85a8059bf80bc97b13b978b9af235171bf1143f16814a263db8a9ccf88', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:22:51'),
(21, 'e42d71b71d0fb8efc004e7c39ab123cffcae07b24ca73323d1398f45058468a9', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:23:07'),
(22, 'e72c3b689b540e0e2f38c8408a802c3716c8420310c984a44acb3921821c34ca', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:23:23'),
(23, 'e7b66706750e4037e2281c2cffad5edb34d4eaf8e669d084c621e7811a99b390', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:44:04'),
(24, 'fe9072b762af662d166dc8526edd6bba725bf6d2ccd15db8822ad6bf57856c1b', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:46:19'),
(25, '9dd96768e6668b9ef43f6e3af74741a4c85dd34da31a3a3d09576bb1dd6e12d6', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 17:58:40'),
(26, '4f7fa779b3775d947fdcbbc38b0b41f543c96c541047c25948ed9bd1a111970b', 'f1fb8f4b-3a7a-4eb0-be02-028190824f49', 0, '2023-06-24 17:58:44'),
(27, '4073328e9456ced432f28eadec7e3b0543b8b5bb6d49b6e0ef7253ae54dbb68e', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-24 17:59:13'),
(28, '0837f3fbce1d7869caad7231b351a35071486483e3f9c93be000047e7c930073', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 18:16:54'),
(29, '2c3bd75f523caeef8fc2f4af01447d38261d210cafca6062053a86f9b308d708', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-06-24 18:17:03'),
(30, 'bcaadce12fa8d620c7c7f87c1e4a6c817d70d171a03fa750fa44621f16722c7a', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 07:24:19'),
(31, '3f3cc015861c5b18d192bdba2a76cc5e6672baf5c9c491ce502d05516650db9a', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 19:40:17'),
(32, '82ec8cfb560c7dfce0f59b29cabbd9bd0938624ccf6b5f64534de0533758bb18', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:14:52'),
(33, '63afb87e5616dc8288e04db842275c6f049a07776b46f0e48d37634c30c339ee', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:15:56'),
(34, '3aa9d9963e833db4d079ba1a25e0eec59bcb38d1177f5a359327acf6fbc68be4', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:16:06'),
(35, '15d5df0325dd64d4a3e0e324e6c27e0043f10a4125604be9ae4cc4377784c99e', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:16:25'),
(36, 'b25c4ac879a6a47ee2170e6cdd7c5fe13af16126853cfc6a3ef260b2be9672f2', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:16:56'),
(37, 'f101df381e6373e4b7dd8f658d886171c4f0ff4d4c26d214bba774f68a06d554', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-25 20:18:50'),
(38, '4c4dbd84ef982a950c7f4565b706b35d5e687f88d779448abec5ada8af0f3241', '763e2f74-00f8-4a77-a7ec-7cbecfd70203', 0, '2023-06-26 01:43:34'),
(39, '619f308b0fa6187d87d7bb755bc605ac6f3409a53adb7abb5d9a7a201e1e3cf2', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-06-26 16:53:07'),
(40, '9aa084e549d6cc187c9ae5f00471d4caed76ceba59cb529fb97fa2dba52e3257', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-07-11 00:55:17'),
(41, 'af73b9f36c8a0949c51bdb450a5e2429874223e3e435a6c6c08ed0f09faff072', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-07-11 00:57:22'),
(42, '80060e32b76a6ecaaf02ae3901939ca6d328cc2f68e6b0638ae3e14aa44528b1', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-07-11 00:58:16'),
(43, '612ef15159cb5ecdc3a6521ae350687ad653dae7af9f5da12ebc67cdaa3cd508', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-07-11 00:58:49'),
(44, 'af0a431654a9952f2041440c4c18e4fc7c9e768317ea8fcdfb44d4da6ca1e6c4', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-07-11 01:01:09'),
(45, 'c79cc8dacfceb48835d0e7ed5f55f65af1cc8dff9bf452f72bcd2448ee581984', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-07-11 14:33:49'),
(46, '487ad8b939fd69498dde0a20936b866f13f717168e7d906fafc3b9fb99d593b0', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-01 07:13:58'),
(47, '0382e836fadc1fbe8ecde0a6a6ac4ed3ee51f8668aaeb610c271808af658562b', '763e2f74-00f8-4a77-a7ec-7cbecfd70203', 0, '2023-08-11 04:47:01'),
(48, 'a8a276dca337985b4a9627fc878872f9d1d05fcf2d7d16afe30a78b457f730cf', '763e2f74-00f8-4a77-a7ec-7cbecfd70203', 0, '2023-08-11 04:54:15'),
(49, '91e4aafa1e10b414568c7be3375cb3a48f1a756f2b781f521caf6f7529a7fd47', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 13:13:03'),
(50, 'c5763643d8cca4ad8a0972ad79096037e1c07864fa10eeafe169478674812572', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 13:20:36'),
(51, '00b8e22b5f5c10e98396e468bd3399de9ac477f236f43e9d0c8be3e89e2746ca', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 13:26:56'),
(52, '8b341b0f4e5a6961ca62d02032fea7879877123d6e460492f61a2f9377e3fe0d', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 13:27:19'),
(53, '4f50337da31305ee3a0863bb84fd97934255e5d2c58fb7b42ec8b7d94efbed3f', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-23 13:59:36'),
(54, '8cabdd22dc5b7b0fa724d45f36b461683b75bf5a4255430dbcb387929e7aa263', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 14:01:53'),
(55, 'c389784ff1f6659f4afd8c9fea9d712ba246a9ec0913a2f3a119eb8e20fe3292', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-23 14:31:03'),
(56, 'cc3a0e03c84aa62816fbbddc57c14bc4b1389b4c9dbbe1b9878ba8ab776fd464', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 15:50:22'),
(57, 'ae6a8d63f3d95d929e1b3fa3f5ca490cca572616db6a0b24c9dbc23fb53cbb4c', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 15:50:30'),
(58, '75bca40cbef00b1c61b93e305f28b2a1949ac9ea0e9d9ac5f07b53df9a3832e9', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 15:50:54'),
(59, '6b79e65f463a4e6e233e78bd6774256eddad5df9b8ac2cc477fae1fc270cb710', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 17:52:43'),
(60, '24cd5e1b8916bc9b433dbd32055a99efdafa42cef6a2810020b9e0d4730ae39b', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 18:48:58'),
(61, '5d5f5347d9a07f730894698513dc752710a4b2e124170ea0e5caaa2f35a0b131', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 18:50:40'),
(62, '38ba9a284e2bfb6bad237b3dfa836ce99deb1cf155409f7bc7cbb98aa18c5e90', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 19:03:35'),
(63, '36b0be0c9b76d6aa7fe608888e8b84c37c53db2a87574b61e7bc9d399d3a30bf', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 19:14:17'),
(64, '76e0e17df23da48a385f59f20847600a9ea4eb778ff3e58aaeb3c608a9715b6a', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-23 19:25:49'),
(65, 'd4555ae6e92587c080380a850b24527484be0d730665157ec27016dc55eebd5a', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-23 19:38:49'),
(66, '06b761b3390f69504052b327c588396b14161194c760d169339214d25c005dde', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 19:56:45'),
(67, 'b1f74f9aee5d93500daa55d8da20f21ce244701e61d2d59c37b63e68ed56f755', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-23 20:14:26'),
(68, 'aa25f5c0b41f642a7aa18414ae3823719b1d3c30dcbb27c09ef4b312565913c5', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-23 20:20:32'),
(69, 'd91744c1f41cec116f1588ecb0efc33d636c25a6d13a48adb2a7f7e9b3681960', '06c2ba26-4637-4a7f-84c0-8dc41f83d19a', 0, '2023-08-25 15:00:35'),
(70, '02d57e4d974b939ecffd2b7a522ad1c9b002d829d28de2b64efcc137210d542f', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-25 15:22:43'),
(71, 'e537634c0d7aa4cbd7148164afeb285072a30d73ea346cdd181237b71e731042', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-25 16:49:43'),
(72, '5c584317d199d805acd79f6d7a67c2c3acf3dfa6f1dfcff04522466e9cb2fe08', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 16:53:38'),
(73, '313fc25be412ab9f92caba3c2694aee9e2623d782e22eb635bf76e70290dfcc5', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 21:21:27'),
(74, '3974d7c1360ef1dd3586ca65c2ba20771727269b3df48b6085ad5900b466ee1a', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 21:26:10'),
(75, '4a8b36f0b82f84c40346da73ee67184961b109ca6a6e9be0d62e70f1651c8d2b', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 21:36:13'),
(76, 'a6975a74d34d33a7a6c64f6f7be1d7855965aec6bc9a2601b5ea213682efdb9c', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 21:46:14'),
(77, '155c9b2df7db6d831081a3cbd6b22fc0ae6a184fb978b378aeb463a0d7c19948', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-25 21:46:58'),
(78, '271b27c286db1beb0b667e0f37e49c831b54fc7491befc39e0f8af160da92c49', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 14:52:53'),
(79, 'bf2f1f54034eaf2bca32a3320fd1eaa788aef85578dd7bb81c7c8657f26a581c', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 14:55:43'),
(80, '33dccba400b1365170a72af75a0fbaa3cb702e5d037871bed7409796989ae0e2', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 14:57:12'),
(81, 'fe4d6dc0f31f9403c1fe6a693c8b6d13f62dfad2fe6da54af698b46f7c0044de', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 15:00:00'),
(82, '2c47b825d2299f0f8df3d47db08bf19767856c8806fdb556e46a3955dd40fd4e', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 15:03:35'),
(83, 'cf67214a3e1eee52a0489f9842704a910cd3ddedbec40cde5cd9ead3dcc10ab4', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 15:08:39'),
(84, 'd7595b269a1ec08445c0280db9a188f7c08bc5fc84eb0ccfa8350e7325cce675', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 15:11:48'),
(85, 'b63f7162789c462328230f7d888ba9d2b24359eb83940baa2def891adcdda406', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 15:16:06'),
(86, 'a55c72200160ce26ae0b168c32ca2e6817b4890e52f8f16f77606bc0bd2a46a7', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-26 16:19:11'),
(87, 'a4deb73ed93296c9686cfccda6108293891a29d1df18f88f544bbb2dfa0494c6', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 15:29:30'),
(88, '5cff9669c4d0199cec947cfce374226304ac941ca9e87563031f48a8f5a13204', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 15:31:08'),
(89, '8111ebe6f183dc768b8d39da5b57633fe47793618c1d931db44df65b96086078', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 15:34:08'),
(90, '23b6e8190af51f186b8c835cf8cc4cc11d6199f0ba92a00110065aff9ecc0c80', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-27 15:36:07'),
(91, '55da13cc5fd811ee332e2b66185b2ba550496917215ac20edcf6024b547dc256', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-27 15:37:16'),
(92, 'eab5eea86e9e8c50696e134fa3b29bfe7662120804b4f70b93aaa5bf39e6bbe8', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 15:38:06'),
(93, '06c274e1a89651530038a444d6a6ad33b8c2ead4dfbe29e9ef0314fb28c0544d', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 15:42:09'),
(94, 'ee36a62d47deebbc327364af6255de9712fb2bc4e16c45d757c7c9879b733d7b', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-27 16:56:34'),
(95, '594d7ddbdbec17315d48d32cf2d29559fa28a9a35cf95e24cd8030eba5cc024d', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-27 16:57:05'),
(96, 'aa208aaaaae2d58848d3d89c7bcd5957c640938f564705b1078bfaee4fae0f0c', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-27 17:21:18'),
(97, '2526c9f4215a3d7378479b594c8ed703c14bebfc2c978e51f6edd966ae278605', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 21:42:56'),
(98, '69e131908fa70036fb97e94405fd654a7808e39969a46d713e5a55db85d8d5bd', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 21:46:46'),
(99, '22740673f0e9f82f2aa86eba3f05a0761d09f81196f4dc9f90e1049222a92e3e', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 21:47:28'),
(100, '2f129905fc80df9482b2d55b198db15cfa729eac693dc78ab79f43fe3f69897b', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-27 21:47:40'),
(101, '298f09a82b3445551f632ba26f285e9bd9eb089d6c44f1600f45ac82c84933f3', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-28 05:50:05'),
(102, '45b0ce380f7874ddeb54f02d9b4810abcbaa008947e259459b1694335b1f8596', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-28 05:55:01'),
(103, 'fd43e279abc572bfd271e35445264519d42f9283223ed4af1d0f35e857699191', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-28 08:11:40'),
(104, 'ad945e8b94929eb5d763f287bc26df8ed7a843c9f958b97a0b34b7464c7e1305', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-28 08:16:10'),
(105, 'e2e336d4091b52142e3f16d3df8ec2cf572aad51c92e505c9ab0402bd5ba9c73', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-28 08:18:11'),
(106, '85dcc262b1f995c91891da2b61372b16683ac8f62edd34e95aa530deeab5023a', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1, '2023-08-28 08:19:32'),
(107, 'dcbb8c3bcf910b4ac8dc9436c7ea3562e0b34a77084a17ed85cd5d5db53fd7ae', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-28 08:25:53'),
(108, 'df0a3746ffa53707241edad5fc71957df023093d64aa7da6f18809081b17adaf', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-28 08:26:18'),
(109, '5a9f6d5cb2974e26b652a75a0726e7e0914d1610e05e3d3e53c73692b8545e24', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-28 12:36:43'),
(110, '59ff397e0a8650d7d1b441d974a9cdc72fa15b5144a4fecb1389939180a23185', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-28 12:36:47'),
(111, 'cb902c229ebc04c6907920084e0dea5de1bd5992610a6055fab09f30e4a7ebe1', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 0, '2023-08-28 12:37:08'),
(112, 'f98e6d3e93abb87da50a3d42fce2523bedb482ccf837d6ab75b6cb1f82562c1c', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 0, '2023-08-28 15:34:27'),
(113, 'bfedc7fa09b81d3060439da1c2edeff37ab64f8e2d1d0f618b84e8c7999c913a', '144803f5-d563-4563-a1d4-cda715273e8f', 0, '2023-08-28 15:41:09'),
(114, '24566780e663087b8352e245f203d21093cbb06f2ae20bee6c821df573440317', '144803f5-d563-4563-a1d4-cda715273e8f', 1, '2023-08-28 15:43:01'),
(115, '9e859cca71190cc1837a231538c335b509ea57288abb9879ae512bc2986e6d69', '144803f5-d563-4563-a1d4-cda715273e8f', 0, '2023-08-28 15:54:56');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `title`, `code`, `description`) VALUES
(1, 'Manage Groups', 'manage_group', 'Add/Update/Remove Groups'),
(2, 'Manage Broadcasters', 'manage_broadcaster', 'Add/Update/Remove Broadcasters'),
(3, 'Manage Broadcasts', 'manage_broadcast', 'Add/Update/Remove Broadcasts'),
(4, 'Manage Packages', 'manage_package', 'Add/Update/Remove Packages'),
(5, 'Show Ads', 'show_ads', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permission_groupusers`
--

CREATE TABLE `permission_groupusers` (
  `id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `perm` tinyint(4) NOT NULL COMMENT '0:Never, 1: no, 2: yes',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permission_groupusers`
--

INSERT INTO `permission_groupusers` (`id`, `permission_id`, `user_id`, `role_id`, `perm`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 1, 1, '2023-01-09 11:03:56', '2023-03-06 01:51:37'),
(2, 2, NULL, 1, 1, '2023-01-09 11:03:56', '2023-03-06 01:51:37'),
(3, 3, NULL, 1, 1, '2023-01-09 11:03:56', '2023-03-06 01:51:37'),
(4, 4, NULL, 1, 1, '2023-01-09 11:03:56', '2023-03-06 01:51:37'),
(5, 5, NULL, 1, 0, '2023-01-09 11:03:56', '2023-01-29 14:33:01'),
(6, 1, NULL, 2, 1, '2023-01-09 11:03:56', '2023-01-09 11:31:27'),
(7, 2, NULL, 2, 1, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(8, 3, NULL, 2, 2, '2023-01-09 11:03:56', '2023-03-09 21:42:53'),
(9, 4, NULL, 2, 2, '2023-01-09 11:03:56', '2023-01-09 13:31:59'),
(10, 5, NULL, 2, 2, '2023-01-09 11:03:56', '2023-01-09 13:31:59'),
(11, 1, NULL, 3, 2, '2023-01-09 11:03:56', '2023-01-09 11:04:40'),
(12, 2, NULL, 3, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(13, 3, NULL, 3, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(14, 4, NULL, 3, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(15, 5, NULL, 3, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(16, 1, NULL, 4, 2, '2023-01-09 11:03:56', '2023-01-29 14:33:01'),
(17, 2, NULL, 4, 2, '2023-01-09 11:03:56', '2023-01-09 15:11:10'),
(18, 3, NULL, 4, 2, '2023-01-09 11:03:56', '2023-01-09 15:11:10'),
(19, 4, NULL, 4, 2, '2023-01-09 11:03:56', '2023-01-09 15:11:10'),
(20, 5, NULL, 4, 1, '2023-01-09 11:03:56', '2023-01-09 13:32:06'),
(21, 1, NULL, 5, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(22, 2, NULL, 5, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(23, 3, NULL, 5, 2, '2023-01-09 11:03:56', '2023-01-29 14:33:17'),
(24, 4, NULL, 5, 0, '2023-01-09 11:03:56', '2023-01-29 14:33:17'),
(25, 5, NULL, 5, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(26, 1, NULL, 6, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(27, 2, NULL, 6, 0, '2023-01-09 11:03:56', '2023-01-09 11:03:56'),
(28, 3, NULL, 6, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(29, 4, NULL, 6, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(30, 5, NULL, 6, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(31, 1, NULL, 7, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(32, 2, NULL, 7, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(33, 3, NULL, 7, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(34, 4, NULL, 7, 0, '2023-01-09 11:03:57', '2023-01-09 11:03:57'),
(35, 5, NULL, 7, 2, '2023-01-09 11:03:57', '2023-01-09 11:04:57'),
(36, 1, 1, NULL, 1, '2023-01-10 14:56:45', '2023-03-02 09:26:16'),
(37, 2, 1, NULL, 1, '2023-01-10 14:56:45', '2023-03-02 09:26:16'),
(38, 3, 1, NULL, 1, '2023-01-10 14:56:45', '2023-03-02 09:26:16'),
(39, 4, 1, NULL, 1, '2023-01-10 14:56:45', '2023-03-02 09:26:16'),
(40, 5, 1, NULL, 1, '2023-01-10 14:56:45', '2023-03-02 09:26:16');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `id` int(11) NOT NULL,
  `sp_user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `broadcaster_id` int(11) DEFAULT NULL,
  `broadcast_id` int(11) DEFAULT NULL,
  `package_id` int(11) DEFAULT NULL,
  `uses` int(11) DEFAULT NULL,
  `live` int(1) DEFAULT NULL,
  `archive` int(1) DEFAULT NULL,
  `unlimited` tinyint(1) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `tax` decimal(10,2) DEFAULT NULL,
  `lightning` int(1) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`id`, `sp_user_id`, `broadcaster_id`, `broadcast_id`, `package_id`, `uses`, `live`, `archive`, `unlimited`, `price`, `tax`, `lightning`, `created_at`, `expiry_date`) VALUES
(26, 'e4f4e498-7700-44ed-aec9-79e281690016', 1902, 0, 13, 0, 0, 1, 0, 5.99, 0.50, 0, '2023-05-20 19:17:08', '2023-11-30 12:00:00'),
(27, 'e4f4e498-7700-44ed-aec9-79e281690016', 1902, 0, 15, 0, 0, 1, 0, 9.95, 0.50, 0, '2023-05-20 19:18:33', '2023-12-31 12:00:00'),
(28, 'e4f4e498-7700-44ed-aec9-79e281690016', 1902, 27372, 14, 0, 1, 0, 0, 9.99, 0.50, 0, '2023-05-21 19:39:12', '2023-11-30 12:00:00'),
(29, 'e4f4e498-7700-44ed-aec9-79e281690016', 1915, 0, 15, 1, 0, 1, 0, 9.95, 0.50, 0, '2023-05-24 01:48:58', '2023-12-31 12:00:00'),
(30, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 15, 0, 0, 1, 0, 28193.00, 0.00, 1, '2023-06-06 09:59:00', '2023-12-31 12:00:00'),
(31, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 16, 1, 0, 0, 0, 1000.00, 0.00, 1, '2023-06-24 08:58:52', '2023-12-31 12:00:00'),
(32, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 16, 0, 0, 1, 0, 1000.00, 0.00, 1, '2023-06-24 09:03:25', '2023-12-31 12:00:00'),
(33, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 13, 0, 0, 1, 0, 16613.00, 0.00, 1, '2023-08-23 14:00:39', '2023-11-30 12:00:00'),
(34, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 13, 0, 0, 1, 0, 16623.00, 0.00, 1, '2023-08-23 14:31:56', '2023-11-30 12:00:00'),
(35, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 27368, 17, 14, 1, 0, 0, 2800.00, 0.00, 1, '2023-08-23 19:39:03', '2023-08-25 12:00:00'),
(36, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2802.00, 0.00, 1, '2023-08-23 20:20:38', '2023-08-25 12:00:00'),
(37, '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 1915, 0, 15, 0, 0, 1, 0, 28158.00, 0.00, 1, '2023-08-26 16:19:58', '2023-12-31 12:00:00'),
(38, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:29:50', '2023-08-25 12:00:00'),
(39, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:31:36', '2023-08-25 12:00:00'),
(40, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:34:25', '2023-08-25 12:00:00'),
(41, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:36:22', '2023-08-25 12:00:00'),
(42, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:37:21', '2023-08-25 12:00:00'),
(43, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2821.00, 0.00, 1, '2023-08-27 15:42:23', '2023-08-31 12:00:00'),
(44, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1989, 0, 17, 2, 0, 1, 0, 2830.00, 0.00, 1, '2023-08-27 21:45:03', '2023-08-31 12:00:00'),
(45, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 17, 0, 0, 1, 0, 2826.00, 0.00, 1, '2023-08-28 08:11:58', '2023-08-31 12:00:00'),
(46, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 17, 0, 0, 1, 0, 2826.00, 0.00, 1, '2023-08-28 08:18:54', '2023-08-31 12:00:00'),
(47, 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 1902, 0, 17, 0, 0, 1, 0, 2826.00, 0.00, 1, '2023-08-28 08:21:22', '2023-08-31 12:00:00'),
(48, '144803f5-d563-4563-a1d4-cda715273e8f', 1915, 0, 17, 2, 0, 1, 0, 2833.00, 0.00, 1, '2023-08-28 15:41:36', '2023-08-31 12:00:00'),
(49, '144803f5-d563-4563-a1d4-cda715273e8f', 1915, 0, 17, 2, 0, 1, 0, 2833.00, 0.00, 1, '2023-08-28 15:43:30', '2023-08-31 12:00:00'),
(50, '144803f5-d563-4563-a1d4-cda715273e8f', 1915, 0, 17, 2, 0, 1, 0, 2833.00, 0.00, 1, '2023-08-28 15:55:21', '2023-08-31 12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Broadcaster'),
(3, 'Team'),
(4, 'Moderator'),
(5, 'Support'),
(6, 'User'),
(7, 'Guest');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publish_point` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `broadcaster_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_live_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_archive_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timezone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `logo`, `alt_name`, `publish_point`, `stream_key`, `stream_id`, `broadcaster_id`, `package_live_ids`, `package_archive_ids`, `timezone`, `created_at`, `updated_at`) VALUES
(1, 'Columbia Valley Rockies', '1020.jpg', '', '/kijhl-columbiavalley', '', '', '', NULL, NULL, 'MST7MDT', NULL, NULL),
(2, 'Creston Valley Thunder Cats', '1028.jpg', '', '/kijhl-creston', '', '', '', NULL, NULL, 'MST7MDT', NULL, NULL),
(3, 'Fernie Ghostriders', '1031.jpg', '', '/kijhl-fernie', '', '', '', NULL, NULL, 'MST7MDT', NULL, NULL),
(4, 'Golden Rockets', '1027.jpg', '', '/kijhl-golden', '', '', '', NULL, NULL, 'MST7MDT', NULL, NULL),
(5, 'Kimberley Dynamiters', '1018.jpg', '', '/kijhl-kimberley', '', '', '', NULL, NULL, 'MST7MDT', NULL, NULL),
(6, 'Castlegar Rebels', '1024.jpg', '', '/kijhl-castlegar', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(7, 'Beaver Valley Nitehawks', '1023.jpg', '', '/kijhl-beavervalley', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(8, 'Grand Forks Border Bruins', '1019.jpg', '', '/kijhl-grandforks', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(9, 'Nelson Leafs', '1029.jpg', '', '/kijhl-nelson', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(10, 'Spokane Braves', '1025.jpg', '', '/kijhl-spokane', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(11, '100 Mile House Wranglers', '1110.png', '', '/kijhl-100mile', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(12, 'Chase Heat', '1076.png', '', '/kijhl-chase', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(13, 'Kamloops Storm', '1021.jpg', '', '/kijhl-kamloops', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(14, 'Revelstoke Grizzlies', '1017.jpg', '', '/kijhl-revelstoke', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(15, 'Sicamous Eagles', '1022.jpg', '', '/kijhl-sicamous', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(16, 'Kelowna Chiefs', '1063.jpg', '', '/kijhl-kelowna', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(17, 'North Okanagan Knights', '1016.jpg', '', '/kijhl-northokanagan', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(18, 'Osoyoos Coyotes', '1062.jpg', '', '/kijhl-osoyoos', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(19, 'Princeton Posse', '1014.jpg', '', '/kijhl-princeton', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(20, 'Summerland Steam', '1077.png', '', '/kijhl-summerland', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(21, 'Vancouver NW Hawks', '1162.png', '', '/mml7', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(22, 'Cariboo Cougars', '1159.png', '', '/mml4', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(23, 'Valley West Giants', '1164.png', '', '/mml11', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(24, 'Okanagan Rockets', '1156.png', '', '/mml1', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(25, 'Vancouver NE Chiefs', '1164.png', '', '/mml9', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(26, 'South Island Royals', '1161.png', '', '/mml6', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(27, 'Greater Vancouver Canadians', '1165.png', '', '/mml10', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(28, 'Fraser Valley Thunderbirds', '1157.png', '', '/mml8', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(29, 'Thompson Blazers', '1160.png', '', '/mml5', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(30, 'North Island Silvertips', '1158.png', '', '/mml3', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(31, 'Kootenay Ice', '1159.png', '', '/mml2', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(32, 'Coquitlam Adanacs', '', 'Adanacs', '/bcjall-coquitlam', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(33, 'Victoria Shamrocks', '', 'Shamrocks', '/bcjall-victoria', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(34, 'Delta Islanders', '', 'Islanders', '/bcjall-delta', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(35, 'New Westminster Salmonbellies', '/images/1683658878.png', 'Salmonbellies', '/bcjall-new-west', '', '', '1915', NULL, NULL, 'PST8PDT', NULL, '2023-05-10 02:02:51'),
(36, 'Nanaimo Timbermen', '', 'Timbermen', '/bcjall-nanaimo', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(37, 'Langley Thunder', '', 'Thunder', '/bcjall-langley', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(38, 'Port Coquitlam Saints', '', 'Saints', '/bcjall-coquitlam', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(39, 'Burnaby Lakers', '', 'Lakers', '/Lakers', '', '', '1902', NULL, NULL, 'PST8PDT', NULL, '2023-02-01 00:13:15'),
(40, 'Sr Burnaby Lakers', '1085.png', 'Burnaby', '/wla-lakers', '', '', '', NULL, NULL, '', NULL, NULL),
(41, 'Sr Coquitlam Adanacs', '1086.png', 'Coquitlam', '/wla-adanacs', '', '', '', NULL, NULL, '', NULL, NULL),
(42, 'Sr Langley Thunder', '1087.png', 'Langley', '/wla-thunder', '', '', '', NULL, NULL, '', NULL, NULL),
(43, 'Sr Nanaimo Timbermen', '1089.png', 'Nanaimo', '/wla-timbermen', '', '', '', NULL, NULL, '', NULL, NULL),
(44, 'Sr New Westminster Salmonbellies', '/images/1683658949.png', 'New Westminster', '/wla-salmonbellies', '', '', '0', NULL, NULL, NULL, NULL, '2023-05-10 02:02:29'),
(45, 'Sr Maple Ridge Burrards', '1088.jpg', 'Maple Ridge', '/wla-burrards', '', '', '', NULL, NULL, '', NULL, NULL),
(46, 'Sr Victoria Shamrocks', '1091.png', 'Victoria', '/wla-shamrocks', '', '', '', NULL, NULL, '', NULL, NULL),
(47, 'Abbotsford Pilots', '1146.png', '', '/pjhl-abbotsford', '', '', '', NULL, NULL, '', NULL, NULL),
(48, 'Aldergrove Kodiaks', '1147.png', '', '/pjhl-aldergrove', '', '', '', NULL, NULL, '', NULL, NULL),
(49, 'Mission City Outlaws', '1150.png', '', '/pjhl-mission', '', '', '', NULL, NULL, '', NULL, NULL),
(50, 'Ridge Meadows Flames', '1153.png', '', '/pjhl-ridge-meadows', '', '', '', NULL, NULL, '', NULL, NULL),
(51, 'Surrey Knights', '1155.png', '', '/pjhl-surrey', '', '', '', NULL, NULL, '', NULL, NULL),
(52, 'Delta Ice Hawks', '1148.png', '', '/pjhl-delta', '', '', '', NULL, NULL, '', NULL, NULL),
(53, 'Grandview Steelers', '1149.png', '', '/pjhl-grandview', '', '', '', NULL, NULL, '', NULL, NULL),
(54, 'North Vancouver Wolf Pack', '1151.png', '', '/pjhl-north-van', '', '', '', NULL, NULL, '', NULL, NULL),
(55, 'Port Moody Panthers', '1152.png', '', '/pjhl-port-moody', '', '', '', NULL, NULL, '', NULL, NULL),
(56, 'Richmond Sockeyes', '1154.png', '', '/pjhl-richmond', '', '', '', NULL, NULL, '', NULL, NULL),
(57, 'Langley Trappers', '1177.png', '', '/pjhl-langley', '', '', '', NULL, NULL, '', NULL, NULL),
(58, 'TBA', '', '', '/tba', '', '', '', NULL, NULL, '', NULL, NULL),
(59, 'Kelowna Sparta', '', 'kelowna Sparta Sr AA', '/SrAA-sparta', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(60, 'Thompson-Okanagan Lakers', '1136.png', '', '/fmaaa-3', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(61, 'Vancouver Island Seals', '1137.png', '', '/fmaaa-4', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(62, 'Northern Capitals', '1135.png', '', '/fmaaa-2', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(63, 'Greater Vancouver Comets', '1134.png', NULL, '/fmaaa-1', '', '', '1992', NULL, NULL, 'PST8PDT', NULL, '2023-08-24 11:31:29'),
(64, 'Fraser Valley Rush', '1138.png', 'Rush', '/fmaaa-5', '', '', '1992', NULL, NULL, 'PST8PDT', NULL, '2023-08-24 11:31:15'),
(65, 'SWAT Jr B', '', '', '/swat-jrb', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(66, 'SWAT Jr A', '1124.png', '', '/swat-jra', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(67, 'Jr Miners', '', '', '/swat-jra', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(68, 'Jr A Raiders', '', '', '/swat-jra', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(69, 'Jr A Blues', '', '', '/swat-jra', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(70, 'Jr A Mounties', '', '', '/swat-jra', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(71, 'Silvertips', '', '', '/swat-jrb', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(72, 'Fish', '', '', '/swat-jrb', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(73, 'Chill', '', '', '/swat-jrb', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(74, 'Blizz', '', '', '/swat-jrb', '', '', '', NULL, NULL, 'CST6CDT', NULL, NULL),
(75, 'White Rock Whalers', '1184.png', '', '/pjhl-white-rock', '', '', '', NULL, NULL, '', NULL, NULL),
(76, 'Vancouver NW Hawks Minor', '', '', '/mml7', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(77, 'Cariboo Cougars Minor', '', '', '/mml4', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(78, 'Valley West Giants Minor', '', '', '/mml11', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(79, 'Okanagan Rockets Minor', '', '', '/mml1', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(80, 'Vancouver NE Chiefs Minor', '', '', '/mml9', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(81, 'South Island Royals Minor', '', '', '/mml6', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(82, 'Greater Vancouver Canadians Minor', '', '', '/mml10', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(83, 'Fraser Valley Thunderbirds Minor', '', '', '/mml8', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(84, 'Thompson Blazers Minor', '', '', '/mml5', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(85, 'North Island Silvertips Minor', '', '', '/mml3', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(86, 'Kootenay Ice Minor', '', '', '/mml2', '', '', '', NULL, NULL, 'PST8PDT', NULL, NULL),
(87, 'St Paul Canadiens', '', '', '/neajbhl-st-paul', '', '', '', NULL, NULL, 'MST8MDT', NULL, NULL),
(88, 'Vegreville Rangers', '', '', '/neajbhl-st-paul', '', '', '', NULL, NULL, 'MST8MDT', NULL, NULL),
(89, 'Killam Wheat Kings', '', '', '/neajbhl-st-paul', '', '', '', NULL, NULL, 'MST8MDT', NULL, NULL),
(90, 'Cold Lake Ice', '', '', '/neajbhl-st-paul', '', '', '', NULL, NULL, 'MST8MDT', NULL, NULL),
(91, 'Lac La Biche Clippers', '', '', '/neajbhl-st-paul', '', '', '', NULL, NULL, 'MST8MDT', NULL, NULL),
(196, 'PFS', '/images/1676428053.png', NULL, '/pfs', NULL, NULL, '0', NULL, NULL, 'PST8PDT', '2023-02-15 09:24:11', '2023-02-15 09:27:33'),
(197, 'Wainwright Bisons', '/images/1676428117.png', NULL, '/neajbhl-st-paul', NULL, NULL, '0', NULL, NULL, 'MST8MDT', '2023-02-15 09:28:37', '2023-02-15 09:28:53'),
(198, 'Lloydminster Bandits', '/images/1676428198.png', NULL, '/neajbhl-st-paul', NULL, NULL, '0', '7,15', '6,15', 'MST8MDT', '2023-02-15 09:29:42', '2023-05-10 02:06:58'),
(199, 'Vermilion Tigers', '/images/1676428666.png', 'Vermilion Tigers', '/neajbhl-st-paul', NULL, NULL, '150', '10', '16', 'MST8MDT', '2023-02-15 09:37:46', '2023-05-10 02:07:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sp_user_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci DEFAULT '',
  `team_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 6,
  `pf_balance` double NOT NULL DEFAULT 0,
  `co_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `sp_user_id`, `email`, `email_verified_at`, `password`, `phone`, `avatar`, `team_id`, `group_id`, `role`, `pf_balance`, `co_name`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '', 'admin@themesbrand.com', NULL, '$2y$10$DdoFsk7ZXCZ0sNjRrQQpkeInchtLOmgjWwp/lClVrNO7l/B/ZUAbW', NULL, '/images/1679351191.png', 0, 21, 1, 0, '', NULL, '2022-11-09 10:46:00', '2023-03-21 05:26:31'),
(16, 'Duck123', '6a302b1d-18b0-46cb-a990-1e67a98d02df', 'ideacenterb305@gmail.com', NULL, NULL, '16043587938', '/images/1679351174.png', 0, 0, 6, 0, '', NULL, NULL, '2023-03-21 05:26:14'),
(19, 'Nostrica', NULL, 'not@aol.com', NULL, NULL, NULL, '/images/1678406436.png', 0, 0, 2, 0, '', NULL, '2023-03-10 06:59:02', '2023-03-13 09:25:52'),
(23, NULL, '6a302b1d-18b0-46cb-a990-1e67a98d02df', NULL, NULL, NULL, '+16043587938', '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(24, '', '0daca1d3-fcaa-4865-bc86-0081d46f725f', 'kreagerservice21@gmail.com', NULL, NULL, '', 'https://res.cloudinary.com/ddxnzgmzx/image/upload/v1679355491/pxsjcvuxve5jt8mgiizy.png', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(25, NULL, '763e2f74-00f8-4a77-a7ec-7cbecfd70203', 'brynlee1017@gmail.com', NULL, NULL, NULL, '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(26, '', 'd5c4929e-ea53-4867-b1de-0c3714ca3bc4', 'nathan.rhyne@gmail.com', NULL, NULL, '', 'https://res.cloudinary.com/ddxnzgmzx/image/upload/v1679519432/mh3vwge2wkvftqviik0v.png', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(27, 'D Mc', 'f1fb8f4b-3a7a-4eb0-be02-028190824f49', 'ca.mcilroy.dave@gmail.com', NULL, NULL, '778-239-7774', '', 0, 0, 2, 0, '', NULL, NULL, '2023-08-24 11:33:09'),
(28, 'Reverend Hodl', 'd827f8bb-5845-41b3-a1c5-847fd27459cf', 'reverendhodl@gmail.com', NULL, NULL, '778-239-7774', 'https://res.cloudinary.com/ddxnzgmzx/image/upload/v1685655499/hxt2tliqmi0apcs5ncnl.png', NULL, NULL, 6, 0, 'Reverendhodl', NULL, NULL, NULL),
(30, NULL, 'e848ebe0-f818-40b6-b991-d5e8518520a2', 'doad87@gmail.com', NULL, NULL, NULL, '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(31, NULL, 'ed3aebba-8829-4314-a85c-c00865b8bcfc', 'raihanhosen011@gmail.com', NULL, NULL, NULL, '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(32, 'BCJALL', NULL, 'test@ttest.com', NULL, NULL, NULL, '', 0, 14, 2, 0, '', NULL, '2023-05-11 05:13:29', '2023-05-11 05:13:29'),
(34, NULL, 'e4f4e498-7700-44ed-aec9-79e281690016', 'alex.ivanovic1001@gmail.com', NULL, NULL, NULL, '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(35, 'liew', '7a432b5b-97c7-4b1e-a73c-4d7ead479f72', 'sziliew0518@gmail.com', NULL, NULL, '', 'https://res.cloudinary.com/ddxnzgmzx/image/upload/v1693252219/gtypmm3bqmslxzlomhcu.jpg', NULL, NULL, 6, 0, 'kacashvila', NULL, NULL, NULL),
(36, NULL, '4e9eabbb-54b4-4dcc-95ec-b5a805dd8751', 'skytopground@gmail.com', NULL, NULL, NULL, '', NULL, NULL, 6, 0, '', NULL, NULL, NULL),
(38, NULL, '06c2ba26-4637-4a7f-84c0-8dc41f83d19a', NULL, NULL, NULL, '+17782397774', '', NULL, NULL, 6, 0, 'Reverendhodl', NULL, NULL, NULL),
(39, 'Raven Tenderfoot', '144803f5-d563-4563-a1d4-cda715273e8f', '', NULL, NULL, '+14372241408', '', NULL, NULL, 6, 0, 'RavenT', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `poster` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `hlsurl` text DEFAULT NULL,
  `broadcaster_id` int(11) DEFAULT NULL,
  `home_id` int(11) DEFAULT NULL,
  `away_id` int(11) DEFAULT NULL,
  `fetch_url` text DEFAULT NULL,
  `bunny_video_id` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `name`, `poster`, `description`, `hlsurl`, `broadcaster_id`, `home_id`, `away_id`, `fetch_url`, `bunny_video_id`, `created_at`, `updated_at`) VALUES
(20, 'Archive Test', 'ca8a119a-30a8-4fe6-9b7f-9fbb4894eca3', 'Sign Language Live Test', 'f40f959f-e175-42d2-8127-5764632a7a11', 1902, 0, 0, NULL, NULL, '2023-05-02 01:35:02', '2023-05-09 19:16:04'),
(21, 'Swat vs Blizzard', 'a662c2a7-3fb0-4ece-8363-4b2c490e06b1.png', 'Live from Kinsmen Arena - May 07, 2023 1:00 PM CST', 'a662c2a7-3fb0-4ece-8363-4b2c490e06b1', 1901, 65, 74, NULL, NULL, '2023-05-09 18:05:46', '2023-05-09 18:12:19'),
(22, 'New Westminster Salmonbellies vs Delta Islanders', 'f40f959f-e175-42d2-8127-5764632a7a11.png', 'BCJALL Lacrosse Game of the Week Game of the Week 2023: New Westminster Salmonbellies vs Delta Islan\nLive from Ladner Leisure Center - May 06, 2023 7:00pm pst', '9d61bc76-6137-4366-8f23-cace8157a2ed', 1915, 0, 0, NULL, NULL, '2023-05-09 19:38:02', '2023-08-28 15:11:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admission_history`
--
ALTER TABLE `admission_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `broadcasters`
--
ALTER TABLE `broadcasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `broadcasts`
--
ALTER TABLE `broadcasts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paid_invoices`
--
ALTER TABLE `paid_invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission_groupusers`
--
ALTER TABLE `permission_groupusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission_history`
--
ALTER TABLE `admission_history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `broadcasters`
--
ALTER TABLE `broadcasters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1994;

--
-- AUTO_INCREMENT for table `broadcasts`
--
ALTER TABLE `broadcasts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27373;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `paid_invoices`
--
ALTER TABLE `paid_invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `permission_groupusers`
--
ALTER TABLE `permission_groupusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
