import { toast } from "react-toastify";

const saveToCart= () => {
    const cartListStr = localStorage.getItem("cart-list");
    if(cartListStr){
        const storedList = JSON.parse(cartListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = saveToCart();
    if(storedList.includes(id)){
        toast(`${id} id is alredy added to cart`);

    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("cart-list", storedListStr);
        toast(`${id} id is added to cart`);
    }
}

const deleteToStoredCartList = (id) => {
    const storedList = saveToCart();
    const filteredStoredList = storedList.filter(item => item !== id);
    const storedListStr = JSON.stringify(filteredStoredList);
    localStorage.setItem("cart-list", storedListStr);
}

const deleteAll = () => {
    localStorage.removeItem("cart-list")
}

export {addToStoredCartList, saveToCart, deleteToStoredCartList, deleteAll}