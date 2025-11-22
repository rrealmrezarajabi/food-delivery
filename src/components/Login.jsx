import { useForm } from "react-hook-form";

const Login = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login:", data);
    setShowLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-5">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
