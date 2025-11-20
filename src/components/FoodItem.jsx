import React, { useState } from "react";
import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart} = React.useContext(StoreContext);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-3 cursor-pointer group">
      <div className="overflow-hidden rounded-xl relative">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover group-hover:scale-105 transition"
        />

        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
            className="w-8 absolute bottom-2 right-2 drop-shadow-lg"
          />
        ) : (
          <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-md">
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-5"
            />
            <p className="font-semibold">{cartItems[id]}</p>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-5"
            />
          </div>
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">{name}</p>
          <img src={assets.rating_starts} alt="" className="h-5" />
        </div>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
        <p className="text-orange-500 font-bold mt-3 text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
