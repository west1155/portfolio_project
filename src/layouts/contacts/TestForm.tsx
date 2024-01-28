// ModalForm.js

import React, {ReactElement, ReactHTMLElement, useState} from 'react';
import Modal from 'react-modal';
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '400px',
        align: 'center',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); // Set the root element for accessibility


interface ModelFormProps {
    isOpen: boolean
    closeModal: () => void
}
export const TestForm: React.FC<ModelFormProps> = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Close the modal after form submission
        closeModal();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
      <span className="close" onClick={closeModal}>
        &times;
      </span>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </ReactModal>
    );
};


