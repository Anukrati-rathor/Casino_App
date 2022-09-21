import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import AddForm from './AddForm'

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">
                        THE CASINO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item fw-bold fs-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>


                        </ul>
                        <div className="buttons">
                            <button className="btn btn-outline-dark" onClick={handleShow}>
                                <i className="fa fa-sign-in me-1"></i> Login</button>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                            {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-money me-1"></i> $(0)</NavLink> */}
                        </div>

                    </div>
                </div>
            </nav></>
    )
}

export default Navbar
