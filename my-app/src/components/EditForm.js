import { Form, Button } from "react-bootstrap";
import { ShopContext } from "../contexts/ShopContext";
import { useContext, useState } from "react";



const EditForm = ({ theShop }) => {

    const id = theShop.id;

    const [shopname, setShopName] = useState(theShop.shopname);
    const [area, setArea] = useState(theShop.area);
    const [category, setCategory] = useState(theShop.category);
    const [timing, setTiming] = useState(theShop.timing);

    const { updateShops } = useContext(ShopContext);

    const updatedShop = { id, shopname, area, category, timing };


    const handleSubmit = (e) => {
        e.preventDefault();
        updateShops(id, updatedShop)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Shop Name *"
                    name="shopname"
                    value={shopname}
                    onChange={(e) => setShopName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Area *"
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Category *"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Timings *"
                    name="timing"
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block> Edit Shop </Button>

        </Form>
    )

}
export default EditForm;