import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createPortal } from 'react-dom';

interface ContactModalProps {
    showModal: boolean;
    handleClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ showModal, handleClose }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // You can implement your logic to handle the form submission here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Close the modal
        handleClose();
    };

    const modalRoot = document.getElementById('modal-root');
    const modalContainer = useRef(document.createElement('div'));

    useEffect(() => {
        if (modalRoot) {
            modalRoot.appendChild(modalContainer.current);
        }

        return () => {
            if (modalRoot) {
                modalRoot.removeChild(modalContainer.current);
            }
        };
    }, [modalRoot]);

    return createPortal(
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>,
        modalContainer.current
    );
};
