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

        for (let i = 0; i < length; i++) {
            let description = data[key].rules[i](data[key].data, key);

            if (description) {
                setTimeout(() => {
                    openNotification({ message: 'Form is incomplete', description });
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
