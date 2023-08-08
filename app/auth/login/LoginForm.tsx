"use client";
import { FormEvent, useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isLogging, setIsLogging] = useState(false);

  // const handleRegister = (): void => {
  //   setIsRegistering(true);
  //   // Here you can perform your actual registration logic.
  //   // For demonstration purposes, let's simulate a registration delay using setTimeout.
  //   setTimeout(() => {
  //     setIsRegistering(false);
  //     toast.success("Successfully registered!");
  //   }, 5000); // Simulating registration delay of 5 seconds.
  // };
  const handleClick = (): void => {
    setIsClicked(true);
  };
  const handleRelease = (): void => {
    setIsClicked(false);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLogging(true);
    const res = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    });

    if (res?.error) {
      toast.error(res.error);
      setIsLogging(false);
      return 
    }
    if (res?.ok && !res.error) {
      toast.success("Login successful.");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }

  };

  return (
    <div className="flex flex-col justify-center items-center h-auto mt-12">
      <Toaster />
      {/** inicio del form */}
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding w-auto md:w-[600px] h-[400px] p-6 rounded-xl shadow-xl animate-fade-left">
        <form onSubmit={handleSubmit}>
          {/**div del contenido del form */}
          {/**div del titulo del contenido del form */}
          <div className="flex items-center justify-center mb-4">
            <h1 className="font-extrabold text-4xl text-white">Login</h1>
          </div>
          <hr className="mt-3" />

          {/** div para el campo de email y contraseña */}
          <div className="mt-3">
            <label
              htmlFor="email-field"
              className="block text-base mb-2 text-white"
            >
              e-mail or username
            </label>
            <input
              type="text"
              className="border w-full text-base px-8 py-2 mb-2 focus:outline-none focus:ring-0 focus:border-blue-500 rounded-lg bg-transparent text-white"
              placeholder="e.g. narrator@email.com, TylerDurden95"
              value={username}
              id="email_field"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label
              htmlFor="password-field"
              className="block text-base mb-2 text-white mt-3"
            >
              Password
            </label>
            <input
              type="password"
              className="border w-full text-base px-8 py-2 focus:outline-none focus:ring-0 focus:border-blue-500 rounded-lg bg-transparent text-white"
              placeholder="Password"
              value={password}
              id="password_field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/** div para iniciar sesión o cambiar a registro */}
          <div className="flex flex-col items-center justify-center mt-3">
            <button
              type="submit" // Change type to "button" to prevent form submission
              disabled={isLogging} // Disable the button when registering
              className={`flex flex-col mx-auto mt-5 items-center justify-center ${
                isLogging
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white text-lg font-bold border-b-4 border-gray-800 hover:border-gray-900 transition-all rounded-lg w-[150px] h-[45px] ${
                isClicked ? "transform scale-90 border-b-[1px]" : ""
              }`}
              onMouseDown={handleClick}
              onMouseUp={handleRelease}
              onMouseLeave={handleRelease}
            >
              {isLogging ? (
                <div className="flex items-center">
                  <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin mr-2" />
                  Logging in...
                </div>
              ) : (
                "Log In"
              )}
            </button>
            <div>
              <h3 className="text-white text-md mt-2">
                Not a member?{" "}
                <Link
                  className=" text-white hover:text-blue-500 transition-colors"
                  href={"/auth/register"}
                >
                  Register
                </Link>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
