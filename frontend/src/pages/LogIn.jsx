import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-purple-300 to-gray-100 drop-shadow-lg">
          Welcome Back To EventSphere
        </h2>

        <AuthForm type="login" onSubmit={(data) => console.log(data)} />

        <p className="text-center text-sm text-gray-400 mt-4 mb-4">
          Or
        </p>
        <GoogleLoginButton />

        <p className="mt-10 text-center text-md text-gray-300">
          Dont't have an account?{" "}
          <Link
            to="/register"
            className="text-pink-400 hover:text-pink-500 font-medium underline underline-offset-4 cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
