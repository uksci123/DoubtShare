import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex  items-centers w-full h-1/2 md:px-36 px-10">
      <div
        className="flex flex-col h-[400px] flex-1  md:w-1/2 text-[#61777F] rounded-lg md:rounded-l-lg my-6 min-w-[250px]"
        style={{ boxShadow: "0 0 50px -12px rgba(0,0,0,.25)" }}
      >
        <p className="text-center text-3xl font-bold mt-5">Log In</p>
        <div className="flex flex-col py-3 px-4 gap-3 h-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg text-slate-600">Email</h3>
              <div className="">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, minLength: 7 }}
                  render={({ field }) => (
                    <span className="flex  bg-slate-100 items-center  rounded-md  border-l-[5px] border-[#61777F] ">
                      <i className="pi pi-envelope pl-2"></i>
                      <input
                        type="text"
                        {...field}
                        placeholder="Email"
                        className="border w-full py-2 px-3.5 rounded border-none outline-none bg-slate-100"
                        required
                      />
                    </span>
                  )}
                />
              </div>
              <h3 className="text-lg text-slate-600 mt-3">Password</h3>
              <div className="">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                  render={({ field }) => (
                    <span className="flex  bg-slate-100 items-center  rounded-md  border-l-[5px] border-[#61777F] ">
                      <i className="pi pi-lock p-2"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="border w-full py-2 px-3.5 rounded border-none outline-none bg-slate-100"
                        required
                      />
                    </span>
                  )}
                />
              </div>
            </div>
            <Button
              label="Login"
              type="submit"
              className="py-1.5 bg-[#61777F] w-full mt-4 hover:bg-[#adb5a8] shadow-lg text-xl text-white"
            />
            <p className="text-sm sm:text-base mt-4">
              {`Don't have an account?`}{" "}
              <Link to="/Register">
                <span className="font-medium hover:underline">
                  Sign up
                </span>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <div className="h-[400px] flex-1 my-6 hidden md:block">
        <img
          src="teacherStu.png"
          alt=""
          className="h-[400px] object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Login;
