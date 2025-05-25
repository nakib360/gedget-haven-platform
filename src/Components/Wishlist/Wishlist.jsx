import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  deleteToStoredWishList,
  saveToWishlist,
} from "../Js Scripts/SaveToWishlist";
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = () => {
  const dataFetch = useLoaderData();
  const data = dataFetch.electronics;
  const [wish, setWish] = useState([]);
  const [wishedData, setWishLength] = useState([]);

  useEffect(() => {
    setWish(saveToWishlist());
  }, []);

  useEffect(() => {
    const wishes = data.filter((item) => wish.includes(item.id));
    setWishLength(wishes);
  }, [wish, data]);

  const handleDeleteWish = (id) => {
    deleteToStoredWishList(id);
    const updated = wish.filter((wishId) => wishId !== id);
    setWish(updated);
  };
  return (
    <div className="py-10 px-3 md:px-10 text-black">
      <p className="text-3xl font-bold text-black">Wish List</p>
      <div>
        {wishedData.length === 0 ? (
          <p>No wishes available</p>
        ) : (
          <div>
            {wishedData.map((data) => (
              <div className="text-black">
                <div className="card card-side bg-white shadow-sm p-10 m-5 flex flex-col md:flex-row">
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
                        onClick={() => handleDeleteWish(data.id)}
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

export default Wishlist;
