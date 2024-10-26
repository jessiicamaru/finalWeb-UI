import CryptoJS from 'crypto-js';
import moment from 'moment';
const hexToDigits = (hexString) => {
    return hexString.replace(/[a-f]/gi, (char) => {
        return (parseInt(char, 16) % 10).toString();
    });
};

export const transactionIdGenerator = (userId, phoneNumber) => {
    const timestamp = Date.now();

    const rawData = `${userId}-${phoneNumber}-${timestamp}`;

    const hash = CryptoJS.SHA256(rawData).toString(CryptoJS.enc.Hex);

    const numericHash = hexToDigits(hash);

    const transactionId = numericHash.slice(0, 16);
    return `${moment().format('YYMMDD')}_${transactionId}`;
};
