import React from "react";
import { useLoaderData, useParams } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { addToStoredCartList } from "../Js Scripts/SaveToCart";
import { addToStoredWishList } from "../Js Scripts/SaveToWishlist";

const GadgetDetail = () => {
  const data = useLoaderData();
  const { gadgetId } = useParams();
  const id = gadgetId;

  const gadget = data.electronics.find((gadget) => gadget.id === id);

  const { name, image, price, description, specification, rating, isStock } = gadget;

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  }

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  }

  return (
    <div className="-mt-60">
      <div className="px-0 md:px-20">
        <div class=" w-auto rounded-2xl p-5 bg-white text-black ">
          <div class="flex flex-col md:flex-row gap-5 place-items-center">
            <img
              src={image}
              className="max-w-sm rounded-lg shadow-accent w-full md:w-1/2 "
            />
            <div className="w-full md:w-1/2 flex flex-col justify-between items-start gap-4">
              <h1 class="text-5xl font-bold ">{name}</h1>
              <p class="font-bold">price: {price} $</p>
              <div className="badge badge-soft badge-accent rounded-full">
                {isStock ? "in stock" : "out of stock"}
              </div>
              <p>{description}</p>
              <p className="font-bold">Specification:</p>
              <p>{specification}</p>
              <p className="font-bold">Rating:</p>
              <div className="flex items-center gap-2">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <div className="badge badge-soft badge-info bg-[#ffffff35]">
                  {rating}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleAddToCart(id)} className="btn btn-outline btn-primary rounded-full">
                  Add To Card <FiShoppingCart />
                </button>
                <button onClick={() => handleAddToWishList(id)} className="btn btn-outline btn-error rounded-full px-2.5 text-xl font-bold">
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
