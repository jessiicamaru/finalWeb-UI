-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 01, 2025 lúc 03:04 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `railwayticket`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookedticket`
--

CREATE TABLE `bookedticket` (
  `ID` char(10) NOT NULL,
  `ArriveStation` char(3) NOT NULL,
  `DepartStation` char(3) NOT NULL,
  `TrainID` char(4) NOT NULL,
  `Arrive` time NOT NULL,
  `Depart` time NOT NULL,
  `Position` int(11) NOT NULL,
  `Coach` int(11) NOT NULL,
  `BookingDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bookedticket`
--

INSERT INTO `bookedticket` (`ID`, `ArriveStation`, `DepartStation`, `TrainID`, `Arrive`, `Depart`, `Position`, `Coach`, `BookingDate`) VALUES
('2d9a3584-c', 'DH', 'DN', 'SE8', '13:52:00', '10:12:00', 3, 1, '2024-12-24'),
('363c01e3-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 1, 2, '2024-12-25'),
('3640463c-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 2, 2, '2024-12-25'),
('36416af8-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 3, 2, '2024-12-25'),
('36424372-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 4, 2, '2024-12-25'),
('3643530c-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 5, 2, '2024-12-25'),
('36443fe0-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 6, 2, '2024-12-25'),
('364536d0-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 7, 2, '2024-12-25'),
('364670b2-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 8, 2, '2024-12-25'),
('36479ad6-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 9, 2, '2024-12-25'),
('36490cb4-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 10, 2, '2024-12-25'),
('364a53ef-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 11, 2, '2024-12-25'),
('364bb7cd-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 12, 2, '2024-12-25'),
('364cf5d2-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 13, 2, '2024-12-25'),
('364e4e85-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 14, 2, '2024-12-25'),
('364f998d-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 15, 2, '2024-12-25'),
('36513e96-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 16, 2, '2024-12-25'),
('36532a68-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 17, 2, '2024-12-25'),
('36547c4f-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 18, 2, '2024-12-25'),
('3655fa97-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 19, 2, '2024-12-25'),
('36578a24-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 20, 2, '2024-12-25'),
('3658aa4a-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 21, 2, '2024-12-25'),
('3659b1a5-c', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 22, 2, '2024-12-25'),
('a0979bcd-8', 'DH', 'DN', 'SE8', '13:52:00', '10:12:00', 16, 1, '2024-12-24'),
('b6c56a2e-7', 'DH', 'DN', 'SE8', '13:52:00', '10:12:00', 14, 1, '2024-12-24'),
('c5de182c-f', 'DH', 'DN', 'SE8', '13:52:00', '10:12:00', 7, 1, '2024-12-24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `TicketID` varchar(10) DEFAULT NULL,
  `UserID` varchar(36) DEFAULT NULL,
  `cus_email` varchar(255) DEFAULT NULL,
  `cus_id` varchar(255) DEFAULT NULL,
  `cus_phone` varchar(255) DEFAULT NULL,
  `cus_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `station`
--

CREATE TABLE `station` (
  `StationID` char(3) NOT NULL,
  `StationName` varchar(50) NOT NULL,
  `StationOrder` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `station`
--

INSERT INTO `station` (`StationID`, `StationName`, `StationOrder`) VALUES
('BT', 'Bình Thuận', 12),
('DH', 'Đồng Hới', 5),
('DN', 'Đà Nẵng', 7),
('HN', 'Hà Nội', 1),
('HUE', 'Huế', 6),
('ND', 'Nam Định', 2),
('NT', 'Nha Trang', 10),
('PT', 'Phan Thiết', 12),
('QNG', 'Quảng Ngãi', 8),
('QNO', 'Quy Nhơn', 9),
('SG', 'Sài Gòn', 13),
('TH', 'Thanh Hóa', 3),
('VIN', 'Vinh', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `train`
--

CREATE TABLE `train` (
  `TrainName` char(4) NOT NULL,
  `TrainID` char(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `train`
--

INSERT INTO `train` (`TrainName`, `TrainID`) VALUES
('SE1', 'SE1'),
('SE10', 'SE10'),
('SE11', 'SE11'),
('SE12', 'SE12'),
('SE13', 'SE13'),
('SE14', 'SE14'),
('SE2', 'SE2'),
('SE3', 'SE3'),
('SE4', 'SE4'),
('SE5', 'SE5'),
('SE6', 'SE6'),
('SE7', 'SE7'),
('SE8', 'SE8'),
('SE9', 'SE9');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trainschedule`
--

CREATE TABLE `trainschedule` (
  `ScheduleID` int(11) NOT NULL,
  `TrainID` varchar(4) DEFAULT NULL,
  `StationID` varchar(3) DEFAULT NULL,
  `Depart` time DEFAULT NULL,
  `Arrive` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `trainschedule`
--

INSERT INTO `trainschedule` (`ScheduleID`, `TrainID`, `StationID`, `Depart`, `Arrive`) VALUES
(1, 'SE1', 'HN', '00:12:00', '00:10:00'),
(2, 'SE1', 'ND', '01:42:00', '01:40:00'),
(3, 'SE1', 'TH', '04:04:00', '04:02:00'),
(4, 'SE1', 'VIN', '05:34:00', '05:32:00'),
(5, 'SE1', 'DH', '07:36:00', '07:34:00'),
(6, 'SE1', 'HUE', '08:56:00', '08:54:00'),
(7, 'SE1', 'DN', '10:38:00', '10:36:00'),
(8, 'SE1', 'QNG', '12:00:00', '11:58:00'),
(9, 'SE1', 'QNO', '14:00:00', '13:58:00'),
(10, 'SE1', 'NT', '15:30:00', '15:28:00'),
(11, 'SE1', 'PT', '17:52:00', '17:50:00'),
(12, 'SE1', 'BT', '19:24:00', '19:22:00'),
(13, 'SE1', 'SG', '00:00:00', '20:50:00'),
(16, 'SE2', 'HN', '00:42:00', '00:40:00'),
(17, 'SE2', 'ND', '02:12:00', '02:10:00'),
(18, 'SE2', 'TH', '04:34:00', '04:32:00'),
(19, 'SE2', 'VIN', '06:02:00', '06:00:00'),
(20, 'SE2', 'DH', '08:02:00', '08:00:00'),
(21, 'SE2', 'HUE', '09:22:00', '09:20:00'),
(22, 'SE2', 'DN', '11:04:00', '11:02:00'),
(23, 'SE2', 'QNG', '12:26:00', '12:24:00'),
(24, 'SE2', 'QNO', '14:26:00', '14:24:00'),
(25, 'SE2', 'NT', '15:56:00', '15:54:00'),
(26, 'SE2', 'PT', '18:16:00', '18:14:00'),
(27, 'SE2', 'BT', '19:46:00', '19:44:00'),
(28, 'SE2', 'SG', '00:00:00', '21:10:00'),
(31, 'SE3', 'HN', '01:12:00', '01:10:00'),
(32, 'SE3', 'ND', '02:42:00', '02:40:00'),
(33, 'SE3', 'TH', '05:04:00', '05:02:00'),
(34, 'SE3', 'VIN', '06:32:00', '06:30:00'),
(35, 'SE3', 'DH', '08:32:00', '08:30:00'),
(36, 'SE3', 'HUE', '09:52:00', '09:50:00'),
(37, 'SE3', 'DN', '11:34:00', '11:32:00'),
(38, 'SE3', 'QNG', '12:56:00', '12:54:00'),
(39, 'SE3', 'QNO', '14:56:00', '14:54:00'),
(40, 'SE3', 'NT', '16:26:00', '16:24:00'),
(41, 'SE3', 'PT', '18:46:00', '18:44:00'),
(42, 'SE3', 'BT', '20:16:00', '20:14:00'),
(43, 'SE3', 'SG', '00:00:00', '21:40:00'),
(46, 'SE4', 'HN', '01:42:00', '01:40:00'),
(47, 'SE4', 'ND', '03:12:00', '03:10:00'),
(48, 'SE4', 'TH', '05:34:00', '05:32:00'),
(49, 'SE4', 'VIN', '07:02:00', '07:00:00'),
(50, 'SE4', 'DH', '09:02:00', '09:00:00'),
(51, 'SE4', 'HUE', '10:22:00', '10:20:00'),
(52, 'SE4', 'DN', '12:04:00', '12:02:00'),
(53, 'SE4', 'QNG', '13:26:00', '13:24:00'),
(54, 'SE4', 'QNO', '15:26:00', '15:24:00'),
(55, 'SE4', 'NT', '16:56:00', '16:54:00'),
(56, 'SE4', 'PT', '19:16:00', '19:14:00'),
(57, 'SE4', 'BT', '20:46:00', '20:44:00'),
(58, 'SE4', 'SG', '00:00:00', '22:00:00'),
(61, 'SE5', 'HN', '02:12:00', '02:10:00'),
(62, 'SE5', 'ND', '03:42:00', '03:40:00'),
(63, 'SE5', 'TH', '06:04:00', '06:02:00'),
(64, 'SE5', 'VIN', '07:32:00', '07:30:00'),
(65, 'SE5', 'DH', '09:32:00', '09:30:00'),
(66, 'SE5', 'HUE', '10:52:00', '10:50:00'),
(67, 'SE5', 'DN', '12:34:00', '12:32:00'),
(68, 'SE5', 'QNG', '13:56:00', '13:54:00'),
(69, 'SE5', 'QNO', '15:56:00', '15:54:00'),
(70, 'SE5', 'NT', '17:26:00', '17:24:00'),
(71, 'SE5', 'PT', '19:46:00', '19:44:00'),
(72, 'SE5', 'BT', '21:16:00', '21:14:00'),
(73, 'SE5', 'SG', '00:00:00', '22:30:00'),
(76, 'SE6', 'HN', '02:42:00', '02:40:00'),
(77, 'SE6', 'ND', '04:12:00', '04:10:00'),
(78, 'SE6', 'TH', '06:34:00', '06:32:00'),
(79, 'SE6', 'VIN', '08:02:00', '08:00:00'),
(80, 'SE6', 'DH', '10:02:00', '10:00:00'),
(81, 'SE6', 'HUE', '11:22:00', '11:20:00'),
(82, 'SE6', 'DN', '13:04:00', '13:02:00'),
(83, 'SE6', 'QNG', '14:26:00', '14:24:00'),
(84, 'SE6', 'QNO', '16:26:00', '16:24:00'),
(85, 'SE6', 'NT', '17:56:00', '17:54:00'),
(86, 'SE6', 'PT', '20:16:00', '20:14:00'),
(87, 'SE6', 'BT', '21:46:00', '21:44:00'),
(88, 'SE6', 'SG', '00:00:00', '23:00:00'),
(91, 'SE7', 'HN', '03:12:00', '03:10:00'),
(92, 'SE7', 'ND', '04:42:00', '04:40:00'),
(93, 'SE7', 'TH', '07:04:00', '07:02:00'),
(94, 'SE7', 'VIN', '08:32:00', '08:30:00'),
(95, 'SE7', 'DH', '10:32:00', '10:30:00'),
(96, 'SE7', 'HUE', '11:52:00', '11:50:00'),
(97, 'SE7', 'DN', '13:34:00', '13:32:00'),
(98, 'SE7', 'QNG', '14:56:00', '14:54:00'),
(99, 'SE7', 'QNO', '16:56:00', '16:54:00'),
(100, 'SE7', 'NT', '18:26:00', '18:24:00'),
(101, 'SE7', 'PT', '20:46:00', '20:44:00'),
(102, 'SE7', 'BT', '22:16:00', '22:14:00'),
(103, 'SE7', 'SG', '00:00:00', '23:30:00'),
(106, 'SE8', 'SG', '00:12:00', '00:10:00'),
(107, 'SE8', 'BT', '01:32:00', '01:30:00'),
(108, 'SE8', 'PT', '03:02:00', '03:00:00'),
(109, 'SE8', 'NT', '05:22:00', '05:20:00'),
(110, 'SE8', 'QNO', '06:52:00', '06:50:00'),
(111, 'SE8', 'QNG', '08:52:00', '08:50:00'),
(112, 'SE8', 'DN', '10:12:00', '10:10:00'),
(113, 'SE8', 'HUE', '11:54:00', '11:52:00'),
(114, 'SE8', 'DH', '13:54:00', '13:52:00'),
(115, 'SE8', 'VIN', '15:54:00', '15:52:00'),
(116, 'SE8', 'TH', '18:06:00', '18:04:00'),
(117, 'SE8', 'ND', '20:26:00', '20:24:00'),
(118, 'SE8', 'HN', '00:00:00', '21:50:00'),
(121, 'SE9', 'SG', '00:42:00', '00:40:00'),
(122, 'SE9', 'BT', '02:02:00', '02:00:00'),
(123, 'SE9', 'PT', '03:32:00', '03:30:00'),
(124, 'SE9', 'NT', '05:52:00', '05:50:00'),
(125, 'SE9', 'QNO', '07:22:00', '07:20:00'),
(126, 'SE9', 'QNG', '09:22:00', '09:20:00'),
(127, 'SE9', 'DN', '10:42:00', '10:40:00'),
(128, 'SE9', 'HUE', '12:24:00', '12:22:00'),
(129, 'SE9', 'DH', '14:24:00', '14:22:00'),
(130, 'SE9', 'VIN', '16:24:00', '16:22:00'),
(131, 'SE9', 'TH', '18:36:00', '18:34:00'),
(132, 'SE9', 'ND', '20:56:00', '20:54:00'),
(133, 'SE9', 'HN', '00:00:00', '22:30:00'),
(136, 'SE10', 'SG', '01:12:00', '01:10:00'),
(137, 'SE10', 'BT', '02:32:00', '02:30:00'),
(138, 'SE10', 'PT', '04:02:00', '04:00:00'),
(139, 'SE10', 'NT', '06:22:00', '06:20:00'),
(140, 'SE10', 'QNO', '07:52:00', '07:50:00'),
(141, 'SE10', 'QNG', '09:52:00', '09:50:00'),
(142, 'SE10', 'DN', '11:12:00', '11:10:00'),
(143, 'SE10', 'HUE', '12:54:00', '12:52:00'),
(144, 'SE10', 'DH', '14:54:00', '14:52:00'),
(145, 'SE10', 'VIN', '16:54:00', '16:52:00'),
(146, 'SE10', 'TH', '19:06:00', '19:04:00'),
(147, 'SE10', 'ND', '21:26:00', '21:24:00'),
(148, 'SE10', 'HN', '00:00:00', '23:00:00'),
(151, 'SE11', 'SG', '01:42:00', '01:40:00'),
(152, 'SE11', 'BT', '03:02:00', '03:00:00'),
(153, 'SE11', 'PT', '04:32:00', '04:30:00'),
(154, 'SE11', 'NT', '06:52:00', '06:50:00'),
(155, 'SE11', 'QNO', '08:22:00', '08:20:00'),
(156, 'SE11', 'QNG', '10:22:00', '10:20:00'),
(157, 'SE11', 'DN', '11:42:00', '11:40:00'),
(158, 'SE11', 'HUE', '13:24:00', '13:22:00'),
(159, 'SE11', 'DH', '15:24:00', '15:22:00'),
(160, 'SE11', 'VIN', '17:24:00', '17:22:00'),
(161, 'SE11', 'TH', '19:36:00', '19:34:00'),
(162, 'SE11', 'ND', '21:56:00', '21:54:00'),
(163, 'SE11', 'HN', '00:00:00', '23:30:00'),
(166, 'SE12', 'SG', '02:12:00', '02:10:00'),
(167, 'SE12', 'BT', '03:32:00', '03:30:00'),
(168, 'SE12', 'PT', '05:02:00', '05:00:00'),
(169, 'SE12', 'NT', '07:22:00', '07:20:00'),
(170, 'SE12', 'QNO', '08:52:00', '08:50:00'),
(171, 'SE12', 'QNG', '10:52:00', '10:50:00'),
(172, 'SE12', 'DN', '12:12:00', '12:10:00'),
(173, 'SE12', 'HUE', '13:54:00', '13:52:00'),
(174, 'SE12', 'DH', '15:54:00', '15:52:00'),
(175, 'SE12', 'VIN', '17:54:00', '17:52:00'),
(176, 'SE12', 'TH', '20:06:00', '20:04:00'),
(177, 'SE12', 'ND', '22:26:00', '22:24:00'),
(178, 'SE12', 'HN', '00:00:00', '00:00:00'),
(181, 'SE13', 'SG', '02:42:00', '02:40:00'),
(182, 'SE13', 'BT', '04:02:00', '04:00:00'),
(183, 'SE13', 'PT', '05:32:00', '05:30:00'),
(184, 'SE13', 'NT', '07:52:00', '07:50:00'),
(185, 'SE13', 'QNO', '09:22:00', '09:20:00'),
(186, 'SE13', 'QNG', '11:22:00', '11:20:00'),
(187, 'SE13', 'DN', '12:42:00', '12:40:00'),
(188, 'SE13', 'HUE', '14:24:00', '14:22:00'),
(189, 'SE13', 'DH', '16:24:00', '16:22:00'),
(190, 'SE13', 'VIN', '18:24:00', '18:22:00'),
(191, 'SE13', 'TH', '20:36:00', '20:34:00'),
(192, 'SE13', 'ND', '22:56:00', '22:54:00'),
(193, 'SE13', 'HN', '00:00:00', '00:30:00'),
(196, 'SE14', 'SG', '03:12:00', '03:10:00'),
(197, 'SE14', 'BT', '04:32:00', '04:30:00'),
(198, 'SE14', 'PT', '06:02:00', '06:00:00'),
(199, 'SE14', 'NT', '08:22:00', '08:20:00'),
(200, 'SE14', 'QNO', '09:52:00', '09:50:00'),
(201, 'SE14', 'QNG', '11:52:00', '11:50:00'),
(202, 'SE14', 'DN', '13:12:00', '13:10:00'),
(203, 'SE14', 'HUE', '14:54:00', '14:52:00'),
(204, 'SE14', 'DH', '16:54:00', '16:52:00'),
(205, 'SE14', 'VIN', '18:54:00', '18:52:00'),
(206, 'SE14', 'TH', '21:06:00', '21:04:00'),
(207, 'SE14', 'ND', '23:26:00', '23:24:00'),
(208, 'SE14', 'HN', '00:00:00', '00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `UID` varchar(36) NOT NULL,
  `DisplayName` varchar(255) DEFAULT NULL,
  `PhotoURL` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bookedticket`
--
ALTER TABLE `bookedticket`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ArriveStation` (`ArriveStation`),
  ADD KEY `DepartStation` (`DepartStation`),
  ADD KEY `TrainID` (`TrainID`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD KEY `TicketID` (`TicketID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`StationID`);

--
-- Chỉ mục cho bảng `train`
--
ALTER TABLE `train`
  ADD PRIMARY KEY (`TrainID`);

--
-- Chỉ mục cho bảng `trainschedule`
--
ALTER TABLE `trainschedule`
  ADD PRIMARY KEY (`ScheduleID`),
  ADD KEY `StationID` (`StationID`),
  ADD KEY `TrainID` (`TrainID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bookedticket`
--
ALTER TABLE `bookedticket`
  ADD CONSTRAINT `bookedticket_ibfk_1` FOREIGN KEY (`ArriveStation`) REFERENCES `station` (`StationID`),
  ADD CONSTRAINT `bookedticket_ibfk_2` FOREIGN KEY (`DepartStation`) REFERENCES `station` (`StationID`),
  ADD CONSTRAINT `bookedticket_ibfk_3` FOREIGN KEY (`TrainID`) REFERENCES `train` (`TrainID`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`TicketID`) REFERENCES `bookedticket` (`ID`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UID`);

--
-- Các ràng buộc cho bảng `trainschedule`
--
ALTER TABLE `trainschedule`
  ADD CONSTRAINT `trainschedule_ibfk_1` FOREIGN KEY (`StationID`) REFERENCES `station` (`StationID`),
  ADD CONSTRAINT `trainschedule_ibfk_2` FOREIGN KEY (`TrainID`) REFERENCES `train` (`TrainID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
