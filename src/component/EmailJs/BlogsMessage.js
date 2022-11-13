import React from 'react';
import emailjs from '@emailjs/browser';

const BlogsMessage = (props) => {

    emailjs.send('service_a16u8n2', 'template_3dbyz9h', {
        first_name: props.first_name,
        last_name: props.last_name,
        user_email: props.user_email,
        user_message: props.user_message,
    }, 'iUdMuBNRGw3avQhjn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

export default BlogsMessage;