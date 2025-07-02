import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/google-login`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { token: appToken, user } = res.data;
      localStorage.setItem("token", appToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(`Welcome ${user.name}`);
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    } catch (error) {
      toast.error("Google login failed");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border rounded-md px-4 py-2 shadow flex items-center cursor-pointer justify-center hover:bg-blue-400 font-semibold"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
