import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {toast} from 'react-toastify';
import axiosClient from '../../lib/axiosClient';
import './modal.scss';

function DeleteModal({ show, onClose, onSave, link, name, makeId, modelId, toastMessage }) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosClient.delete(`/makes/${makeId}/models/${modelId}`)
            .then(() => {
                toast.success(`${name} deleted successfully!`);
                navigate(-1);
                onClose();
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
        </Modal.Header>
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

export default DeleteModal;
