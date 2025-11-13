

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slice";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const credentials = { email, password };
      const result = await dispatch(loginUser(credentials)).unwrap();
      toast.success("Login successful!");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      const msg =
        err?.message || err?.response?.data?.message || "Invalid credentials.";
      toast.error(msg);
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/img.jpg')] bg-cover flex items-center justify-end px-100 pr-50 bg-black/50 bg-blend-multiply">
      <div className="w-full max-w-md p-10 transition-transform duration-300 hover:scale-105 border-2 bg-black/50 shadow-2xl shadow-white rounded-2xl">
        <h2 className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent text-center mb-8">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-indigo-400 focus:scale-105"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-indigo-400 focus:scale-105"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:opacity-90"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-white">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;


