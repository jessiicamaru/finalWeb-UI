const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
const regexIncludeUppercaseAlphabet = /[A-Z]/g;
const regexIncludeLowerAlphabet = /[a-z]/g;
const regexIncludeNumber = /[0-9]/g;

const validateForm = (data, openNotification) => {
    let flag = true;
    let time = 300;

    // Loop through each key in data object
    Object.keys(data).forEach((key) => {
        const length = data[key].rules.length;

        console.log(key);

        for (let i = 0; i < length; i++) {
            let description = data[key].rules[i](data[key].data, key);

            if (description) {
                setTimeout(() => {
                    openNotification({ message: 'Form is incomplete', description, icon: data[key].icon });
                }, time);
                time += 300;
                flag = false;

                break;
            }
        }
    });

    return flag;
};

export default validateForm;

validateForm.isRequired = (data, key) => {
    if (!data) return `${key} is required`;
    if (typeof data == 'object') {
        if (['Current password', 'New password', 'Confirm password'].includes(key)) {
            if (key == 'Current password') {
                if (!data.haveToCompare && !data.data) return undefined;
                if (data.haveToCompare && !data.data) return `${key} is required`;
                if (!data.haveToCompare && data.data) return `${key} is not required`;
            }

            if (key == 'New password') {
                if (!data.data) return `${key} is required`;
            }

            if (key == 'Confirm password') {
                if (!data.haveToCompare) return `New password is required`;
                if (!data.data) return `${key} is required`;
            }

            return undefined;
        }

        if (Array.isArray(data)) {
            if (data.length > 0) {
                return undefined;
            }

            return `${key} is required`;
        }

        if (Object.keys(data).length > 0) {
            return undefined;
        }

        return `${key} is required`;
    }
    return undefined;
};

validateForm.includeSpecChar = (data, key) => {
    if (regexSpecialCharacters.test(data)) return `${key} includes special characters`;
    return undefined;
};

validateForm.isEmail = (data, key) => {
    if (!regexEmail.test(data)) return `${key} is an invalid email address`;
    return undefined;
};

validateForm.includeNum = (data, key) => {
    if (regexIncludeNumber.test(data)) return `${key} includes numbers`;
    return undefined;
};

validateForm.includeAlphabetChar = (data, key) => {
    if (regexIncludeLowerAlphabet.test(data) || regexIncludeUppercaseAlphabet.test(data)) {
        return `${key} includes alphabet characters`;
    }
    return undefined;
};

validateForm.isDuplicateDestination = (data, key) => {
    if (data.toStation && data.fromStation) {
        if (data.toStation == data.fromStation) {
            return `${key} is duplicate`;
        }
        return undefined;
    }
};

validateForm.isRequiredDate = (data) => {
    let flag = validateForm.isRequired(data['Type of travel'], 'Type of travel');

    if (!flag) {
        if (data['Type of travel'] == 1) {
            if (!data.Date.departure) {
                return 'Departure date is required';
            }
        } else {
            if (!data.Date.departure) {
                return 'Departure date is required';
            }
            if (!data.Date.return) {
                return 'Return date is required';
            }

            if (data.Date.departure > data.Date.return) {
                return 'Departure day must be before return date';
            }
        }

        return undefined;
    }
};

validateForm.isCurrentPassword = (x, key) => {
    if (!x.haveToCompare) return undefined;

    const { data, haveToCompare } = x;

    if (data == haveToCompare) return undefined;
    return `${key} should be the same as the current password`;
};

validateForm.isNewPassword = (x, key) => {
    if (!x.haveToCompare) return undefined;

    const { data, haveToCompare } = x;

    if (data != haveToCompare) return undefined;
    return `${key} should be distinct from the current password`;
};

validateForm.isConfirmPassword = (x, key) => {
    if (!x.haveToCompare) return undefined;

    const { data, haveToCompare } = x;

    if (data == haveToCompare) return undefined;
    return `${key} should be distinct from the current password`;
};
