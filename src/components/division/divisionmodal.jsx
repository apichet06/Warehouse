/* eslint-disable react/prop-types */
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useState } from 'react'
/* eslint-disable no-unused-vars */
export default function DivisionModal(props) {
    const { api, show, handleClose, editBt } = props;
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editBt == false ? "เพิ่มข้อมูลแผนก" : "แก้ไขข้อมูลแผนก"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12"  >
                                <Form.Label>ชื่อแผนก</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="ชื่อแผนก"
                                    name="Dv_Name"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                {editBt ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                ปิด
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>
        </>
    );

}