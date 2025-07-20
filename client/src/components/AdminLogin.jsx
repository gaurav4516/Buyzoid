import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toast, Toaster } from "sonner";
import getBaseUrl from "../utils/getBaseUrl";

const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;

      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem();
          alert("Session has been expired. Please login again");
          navigate("/");
        }, 3600 * 1000);
      }

      toast.success("Admin login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Enter valid email and password`);
    }
  };
  return (
    <div className="flex h-screen  justify-center items-center">
      <div className="p-8 mx-auto w-full max-w-sm border border-gray-400 shadow-sm rounded-md ">
        <Toaster richColors position="top-center" />
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("username", { required: true })}
              placeholder="Username"
              className="py-2 w-full px-3  border border-gray-300 rounded-sm text-black leading-tight focus:outline-none focus:shadow-sm"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              {...register("password", {
                required: true,
              })}
              placeholder="Password"
              className="py-2 px-3 w-full border border-gray-300 rounded-sm text-black leading-tight focus:outline-none focus:shadow-sm"
            />
            {errors.password && <span>This field is required</span>}
            <div />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white gap-2 rounded py-2 px-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
