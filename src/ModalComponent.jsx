import React from 'react';
import Modal from 'react-modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const ModalComponent = ({ isModalOpen, closeModal, isRegister, toggleForm }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Get Started Modal"
            className="modal bg-white p-6 rounded shadow-lg"
            overlayClassName="overlay bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center"
        >
            {isRegister ? (
                <RegisterForm toggleForm={toggleForm} />
            ) : (
                <LoginForm toggleForm={toggleForm} />
            )}
            <button onClick={closeModal} className="mt-4 text-red-500 hover:text-red-700">
                Close
            </button>
        </Modal>
    );
};

export default ModalComponent;
