import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { login } from "../utils/auth";

interface LoginPageProps {
  theme: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex items-center justify-center`}
    >
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            theme === "dark"
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"
          } backdrop-blur-xl rounded-[2rem] border p-8 relative overflow-hidden`}
        >
          <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

          <div className="relative">
            <div className="text-center mb-8">
              <h2
                className={`text-3xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-2`}
              >
                Admin Login
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Sign in to access the management dashboard
              </p>
            </div>

            {error && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                    : "bg-red-500/10 text-red-600 border border-red-500/20"
                } flex items-start`}
              >
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  } mb-2`}
                >
                  Email Address
                </label>
                <div
                  className={`relative ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-black/5 border-black/10"
                  } rounded-lg border focus-within:ring-2 ${
                    theme === "dark"
                      ? "focus-within:ring-white/20"
                      : "focus-within:ring-black/20"
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white/40" : "text-black/40"
                      }`}
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`block w-full pl-10 pr-3 py-3 ${
                      theme === "dark"
                        ? "bg-transparent text-white placeholder-white/40"
                        : "bg-transparent text-black placeholder-black/40"
                    } rounded-lg focus:outline-none`}
                    placeholder="admin@tredumo.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  } mb-2`}
                >
                  Password
                </label>
                <div
                  className={`relative ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-black/5 border-black/10"
                  } rounded-lg border focus-within:ring-2 ${
                    theme === "dark"
                      ? "focus-within:ring-white/20"
                      : "focus-within:ring-black/20"
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white/40" : "text-black/40"
                      }`}
                    />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`block w-full pl-10 pr-3 py-3 ${
                      theme === "dark"
                        ? "bg-transparent text-white placeholder-white/40"
                        : "bg-transparent text-black placeholder-black/40"
                    } rounded-lg focus:outline-none`}
                    placeholder="••••••••"
                  />
                </div>
                <div className="mt-2 text-right">
                  <a
                    href="#"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-white/60 hover:text-white"
                        : "text-black/60 hover:text-black"
                    } transition-colors`}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide group ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div
              className={`mt-8 pt-6 text-center ${
                theme === "dark" ? "border-t border-white/10" : "border-t border-black/10"
              }`}
            >
              <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                Don't have an account?{" "}
                <a
                  href="#"
                  className={`${
                    theme === "dark" ? "text-white hover:underline" : "text-black hover:underline"
                  } font-medium`}
                >
                  Contact administrator
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;