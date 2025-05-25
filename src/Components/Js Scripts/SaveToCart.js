import { toast } from "react-toastify";

const saveToCart = () => {
  const cartListStr = localStorage.getItem("cart-list");
  if (cartListStr) {
    const storedList = JSON.parse(cartListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = saveToCart();
  if (storedList.includes(id)) {
    toast(`${id} id is already added to cart`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    toast(`${id} id is added to cart`);
    window.dispatchEvent(new Event("cartUpdated")); // ✅ Dispatch update
  }
};

const deleteToStoredCartList = (id) => {
  const storedList = saveToCart();
  const filteredStoredList = storedList.filter((item) => item !== id);
  const storedListStr = JSON.stringify(filteredStoredList);
  localStorage.setItem("cart-list", storedListStr);
  window.dispatchEvent(new Event("cartUpdated")); // ✅ Dispatch update
};

const deleteAll = () => {
  localStorage.removeItem("cart-list");
  window.dispatchEvent(new Event("cartUpdated")); // ✅ Dispatch update
};

export {
  addToStoredCartList,
  saveToCart,
  deleteToStoredCartList,
  deleteAll,
};
