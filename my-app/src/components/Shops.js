import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { Modal, Button } from "react-bootstrap";
import EditForm from "./EditForm";

const Shop = ({ shop }) => {

    const { deleteShops } = useContext(ShopContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [shop])

    return (
        <>

            <td>{shop.shopname}</td>
            <td>{shop.area}</td>
            <td>{shop.category}</td>
            <td>{shop.timing}</td>
            <td>
                <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteShops(shop.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Add Shops
                </Modal.Header>
                <Modal.Body>
                    <EditForm theShop={shop} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close Button </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default Shop;