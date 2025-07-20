import React from "react";
import { Link } from "react-router-dom";
import getImgUrl from "../../utils/getImgUrl";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast, Toaster } from "sonner";

export const BagCard = ({ bag }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));
    } catch (error) {
      toast.error(`Error adding to cart. Please try again`);
    }
  };

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/bags/${bag._id}`}>
            <img
              src={`${getImgUrl(bag.coverImage)}`}
              alt=""
              className="w-full h-[250px] bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full py-6">
          <Link to={`/bags/${bag._id}`}>
            <h3 className="text-xl font-semibold hover:text-primary mb-3">
              {bag.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {bag.description.length > 30
              ? `${bag.description.slice(0, 20)}...`
              : bag.description}
          </p>
          <div>
            <p className="font-medium mb-5">
              ₹ {bag.newPrice}{" "}
              <span className="line-through font-normal ml-2">
                ₹ {bag.oldPrice}
              </span>
            </p>
            <button
              className="btn-primary px-6 space-x-1 flex items-center gap-1  "
              onClick={() => handleAddToCart(bag)}>
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
