-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 11, 2024 at 05:39 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vote_center`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `symbol_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `name`, `phone`, `image`, `password`, `address`, `symbol_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(19, 'Abir', '017', 'demo', '135246', 'dsadad', 19, '2024-09-03 10:00:00', '2024-09-03 10:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `symbols`
--

CREATE TABLE `symbols` (
  `id` bigint NOT NULL,
  `symbol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `symbols`
--

INSERT INTO `symbols` (`id`, `symbol`, `created_at`, `updated_at`, `deleted_at`) VALUES
(19, 'car', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('admin','voter','candidate') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `otp` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `phone`, `type`, `status`, `otp`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', NULL, NULL, 'admin', 0, NULL, NULL, NULL, NULL),
(2, 'Emelie Williamson', 'delfina19@example.com', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'gVuqFsm4ss', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(3, 'Isabel Braun', 'rosalind84@example.org', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'L5ILPkfBjH', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(4, 'Jacynthe Senger', 'nsmith@example.org', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'xbB8gJimts', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(5, 'Winfield Nicolas', 'sporer.jeffery@example.net', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'RrjUbklVZm', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(6, 'Mr. Aidan Feil', 'bennett01@example.net', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'bClXfu3aoZ', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(7, 'Dominic Satterfield', 'ghuels@example.org', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'w5JJ4RNRyE', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(8, 'Lonny Reichel I', 'alejandrin.runolfsdottir@example.net', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'ECYGAKMnmg', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(9, 'Velva Larkin', 'tbechtelar@example.org', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'LfC9c4uOum', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(10, 'Prof. Geovanny Ruecker', 'sporer.davon@example.com', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'clz2U9anZd', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL),
(11, 'Rodrigo Hand', 'tressa.gusikowski@example.org', '2024-09-11 07:31:04', '$2y$12$NwEMYbz3g7XGfpttMAmnvuYPJl297W6m7.jZV280wgrNRm4ZWXDG2', 'YzfAIYztwe', NULL, NULL, 0, NULL, '2024-09-11 07:31:04', '2024-09-11 07:31:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `voters`
--

CREATE TABLE `voters` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `stay_in_position` tinyint DEFAULT '0' COMMENT '0-deshi & 1-expatriate',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voters`
--

INSERT INTO `voters` (`id`, `name`, `phone`, `image`, `password`, `address`, `stay_in_position`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Abir', '2558', 'demo', '135246', NULL, 0, '2024-09-03 10:00:00', '2024-09-08 15:04:30', NULL),
(7, 'Rupert Mayer', '7', NULL, '$2y$12$mxholNBxvIie1yX8S2D3X.AdfdotfRdKxdkscWQR1GaTyvgvl2tka', 'Aut consectetur quae dolorum sit sed doloribus.', 0, '2024-09-04 22:09:02', '2024-09-04 22:09:02', NULL),
(9, 'asdsadsadasdsad', 'dadsadasdsadwq', NULL, '$2y$12$Qf12bqo3kBC59vzNDy3Qie1gA1dbji4Ol5U9m9cWjWEOmKnbIbjVK', 'Animi dolor tempora dolore hic enim doloremque nesciunt quae.', 1, '2024-09-04 22:09:02', '2024-09-08 16:05:07', NULL),
(11, 'Taurean McCullough', '2', NULL, '$2y$12$vSPpfxkh8TRqx/mzUSK1o.HnTh3BEByAY0nf3q4lSwcdn9P6jBQ8m', 'Voluptatem maxime qui quia occaecati sit odit voluptatibus.', 1, '2024-09-04 22:09:02', '2024-09-04 22:09:02', NULL),
(16, 'fdsfds', 'dasdsada', NULL, NULL, NULL, 1, '2024-09-08 10:36:46', '2024-09-08 16:05:53', NULL),
(17, 'hfghgf', 'hgfhf', NULL, NULL, NULL, 1, '2024-09-08 11:52:46', '2024-09-08 11:52:46', NULL),
(18, 'asda', 'dsa', NULL, NULL, NULL, 1, '2024-09-08 19:02:47', '2024-09-08 19:02:47', NULL),
(19, 'Abir', '019', 'image', '135246', 'adsad', 0, '2024-09-03 10:00:00', '2024-09-03 10:00:00', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `symbols`
--
ALTER TABLE `symbols`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `voters`
--
ALTER TABLE `voters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `symbols`
--
ALTER TABLE `symbols`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `voters`
--
ALTER TABLE `voters`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
