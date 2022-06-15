import { Modal, Button, Alert } from "react-bootstrap";
import Shop from "./Shops";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useState, useEffect } from 'react';
import AddForm from "./AddForm";
const ShopList = () => {

    const { shops } = useContext(ShopContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert();
        }
    }, [shops])


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2><b>ShopKart</b> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                            height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Shops</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Shop List Updated Successfully!!!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Shop Name</th>
                        <th>Area</th>
                        <th>Category</th>
                        <th>Timings</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shops.sort((a, b) => (a.name < b.name ? -1 : 1)).map(shop => (
                            <tr key={shop.id}>
                                <Shop shop={shop} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Add Shops
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close Button </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ShopList;