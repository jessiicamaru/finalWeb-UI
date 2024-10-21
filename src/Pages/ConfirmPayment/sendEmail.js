export default function sendEmail({ name, email, code }) {
    (() => {
        // eslint-disable-next-line no-undef
        emailjs.init(import.meta.env.VITE_EMAIL_SECRET_KEY);
    })();

    let params = {
        toName: name,
        message: code,
        to: email,
    };

    let serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    let templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    // eslint-disable-next-line no-undef
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => console.log('successfully sent email:' + res))
        .catch();
}
