import React from "react";
import login_img from "../../assets/login.png";

const Login = () => {
  const handleSignIn = async () => {
    window.open(
      "https://quiz-test-server.onrender.com/auth/google/callback",
      "_self"
    );
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row flex-reverse items-center">
        <div className="mx-auto max-h-screen">
          <img src={login_img} alt="Login" className="" />
        </div>
        <div className="mx-auto">
          <h3 className="text-2xl text-secondary my-10">
            Sign in to stay with us
          </h3>
          <button
            onClick={handleSignIn}
            className="flex items-center gap-4 rounded-full px-6 py-2 border-2 border-gray-400 font-semibold text-gray-600 hover:text-secondary hover:border-secondary duration-300"
          >
            <img
              src="https://i.ibb.co/s3GpLz5/google-logo.png"
              alt="Google"
              className="w-9"
            />
            <span>Sign in With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
