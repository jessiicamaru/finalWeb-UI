function formatDate(date) {
    return date.toISOString().split('T')[0]; // Tách chuỗi ở 'T' và lấy phần đầu (YYYY-MM-DD)
}

const validateForm = (data, openNotification) => {
    let flag = true;
    let time = 300;
    if (!data.fromStation) {
        setTimeout(() => {
            openNotification({ message: 'Form is incomplete', description: 'Choose your depart station!' });
        }, time);
        time += 300;
        flag = false;
    }

    if (!data.toStation) {
        setTimeout(() => {
            openNotification({ message: 'Form is incomplete', description: 'Choose your arrive station!' });
        }, time);
        time += 300;
        flag = false;
    }

    if (!data.way) {
        setTimeout(() => {
            openNotification({ message: 'Form is incomplete', description: 'Choose your trip type!' });
        }, time);
        time += 300;
        flag = false;
    } else if (Object.keys(data.date).length === 0) {
        setTimeout(() => {
            openNotification({ message: 'Form is incomplete', description: 'Choose your date!' });
        }, time);
        time += 300;
        flag = false;
    } else {
        const today = formatDate(new Date());
        const departDate = data.date.departure;
        const returnDate = data.date.return;
        console.log({
            departDate,
            returnDate,
            today,
        });

        if (data.way == 2) {
            if (data.date.departure && data.date.return) {
                if (departDate < today) {
                    setTimeout(() => {
                        openNotification({ message: 'Form is invalid', description: 'Departure day is in past' });
                    }, time);
                    time += 300;
                    flag = false;
                }
                if (returnDate < today) {
                    setTimeout(() => {
                        openNotification({ message: 'Form is invalid', description: 'Return day is in past' });
                    }, time);
                    time += 300;
                    flag = false;
                }

                if (departDate > returnDate) {
                    setTimeout(() => {
                        openNotification({ message: 'Form is invalid', description: 'Return day must not be smaller then departure day' });
                    }, time);
                    time += 300;
                    flag = false;
                }
            } else {
                if (!data.date.departure) {
                    setTimeout(() => {
                        openNotification({ message: 'Form is invalid', description: 'Departure day must be not null' });
                    }, time);
                    time += 300;
                    flag = false;
                }
            }
        } else {
            if (!data.date.departure) {
                setTimeout(() => {
                    openNotification({ message: 'Form is invalid', description: 'Departure day must be not null' });
                }, time);
                time += 300;
                flag = false;
            }
            if (departDate < today) {
                setTimeout(() => {
                    openNotification({ message: 'Form is invalid', description: 'Departure day is in past' });
                }, time);
                time += 300;
                flag = false;
            }
        }
    }

    return flag;
};

export default validateForm;
