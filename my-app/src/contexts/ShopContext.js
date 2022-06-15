import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const [shops, setShops] = useState([
        { id: uuidv4(), shopname: 'The Full Cart', area: 'Thane', category: 'Butcher', timing: 'Monday-Friday' },
        { id: uuidv4(), shopname: 'Healthy Treats', area: 'Pune', category: 'Chemist', timing: 'Monday-Sunday' },
        { id: uuidv4(), shopname: 'Better land Grocery', area: 'Nashik', category: 'Grocery', timing: 'Monday-Friday' },
        { id: uuidv4(), shopname: 'Plenty  Fresh', area: 'Nagpur', category: 'Baker', timing: 'Monday-Saturday' },
        { id: uuidv4(), shopname: 'Direct Mart', area: 'Solapur', category: 'Stationery', timing: 'Monday-Friday' }

    ])

    const addShops = (shopname, area, category, timing) => {
        setShops([...shops, { id: uuidv4(), shopname, area, category, timing }])

    }
    const deleteShops = (id) => {
        setShops(shops.filter(shop => shop.id !== id))
    }
    const updateShops = (id, updateShop) => {
        setShops(shops.map((shop) => shop.id === id ? updateShop : shop))
    }


    return (
        <ShopContext.Provider value={{ shops, addShops, deleteShops, updateShops }}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;