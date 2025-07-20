import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useFetchSingleBagQuery,
  useUpdateBagMutation,
} from "../../../redux/services/bagApi";
import getBaseUrl from "../../../utils/getBaseUrl";
import Loading from "../../../components/Loading";
import InputField from "../addBag/InputField";
import SelectField from "../addBag/SelectField";
import axios from "axios";
import { toast, Toaster } from "sonner";

const EditBag = () => {
  const { id } = useParams();
  const {
    data: bagData,
    isLoading,
    isError,
    refetch,
  } = useFetchSingleBagQuery(id);
  // console.log(bagData)
  const [updateBag] = useUpdateBagMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (bagData) {
      setValue("title", bagData.title);
      setValue("description", bagData.description);
      setValue("category", bagData?.category);
      setValue("trending", bagData.trending);
      setValue("oldPrice", bagData.oldPrice);
      setValue("newPrice", bagData.newPrice);
      setValue("coverImage", bagData.coverImage);
    }
  }, [bagData, setValue]);

  const onSubmit = async (data) => {
    const updateBagData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || bagData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/bags/edit/${id}`, updateBagData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("success updating bag");
      await refetch();
    } catch (error) {
      console.error("Failed to update bag.", error);
      toast.error("Failed to update bag.");
    }
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching bag data</div>;
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <Toaster richColors position="top-center" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Bag</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter bag title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter bag description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: "", label: "Choose A Category" },
            { value: "backpack", label: "Backpack" },
            { value: "duffle", label: "Duffle" },
            { value: "luggage", label: "Luggage" },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
          Update Bag
        </button>
      </form>
    </div>
  );
};

export default EditBag;
