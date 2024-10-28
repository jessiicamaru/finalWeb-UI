-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2024 lúc 06:48 PM
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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `train`
--
ALTER TABLE `train`
  ADD PRIMARY KEY (`TrainID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
