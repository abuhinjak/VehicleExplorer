import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {toast} from 'react-toastify';
import axiosClient from '../../lib/axiosClient';
import './modal.scss';

function DeleteModal({ show, onClose, link, name }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosClient.delete(link)
            .then(() => {
                toast.success(`${name} deleted successfully!`);
                navigate('/makes');
                onClose();
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Delete {name}?</Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn--secondary me-4" onClick={onClose}>
                    Close
                </Button>
                <Button variant="btn btn--primary" onClick={handleSubmit}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

DeleteModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default DeleteModal;
