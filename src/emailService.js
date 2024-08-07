
// src/emailService.js
import emailjs from 'emailjs-com';

const sendRegistrationEmail = (email, password) => {
    const serviceID = 'service_notesapp';
    const templateID = 'template_ah0h9xq';
    const publicKey = 'UeoCRw8pbZWPfYYeV'; // Replace with your actual Public Key from EmailJS

    const templateParams = {
        user_email: "megha27singh@gmail.com",
        user_password: "hello",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
};

export default sendRegistrationEmail;
