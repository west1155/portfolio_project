import React from 'react';
import emailjs from 'emailjs-com'
import styled, {css} from "styled-components";

export const ContactForm = () => {
    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <ShowForm isClicked={true} className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </ShowForm>
    );
};


const ShowForm = styled.form<{isClicked: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background-color: rgb(0, 0, 0);
  display: none;

  ${props => props.isClicked && css<{ isClicked: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  `}
`
