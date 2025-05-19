import React from "react";
import { useLoaderData } from "react-router";
import { deleteToStoredWishList, saveToWishlist } from "../Js Scripts/SaveToWishlist";
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = () => {
  const wish = saveToWishlist();
  const dataFetch = useLoaderData();
  const data = dataFetch.electronics;

  const wishedData = data.filter((item) => wish.includes(item.id));

  const handleDeleteWish = (id) => {
    deleteToStoredWishList(id);
  }
  return (
    <div className="p-10 text-black">
        <p className="text-3xl font-bold text-black">Wish List</p>
      <div>
        {wishedData.length === 0 ? (
          <p>No wishes available</p>
        ) : (
          <div>
            {wishedData.map((data) => (
              <div className="text-black">
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
