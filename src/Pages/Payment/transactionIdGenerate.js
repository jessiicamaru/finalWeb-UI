import CryptoJS from 'crypto-js';
import moment from 'moment';
// Hàm chuyển đổi ký tự hex thành số
const hexToDigits = (hexString) => {
    return hexString.replace(/[a-f]/gi, (char) => {
        // Chuyển các ký tự từ 'a' đến 'f' thành các số tương ứng từ 0 đến 9
        return (parseInt(char, 16) % 10).toString();
    });
};

// Hàm tạo mã transaction ID chỉ bao gồm chữ số
export const transactionIdGenerator = (userId, phoneNumber) => {
    const timestamp = Date.now(); // Lấy thời gian hiện tại tính bằng mili giây

    // Kết hợp các thông tin thành một chuỗi
    const rawData = `${userId}-${phoneNumber}-${timestamp}`;

    // Mã hóa chuỗi sử dụng SHA-256
    const hash = CryptoJS.SHA256(rawData).toString(CryptoJS.enc.Hex);

    // Chuyển đổi băm hex thành chỉ số
    const numericHash = hexToDigits(hash);

    // Rút gọn mã hash nếu cần
    const transactionId = numericHash.slice(0, 16); // Lấy 16 ký tự đầu tiên
    return `${moment().format('YYMMDD')}_${transactionId}`;
};
