-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2024 lúc 06:49 PM
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
  `BookingDate` date NOT NULL,
  `cus_email` varchar(255) NOT NULL,
  `cus_id` varchar(255) NOT NULL,
  `cus_phone` varchar(15) NOT NULL,
  `cus_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bookedticket`
--

INSERT INTO `bookedticket` (`ID`, `ArriveStation`, `DepartStation`, `TrainID`, `Arrive`, `Depart`, `Position`, `Coach`, `BookingDate`, `cus_email`, `cus_id`, `cus_phone`, `cus_name`) VALUES
('1a326626-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 24, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a362110-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 25, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a37e0af-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 26, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a39a078-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 27, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a3bcb4a-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 28, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a3e4e39-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 29, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a406a74-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 30, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a42361d-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 31, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a443916-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 32, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a4661d6-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 33, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a482a11-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 34, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a49d899-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 35, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a4b8c5f-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 36, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a4d62a5-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 37, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a4f19f5-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 38, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a50d395-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 39, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a52ba97-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 40, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a54850c-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 41, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a5628ae-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 42, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a5832db-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 43, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('1a59ee92-9', 'VIN', 'HUE', 'SE8', '14:50:00', '12:30:00', 44, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49b0ec90-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 45, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49b42d05-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 46, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49b61ceb-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 47, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49b7d073-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 48, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49b980db-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 49, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49bb329d-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 50, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49bcd17f-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 51, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49be96fa-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 52, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c06158-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 53, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c1fe10-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 54, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c3b8fe-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 55, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c5ad19-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 56, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c754c1-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 57, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49c90be1-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 58, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49cab30f-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 59, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49cc79ca-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 60, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49ce32a8-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 61, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49d022e5-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 62, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49d1e233-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 63, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('49d3e427-9', 'HN', 'HUE', 'SE8', '14:50:00', '12:30:00', 64, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f0fbcc28-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 1, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15656e9-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 2, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15864f2-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 3, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15a7618-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 4, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15c46a0-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 5, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15de8f6-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 6, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f15f9b9c-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 7, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f161bc3c-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 8, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f163c8c1-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 9, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f1656a4d-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 10, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f167ba82-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 11, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f169d3ce-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 12, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f16b8ee0-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 13, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f16d2f21-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 14, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f16f3ba6-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 15, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f1720be3-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 16, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f17425ee-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 17, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f1765841-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 18, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f1788f23-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 19, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f17a9bcc-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 20, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f17d44db-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 21, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f17fe39f-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 22, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a'),
('f18286a7-9', 'HN', 'DN', 'SE8', '14:50:00', '12:30:00', 23, 2, '2024-10-28', 'example@gmail.com', '04420500515', '0812050247', 'nguyen van a');

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
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bookedticket`
--
ALTER TABLE `bookedticket`
  ADD CONSTRAINT `bookedticket_ibfk_1` FOREIGN KEY (`ArriveStation`) REFERENCES `station` (`StationID`),
  ADD CONSTRAINT `bookedticket_ibfk_2` FOREIGN KEY (`DepartStation`) REFERENCES `station` (`StationID`),
  ADD CONSTRAINT `bookedticket_ibfk_3` FOREIGN KEY (`TrainID`) REFERENCES `train` (`TrainID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
