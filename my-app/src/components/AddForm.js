import { Form, Button } from "react-bootstrap";
import { ShopContext } from "../contexts/ShopContext";
import { useContext, useState } from "react";



const AddForm = () => {



    const { addShops } = useContext(ShopContext);

    const [newShop, setNewShop] = useState({
        shopname: "", area: "", category: "", timing: ""
    });

    const onInputChange = (e) => {
        setNewShop({ ...newShop, [e.target.name]: e.target.value })
    }

    const { shopname, area, category, timing } = newShop;

    const handleSubmit = (e) => {
        e.preventDefault();
        addShops(shopname, area, category, timing);

    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Shop Name *"
                    name="shopname"
                    value={shopname}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control

                    type="text"
                    placeholder="Area *"
                    name="area"
                    value={area}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Category *"
                    name="category"
                    value={category}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control

                    type="text"
                    placeholder="Timings *"
                    name="timing"
                    value={timing}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block> Add New Shop </Button>

        </Form>
    )

}
export default AddForm;