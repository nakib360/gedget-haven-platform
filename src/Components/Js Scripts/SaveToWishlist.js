import { toast } from "react-toastify";

const saveToWishlist = () => {
  const wishListListStr = localStorage.getItem("wish-list");
  if (wishListListStr) {
    const storedList = JSON.parse(wishListListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = saveToWishlist();
  if (storedList.includes(id)) {
    toast(`${id} id is already added to wishlist`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast(`${id} is added to wishlist`);
    window.dispatchEvent(new Event("wishlistUpdated")); // ✅ dispatch update
  }
};

const deleteToStoredWishList = (id) => {
  const storedList = saveToWishlist();
  const storedListWishedList = storedList.filter((item) => item !== id);
  const storedListStr = JSON.stringify(storedListWishedList);
  localStorage.setItem("wish-list", storedListStr);
  window.dispatchEvent(new Event("wishlistUpdated")); // ✅ dispatch update
};

export {
  addToStoredWishList,
  saveToWishlist,
  deleteToStoredWishList,
};
