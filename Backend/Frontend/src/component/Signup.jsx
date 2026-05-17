import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
   const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
  
     const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* DaisyUI modal */}
      <dialog id="signup_modal" className="modal" open>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("modal-box").close}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have an account?{" "}
                <Link
                  to={"/"}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
