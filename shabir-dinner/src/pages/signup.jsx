import React from "react";
// import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Perform form validation, data sanitization, and send signup request to the server
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Signup successful, handle success
        //redirect to login page
        const data = await response.json();
        console.log("Signup successful:", data.user);
        // Redirect or perform actions upon successful signup
         router.push('/signin');
        

      } else {
        // Signup failed, handle error (e.g., display error message)
        const errorData = await response.json();
        console.error("Signup failed:", errorData.message);
        // Handle signup failure

      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-gray-900">
            Signup
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
