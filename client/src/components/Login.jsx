import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { toast, Toaster } from "sonner";

export const Login = () => {
  const [message, setMessage] = useState();
  const { loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      navigate("/");
      toast.success("login successful");
    } catch (error) {
      toast.error(`Enter valid email and password`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(`Error occured signin`);
      setMessage("Error Google signin", error);
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)]  justify-center items-center">
      <div className="p-8 mx-auto w-full max-w-sm border border-gray-400 shadow-sm rounded-md">
        <Toaster richColors position="top-center" />
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
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
                minLength: 8,
                pattern: /^[A-Za-z0-9]+$/i,
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
              className="bg-gray-800 text-white gap-2 rounded py-2 px-3">
              Login
            </button>
          </div>
          <p className="mb-2 text-sm">
            Haven't an account?{" "}
            <Link to="/register" className=" text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <p>{message}</p>
          <div className="mb-2 w-full flex justify-center items-center bg-gray-800 text-white gap-2 rounded py-2">
            <FaGoogle />
            <button onClick={() => handleGoogleSignIn()}>Google signin</button>
          </div>
        </form>
      </div>
    </div>
  );
};
