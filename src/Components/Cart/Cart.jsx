import React, { useEffect, useState } from "react";
import { deleteAll, deleteToStoredCartList, saveToCart } from "../Js Scripts/SaveToCart";
import { useLoaderData } from "react-router";
import { GrSort } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import group from "../../assets/Group.png"

const Cart = () => {
  const cart = saveToCart();
  const dataFetch = useLoaderData();
  const data = dataFetch.electronics;

  const [storedCart, setStoredCart] = useState([]);

  useEffect(() => {
    const carts = data.filter((item) => cart.includes(item.id));
    setStoredCart(carts);
  }, []);

  const handleSort = (value) => {
    const sorted = [...storedCart].sort((a, b) =>
      value === "asc" ? a.price - b.price : b.price - a.price
    );
    setStoredCart(sorted);
  };

  const totalPrice = storedCart.reduce((total, item) => total + item.price, 0);

  const handleDeleteCart = (id) => {
    deleteToStoredCartList(id);
  };

  const handlePurchase = () => {
    deleteAll();
  }
  return (
    <div className="p-10 text-black">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold text-black">Cart</p>
        <div className="flex items-center justify-between gap-5">
          <p className="text-3xl font-bold">
            Total cost: {totalPrice.toFixed(2)}
          </p>
          <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="btn btn-outline btn-primary rounded-full m-1"
            >
              Sort by Price <GrSort className="ml-2" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#9538e2] rounded-box w-52 z-10"
            >
              <li>
                <button
                  className="text-white"
                  onClick={() => handleSort("asc")}
                >
                  {" "}
                  Sort by Ascending
                </button>
              </li>
              <li>
                <button
                  className="text-white"
                  onClick={() => handleSort("desc")}
                >
                  {" "}
                  Sort by Descending
                </button>
              </li>
            </ul>
          </div>

          <label
            htmlFor="my_modal_7"
            className="btn btn-soft btn-primary rounded-full"
            onClick={handlePurchase}
          >
            Purchase
          </label>

          
          <input type="checkbox" id="my_modal_7" className="modal-toggle " />
          <div className="modal  text-black" role="dialog">
            <div className="modal-box bg-white flex justify-between items-center flex-col gap-3 w-auto">
                <img src={group} alt="" />
              <h3 className="text-3xl font-bold">Payment Successfully</h3>
              <p className="py-4">Thanks for purchasing.</p>
              <p>price: {totalPrice.toFixed(2)}</p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
          
        </div>
      </div>
      <div>
        {storedCart.length === 0 ? (
          <p>No carts available</p>
        ) : (
          <div>
            {storedCart.map((data) => (
              <div className="" key={data.id}>
                <div className="card card-side bg-white shadow-sm p-10 m-5">
                  <figure>
                    <img src={data.image} alt="Movie " className="max-h-100" />
                  </figure>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-between flex-col gap-5">
                      <h2 className="card-title">{data.name}</h2>
                      <p>{data.description}</p>
                      <p>price: {data.price} $</p>
                    </div>
                    <div className="">
                      <button
                        onClick={() => handleDeleteCart(data.id)}
                        className="text-4xl text-red-500 hover:text-black"
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
