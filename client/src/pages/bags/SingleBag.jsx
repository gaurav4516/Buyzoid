import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import getImgUrl from "../../utils/getImgUrl";
import { useParams } from "react-router-dom";
import { useFetchSingleBagQuery } from "../../redux/services/bagApi";
import { FiShoppingCart } from "react-icons/fi";
import Loading from "../../components/Loading";

export const SingleBag = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchSingleBagQuery(id);
  const bag = data?.bag;
  console.log(bag);
  //add to cart
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // if
  if (isLoading) return <Loading />;
  if (isError) return <div>Error handling the page</div>;
  if (!bag) return <div>No book data found</div>;
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{bag.title}</h1>

      <div className="">
        <div>
          <img
            src={`${getImgUrl(bag.coverImage)}`}
            alt={bag.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {bag.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {new Date(bag?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {bag?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {bag.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(bag)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
