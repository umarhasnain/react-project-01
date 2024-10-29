import { useForm } from "react-hook-form";
import Header from "./Header";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
   if(data){
    toast.success("Form submitted successfully!")
    reset(); // This will clear the form fields
    console.log(data);
   }
  };

  return (
      <><Header /><div className="mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
      <form
        className="flex flex-col items-center w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12 w-full px-4 outline-none transition duration-200"
          placeholder="Enter Your Name"
          {...register("name", { required: true })} />
        {errors.name && <span className="text-red-600 text-sm">Name is required</span>}

        <input
          type="email"
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12 w-full px-4 outline-none transition duration-200"
          placeholder="Enter Your Email"
          {...register("email", { required: true })} />
        {errors.email && <span className="text-red-600 text-sm">Email is required</span>}

        <textarea
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-32 w-full px-4 py-2 outline-none transition duration-200"
          placeholder="Enter Your Message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span className="text-red-600 text-sm">Message is required</span>}

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>

      </form>
    </div></>
  );
}
