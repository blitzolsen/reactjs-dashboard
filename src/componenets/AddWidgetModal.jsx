import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { WidgetType } from '../constants/enums';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function AddWidgetModal(props) {
    const { show, setShow, handleNewWidget } = props;
    const [selectedWidgetType, setSelectedWidgetType] = useState(WidgetType.INFO);
    const handleClose = () => {
        setSelectedWidgetType(WidgetType.INFO);
        setShow(false);
    };
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Widget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Select Widget Type</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => {
                    setSelectedWidgetType(e.target.value);
                }}>
                    {Object.entries(WidgetType).map(([key, value]) => (
                        <option key={key} value={value}>
                            {key}
                        </option>
                    ))}
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { handleNewWidget(selectedWidgetType); handleClose() }}>Add Widget</Button>
            </Modal.Footer>
        </Modal>
    )
}
