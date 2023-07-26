"use client";
import { useState } from "react";

export const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = (): void => {
    setIsRegistering(true);
    // Here you can perform your actual registration logic.
    // For demonstration purposes, let's simulate a registration delay using setTimeout.
    setTimeout(() => {
      setIsRegistering(false);
    }, 5000); // Simulating registration delay of 5 seconds.
  };
  const handleClick = (): void => {
    setIsClicked(true);
  };
  const handleRelease = (): void => {
    setIsClicked(false);
  };
  const handleSubmit = (): void => {};

  return (
    <div className="flex flex-col justify-center items-center h-auto mt-12">
      {/** inicio del form */}
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding w-[95%] h-[550px] p-6 rounded-xl shadow-xl overflow-y-scroll animate-fade-up">
        <form onSubmit={handleSubmit}>
          {/**div del contenido del form */}
          {/**div del titulo del contenido del form */}
          <div className="flex items-center justify-center mb-4">
            <h1 className="font-extrabold text-4xl text-white">Register</h1>
          </div>
          <hr className="mt-3" />
          {/**div para el campo de nombre y apellidos*/}
          <div className="mt-3">
            <label
              htmlFor="name_field"
              className="block text-base mb-2 text-white"
            >
              Name
            </label>
            <input
              type="text"
              className="border w-full text-base px-8 py-2 mb-2 focus:outline-none focus:ring-0 focus:border-blue-500 rounded-lg bg-transparent text-white"
              placeholder="e.g. Tyler"
              value={name}
              id="name_field"
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="name_field"
              className="block text-base mb-2 text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              className="border w-full text-base px-8 py-2 focus:outline-none focus:ring-0 focus:border-blue-500 rounded-lg bg-transparent text-white"
              placeholder="ej. Durden"
              value={lastName}
              id="lastname_field"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/** div para el campo de email y contraseña */}
          <div className="mt-3">
            <label
              htmlFor="email-field"
              className="block text-base mb-2 text-white"
            >
              e-mail
            </label>
            <input
              type="email"
              className="border w-full text-base px-8 py-2 mb-2 focus:outline-none focus:ring-0 focus:border-blue-500 rounded-lg bg-transparent text-white"
              placeholder="ej. narrator@email.com"
              value={email}
              id="email_field"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password-field"
              className="block text-base mb-2 text-white"
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
          {/**div para el campo de identificación */}
          <div className="mt-3 justify-between">
            <label
              htmlFor="role_field"
              className="block text-base mb-2 text-white"
            >
              You are a...
            </label>
            <select
              name="role-select"
              id="role-select"
              className="border relative w-full rounded-lg h-10 focus:ring-0 focus:border-blue-500 bg-transparent text-white"
              onChange={(e) => setRole(e.target.value)}
              defaultValue={role}
            >
              <option value="">Select an option...</option>
              <option value="dev">Developer</option>
              <option value="client">Client</option>
            </select>
          </div>
          <hr className="mt-3" />
          {/** div para aceptar los t&c */}
          <div className="flex flex-col items-center justify-center mt-3">
            <div className="flex flex-row">
              <input
                type="checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
                className="w-6 h-6 rounded-lg focus:ring-0"
              />
              <label
                htmlFor="tyc-accept"
                className="block text-base text-white mb-2 ml-4"
              >
                I have read and agree to the terms and conditions before
                register.
              </label>
            </div>
            {checked ? (
              <button
                type="button" // Change type to "button" to prevent form submission
                disabled={isRegistering} // Disable the button when registering
                className={`flex flex-col mx-auto mt-5 items-center justify-center ${
                  isRegistering
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white text-lg font-bold border-b-4 border-gray-800 hover:border-gray-900 transition-all rounded-lg w-[150px] h-[45px] ${
                  isClicked ? "transform scale-90 border-b-[1px]" : ""
                }`}
                onMouseDown={handleClick}
                onMouseUp={handleRelease}
                onMouseLeave={handleRelease}
                onClick={handleRegister} // Call the handleRegister function on click
              >
                {isRegistering ? (
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin mr-2" />
                    Registering...
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};
